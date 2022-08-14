/**
* @type import('hardhat/config').HardhatUserConfig
*/

require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require('dotenv').config();

const { PROVIDER, ALCHEMY_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "local",
  namedAccounts: {
    deployer: {
      default: 1,
      17: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      35: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      97: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      3501: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      3502: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      56: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      96: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      80001: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      137: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      555: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",

    },
  },  
  networks: {
    hardhat: {},
    local: {
      url: "http://127.0.0.1:8545",
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
    },
    'jfin-testnet': {
      url: "https://rpc.testnet.jfinchain.com",
      accounts: [`0x${PRIVATE_KEY}`],
      live: true,
      saveDeployments: true
    }
  },
}