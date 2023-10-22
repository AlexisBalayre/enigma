import { accessControlConditionsNFT } from "./LitConditions";
import { Web3Provider } from "@ethersproject/providers";
import { ethConnect } from "@lit-protocol/auth-browser";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export interface LitEncryptionDTO {
  ciphertext: string;
  dataToEncryptHash: string;
}

async function encryptWithLit(
  uriString: string,
  chain: string,
  chainId: number,
  web3Provider: Web3Provider,
  walletAddress: string,
): Promise<LitEncryptionDTO> {
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

  const { ciphertext, dataToEncryptHash } = await LitJsSdk.encryptString(
    {
      accessControlConditions: accessControlConditionsNFT,
      // evmContractConditions,
      authSig,
      chain,
      dataToEncrypt: uriString,
    },
    client,
  );

  return { ciphertext, dataToEncryptHash };
}

export default encryptWithLit;
