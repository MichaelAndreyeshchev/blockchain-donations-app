pragma solidity >=0.8.6;

mapping (address => uint) public contributions; // mapping that stores the donation amount of all donators

uint public amountRaised = 0; 
uint public setGoal;
uint public setDeadline;
uint public minDonation; // minumum donation amount
uint public totDonators; // total # of donators
address public admin;  

struct Request { // struct associated with donation request 
    uint amount; 
    address reciever;
    string description;
    uint votes;
    bool completed;
    mapping (address => bool) voters;
}

Request[] public requests; // array of donation money spending requests

constructor (uint _deadline, uint _minContribution, uint _goal) public {
    setDeadline = block.number + _deadline; // uses block numbers to calculate time instead of timestamps because they cannot be as easily manipulated
    minContribution = _minContribution;
    setGoal = _goal;
    admin = msg.sender; 
}

modifier adminOnlyCheck() {
    require(msg.sender == admin);
    _;
}

modifier goalReachedCheck() {
    require(raisedAmount >= goal);
    _;
}

function donate() public payable { // actual donate function 
    // basic set of requirements that need to be fulfilled
    require(block.number < deadline); // checks if we are past the campaign deadline
    require(msg.value >= minimumContribution); // checks to make sure we are paying the minumum donation amount

    if(contributions[msg.sender] == 0) { // if statement runs if its the first a donator is donating
        totDonators++:
    }

    else { // else statement runs if it is NOT the first time a donator is donating
        contributions[msg.sender] += msg.value; 
        amountRaised += msg.value;
    }
}

function refund() public {
    // FILL ME IN!
}

function createSpendingRequest(uint _value, address _recipient, string _description) public adminOnlyCheck goalReachedCheck {
    // FILL ME IN!
}

function voteRequest(uint index) public goalReached {
    // FILL ME IN!
}

function makePayment(uint _index) public adminOnlyCheck goalReachedCheck {
    // FILL ME IN!
}

