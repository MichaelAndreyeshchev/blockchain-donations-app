const path = require("path");
const fs = require("fs");
const solc = require("solc");

const cryptonatePath = path.resolve(__dirname, "contracts", "Cryptonate.sol");

const source = fs.readFileSync(cryptonatePath, "utf8");

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require("web3");
//console.log(solc.compile(source, 1));
// const { interface, bytecode } = solc.compile(source, 1).contracts[":Cryptonate"];;
const provider = new HDWalletProvider(
    `dwarf tiger slot hockey divorce decrease cat satisfy rhythm similar plunge cinnamon`,
    `wss://mainnet.infura.io/ws/v3/a25a59096a4046258848674cfe1c8eff`
  );

const web3 = new Web3(provider);

const deploy = async () => {
    // getting accounts from our Metamask wallet
    const accounts = await web3.eth.getAccounts();
  
    console.log('Attempting to deploy from account', accounts[0]);
  
    // deploying our contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode })
      .send({ gas: '1000000', from: accounts[0] });
  
    console.log('Contract deployed to', result.options.address);
  };
  deploy();