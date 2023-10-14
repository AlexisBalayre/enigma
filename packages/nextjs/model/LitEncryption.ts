import accessControlConditions from "./mock/AccessControl";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export interface LitEncryptionDTO {
  ciphertext: string;
  dataToEncryptHash: string;
}

async function encryptWithLit(uriString: string, chain: string): Promise<LitEncryptionDTO> {
  // STEP 2: Create the LitNodeClient and connect to the LitNode
  const client = new LitJsSdk.LitNodeClient({
    litNetwork: "cayenne",
  });
  await client.connect();

  // STEP 4: Obtain the authSig instance from the LitNodeClient
  // The user will have to sign the message with his wallet
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });

  // STEP 5: Encryption of the private URI
  const { ciphertext, dataToEncryptHash } = await LitJsSdk.encryptString(
    {
      accessControlConditions,
      authSig,
      chain,
      dataToEncrypt: uriString,
    },
    client,
  );

  return { ciphertext, dataToEncryptHash };
}

export default encryptWithLit;
