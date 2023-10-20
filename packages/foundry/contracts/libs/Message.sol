// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

library Message {
    // Error messages
    error SliceOutOfBounds(uint256 _length, uint256 _start, uint256 _end);
    error MessageTooShort();

    // ParsedMessage is the struct that contains the parsed message
    struct ParsedMessage {
        address collectionAddr;
        address recipient;
        uint256 tokenId;
        bytes32 hashPrivateURI;
        bytes publicURI;
        bytes encryptedPrivateURI;
    }

    // Length constants
    uint constant ADDR_LENGTH = 20;
    uint constant UINT256_LENGTH = 32;
    uint constant BYTES32_LENGTH = 32;

    /**
     * @dev Formats the message to be sent to the recipient
     * @param _recipient  The recipient address
     * @param _collectionAddr  The collection address
     * @param _tokenID  The token ID
     * @param _hashPrivateURI  The hash of the private URI
     * @param _encryptedPrivateURI  The encrypted private URI
     * @param _publicURI   The public URI
     * @return _message The formatted message
     */
    function format(
        address _recipient,
        address _collectionAddr,
        uint256 _tokenID,
        bytes32 _hashPrivateURI,
        bytes memory _encryptedPrivateURI,
        bytes memory _publicURI
    ) internal pure returns (bytes memory _message) {
        return
            abi.encodePacked(
                _recipient,
                _collectionAddr,
                _tokenID,
                _hashPrivateURI,
                uint16(_publicURI.length),
                uint16(_encryptedPrivateURI.length),
                _publicURI,
                _encryptedPrivateURI
            );
    }

    /**
     * @dev Parses the received message
     * @param _message  The message to be parsed
     * @return ParsedMessage  The parsed message
     */
    function parseMessage(
        bytes calldata _message
    ) internal pure returns (ParsedMessage memory) {
        if (
            _message.length <
            2 * ADDR_LENGTH + UINT256_LENGTH + BYTES32_LENGTH + 4
        ) {
            revert MessageTooShort();
        }

        address recipient;
        address collectionAddr;
        uint256 tokenId;
        bytes32 hashPrivateURI;
        uint16 publicURILength;
        uint16 encryptedPrivateURILength;

        assembly {
            recipient := calldataload(32)
            collectionAddr := calldataload(52)
            tokenId := calldataload(72)
            hashPrivateURI := calldataload(104)
            let lengths := calldataload(136)
            publicURILength := and(lengths, 0xFFFF) // Gets the lower 2 bytes
            encryptedPrivateURILength := shr(16, lengths) // Shifts right to get the next 2 bytes
        }

        bytes memory publicURI = new bytes(publicURILength);
        bytes memory encryptedPrivateURI = new bytes(encryptedPrivateURILength);

        uint256 startingPoint = 2 *
            ADDR_LENGTH +
            UINT256_LENGTH +
            BYTES32_LENGTH +
            4;

        assembly {
            calldatacopy(
                add(publicURI, 32),
                add(32, startingPoint),
                publicURILength
            )
            calldatacopy(
                add(encryptedPrivateURI, 32),
                add(add(32, startingPoint), publicURILength),
                encryptedPrivateURILength
            )
        }

        if (
            startingPoint + publicURILength + encryptedPrivateURILength >
            _message.length
        ) {
            revert SliceOutOfBounds(
                _message.length,
                startingPoint,
                startingPoint + publicURILength + encryptedPrivateURILength
            );
        }

        return
            ParsedMessage({
                collectionAddr: collectionAddr,
                recipient: recipient,
                tokenId: tokenId,
                hashPrivateURI: hashPrivateURI,
                publicURI: publicURI,
                encryptedPrivateURI: encryptedPrivateURI
            });
    }
}
