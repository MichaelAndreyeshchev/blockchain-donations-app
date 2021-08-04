// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8.6;

/// @title A contract for donating and voting for a specific project
/// @author Ben Theurich
// TODO: Figure out if we want to trigger releaseFunds automatically when the goal or deadline is met
// TODO: Figure out if we want to keep contract written in wei, or convert to gwei, finney, or ether (1 wei is 1 * 10^-18 ether)
// TODO: Add NatSpec comments througout
// TODO: Test security, fix all public variables
// TODO: If necessary, re-add user counting system
// TODO: Remove code for admin if not needed

contract Cryptonate {

    uint public amountRaised = 0; 
    uint public donors = 0;
    uint public goal; // 0 means no goal, deadline instead
    uint public deadline; // 0 means no deadline, goal instead
    uint public minContribution; // minumum donation amount
    string[] public projectNames; // array of the project names
    uint[] public projectVotes; // array of the project votes
    address payable public charity; // wallet address that the money will be sent to in the end

    
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
        
        // fill the array that holds the votes with 0 votes each
        for(uint i = 0; i < _projectNames.length; i++){
            projectVotes.push(0);
        }
    }
    
    
    // where the magic happens... donate and vote boys and girls!
    function donate(uint _vote) public payable returns (string memory, uint){
        // campaignRunningCheck
        if(goal != 0){
            require(amountRaised < goal);
        }else if(deadline != 0){
            require(block.number < deadline);
        }
        require(msg.value >= minContribution); // checks to make sure we are paying the minumum donation amount
        require(_vote <= projectVotes.length); // checks to make sure that the project they want to vote for is a valid option
        
        uint numVotes = msg.value / minContribution; // divide the donation amount by the minimum contribution to find out how many votes they have
        
        projectVotes[_vote - 1] += numVotes; // increase the vote counter
        
        amountRaised += msg.value; // increase our amount raised

        donors++;

        
        return (projectNames[_vote - 1], numVotes); // returns the name of the project and the number of votes that were cast for it
        
    }
    
    // sends funds and vote tally to charity automatically once the campaign has ended
    function releaseFunds() public returns(string memory _projectName, uint _numVotes, uint _amount){
        require(msg.sender == charity); // checks if user is charity itself
        // campaignEndedCheck
        if(goal != 0){
            require(amountRaised >= goal);
        }else if(deadline != 0){
            require(block.number >= deadline);
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
        return(projectNames[project], votes, amountRaised); // return the name of the project, amount of votes, and the amount raised
    }
}
