import hre, { ethers } from "hardhat";
import { Logger, ILogObj } from "tslog";
import {
  AccessManager,
  AccessManager__factory,
  SecretNFT,
  SecretNFT__factory,
  Factory,
  Factory__factory,
} from "../../typechain-types";

// Initialize logger
export const Log: Logger<ILogObj> = new Logger();

// Function to deploy contracts
async function main() {
  Log.info(
    " --------------------------------------  MUMBAI POLYGON TESTNET --------------------------------------"
  );
  const expectedChainId = 80001;
  const chainId = (await ethers.provider.getNetwork()).chainId;
  Log.info("	• chainId :", chainId);
  Log.info("	• expectedChainId :", expectedChainId);
  if (chainId !== BigInt(expectedChainId)) {
    throw new Error("Please switch to Mumbai Testnet");
  }

  // Deploy AccessManager contract
  Log.info("Deploying AccessManager contract...");
  const AccessManagerFactory: AccessManager__factory =
    await ethers.getContractFactory("AccessManager");
  const accessManager: AccessManager = await AccessManagerFactory.deploy();
  await accessManager.waitForDeployment();
  const accessManagerAddress = await accessManager.getAddress();
  Log.info(
    `AccessManager contract has been deployed to: ${accessManagerAddress}`
  );

  // Wait a minute for the contract to be mined
  await new Promise((resolve) => setTimeout(resolve, 60000));

  // Verify AccessManager contract
  await hre.run("verify:verify", {
    address: accessManagerAddress
  });

  // Deploy SecretNFT contract implementation
  Log.info("Deploying SecretNFT contract...");
  const SecretNFTFactory: SecretNFT__factory = await ethers.getContractFactory(
    "SecretNFT"
  );
  const secretNFT: SecretNFT = await SecretNFTFactory.deploy();
  await secretNFT.waitForDeployment();
  const secretNFTImplementationAddress = await secretNFT.getAddress();
  Log.info(
    `SecretNFT contract has been deployed to: ${secretNFTImplementationAddress}`
  );

  // Wait a minute for the contract to be mined
  await new Promise((resolve) => setTimeout(resolve, 60000));

  // Verify SecretNFT contract
  await hre.run("verify:verify", {
    address: secretNFTImplementationAddress,
  }); 

  // Deploy Factory contract
  Log.info("Deploying Factory contract...");
  const FactoryFactory: Factory__factory = await ethers.getContractFactory(
    "Factory"
  );
  const factory: Factory = await FactoryFactory.deploy(
    secretNFTImplementationAddress,
    accessManagerAddress
  );
  await factory.waitForDeployment();
  const factoryAddress = await factory.getAddress();
  Log.info(`factory contract has been deployed to: ${factoryAddress}`);

  // Wait a minute for the contract to be mined
  await new Promise((resolve) => setTimeout(resolve, 60000));

  // Verify factory contract
  await hre.run("verify:verify", {
    address: factoryAddress,
    constructorArguments: [secretNFTImplementationAddress, accessManagerAddress],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
