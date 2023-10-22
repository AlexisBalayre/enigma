import { useCallback, useState } from "react";
import { Contract } from "@ethersproject/contracts";
import contracts from "~~/generated/deployedContracts";
import scaffoldConfig from "~~/scaffold.config";

// Define the ABI (Application Binary Interface) for the mint method
const SECRET_NFT_ABI = [
  "function mint(MintInputData calldata _inputData) public returns (uint256 _tokenId)",
  // ... You can add more elements of the ABI if needed
];

// Define the custom hook
export function useWagmiEthersMint(signer: any, inputData: any) {
  const [txStatus, setTxStatus] = useState(null);

  const handleMint = useCallback(async () => {
    const chainId = scaffoldConfig.targetNetwork.id;
    const contractAddress = contracts[chainId][0].contracts.SecretNFT.address || "";

    if (!signer || !contractAddress) {
      throw new Error("Missing required parameters: signer or contractAddress");
    }

    // Initialize the contract instance
    const contract = new Contract(contractAddress, SECRET_NFT_ABI, signer);

    try {
      setTxStatus("PENDING");
      // Invoke the mint method
      const tx = await contract.mint(inputData);
      // Wait for the transaction to be mined
      await tx.wait();
      setTxStatus("SUCCESS");
    } catch (error) {
      console.error("Error minting token:", error);
      setTxStatus("FAILED");
    }
  }, [signer, inputData]);

  return { handleMint, txStatus };
}
