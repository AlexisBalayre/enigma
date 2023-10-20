// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

import {TypeCasts} from "@hyperlane-xyz/core/contracts/libs/TypeCasts.sol";
import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";
import {IInterchainSecurityModule} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainSecurityModule.sol";
import {IInterchainGasPaymaster} from "@hyperlane-xyz/core/contracts/interfaces/IInterchainGasPaymaster.sol";

import {Message} from "./libs/Message.sol";

import {ISecretNFT} from "./interfaces/ISecretNFT.sol";
import {IAccessManager} from "./interfaces/IAccessManager.sol";
import {IBridge} from "./interfaces/IBridge.sol";

/**
 * @title Bridge Contract
 * @author Enigma
 * @notice This contract is responsible for handling the transfer of SecretNFTs between networks.
 */
contract Bridge is IBridge, IERC721Receiver {
    using TypeCasts for bytes32;
    using TypeCasts for address;
    using Message for bytes;

    // Access manager contract instance
    IAccessManager public accessManager;

    // Mapping from collection address to mapping from token ID to status
    mapping(address => mapping(uint256 => Status)) public status;
    // Mapping from collection address to mapping from chain ID to the related collection address
    mapping(address => mapping(uint32 => address)) public bridgedCollections;
    // Mapping from message ID to InterchainTransfer struct
    mapping(bytes32 => InterchainTransfer) public interchainTransfers;
    // Mapping from bridge contract address to authorisation status
    mapping(address => bool) public isAutorisedBridge;
    // Mapping from mailbox contract address to authorisation status
    mapping(address => bool) public isAutorisedMailbox;
    // Mapping from interchain gas paymaster contract address to authorisation status
    mapping(address => bool) public isAutorisedInterchainGasPaymaster; // Mapping of authorised interchain gas paymasters

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
    ) external {
        // Check if the bridge is authorised to bridge the collection to the destination chain
        if (
            bridgedCollections[address(_secretNFT)][_destinationChain] ==
            address(0)
        ) {
            revert NotAuthorisedBridgeCollection(
                address(_secretNFT),
                _destinationChain
            );
        }
        // Check if the mailbox is authorised to send messages
        if (!isAutorisedMailbox[address(_mailbox)]) {
            revert NotAuthorisedMailbox(address(_mailbox));
        }
        // Check if the interchain gas paymaster is authorised to pay for gas
        if (
            !isAutorisedInterchainGasPaymaster[address(_interchainGasPaymaster)]
        ) {
            revert NotAuthorisedInterchainGasPaymaster(
                address(_interchainGasPaymaster)
            );
        }

        // Transfer the token to this contract from the sender wallet
        _secretNFT.safeTransferFrom(msg.sender, address(this), _tokenId);

        // Cast the recipient address to bytes32
        bytes32 bridge = _bridge.addressToBytes32();

        // Get the public URI of the token
        ISecretNFT.Metadata memory metadata = _secretNFT.getTokenMetadata(
            _tokenId
        );

        // Format the message
        bytes memory message = Message.format(
            _recipient,
            bridgedCollections[address(_secretNFT)][_destinationChain],
            _tokenId,
            metadata.hashPrivateURI,
            metadata.encryptedPrivateURI,
            metadata.publicURI
        );

        // Dispatch the message
        bytes32 messageId = _mailbox.dispatch(
            _destinationChain,
            bridge,
            message
        );

        // Quote the gas payment for the message
        uint256 quote = _interchainGasPaymaster.quoteGasPayment(
            _destinationChain,
            _gasAmount
        );

        // Pay from the contract's balance.
        _interchainGasPaymaster.payForGas{value: quote}(
            messageId, // The ID of the message that was just dispatched
            _destinationChain, // The destination domain of the message
            _gasAmount,
            address(this) // refunds are returned to this contract
        );

        // Set the status of the token to bridged
        status[address(_secretNFT)][_tokenId] = Status(messageId, true);

        // Emit the InterchainTransferSent event
        emit InterchainTransferSent(
            messageId,
            address(_secretNFT),
            _tokenId,
            _recipient,
            _bridge,
            _destinationChain
        );
    }

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
    ) external {
        // Check if the sender is an authorised mailbox contract
        if (!isAutorisedMailbox[msg.sender]) {
            revert NotAuthorisedCaller(msg.sender);
        }

        // Parse the message
        Message.ParsedMessage memory parsedMessage = _body.parseMessage();

        // Check the origin chain
        if (
            bridgedCollections[parsedMessage.collectionAddr][_origin] ==
            address(0)
        ) {
            revert WrongChainOrigin(_origin);
        }

        // Check the sender
        if (!isAutorisedBridge[_sender.bytes32ToAddress()]) {
            revert NotAuthorisedSender(_sender.bytes32ToAddress());
        }

        // Check if the token is owned by this contract
        ISecretNFT secretNFT = ISecretNFT(parsedMessage.collectionAddr);
        if (
            status[parsedMessage.collectionAddr][parsedMessage.tokenId]
                .isBridged
        ) {
            // Settles the encrypted private URI of the token - only callable by the owner of the token
            secretNFT.setEncryptedPrivateURI(
                parsedMessage.tokenId,
                parsedMessage.hashPrivateURI,
                parsedMessage.encryptedPrivateURI
            );
            // Transfer the token to the recipient
            secretNFT.safeTransferFrom(
                parsedMessage.encryptedPrivateURI,
                address(this),
                parsedMessage.recipient,
                parsedMessage.tokenId
            );
        } else {
            // Mint the token
            secretNFT.mint(
                ISecretNFT.MintInputData({
                    to: parsedMessage.recipient,
                    tokenId: parsedMessage.tokenId,
                    hashPrivateURI: parsedMessage.hashPrivateURI,
                    encryptedPrivateURI: parsedMessage.encryptedPrivateURI,
                    publicURI: parsedMessage.publicURI
                })
            );
        }

        // Set the status of the token to bridged
        status[parsedMessage.collectionAddr][parsedMessage.tokenId] = Status(
            0,
            false
        );

        // Emit the InterchainTransferReceived event
        emit InterchainTransferReceived(
            parsedMessage.collectionAddr,
            parsedMessage.tokenId,
            parsedMessage.recipient,
            _sender.bytes32ToAddress(),
            _origin
        );
    }

    /**
     * @notice Function to authorise a bridge contract
     * @param _bridge The bridge contract address
     * @param _isAuthorised The authorisation status
     * @dev This function is called by an admin
     */
    function authoriseBridge(address _bridge, bool _isAuthorised) external {
        // Reverts if the caller is not an admin
        if (!accessManager.hasRole(keccak256("ADMIN"), msg.sender)) {
            revert OnlyAccessManagerCanCall(msg.sender);
        }

        // Set the authorisation status of the bridge contract
        isAutorisedBridge[_bridge] = _isAuthorised;

        // Emit the AuthorisedBridgesSet event
        emit AuthorisedBridgesSet(_bridge, _isAuthorised);
    }

    /**
     * @notice Function to authorise a mailbox contract
     * @param _mailbox The mailbox contract address
     * @param _isAuthorised The authorisation status
     * @dev This function is called by an admin
     */
    function authoriseMailbox(address _mailbox, bool _isAuthorised) external {
        // Reverts if the caller is not an admin
        if (!accessManager.hasRole(keccak256("ADMIN"), msg.sender)) {
            revert OnlyAccessManagerCanCall(msg.sender);
        }

        // Set the authorisation status of the mailbox contract
        isAutorisedMailbox[_mailbox] = _isAuthorised;

        // Emit the AuthorisedMailboxesSet event
        emit AuthorisedMailboxsSet(_mailbox, _isAuthorised);
    }

    /**
     * @notice Function to authorise an interchain gas paymaster contract
     * @param _interchainGasPaymaster The interchain gas paymaster contract address
     * @param _isAuthorised The authorisation status
     * @dev This function is called by an admin
     */
    function authoriseInterchainGasPaymaster(
        address _interchainGasPaymaster,
        bool _isAuthorised
    ) external {
        // Reverts if the caller is not an admin
        if (!accessManager.hasRole(keccak256("ADMIN"), msg.sender)) {
            revert OnlyAccessManagerCanCall(msg.sender);
        }

        // Set the authorisation status of the interchain gas paymaster contract
        isAutorisedInterchainGasPaymaster[
            _interchainGasPaymaster
        ] = _isAuthorised;

        // Emit the AuthorisedInterchainGasPaymastersSet event
        emit AuthorisedInterchainGasPaymastersSet(
            _interchainGasPaymaster,
            _isAuthorised
        );
    }

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
    ) external {
        // Reverts if the caller is not an admin
        if (!accessManager.hasRole(keccak256("ADMIN"), msg.sender)) {
            revert OnlyAccessManagerCanCall(msg.sender);
        }

        // Set the bridged collection address
        bridgedCollections[_collection][_destinationChain] = _bridgedCollection;

        // Emit the BridgedCollectionsSet event
        emit BridgedCollectionsSet(
            _destinationChain,
            _collection,
            _bridgedCollection
        );
    }

    /**
     * @notice Function to receive a secret NFT
     * @return The ERC721 received selector
     * @dev This function is called by the SecretNFT contract
     */
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
