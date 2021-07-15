pragma solidity >=0.8.6;

struct Request {
    uint amount;
    address reciever;
    string description;
    uint votes;
    bool completed;
    mapping (address => bool) voters;
}

mapping (address => uint) public contributions;

uint public amountRaised = 0;
uint public setGoal;
uint public setDeadline;
uint public minDonation;
uint public totDonators;
address public admin;  

Request[] public requests;

constructor (uint _deadline, uint _minContribution, uint _goal) public {
    setDeadline = block.number + _deadline; // uses block numbers to calculate time instead of timestamps because they cannot be as easily manipulated
    minContribution = _minContribution;
    setGoal = _goal;
    admin = msg.sender;
}

function donate() public payable {
    require(block.number < deadline);
    require(msg.value > minimumContribution);

    if(contributions[msg.sender] == 0) {
        totDonators++:
    }

    else {
        contributions[msg.sender] += msg.value;
        amountRaised += msg.value;
    }
}