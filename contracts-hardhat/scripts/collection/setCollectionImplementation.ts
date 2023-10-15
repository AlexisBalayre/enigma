import { ethers } from "hardhat";
import { Logger, ILogObj } from "tslog";
import { Factory } from "../../typechain-types";

// Initialize logger
export const Log: Logger<ILogObj> = new Logger();

// Params
const factoryAddr = "";
const newImplementationAddress = "0x6bC558489c34DD9D3Df8ad109A8FbDcd290CbC6D";

// Function to deploy collection contracts
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

    // Update the implementation address - Simulate tx for gas estimate
    Log.info("Updating the implementation address - Simulating tx...");
    const gas = await factory.setSecretNFTContractImplementation.estimateGas(
        newImplementationAddress
    );

    // Update the implementation address - Send tx
    Log.info("Updating the implementation address - Sending tx...");
    const tx = await factory.setSecretNFTContractImplementation(
        newImplementationAddress,
        {
            gasLimit: gas + BigInt(1000),
        }
    );
    const receipt = await tx.wait();
    if (receipt?.status == 0 || !receipt) throw new Error("Transaction failed");
    Log.info(
        `Implementation address has been updated to: ${newImplementationAddress}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
