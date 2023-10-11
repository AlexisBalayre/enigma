import * as LitJsSdk from "@lit-protocol/lit-node-client";

// This is a mock of the SecretNFT contract
interface SecretNFT {
  mint(
    to: string,
    tokenId: number,
    publicURI: string,
    encryptedPrivateURI: string,
    hashPrivateURI: string,
  ): Promise<void>;
}
class MockSecretNFT implements SecretNFT {
  async mint(
      to: string,
      tokenId: number,
      publicURI: string,
      encryptedPrivateURI: string,
      hashPrivateURI: string
  ): Promise<void> {
    console.log("Minting NFT");
    console.log("to: ", to);
    console.log("tokenId: ", tokenId);
    console.log("publicURI: ", publicURI);
    console.log("encryptedPrivateURI: ", encryptedPrivateURI);
    console.log("hashPrivateURI: ", hashPrivateURI);
  }
}

// This function will encrypt the private URI and mint the secret NFT. 
// The user will have to sign the message with his wallet.

async function encryption() {
  // STEP 1: Create the private URI
  const PRIVATE_URI_STRING =
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

  // STEP 2: Create the LitNodeClient and connect to the LitNode
  const client = new LitJsSdk.LitNodeClient({
    litNetwork: "cayenne",
  });
  await client.connect();

  // STEP 3: Access Control Setup
  const accessControlConditions = [
    {
      contractAddress: "0x89b597199dAc806Ceecfc091e56044D34E59985c", // NFT Contract Address
      standardContractType: "ERC721",
      chain: "ethereum",
      method: "ownerOf", // Wallet used for the signature below must be the owner of the NFT
      parameters: ["3112"], // NFT ID
      returnValueTest: {
        comparator: "=",
        value: ":userAddress",
      },
    },
    {
      contractAddress: "0x89b597199dAc806Ceecfc091e56044D34E59985c", // NFT Contract Address
      standardContractType: "ERC721",
      chain: "polygon",
      method: "ownerOf", // Wallet used for the signature below must be the owner of the NFT
      parameters: ["3112"], // NFT ID
      returnValueTest: {
        comparator: "=",
        value: ":userAddress",
      },
    },
    {
      contractAddress: "0x89b597199dAc806Ceecfc091e56044D34E59985c", // NFT Contract Address
      standardContractType: "ERC721",
      chain: "arbitrum",
      method: "ownerOf", // Wallet used for the signature below must be the owner of the NFT
      parameters: ["3112"], // NFT ID
      returnValueTest: {
        comparator: "=",
        value: ":userAddress",
      },
    },
  ];

  // STEP 4: Obtain the authSig instance from the LitNodeClient
  // The user will have to sign the message with his wallet
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "ethereum" });

  // STEP 5: Encryption of the private URI
  const { ciphertext, dataToEncryptHash } = await LitJsSdk.encryptString(
    {
      accessControlConditions,
      authSig,
      chain: "ethereum",
      dataToEncrypt: PRIVATE_URI_STRING,
    },
    client
  );

  // STEP 6: Mints the secret NFT
  const secretNFT = new MockSecretNFT();
  await secretNFT.mint(
    "0x89b597199dAc806Ceecfc091e56044D34E59985c", // Recipient
    3112, // Token ID
    "https://gateway.pinata.cloud/ipfs/QmZ2NjJdZ5Gn9q1kWQ6G6H4Z6QYXJ3X3Z7vHj4Q3Gg3Q2Q", // Public URI
    ciphertext, // Encrypted Private URI
    dataToEncryptHash // Hash of the private URI
  )
}

// Execute the main function
encryption().catch((error) => {
  console.error("Error in main function:", error);
});
