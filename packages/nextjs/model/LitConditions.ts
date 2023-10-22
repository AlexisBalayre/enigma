import contracts from "~~/generated/deployedContracts";

export const accessControlConditionsNFT = [
  {
    contractAddress: contracts[80001][0].contracts.SecretNFT.address,
    standardContractType: "ERC721",
    chain: "mumbai",
    method: "ownerOf",
    parameters: ["1"],
    returnValueTest: {
      comparator: ">",
      value: "0",
    },
  },
];

export const evmContractConditions = [
  {
    contractAddress: contracts[80001][0].contracts.SecretNFT.address,
    functionName: "balanceOf",
    functionParams: [":userAddress"],
    functionAbi: {
      type: "function",
      stateMutability: "view",
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      name: "balanceOf",
      inputs: [
        {
          type: "address",
          name: "account",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "id",
          internalType: "uint256",
        },
      ],
    },
    chain: 80001,
    returnValueTest: {
      key: "",
      comparator: ">",
      value: "0",
    },
  },
];
