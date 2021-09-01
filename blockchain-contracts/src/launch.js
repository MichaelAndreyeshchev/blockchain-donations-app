const path = require("path");
const fs = require("fs");
const solc = require("solc");

const cryptonatePath = path.resolve(__dirname, "contracts", "Cryptonate.sol");
const source = fs.readFileSync(cryptonatePath, "utf8");
var input = {
  language: "Solidity",
  sources: { "Cryptonate.sol": { content: source } },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"]
      }
    }
  }
};

var output = solc.compile(JSON.stringify(input));
console.log("output",output) //allways check what you are getting
console.log(output.contracts["Cryptonate"]);
console.log(output.contracts(source, 1));
console.log(output.contracts["Cryptonate.sol"]);
//module.exports = output.contracts["Cryptonate.sol"]["Cryptonate"];
