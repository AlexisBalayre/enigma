// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";
import {IInterchainSecurityModule} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol";
import {IInterchainGasPaymaster} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainGasPaymaster.sol";

import {ISecretNFT} from "./ISecretNFT.sol";

/**
 * @title IBridge Contract Interface
 * @author Enigma
 * @notice Interface for the Bridge contract.
 * @dev This interface should be implemented by the Bridge contract.
 */
interface IBridge {
    /**
     * @notice Struct defining the status of a bridged collection.
     * @param lastMessageID The ID of the last message bridged.
     * @param isBridged Boolean indicating whether the collection is bridged or not.
     */
    struct Status {
        bytes32 lastMessageID;
        bool isBridged;
    }

    /**
     * @notice Struct defining an interchain transfer.
     * @param blockNumber The block number of the transfer.
     * @param blockTimestamp The block timestamp of the transfer.
     * @param tokenID The ID of the token.
     * @param collection The address of the collection.
     * @param sender The address of the sender.
     * @param recipient The address of the recipient.
     * @param bridge The address of the bridge.
     * @param destination The destination chain.
     */
    struct InterchainTransfer {
        uint256 blockNumber;
        uint256 blockTimestamp;
        uint256 tokenID;
        address collection;
        address sender;
        address recipient;
        address bridge;
        uint32 destination;
    }

    /// @notice Not authorised Bridge Collection error
    error NotAuthorisedBridgeCollection(address collection, uint32 destination);
    /// @notice Not authorised Mailbox error
    error NotAuthorisedMailbox(address mailbox);
    /// @notice Not authorised Caller error
    error NotAuthorisedCaller(address caller);
    /// @notice Not authorised Interchain Security Module error
    error NotAuthorisedInterchainGasPaymaster(address interchainGasPaymaster);
    /// @notice Not authorised Bridge error
    error NotAuthorisedBridge(address bridge);
    /// @notice Wrong chain origin error
    error WrongChainOrigin(uint32 origin);
    /// @notice Not authorised sender error
    error NotAuthorisedSender(address sender);
    /// @notice Only Access Manager can call error
    error OnlyAccessManagerCanCall(address caller);

    /**
     * @notice Emitted when a bridged collection is set
     * @param destination  The destination chain
     * @param collection The collection address
     * @param bridgedCollection The bridged collection address on the destination chain
     */
    event BridgedCollectionsSet(
        uint32 indexed destination,
        address indexed collection,
        address bridgedCollection
    );
    /**
     * @notice Emitted when a mailbox contract status is set
     * @param mailbox The mailbox contract address
     * @param isAuthorised The authorisation status
     */
    event AuthorisedMailboxsSet(address indexed mailbox, bool isAuthorised);
    /**
     * @notice Emitted when an interchain gas paymaster contract status is set
     * @param interchainGasPaymaster The interchain gas paymaster contract address
     * @param isAuthorised The authorisation status
     */
    event AuthorisedInterchainGasPaymastersSet(
        address indexed interchainGasPaymaster,
        bool isAuthorised
    );
    /**
     * @notice Emitted when a bridge contract status is set
     * @param bridge The bridge contract address
     * @param isAuthorised The authorisation status
     */
    event AuthorisedBridgesSet(address indexed bridge, bool isAuthorised);
    /**
     * @notice Emitted when an interchain transfer is sent
     * @param messageID The ID of the message
     * @param collection The collection address
     * @param tokenID The token ID
     * @param recipient The recipient address on the destination chain
     * @param bridge The bridge contract address on the destination chain
     * @param destination The destination chain
     */
    event InterchainTransferSent(
        bytes32 indexed messageID,
        address indexed collection,
        uint256 indexed tokenID,
        address recipient,
        address bridge,
        uint32 destination
    );
    /**
     * @notice Emitted when an interchain transfer is received
     * @param collection The collection address
     * @param tokenID The token ID
     * @param recipient The recipient address on the destination chain
     * @param bridge The bridge contract address on the origin chain
     * @param origin The origin chain
     */
    event InterchainTransferReceived(
        address indexed collection,
        uint256 indexed tokenID,
        address recipient,
        address bridge,
        uint32 origin
    );

    /**
     * @notice Function to bridge a secret NFT to another chain
     * @param _mailbox The mailbox contract address
     * @param _interchainGasPaymaster The interchain gas paymaster contract address
     * @param _secretNFT The secret NFT contract address
     * @param _bridge The bridge contract address
     * @param _recipient The recipient address on the destination chain
     * @param _destinationChain The destination chain
     * @param _tokenId The token ID
     * @param _gasAmount The gas amount
     * @dev This function is called by the owner of a secret NFT
     */
    function interchainTransfer(
        IMailbox _mailbox,
        IInterchainGasPaymaster _interchainGasPaymaster,
        ISecretNFT _secretNFT,
        address _bridge,
        address _recipient,
        uint32 _destinationChain,
        uint256 _tokenId,
        uint256 _gasAmount
    ) external;

    /**
     * @notice Handle an interchain message
     * @param _origin Domain ID of the chain from which the message came
     * @param _sender Address of the message sender on the origin chain as bytes32
     * @param _body Raw bytes content of message body
     */
    function handle(
        uint32 _origin,
        bytes32 _sender,
        bytes calldata _body
    ) external;

    /**
     * @notice Function to authorise a bridge contract
     * @param _bridge The bridge contract address
     * @param _isAuthorised The authorisation status
     * @dev This function is called by an admin
     */
    function authoriseBridge(address _bridge, bool _isAuthorised) external;

    /**
     * @notice Function to authorise a mailbox contract
     * @param _mailbox The mailbox contract address
     * @param _isAuthorised The authorisation status
     * @dev This function is called by an admin
     */
    function authoriseMailbox(address _mailbox, bool _isAuthorised) external;

    /**
     * @notice Function to authorise an interchain gas paymaster contract
     * @param _interchainGasPaymaster The interchain gas paymaster contract address
     * @param _isAuthorised The authorisation status
     * @dev This function is called by an admin
     */
    function authoriseInterchainGasPaymaster(
        address _interchainGasPaymaster,
        bool _isAuthorised
    ) external;

    /**
     * @notice Function to set the bridged collection address
     * @param _collection The collection address
     * @param _destinationChain The destination chain
     * @param _bridgedCollection The bridged collection address
     * @dev TThis function is called by an admin
     */
    function setBridgedCollection(
        address _collection,
        uint32 _destinationChain,
        address _bridgedCollection
    ) external;
}
