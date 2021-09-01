const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

// Getting the output of our compiled Solidity Contract
//  const compile = require('./launch');

const interface = require('./src/interface'); //this is abi and it is not in JSON format anymore. so we will pass this new web3.eth.Contract() without parsing
const bytecode = require('./src/bytecode'); //bytecode

const provider = new HDWalletProvider(
    `dwarf tiger slot hockey divorce decrease cat satisfy rhythm similar plunge cinnamon`,
    `wss://mainnet.infura.io/ws/v3/a25a59096a4046258848674cfe1c8eff`
);

const web3 = new Web3(provider);
const deploy = async () => {
     // getting accounts from our Metamask wallet
    const accounts = web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
  
    // deploying our contract
    const result = await new web3.eth.Contract(interface, accounts[0])
  
    console.log('Contract deployed to', result.options.address);
  };
  deploy(); 