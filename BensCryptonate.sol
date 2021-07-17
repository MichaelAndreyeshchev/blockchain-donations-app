// SPDX-License-Identifier: UNLICENSED

pragma solidity >= 0.8.6;

contract Cryptonate {

    uint public amountRaised = 0; 
    uint public goal; // 0 means no goal, deadline instead
    uint public deadline; // 0 means no deadline, goal instead
    uint public minContribution; // minumum donation amount
    string[] public projectNames; // array of the project names
    uint[] public projectVotes; // array of the project votes
    address payable charity;
    string winner;
    address public admin;

    
    constructor (uint _deadline, uint _minContribution, uint _goal, string[] memory _projectNames, address payable _charity) {
        // check to see if this campaign has a deadline
        if(deadline != 0){
            deadline = block.number + _deadline; // uses block numbers to calculate time instead of timestamps because they cannot be as easily manipulated
        }else{
            deadline = 0;
        }
        minContribution = _minContribution;
        goal = _goal;
        projectNames = _projectNames;
        charity = _charity;
        admin = msg.sender;
        
        // fill the array that holds the votes with 0 votes each
        for(uint i = 0; i < _projectNames.length; i++){
            projectVotes.push(0);
        }
    }
    
    modifier adminOnlyCheck() { // checks if the sender is the admin
        require(msg.sender == admin);
        _;
    }
    
    // the next two modifiers are extremely redundant but I can't find a way to invert a modifier
    
    modifier campaignRunningCheck() { // checks if the campaign is still ongoing (goal or deadline not reached)
        if(goal != 0){
            require(amountRaised < goal);
        }else if(deadline != 0){
            require(block.number < deadline);
        }
        _;
    }
    
    modifier campaignEndedCheck() { // checks if the campaign has ended (goal or deadline reached)
        if(goal != 0){
            require(amountRaised >= goal);
        }else if(deadline != 0){
            require(block.number >= deadline);
        }
        _;
    }
    
    function donate(uint _vote) public payable campaignRunningCheck returns (string memory, uint){ // actual donate function 
        require(msg.value >= minContribution); // checks to make sure we are paying the minumum donation amount
        require(_vote <= projectVotes.length); // checks to make sure that the project they want to vote for is a valid option
        
        // divide the donation amount by the minimum contribution to find out how many votes they have
        uint numVotes = msg.value / minContribution;
        
        projectVotes[_vote - 1] += numVotes; // increase the vote counter
        
        amountRaised += msg.value; // increase our amount raised
        
        return (projectNames[_vote - 1], numVotes); // returns the name of the project and the number of votes that were cast for it
    }
    
    // sends funds and vote tally to charity automatically once the campaign has ended
    function releaseFunds() public campaignEndedCheck returns(string memory _projectName, uint _numVotes, uint _amount){
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
        
        return(projectNames[project - 1], votes, amountRaised); // return the name of the project, amount of votes, and the amount raised
    }
}
