/* import { ethers } from "hardhat";
import { Logger, ILogObj } from "tslog";
import { SecretNFT } from "../../typechain-types";

// Initialize logger
export const Log: Logger<ILogObj> = new Logger();

// Params
const collectionContractAddr = "";
const recipientWallet = "";
const PRIVATE_URI =
    '{ \
            "pseudo": "", \
            "email": "", \
            "discord": "", \
            "twitter": "", \
            "referral_code":"", \
            "country": "", \
            "language": "", \
            "wallet_address": "", \
            "preferred_currency": "", \
            "preferred_theme": "", \
            "preferred_language": "", \
            "preferred_chain": "", \
            "accept_cookies": false, \
            "profile_picture": "", \
            "beneficiaries": [ \
                { \
                    "wallet_address": "", \
                    "wallet_public_key": "", \
                } \
            ] \
        }';
const PUBLIC_URI =
    '{ \
        "description": "Enigma NFT", \
        "external_url": "https://enigma.xyz", \
        "image": "https://enigma.xyz/nft.png", \
        "name": "Enigma NFT #1", \
        "author": "Enigma", \
}';


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

    // Connect to SecretNFT contract
    Log.info("Connecting to SecretNFT contract...");
    const secretNFT: SecretNFT = await ethers.getContractAt("SecretNFT", collectionContractAddr);
    Log.info(`SecretNFT contract has been connected to: ${secretNFT.getAddress()}`);

    // Update the implementation address - Simulate tx for gas estimate
    Log.info("Updating the implementation address - Simulating tx...");
    const gas = await factory.setSecretNFTContractImplementation.estimateGas(
        newImplementationAddressx
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
 */