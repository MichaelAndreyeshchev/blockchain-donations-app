var Cryptonate = artifacts.require("Cryptonate");

module.exports = function (deployer) {
  deployer.deploy(Cryptonate, "Time", 30, 1, ["Wells", "Schools", "Environment"], '0x16299BEE572E4767794afdffF09ABaF0c33F7345');
};