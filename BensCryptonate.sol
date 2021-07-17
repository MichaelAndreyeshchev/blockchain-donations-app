// SPDX-License-Identifier: UNLICENSED

pragma solidity >= 0.8.6;

contract Cryptonate {
    mapping (address => uint) public contributions; // mapping that stores the donation amount of all donators
    
    uint public amountRaised = 0; 
    uint public goal; // 0 means no goal, deadline instead
    uint public deadline; // 0 means no deadline, goal instead
    uint public minContribution; // minumum donation amount
    uint public totDonators; // total # of donators
    string[] public projectNames; // array of the project names
    uint[] public projectVotes;
    address public admin;  
    
    struct Request { // struct associated with donation money spending requests
        uint amount; 
        address reciever;
        string description;
        uint votes;
        bool completed;
        mapping (address => bool) voters;
    }
    
    Request[] public requests; // array of donation money spending requests
    
    constructor (uint _deadline, uint _minContribution, uint _goal, string[] memory _projectNames) {
        // check to see if this campaign has a deadline
        if(deadline != 0){
            deadline = block.number + _deadline; // uses block numbers to calculate time instead of timestamps because they cannot be as easily manipulated
        }else{
            deadline = 0;
        }
        minContribution = _minContribution;
        goal = _goal;
        projectNames = _projectNames;
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
        
        // increase the vote counter
        projectVotes[_vote - 1] += numVotes;
        
        if(contributions[msg.sender] == 0) { // if statement runs if its the first a donator is donating
            totDonators++;
        } else { // else statement runs if it is NOT the first time a donator is donating
            contributions[msg.sender] += msg.value;
        }
        
        amountRaised += msg.value; // not sure why this was in the else statement?
        
        // returns the name of the project and the number of votes that were cast for it
        return (projectNames[_vote - 1], numVotes);
        
    }
    
    function refund() public { // ARYAN
        // refunds donors who actually donated
    }
    
    function createSpendingRequest(uint _value, address _recipient, string memory _description) public adminOnlyCheck campaignEndedCheck { // ARYAN
        // charity creates a spending request
    }
    
    function voteRequest(uint index) public campaignEndedCheck { // BEN
        // utilizes requests array to allow users to vote
    }
    
    function makePayment(uint _index) public adminOnlyCheck campaignEndedCheck { // BEN
        // uses the requests array and if more than 50% of donors approve the money transfer request then it is sent to the associated recipient
    }
}
