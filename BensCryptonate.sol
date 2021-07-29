// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8.6;

/// @title A contract for donating to a campaign and voting for a specific project
/// @author Ben Theurich

contract Cryptonate {
    bool private goalMet = false; // checks whether the goal has been met, allows for donations that overflow
    uint private deadline = 0; // in secs remaining, 0 means no deadline, goal instead
    uint private goal = 0; // in wei, 0 means no goal, deadline instead
    uint private minContribution; // minumum donation amount in wei, determines vote scale
    string[] private projectNames; // array of the project names
    uint[] private projectVotes; // array of the project votes
    address payable private charity; // wallet address that the money will be sent to in the end
    address private admin; // wallet address that sets up the campaign
    
    event DonationMade(string project, uint votes, uint time);
    event DonationGoalMet(string message, uint amount);
    event FundsSent(string project, uint votes, uint amount);
    event EmergencyOverride(string message);

    /// @notice Creates a new campaign
    /// @dev Dynamic array for _projectNames must be created in storage, not memory
    constructor(string memory _endType, uint _endNumber, uint _minContribution, string[] memory _projectNames, address payable _charity){
        if(keccak256(abi.encodePacked((_endType))) == keccak256(abi.encodePacked(("Time")))){
            deadline = (block.timestamp + (_endNumber * 1 days));
        }else if(keccak256(abi.encodePacked((_endType))) == keccak256(abi.encodePacked(("Money")))){
            goal = _endNumber;
        }else{
            revert("Error, incorrect endType");
        }
        minContribution = _minContribution;
        projectNames = _projectNames;
        charity = _charity;
        admin = msg.sender;

        // fill the array that holds the votes with 0 votes each
        for(uint i = 0; i < _projectNames.length; i++){
            projectVotes.push(0);
        }
    }
    
    /// @notice Returns the current amount of funds donated
    /// @dev Should not cost any gas, as it is a view function
    function getAmount() public view returns(uint _amount){
        _amount = address(this).balance;
    }
    
    /// @notice Returns the number of seconds left until the end of the campaign
    /// @dev Will throw an error if the campaign is based on a monetary goal, instead of time deadline, also should not cost any gas, as it is a view function
    function getSecondsRemaining() public view returns(uint _seconds){
        require(deadline != 0, "Error, no time goal set");
        if(deadline >= block.timestamp){
            _seconds = deadline - block.timestamp;
        }else{
            _seconds = 0;
        }
    }
    
    /// @notice Returns the address of the charity for users to verify
    /// @dev Should not cost any gas, as it is a view function
    function getCharity() public view returns(address _charity){
        _charity = charity;
    }

    /// @notice Takes one integer corresponding with the project you want to vote for, then assigns votes to that project in relation to the message value
    /// @dev Will throw an error if msg value is not greater or equal to the minimum contribution, or if the selected project is not a valid option
    function donate(uint _vote) public payable {
        if(goal != 0){
            require(!goalMet, "Error, the donation goal has already been met");
        }else if(deadline != 0){
            require(block.timestamp < deadline, "Error, the campaign deadline has passed");
        }
        require(msg.value >= minContribution, "Error, msg.value is less than the minimum contribution"); // checks to make sure we are paying the minumum donation amount
        require(_vote < projectVotes.length, "Error, project selection is not a valid option"); // checks to make sure that the project they want to vote for is a valid option
        
        uint numVotes = msg.value / minContribution; // divide the donation amount by the minimum contribution to find out how many votes they have
        
        projectVotes[_vote] += numVotes; // increase the vote counter

        emit DonationMade(projectNames[_vote], numVotes, block.timestamp); // fires the DonationMade event and lists name of the project, the number of votes that were cast for it, and the time of donation
        if(address(this).balance >= goal){
            goalMet = true;
            emit DonationGoalMet("The donation goal was met!", address(this).balance);
        }
    }
    
    /// @notice Allows the funds and vote outcome to be sent to the charity's wallet once the campaign has ended (will emit an emergency override message if funds are released prematurely)
    /// @dev Can only be called by the admin or charity addresses
    function releaseFunds(bool _emergencyOverride) public {
        require(msg.sender == admin || msg.sender == charity, "Error, msg.sender does not have authorization to run this function");

        if(_emergencyOverride){
            emit EmergencyOverride("An emergency override was initiated to release the funds early");
        }else{
            if(goal != 0){
                require(goalMet, "Error, the donation goal has not been met");
            }else if(deadline != 0){
                require(block.timestamp >= deadline, "Error, the campaign deadline has not passed");
            }
        }
        
        charity.transfer(address(this).balance); // transfer the money to the charity
        
        // count votes
        uint project = 0;
        uint votes = 0;
        for(uint i = 0; i < projectVotes.length; i++){
            if(projectVotes[i] > votes){
                project = i;
                votes = projectVotes[i];
            }
        }
        emit FundsSent(projectNames[project], votes, address(this).balance); // triggers the FundsSent event and lists name of the project, amount of votes, and the amount raised
    }
}
