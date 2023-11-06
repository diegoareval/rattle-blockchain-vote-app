require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const fs = require("fs");
const privateKey = fs.readFileSync('.secret').toString();
const projectId = fs.readFileSync('.infura_project_id').toString();
const etherscanApiKey = fs.readFileSync('.etherscan_api_key').toString();

module.exports = {
  etherscan: {
    apiKey: etherscanApiKey, // Etherscan API key
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]

    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
  paths: {
    sources: "./contracts",
  },
};
