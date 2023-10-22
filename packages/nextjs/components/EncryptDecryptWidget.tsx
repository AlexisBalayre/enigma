import React, { useCallback, useState } from "react";
import encryptWithLit, { LitEncryptionDTO } from "../model/LitEncryption";
import TriggerButton from "./app/TriggerButton";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { decryptWithLit } from "~~/model/LitDecryption";
import scaffoldConfig from "~~/scaffold.config";

const inputStyle = {
  color: "black",
};

const EncryptDecryptComponent: React.FC = () => {
  const [decryptText, setDecryptText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [uriStr, setUriStr] = useState("");
  const [encryptedUri, setEncryptedUri] = useState("");
  const { address } = useAccount();
  const [transferAddress, setTransferAddress] = useState(address || "");
  const [litEncryptionDto, setLitEncryptionDto] = useState<LitEncryptionDTO | undefined>(undefined);
  const targetChain = "mumbai"; //scaffoldConfig.targetNetwork.network;
  const targetChainId = scaffoldConfig.targetNetwork.id;

  const mintArgs = {
    to: "0xE43c8D8E994df28383c28ABeEDD39c51474619EE",
    hashPrivateURI: "0x123456789",
    encryptedPrivateURI: "encryptedPrivateURI",
    publicURI: "public uri",
    originalHashPrivateURI: "0x123456789",
  };
  // const { handleMint } = useWagmiEthersMint(web3Provider.getSigner(), mintArgs);

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "SecretNFT",
    functionName: "mintUpload",
    args: [mintArgs],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const encryptUriHandler = useCallback(async () => {
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum as any);
    if (typeof window.ethereum !== "undefined") {
      const litEncryption: LitEncryptionDTO = await encryptWithLit(
        uriStr,
        targetChain,
        targetChainId,
        web3Provider,
        address || "",
      );
      setEncryptedUri(litEncryption.ciphertext);
      setLitEncryptionDto(litEncryption);

      // if (!litEncryptionDto?.dataToEncryptHash || !litEncryptionDto?.ciphertext) {
      //   throw new Error("Encryption data is missing");
      // }

      const mintArgs = {
        to: transferAddress,
        hashPrivateURI: litEncryptionDto?.dataToEncryptHash,
        encryptedPrivateURI: litEncryptionDto?.ciphertext,
        publicURI: "public uri",
        originalHashPrivateURI: litEncryptionDto?.dataToEncryptHash,
      };

      try {
        const txReciept = await writeAsync({ args: [mintArgs] }); // Now we just pass mintArgs directly
        console.log("📦 Transaction blockHash", txReciept);
      } catch (error) {
        console.error("⚡️ ~ file: EncryptDecryptWidget.tsx:encryptUriHandler ~ error", error);
      }
    } else {
      console.error("Ethereum provider (e.g., MetaMask) not detected");
    }
  }, [uriStr, targetChain, targetChainId, address, writeAsync]);

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
  }, [
    address,
    litEncryptionDto?.ciphertext,
    litEncryptionDto?.dataToEncryptHash,
    targetChain,
    targetChainId,
    writeAsync,
  ]);

  return (
    <div>
      <div>
        <div>
          <input
            style={inputStyle}
            value={transferAddress}
            onChange={e => setTransferAddress(e.target.value)}
            placeholder="Enter address to transfer to"
          />
        </div>
        <input
          style={inputStyle}
          value={uriStr}
          onChange={e => setUriStr(e.target.value)}
          placeholder="Text to encrypt"
        />
        <TriggerButton label="Encrypt" onClick={encryptUriHandler} />
      </div>
      <div>{encryptedUri}</div>
      <div>
        <input
          style={inputStyle}
          value={decryptText}
          onChange={e => setDecryptText(e.target.value)}
          placeholder="Text to decrypt"
        />
        <TriggerButton label="Decrypt" onClick={decryptURIHandler} />
      </div>
      <div>{decryptedText}</div>
      <TriggerButton label="Mint" onClick={writeAsync} />
    </div>
  );
};

export default EncryptDecryptComponent;
