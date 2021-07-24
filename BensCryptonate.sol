// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8.6;

/// @title A contract for donating and voting for a specific project
/// @author Ben Theurich
// TODO: Figure out if we want to use events or returns?
// TODO: Figure out if "get" functions make sense? 
// TODO: Figure out if we want to keep contract written in wei, or convert to gwei, finney, or ether (1 wei is 1 * 10^-18 ether)?
// TODO: Figure out if we want getDays to return days or seconds?
// TODO: Add NatSpec comments througout
// TODO: Test security
// TODO: Test time deadline code

contract Cryptonate {

    uint private amountRaised = 0;
    uint private deadline = 0; // 0 means no deadline, goal instead
    uint private goal = 0; // 0 means no goal, deadline instead
    uint private minContribution; // minumum donation amount
    string[] private projectNames; // array of the p8roject names
    uint[] private projectVotes; // array of the project votes
    address payable private charity; // wallet address that the money will be sent to in the end
    address private admin; // wallet address that sets up the campaign
    
    event DonationMade(string project, uint votes);
    event FundsSent(string project, uint votes, uint amount);
    event EmergencyOverride(string message);

    /// @notice
    /// @dev
    constructor(string memory _endType, uint _endNumber, uint _minContribution, string[] memory _projectNames, address payable _charity) {
        if(keccak256(abi.encodePacked((_endType))) == keccak256(abi.encodePacked(("Time")))){
            deadline = (block.timestamp + _endNumber * 1 days);
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
    
    /// @notice
    /// @dev
    function getAmount() public view returns(uint _amount){
        _amount = amountRaised;
    }
    
    /// @notice
    /// @dev
    function getDays() public view returns(uint _days){
        require(deadline != 0, "Error, no time goal set");
        _days = (deadline - block.timestamp) / 1 days;
    }
    
    /// @notice
    /// @dev
    function getCharity() public view returns(address _charity){
        _charity = charity;
    }

    /// @notice
    /// @dev
    function donate(uint _vote) public payable {
        if(goal != 0){
            require(amountRaised < goal, "Error, the donation goal has already been met");
        }else if(deadline != 0){
            require(block.number < deadline, "Error, the campaign deadline has passed");
        }
        require(msg.value >= minContribution, "Error, msg.value is less than the minimum contribution"); // checks to make sure we are paying the minumum donation amount
        require(_vote <= projectVotes.length, "Error, project selection is not a valid option"); // checks to make sure that the project they want to vote for is a valid option
        
        uint numVotes = msg.value / minContribution; // divide the donation amount by the minimum contribution to find out how many votes they have
        
        projectVotes[_vote - 1] += numVotes; // increase the vote counter
        
        amountRaised += msg.value; // increase our amount raised
        
        emit DonationMade(projectNames[_vote - 1], numVotes); // fires the DonationMade event and lists name of the project and the number of votes that were cast for it
    }
    
    /// @notice
    /// @dev
    function releaseFunds(bool _emergencyOverride) public {
        require(msg.sender == admin || msg.sender == charity, "Error, msg.sender does not have authorization to run this function");
        bool emergencyOverride = _emergencyOverride;

        if(emergencyOverride){
            emit EmergencyOverride("An emergency override was initiated to release the funds early");
        }else{
            if(goal != 0){
                require(amountRaised >= goal, "Error, the donation goal has not been met");
            }else if(deadline != 0){
                require(block.number >= deadline, "Error, the campaign deadline has not passed");
            }
        }
        
        charity.transfer(amountRaised); //transfer the money to the charity
        
        // count votes
        uint project = 0;
        uint votes = 0;
        for(uint i = 0; i < projectVotes.length; i++){
            if(projectVotes[i] > votes){
                project = i;
                votes = projectVotes[i];
            }
        }
        emit FundsSent(projectNames[project], votes, amountRaised); // triggers the FundsSent event and lists name of the project, amount of votes, and the amount raised
    }
}
