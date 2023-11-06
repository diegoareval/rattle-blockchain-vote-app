import { ethers, network, run } from "hardhat";
const fs = require("fs");

async function main() {
  const daoAddress = fs.readFileSync('.contract_address').toString();

  const daoConsumerFactory = await ethers.getContractFactory("DAO");
  const daoConsumer = await daoConsumerFactory.deploy(daoAddress);

  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await daoConsumer.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`Contract deployed to ${daoConsumer.address} on ${network.name}`);

  console.log(`Verifying contract on Etherscan...`);

  await run(`verify:verify`, {
    address: daoConsumer.address,
    constructorArguments: [daoAddress],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});