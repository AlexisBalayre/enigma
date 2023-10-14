// This is a mock of the SecretNFT contract
interface SecretNFT {
  mint(
    to: string,
    tokenId: number,
    publicURI: string,
    encryptedPrivateURI: string,
    hashPrivateURI: string,
  ): Promise<void>;
}
class MockSecretNFT implements SecretNFT {
  async mint(
    to: string,
    tokenId: number,
    publicURI: string,
    encryptedPrivateURI: string,
    hashPrivateURI: string,
  ): Promise<void> {
    console.log("Minting NFT");
    console.log("to: ", to);
    console.log("tokenId: ", tokenId);
    console.log("publicURI: ", publicURI);
    console.log("encryptedPrivateURI: ", encryptedPrivateURI);
    console.log("hashPrivateURI: ", hashPrivateURI);
  }
}

export default MockSecretNFT;
