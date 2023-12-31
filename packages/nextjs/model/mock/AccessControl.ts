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
export const accessControlConditionsNFTOld = [];

export const accessControlConditionsBalance = [
  {
    contractAddress: "",
    standardContractType: "",
    chain: "ethereum",
    method: "eth_getBalance",
    parameters: [":userAddress", "latest"],
    returnValueTest: {
      comparator: ">=",
      value: "1000000000000", // 0.000001 ETH
    },
  },
];

export default accessControlConditions;
