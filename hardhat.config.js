require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.7.3",
  networks: {
    mainnet: {
      url: process.env.INFURA_URL
    }
  }
};
