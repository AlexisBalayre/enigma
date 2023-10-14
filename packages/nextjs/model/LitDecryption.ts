import accessControlConditions from "./mock/AccessControl";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

// This is a mock of the SecretNFT contract
interface PrivateURI {
  encryptedPrivateURI: string;
  hashPrivateURI: string;
}
interface SecretNFT {
  getTokenPrivateURI(tokenId: number): Promise<PrivateURI>;
}
class MockSecretNFT implements SecretNFT {
  async getTokenPrivateURI(tokenId: number): Promise<PrivateURI> {
    console.log("tokenId: ", tokenId);
    return {
      encryptedPrivateURI: "",
      hashPrivateURI: "",
    };
  }
}

// This function will decrypt the private URI of the secret NFT.
// The user will have to sign the message with his wallet.

async function decryption() {
  // STEP 1: Get the encrypted private URI and the hash of the private URI
  const secretNFT = new MockSecretNFT();
  const { encryptedPrivateURI, hashPrivateURI } = await secretNFT.getTokenPrivateURI(3112); // NFT ID 3112

  // STEP 2: Create the LitNodeClient and connect to the LitNode
  const client = new LitJsSdk.LitNodeClient({
    litNetwork: "cayenne",
  });
  await client.connect();

  // STEP 4: Obtain the authSig instance from the LitNodeClient
  // The user will have to sign the message with his wallet
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "ethereum" });

  // STEP 5: Decryption of the private URI
  const privateURIDecrypted = await LitJsSdk.decryptToString(
    {
      accessControlConditions,
      ciphertext: encryptedPrivateURI, // Encrypted private URI
      dataToEncryptHash: hashPrivateURI, // Hash of the private URI
      authSig,
      chain: "ethereum",
    },
    client,
  );
}

// Execute the main function
decryption().catch(error => {
  console.error("Error in main function:", error);
});
