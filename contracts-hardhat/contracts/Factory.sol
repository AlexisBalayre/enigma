// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

// Importing necessary OpenZeppelin contracts
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

// Importing necessary local contracts and interfaces
import "./SecretNFT.sol";
import "./interfaces/IAccessManager.sol";
import "./interfaces/IFactory.sol";

/**
 * @title Factory Contract for SecretNFTs Collections Contracts
 * @author Enigma
 * @notice This contract is responsible for deploying new collections of SecretNFTs.
 */
contract Factory is IFactory {
    using EnumerableSet for EnumerableSet.AddressSet;

    // Set of all deployed collections.
    EnumerableSet.AddressSet private collections;

    // Contract instances
    IAccessManager public accessManager;

    // Address of the SecretNFT contract implementation.
    address public secretNFTContractImplementation;

    /**
     * @dev Constructor for the Factory contract.
     * @param _secretNFTContractImplementation The address of the SecretNFT contract implementation.
     * @param _accessManager The access manager contract instance.
     */
    constructor(
        address _secretNFTContractImplementation,
        IAccessManager _accessManager
    ) {
        // Sets the SecretNFT contract implementation address.
        secretNFTContractImplementation = _secretNFTContractImplementation;
        // Sets the access manager contract instance.
        accessManager = _accessManager;
    }

    /**
     * @notice Returns the address of a collection at a given index.
     * @param _index The index of the collection.
     * @return _collection The address of the collection.
     */
    function getCollectionAddress(
        uint256 _index
    ) external view returns (address _collection) {
        _collection = collections.at(_index);
    }

    /**
     * @notice Returns the addresses of all collections.
     * @return _collections An array of the addresses of all collections.
     */
    function getCollectionsAddresses()
        external
        view
        returns (address[] memory _collections)
    {
        _collections = collections.values();
    }

    /**
     * @notice Returns the number of collections.
     * @return _collectionNumber The number of collections.
     */
    function getCollectionsNumber()
        external
        view
        returns (uint256 _collectionNumber)
    {
        _collectionNumber = collections.length();
    }

    /**
     * @notice Checks whether an address is a collection address.
     * @param _collection The address to check.
     * @return _isCollectionAddress A boolean indicating whether the address is a collection address.
     */
    function isCollectionAddress(
        address _collection
    ) external view returns (bool _isCollectionAddress) {
        _isCollectionAddress = collections.contains(_collection);
    }

    /**
     * @notice Sets the address of the SecretNFT contract implementation.
     * @dev Only the admin can call this function.
     * @param _secretNFTContractImplementation The address of the SecretNFT contract implementation.
     */
    function setSecretNFTContractImplementation(
        address _secretNFTContractImplementation
    ) external {
        // Reverts if the caller is not the admin.
        if (!accessManager.hasRole(keccak256("ADMIN"), msg.sender)) {
            revert OnlyAdminCanCall(msg.sender);
        }
        secretNFTContractImplementation = _secretNFTContractImplementation;
    }

    /**
     * @notice Deploys a new collection of SecretNFTs.
     * @dev Only the admin can call this function.
     * @param _accessManager The access manager contract instance.
     * @param _name The name of the new collection.
     * @param _symbol The symbol of the new collection.
     * @return collection The address of the newly deployed collection.
     */
    function deployCollection(
        IAccessManager _accessManager,
        string memory _name,
        string memory _symbol
    ) external returns (address collection) {
        // Reverts if the caller is not the admin.
        if (!accessManager.hasRole(keccak256("ADMIN"), msg.sender)) {
            revert OnlyAdminCanCall(msg.sender);
        }
        // Clones the SecretNFT contract implementation.
        SecretNFT newCollection = SecretNFT(
            Clones.clone(secretNFTContractImplementation)
        );
        // Initializes the new collection.
        newCollection.initialize(_name, _symbol, _accessManager);
        // Adds the new collection to the collections set.
        collections.add(address(newCollection));
        collection = address(newCollection);
        emit NewCollectionDeployed(address(newCollection), _name, _symbol);
    }
}
