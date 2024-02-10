const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const AdvancedToken = await hre.ethers.getContractFactory("AdvancedToken");
  const advancedToken = await AdvancedToken.deploy(deployer.address);

  await advancedToken.deployed();

  console.log("AdvancedToken deployed to:", advancedToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
