import { accessControlConditionsNFT } from "./mock/AccessControl";
import { ethConnect } from "@lit-protocol/lit-node-client";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export async function decryptWithLit(
  encryptedPrivateURI: string,
  hashPrivateURI: string,
  uriString: string,
  web3Provider: any,
  walletAddress: string,
  chain: string,
  chainId: number,
) {
  // STEP 2: Create the LitNodeClient and connect to the LitNode
  const client = new LitJsSdk.LitNodeClient({
    litNetwork: "cayenne",
  });
  await client.connect();

  const authSig = await ethConnect.signAndSaveAuthMessage({
    web3: web3Provider,
    account: walletAddress,
    chainId,
    expiration: new Date("2025-10-01T00:00:00Z").toISOString(),
    resources: [],
    uri: uriString,
  });

  // const authSig = await ethConnect.checkAndSignEVMAuthMessage({ chain });

  // STEP 5: Decryption of the private URI
  const privateURIDecrypted = await LitJsSdk.decryptToString(
    {
      accessControlConditions: accessControlConditionsNFT,
      evmContractConditions: [],
      solRpcConditions: [],
      unifiedAccessControlConditions: [],
      ciphertext: encryptedPrivateURI, // Encrypted private URI
      dataToEncryptHash: hashPrivateURI, // Hash of the private URI
      authSig,
      chain,
    },
    client,
  );
  return privateURIDecrypted;
}
