// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./IAccessManager.sol";

/**
 * @title IFactory Contract Interface
 * @author Enigma
 * @notice Interface for the Factory contract.
 * @dev This interface should be implemented by the Factory contract.
 */
interface IFactory {
    /// @notice This error is thrown when a non-admin tries to call a function that is admin only
    error OnlyAdminCanCall(address caller);

    /// @notice Emitted when a new collection is deployed
    event NewCollectionDeployed(address indexed collectionAddress, string name, string symbol);

    /**
     * @dev Returns the address of the secretNFTcollection at a given index
     * @param _index Index of the collection
     * @return _collection Address of the secretNFT collections 
     */
    function getCollectionAddress(uint256 _index) view external returns (address _collection);

    /**
     * @dev Returns an array containing the addresses of all secretNFT collections deployed
     * @return _collections Array of addresses of all secretNFT collections
     */
    function getCollectionsAddresses() view external returns (address[] memory _collections);

    /**
     * @dev Returns the number of secretNFT collections deployed
     * @return _collectionNumber The number of secretNFT collections deployed
     */
    function getCollectionsNumber() view external returns (uint256 _collectionNumber);

    /**
     * @dev Checks if an address is a secretNFT collection address or not
     * @param _collection Address to check
     * @return _isCollectionAddress Boolean indicating whether the address is a secretNFT collection address
     */
    function isCollectionAddress(address _collection) view external returns (bool _isCollectionAddress);

    /**
     * @dev Sets the address of the SecretNFT contract implementation
     * @param _secretNftContractImplementation Address of the SecretNFT contract implementation
     */
    function setSecretNFTContractImplementation(address _secretNftContractImplementation) external;

    /**
     * @dev Deploys a new SecretNFT collection contract
     * @param _accessManager Access manager contract instance
     * @param _name Name of the new collection 
     * @param _symbol Symbol of the new collection
     * @return collection Address of the new collection
     */
    function deployCollection(IAccessManager _accessManager, string memory _name, string memory _symbol) external returns (address collection);
}

