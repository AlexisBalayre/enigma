const chain = "ethereum";

// Must hold at least one Monster Suit NFT ([https://opensea.io/collection/monster-suit](https://opensea.io/collection/monster-suit))
export const accessControlConditionsNFT = [
  {
    contractAddress: "0x89b597199dAc806Ceecfc091e56044D34E59985c",
    standardContractType: "ERC721",
    chain,
    method: "balanceOf",
    parameters: [":userAddress"],
    returnValueTest: {
      comparator: ">",
      value: "0",
    },
  },
];
