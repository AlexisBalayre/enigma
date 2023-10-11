// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

// Importing necessary OpenZeppelin contracts
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title AccessManager
 * @author Enigma
 * @notice This contract manages roles for access control.
 */
contract AccessManager is AccessControl {
    // Role identifiers
    bytes32 public constant MINTER = keccak256("MINTER");
    bytes32 public constant ADMIN = keccak256("ADMIN");

    /**
     * @dev Constructor for the AccessManager contract.
     * Here we setup the default admin role, as well as the custom admin and minter roles,
     * and assign them all to the account deploying the contract.
     */
    constructor() {
        // Grants the contract deployer the default admin role
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN, msg.sender);
        _grantRole(MINTER, msg.sender);
    }
}
