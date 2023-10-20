import React, { use, useCallback, useState } from "react";
import encryptWithLit, { LitEncryptionDTO } from "../model/LitEncryption";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { decryptWithLit } from "~~/model/LitDecryption";
import scaffoldConfig from "~~/scaffold.config";

const inputStyle = {
  color: "black",
};

// struct MintInputData {
//   address to;
//   bytes32 hashPrivateURI;
//   bytes encryptedPrivateURI;
//   bytes publicURI;
// }

const EncryptDecryptComponent: React.FC = () => {
  const [decryptText, setDecryptText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [uriStr, setUriStr] = useState("");
  const [encryptedUri, setEncryptedUri] = useState("");
  const { address } = useAccount();
  const [litEncryptionDto, setLitEncryptionDto] = useState<LitEncryptionDTO | undefined>(undefined);
  const targetChain = "mumbai"; //scaffoldConfig.targetNetwork.network;
  const targetChainId = scaffoldConfig.targetNetwork.id;

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "SecretNFT",
    functionName: "mint",
    args: [],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const encryptUriHandler = useCallback(async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum as any);
      const litEncryption: LitEncryptionDTO = await encryptWithLit(
        uriStr,
        targetChain,
        targetChainId,
        web3Provider,
        address || "",
      );
      setEncryptedUri(litEncryption.ciphertext);
      setLitEncryptionDto(litEncryption);

      const mintArgs = [
        address || "",
        litEncryption.dataToEncryptHash,
        litEncryption.ciphertext,
        "", // this is for publicURI which you've set as an empty string.
      ];

      try {
        const txReciept = await writeAsync({ args: mintArgs }); // Now we just pass mintArgs directly
        console.log("📦 Transaction blockHash", txReciept);
      } catch (error) {
        console.error("⚡️ ~ file: EncryptDecryptWidget.tsx:encryptUriHandler ~ error", error);
      }
    } else {
      console.error("Ethereum provider (e.g., MetaMask) not detected");
    }
  }, [uriStr, targetChain, targetChainId, address]);

  const decryptURIHandler = useCallback(async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum as any);
      console.dir(litEncryptionDto);

      const decrypted = await decryptWithLit(
        litEncryptionDto?.ciphertext || "",
        litEncryptionDto?.dataToEncryptHash || "",
        "",
        web3Provider,
        address || "",
        targetChain,
        targetChainId,
      );
      setDecryptedText(decrypted);
    } else {
      console.error("Ethereum provider (e.g., MetaMask) not detected");
    }
  }, [address, litEncryptionDto?.ciphertext, litEncryptionDto?.dataToEncryptHash, targetChain, targetChainId]);

  return (
    <div>
      <div>
        <input
          style={inputStyle}
          value={uriStr}
          onChange={e => setUriStr(e.target.value)}
          placeholder="Text to encrypt"
        />
        <button onClick={encryptUriHandler}>Encrypt</button>
      </div>
      <div>{encryptedUri}</div>

      <div>
        <input
          style={inputStyle}
          value={decryptText}
          onChange={e => setDecryptText(e.target.value)}
          placeholder="Text to decrypt"
        />
        <button onClick={decryptURIHandler}>Decrypt</button>
      </div>
      <div>{decryptedText}</div>
    </div>
  );
};

export default EncryptDecryptComponent;
