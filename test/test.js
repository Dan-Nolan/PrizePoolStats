const { expect } = require("chai");

// All deployed contracts: https://docs.pooltogether.com/networks/ethereum

const daiPrizePoolAddress = "0xEBfb47A7ad0FD6e57323C8A42B2E5A6a4F68fc1a";
const daiPrizeFaucetAddress = "0xF362ce295F2A4eaE4348fFC8cDBCe8d729ccb8Eb";

describe("Dai Prize Pool", function() {
  it("should get us the total reward amount", async function() {
    const daiPrizePool = await ethers.getContractAt("PrizePoolInterface", daiPrizePoolAddress);
    const balance = await daiPrizePool.accountedBalance();

    console.log("balance", balance.toString());

    // DAI is 18 decimals, lets say we put in 100 DAI
    // 22.95 450,000

    const myDai = ethers.BigNumber.from(450000n * 10n ** 18n);

    const daiPrizeFaucet = await ethers.getContractAt("TokenFaucetInterface", daiPrizeFaucetAddress);
    const dripRate = await daiPrizeFaucet.dripRatePerSecond();
    const oneWeek = 60 * 60 * 24 * 7;
    const poolTokensPerWeek = dripRate.mul(oneWeek);
    const myPoolTokensPerWeek = poolTokensPerWeek.mul(myDai).div(balance)

    // see how many WHOLE pool tokens we get
    const factor = ethers.BigNumber.from((10n ** 18n).toString());
    console.log(myPoolTokensPerWeek.div(factor).toString());
  });
});
