const path = require("path");
const fs = require("fs");
const solc = require("solc");

const cryptonatePath = path.resolve(__dirname, "contracts", "Cryptonate.sol");
const source = fs.readFileSync(cryptonatePath, "utf8");