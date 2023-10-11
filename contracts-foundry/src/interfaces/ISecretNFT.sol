// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

// Importing necessary OpenZeppelin interfaces
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @title SecretNFT Collection Contract Interface
 * @author Enigma
 * @notice Interface for the SecretNFT contract.
 * @dev This interface should be implemented by the SecretNFT contract.
 */
interface ISecretNFT is IERC721 {
    /**
     * @notice Struct defining NFT metadata.
     * @param hashPrivateURI The hash of the private URI of the NFT.
     * @param originalHashPrivateURI The original hash of the private URI of the NFT.
     * @param publicURI The public URI of the NFT.
     * @param encryptedPrivateURI The encrypted private URI of the NFT.
     */
    struct Metadata {
        bytes32 hashPrivateURI;
        bytes32 originalHashPrivateURI;
        bytes publicURI;
        bytes encryptedPrivateURI;
    }

    /**
     * @notice Struct defining the input data used in the mint function.
     * @param to The address to mint the NFT to.
     * @param hashPrivateURI The hash of the private URI of the NFT.
     * @param encryptedPrivateURI The encrypted private URI of the NFT.
     * @param publicURI The public URI of the NFT.
     */
    struct MintInputData {
        address to;
        bytes32 hashPrivateURI;
        bytes encryptedPrivateURI;
        bytes publicURI;
    }

    /// @notice This error is thrown when a non-admin tries to call a function that is admin only
    error OnlyAdminCanCall(address caller);
    /// @notice This error is thrown when a non-minter tries to call a function that is minter only
    error OnlyMinterCanCall(address caller);
    /// @notice This error is thrown when someone other than the factory tries to call a factory only function
    error OnlyFactoryCanCall(address caller);
    /// @notice This error is thrown when a non-owner tries to call a function that is owner only
    error OnlyTokenOwnerCanCall(address caller);
    /// @notice This error is thrown when an incorrect token ID is provided
    error WrongTokenId(uint256 tokenId);
    /// @notice This error is thrown when a zero address is provided
    error ZeroAddress();
    /// @notice This error that is thrown when a null value is provided
    error NullValue();

    /// @notice This event is emitted when a new NFT is minted
    event TokenMinted(uint256 indexed tokenID, address indexed owner, Metadata metadata);
    /// @notice This event is emitted when the metadata of an NFT is updated
    event TokenMetadataUpdated(uint256 indexed tokenID, Metadata newMetadata);

    /**
     * @notice Mints multiple NFTs.
     * @dev Only callable by a minter.
     * @param _inputDataArray The array of mint input data.
     * @return _tokenIds The array of minted token IDs.
     */
    function mintBatch(
        MintInputData[] calldata _inputDataArray
    ) external returns (uint256[] memory _tokenIds);

    /**
     * @notice Mints an NFT.
     * @param _inputData The mint input data.
     */
    function mint(
        MintInputData calldata _inputData
    ) external returns (uint256 _tokenId);

    /**
     * @notice Sets the encrypted private URI of an NFT.
     * @dev Only callable by the owner of the NFT.
     * @param _tokenId The ID of the NFT to set the encrypted private URI of.
     * @param _hashPrivateURI The hash of the private URI of the NFT.
     * @param _encryptedPrivateURI The encrypted private URI of the NFT.
     */
    function setEncryptedPrivateURI(
        uint256 _tokenId,
        bytes32 _hashPrivateURI,
        bytes calldata _encryptedPrivateURI
    ) external;

    /**
     * @dev Returns the metadata of the token.
     * @param _tokenId The ID of the token to get the metadata of.
     * @return _metadata The metadata of the token.
     */
    function exists(uint256 _tokenId) external view returns (bool);

    /**
     * @notice Returns the URI of the token metadata.
     * @param _tokenId The ID of the token to get the URI of.
     * @return A string representing the token URI.
     */
    function tokenURI(uint256 _tokenId) external view returns (string memory);

    /**
     *
     * @param _tokenId The ID of the token to get the URI of
     * @return encryptedPrivateURI The encrypted private URI of the token
     * @return hashPrivateURI The hash of the private URI of the token
     */
    function privateTokenURI(
        uint256 _tokenId
    )
        external
        view
        returns (bytes memory encryptedPrivateURI, bytes32 hashPrivateURI);

    /**
     * @notice Transfers the ownership of a token from one address to another address.
     * @dev Only callable by the owner of the token or an approved address.
     * @param _encryptedPrivateURI The encrypted private URI of the token.
     * @param _from The address to transfer the token from.
     * @param _to The address to transfer the token to.
     * @param _tokenId The ID of the token to transfer.
     */
    function transferFrom(
        bytes calldata _encryptedPrivateURI,
        address _from,
        address _to,
        uint256 _tokenId
    ) external;

    /**
     * @notice Transfers the ownership of a token from one address to another address.
     * @dev Only callable by the owner of the token.
     * @param _encryptedPrivateURI The encrypted private URI of the token.
     * @param _from The address to transfer the token from.
     * @param _to The address to transfer the token to.
     * @param _tokenId The ID of the token to transfer.
     */
    function safeTransferFrom(
        bytes calldata _encryptedPrivateURI,
        address _from,
        address _to,
        uint256 _tokenId
    ) external;
}
