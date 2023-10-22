// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

// Importing necessary OpenZeppelin contracts
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

// Importing necessary local contracts and interfaces
import "./interfaces/IAccessManager.sol";
import "./interfaces/ISecretNFT.sol";

/**
 * @title SecretNFT Collection Contract
 * @author Enigma
 * @notice This contract is responsible for all operations related to secret NFTs.
 */
contract SecretNFT is ISecretNFT, ERC721Upgradeable {
    using Strings for uint256;

    // Mapping from token ID to Metadata.
    mapping(uint256 => Metadata) private tokenMetadata;

    // Counter to keep track of the token IDs.
    uint256 private _nextTokenId;

    // Access Manager contract instance.
    IAccessManager public accessManager;

    constructor() {
        _nextTokenId=0;
    }



    /**
     * @dev Initializes the contract.
     * @param _name The name of the NFT.
     * @param _symbol The symbol of the NFT.
     * @param _accessManager The access manager contract address.
     */
    function initialize(
        string memory _name,
        string memory _symbol,
        IAccessManager _accessManager
    ) external initializer {
        // Reverts if the whitelist or access manager address is zero address.
        if (address(_accessManager) == address(0)) {
            revert ZeroAddress();
        }
        // Reverts if the name or symbol is empty.
        if (bytes(_name).length == 0 || bytes(_symbol).length == 0) {
            revert NullValue();
        }

        // Initializes the ERC721 contract.
        __ERC721_init(_name, _symbol);

        // Sets the access manager contract address.
        accessManager = _accessManager;

        // Initializes the token ID tracker.
        _nextTokenId = 1;
    }

    /**
     * @notice Mints multiple NFTs.
     * @dev Only callable by a minter.
     * @param _mintInputData The array of mint input data.
     * @return _tokenIds The array of minted token IDs.
     */
    function mintBatch(
        MintInputData[] calldata _mintInputData
    ) external returns (uint256[] memory _tokenIds) {
        _tokenIds = new uint256[](_mintInputData.length);
        for (uint256 i = 0; i < _mintInputData.length; i++) {
            _tokenIds[i] = mint(_mintInputData[i]);
        }
    }

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        assembly {
            result := mload(add(source, 32))
        }
    }

    function mintUpload (MintUploadData calldata _mintUploadData) external returns (uint256 _tokenId) {

        // Mints the token.
        _safeMint(_mintUploadData.to, _nextTokenId);
        _nextTokenId++;

        Metadata storage metadata = tokenMetadata[_tokenId];
        metadata.hashPrivateURI = stringToBytes32(_mintUploadData.hashPrivateURI);
        metadata.originalHashPrivateURI = stringToBytes32(_mintUploadData.hashPrivateURI);
        metadata.publicURI = bytes(_mintUploadData.publicURI);
        metadata.encryptedPrivateURI = bytes(_mintUploadData.encryptedPrivateURI);

        // Emits the TokenMinted event.
        emit TokenMinted(_tokenId, _mintUploadData.to, metadata);

        return _nextTokenId;
    }

    function mintNext(address _to) public returns (uint256 _tokenId){
        _safeMint(_to, _nextTokenId);
        _nextTokenId++;
        
        emit TokenNoMetaMinted(_tokenId, _to);
        return _nextTokenId;
    }

    /**
     * @notice Mints an NFT.
     * @dev Only callable by a minter.
     * @param _inputData The mint input data.
     * @return _tokenId The ID of the minted NFT.
     */
    function mint(
        MintInputData calldata _inputData
    ) public returns (uint256 _tokenId) {
        // Reverts if the caller is not a minter.
        if (!accessManager.hasRole(keccak256("MINTER"), msg.sender)) {
            revert OnlyMinterCanCall(msg.sender);
        }

        // Gets the next token ID.
        if (_inputData.tokenId != 0 && _ownerOf(_inputData.tokenId) == address(0)) {
            _tokenId = _inputData.tokenId;
        } else {
            _tokenId = _nextTokenId++;
        }

        // Mints the token.
        _safeMint(_inputData.to, _tokenId);

        // Sets the token metadata.
        Metadata storage metadata = tokenMetadata[_tokenId];
        metadata.hashPrivateURI = _inputData.hashPrivateURI;
        metadata.originalHashPrivateURI = _inputData.hashPrivateURI;
        metadata.publicURI = _inputData.publicURI;
        metadata.encryptedPrivateURI = _inputData.encryptedPrivateURI;

        // Emits the TokenMinted event.
        emit TokenMinted(_tokenId, _inputData.to, metadata);

        return _tokenId;
    }

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
    ) external {
        // Reverts if the caller is not the owner of the token.
        if (msg.sender != ownerOf(_tokenId)) {
            revert OnlyTokenOwnerCanCall(msg.sender);
        }
        // Reverts if the token does not exist.
        if (_ownerOf(_tokenId) == address(0)) {
            revert WrongTokenId(_tokenId);
        }
        // Updates the token metadata.
        tokenMetadata[_tokenId].encryptedPrivateURI = _encryptedPrivateURI;
        tokenMetadata[_tokenId].hashPrivateURI = _hashPrivateURI;
        emit TokenMetadataUpdated(_tokenId, tokenMetadata[_tokenId]);
    }

    /**
     * @notice Returns true if a token exists
     * @param _tokenId The ID of the token
     * @return isMinted The state of the minting
     */
    function exists(uint256 _tokenId) external view returns (bool isMinted) {
        if (_ownerOf(_tokenId) != address(0)) {
            isMinted = true;
        }
    }

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
    ) external {
        // Updates the token metadata.
        tokenMetadata[_tokenId].encryptedPrivateURI = _encryptedPrivateURI;
        emit TokenMetadataUpdated(_tokenId, tokenMetadata[_tokenId]);
        // Transfers the token.
        safeTransferFrom(_from, _to, _tokenId, "");
    }

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
    ) external {
        // Updates the token metadata.
        tokenMetadata[_tokenId].encryptedPrivateURI = _encryptedPrivateURI;
        emit TokenMetadataUpdated(_tokenId, tokenMetadata[_tokenId]);
        // Transfers the token.
        transferFrom(_from, _to, _tokenId);
    }

    /**
     * @notice Returns the URI of the token metadata.
     * @param _tokenId The ID of the token to get the URI of.
     * @return A string representing the token URI.
     */
    function tokenURI(
        uint256 _tokenId
    )
        public
        view
        override(ERC721Upgradeable, ISecretNFT)
        returns (string memory)
    {
        // Reverts if the token does not exist.
        if (_ownerOf(_tokenId) == address(0)) {
            revert WrongTokenId(_tokenId);
        }
        // Returns the URI
        return (
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(tokenMetadata[_tokenId].publicURI)
                )
            )
        );
    }

    /**
     *
     * @param _tokenId The ID of the token to get the URI of
     * @return encryptedPrivateURI The encrypted private URI of the token
     * @return hashPrivateURI The hash of the private URI of the token
     * @return originalHashPrivateURI The original hash of the private URI of the token
     */
    function privateTokenURI(
        uint256 _tokenId
    )
        external
        view
        returns (bytes memory encryptedPrivateURI, bytes32 hashPrivateURI, bytes32 originalHashPrivateURI)
    {
        // Reverts if the token does not exist.
        if (_ownerOf(_tokenId) == address(0)) {
            revert WrongTokenId(_tokenId);
        }
        encryptedPrivateURI = tokenMetadata[_tokenId].encryptedPrivateURI;
        hashPrivateURI = tokenMetadata[_tokenId].hashPrivateURI;
        originalHashPrivateURI = tokenMetadata[_tokenId].originalHashPrivateURI;
    }

    /**
     * @notice Returns the metadata of the token.
     * @param _tokenId The ID of the token to get the owner of.
     * @return metadata The metadata of the token.
     */
    function getTokenMetadata(
        uint256 _tokenId
    )
        external
        view
        returns (Metadata memory metadata)
    {
        // Reverts if the token does not exist.
        if (_ownerOf(_tokenId) == address(0)) {
            revert WrongTokenId(_tokenId);
        }
        metadata = tokenMetadata[_tokenId];
    }
}
