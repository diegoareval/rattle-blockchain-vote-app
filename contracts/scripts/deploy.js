const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const DAO = await hre.ethers.getContractFactory("DAO");
    const dao = await DAO.deploy(deployer.address);
    await dao.deployed();
    console.log("DAO deployed to:", dao.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
