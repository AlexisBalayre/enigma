import { ethers } from "hardhat";
import { Logger, ILogObj } from "tslog";
import { Factory } from "../../typechain-types";

// Initialize logger
export const Log: Logger<ILogObj> = new Logger();

// Params
const factoryAddr = "";
const accessManagerAddr = "";
const collectionName = "";
const collectionSymbol = "";

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

    // Connect to Factory contract
    Log.info("Connecting to Factory contract...");
    const factory: Factory = await ethers.getContractAt("Factory", factoryAddr);
    Log.info(`Factory contract has been connected to: ${factory.getAddress()}`);

    // Deploy a new collection - Simulate tx for gas estimate
    Log.info("Deploying a new collection - Simulating tx...");
    const gas = await factory.deployCollection.estimateGas(
        accessManagerAddr,
        collectionName,
        collectionSymbol
    );

    // Deploy a new collection - Send tx
    Log.info("Deploying a new collection - Sending tx...");
    const tx = await factory.deployCollection(
        accessManagerAddr,
        collectionName,
        collectionSymbol,
        {
            gasLimit: gas + BigInt(1000),
        }
    );
    const receipt = await tx.wait();
    if (receipt?.status == 0 || !receipt) throw new Error("Transaction failed");
    const collectionAddress = receipt.logs[0].address;
    Log.info(`Collection has been deployed to: ${collectionAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
