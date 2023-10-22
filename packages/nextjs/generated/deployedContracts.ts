const contracts = {
  31337: [
    {
      name: "Anvil",
      chainId: "31337",
      contracts: {
        SecretNFT: {
          address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "ERC721IncorrectOwner",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ERC721InsufficientApproval",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "approver",
                  type: "address",
                },
              ],
              name: "ERC721InvalidApprover",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "ERC721InvalidOperator",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "ERC721InvalidOwner",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
              ],
              name: "ERC721InvalidReceiver",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "ERC721InvalidSender",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ERC721NonexistentToken",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidInitialization",
              type: "error",
            },
            {
              inputs: [],
              name: "NotInitializing",
              type: "error",
            },
            {
              inputs: [],
              name: "NullValue",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyAdminCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyFactoryCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyMinterCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyTokenOwnerCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "WrongTokenId",
              type: "error",
            },
            {
              inputs: [],
              name: "ZeroAddress",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "version",
                  type: "uint64",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "originalHashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                  ],
                  indexed: false,
                  internalType: "struct ISecretNFT.Metadata",
                  name: "newMetadata",
                  type: "tuple",
                },
              ],
              name: "TokenMetadataUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "originalHashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                  ],
                  indexed: false,
                  internalType: "struct ISecretNFT.Metadata",
                  name: "metadata",
                  type: "tuple",
                },
              ],
              name: "TokenMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "TokenNoMetaMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "accessManager",
              outputs: [
                {
                  internalType: "contract IAccessManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "exists",
              outputs: [
                {
                  internalType: "bool",
                  name: "isMinted",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "getTokenMetadata",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "originalHashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ISecretNFT.Metadata",
                  name: "metadata",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "contract IAccessManager",
                  name: "_accessManager",
                  type: "address",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "tokenId",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ISecretNFT.MintInputData",
                  name: "_inputData",
                  type: "tuple",
                },
              ],
              name: "mint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "tokenId",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ISecretNFT.MintInputData[]",
                  name: "_mintInputData",
                  type: "tuple[]",
                },
              ],
              name: "mintBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "_tokenIds",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
              ],
              name: "mintNext",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "hashPrivateURI",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "encryptedPrivateURI",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "publicURI",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "originalHashPrivateURI",
                      type: "string",
                    },
                  ],
                  internalType: "struct ISecretNFT.MintUploadData",
                  name: "_mintUploadData",
                  type: "tuple",
                },
              ],
              name: "mintUpload",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "privateTokenURI",
              outputs: [
                {
                  internalType: "bytes",
                  name: "encryptedPrivateURI",
                  type: "bytes",
                },
                {
                  internalType: "bytes32",
                  name: "hashPrivateURI",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "originalHashPrivateURI",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_encryptedPrivateURI",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "_hashPrivateURI",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_encryptedPrivateURI",
                  type: "bytes",
                },
              ],
              name: "setEncryptedPrivateURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_encryptedPrivateURI",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        AccessManager: {
          address: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccessControlBadConfirmation",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "neededRole",
                  type: "bytes32",
                },
              ],
              name: "AccessControlUnauthorizedAccount",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "previousAdminRole",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "newAdminRole",
                  type: "bytes32",
                },
              ],
              name: "RoleAdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleGranted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleRevoked",
              type: "event",
            },
            {
              inputs: [],
              name: "ADMIN",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "DEFAULT_ADMIN_ROLE",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MINTER",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
              ],
              name: "getRoleAdmin",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "grantRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "hasRole",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "callerConfirmation",
                  type: "address",
                },
              ],
              name: "renounceRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "revokeRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Factory: {
          address: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_secretNFTContractImplementation",
                  type: "address",
                },
                {
                  internalType: "contract IAccessManager",
                  name: "_accessManager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC1167FailedCreateClone",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyAdminCanCall",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "collectionAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              name: "NewCollectionDeployed",
              type: "event",
            },
            {
              inputs: [],
              name: "accessManager",
              outputs: [
                {
                  internalType: "contract IAccessManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IAccessManager",
                  name: "_accessManager",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "deployCollection",
              outputs: [
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getCollectionAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "_collection",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getCollectionsAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "_collections",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getCollectionsNumber",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_collectionNumber",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_collection",
                  type: "address",
                },
              ],
              name: "isCollectionAddress",
              outputs: [
                {
                  internalType: "bool",
                  name: "_isCollectionAddress",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "secretNFTContractImplementation",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_secretNFTContractImplementation",
                  type: "address",
                },
              ],
              name: "setSecretNFTContractImplementation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Bridge: {
          address: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
          abi: [
            {
              inputs: [],
              name: "MessageTooShort",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
              ],
              name: "NotAuthorisedBridge",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "destination",
                  type: "uint32",
                },
              ],
              name: "NotAuthorisedBridgeCollection",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "NotAuthorisedCaller",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "interchainGasPaymaster",
                  type: "address",
                },
              ],
              name: "NotAuthorisedInterchainGasPaymaster",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "mailbox",
                  type: "address",
                },
              ],
              name: "NotAuthorisedMailbox",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "NotAuthorisedSender",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyAccessManagerCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_length",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_start",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_end",
                  type: "uint256",
                },
              ],
              name: "SliceOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "origin",
                  type: "uint32",
                },
              ],
              name: "WrongChainOrigin",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "isAuthorised",
                  type: "bool",
                },
              ],
              name: "AuthorisedBridgesSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "interchainGasPaymaster",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "isAuthorised",
                  type: "bool",
                },
              ],
              name: "AuthorisedInterchainGasPaymastersSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "mailbox",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "isAuthorised",
                  type: "bool",
                },
              ],
              name: "AuthorisedMailboxsSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint32",
                  name: "destination",
                  type: "uint32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "bridgedCollection",
                  type: "address",
                },
              ],
              name: "BridgedCollectionsSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "origin",
                  type: "uint32",
                },
              ],
              name: "InterchainTransferReceived",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "messageID",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "destination",
                  type: "uint32",
                },
              ],
              name: "InterchainTransferSent",
              type: "event",
            },
            {
              inputs: [],
              name: "accessManager",
              outputs: [
                {
                  internalType: "contract IAccessManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_bridge",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_isAuthorised",
                  type: "bool",
                },
              ],
              name: "authoriseBridge",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_interchainGasPaymaster",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_isAuthorised",
                  type: "bool",
                },
              ],
              name: "authoriseInterchainGasPaymaster",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_mailbox",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_isAuthorised",
                  type: "bool",
                },
              ],
              name: "authoriseMailbox",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              name: "bridgedCollections",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "_origin",
                  type: "uint32",
                },
                {
                  internalType: "bytes32",
                  name: "_sender",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_body",
                  type: "bytes",
                },
              ],
              name: "handle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IMailbox",
                  name: "_mailbox",
                  type: "address",
                },
                {
                  internalType: "contract IInterchainGasPaymaster",
                  name: "_interchainGasPaymaster",
                  type: "address",
                },
                {
                  internalType: "contract ISecretNFT",
                  name: "_secretNFT",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_bridge",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "_destinationChain",
                  type: "uint32",
                },
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_gasAmount",
                  type: "uint256",
                },
              ],
              name: "interchainTransfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "interchainTransfers",
              outputs: [
                {
                  internalType: "uint256",
                  name: "blockNumber",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "blockTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "destination",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isAutorisedBridge",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isAutorisedInterchainGasPaymaster",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isAutorisedMailbox",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC721Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_collection",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "_destinationChain",
                  type: "uint32",
                },
                {
                  internalType: "address",
                  name: "_bridgedCollection",
                  type: "address",
                },
              ],
              name: "setBridgedCollection",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "status",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "lastMessageID",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "isBridged",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  80001: [
    {
      name: "Polygon Mumbai",
      chainId: "80001",
      contracts: {
        SecretNFT: {
          address: "0x80cA2510C773591B136FCF432916CFFAd96Fb8B7",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "ERC721IncorrectOwner",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ERC721InsufficientApproval",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "approver",
                  type: "address",
                },
              ],
              name: "ERC721InvalidApprover",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "ERC721InvalidOperator",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "ERC721InvalidOwner",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
              ],
              name: "ERC721InvalidReceiver",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "ERC721InvalidSender",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ERC721NonexistentToken",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidInitialization",
              type: "error",
            },
            {
              inputs: [],
              name: "NotInitializing",
              type: "error",
            },
            {
              inputs: [],
              name: "NullValue",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyAdminCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyFactoryCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyMinterCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyTokenOwnerCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "WrongTokenId",
              type: "error",
            },
            {
              inputs: [],
              name: "ZeroAddress",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "version",
                  type: "uint64",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "originalHashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                  ],
                  indexed: false,
                  internalType: "struct ISecretNFT.Metadata",
                  name: "newMetadata",
                  type: "tuple",
                },
              ],
              name: "TokenMetadataUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "originalHashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                  ],
                  indexed: false,
                  internalType: "struct ISecretNFT.Metadata",
                  name: "metadata",
                  type: "tuple",
                },
              ],
              name: "TokenMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "TokenNoMetaMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "accessManager",
              outputs: [
                {
                  internalType: "contract IAccessManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "exists",
              outputs: [
                {
                  internalType: "bool",
                  name: "isMinted",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "getTokenMetadata",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "originalHashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ISecretNFT.Metadata",
                  name: "metadata",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "contract IAccessManager",
                  name: "_accessManager",
                  type: "address",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "tokenId",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ISecretNFT.MintInputData",
                  name: "_inputData",
                  type: "tuple",
                },
              ],
              name: "mint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "tokenId",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "hashPrivateURI",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedPrivateURI",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "publicURI",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ISecretNFT.MintInputData[]",
                  name: "_mintInputData",
                  type: "tuple[]",
                },
              ],
              name: "mintBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "_tokenIds",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
              ],
              name: "mintNext",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "hashPrivateURI",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "encryptedPrivateURI",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "publicURI",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "originalHashPrivateURI",
                      type: "string",
                    },
                  ],
                  internalType: "struct ISecretNFT.MintUploadData",
                  name: "_mintUploadData",
                  type: "tuple",
                },
              ],
              name: "mintUpload",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "privateTokenURI",
              outputs: [
                {
                  internalType: "bytes",
                  name: "encryptedPrivateURI",
                  type: "bytes",
                },
                {
                  internalType: "bytes32",
                  name: "hashPrivateURI",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "originalHashPrivateURI",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_encryptedPrivateURI",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "_hashPrivateURI",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_encryptedPrivateURI",
                  type: "bytes",
                },
              ],
              name: "setEncryptedPrivateURI",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "_encryptedPrivateURI",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        AccessManager: {
          address: "0x6d728F46A2EcA9C9889f1CDcbEC81C038d12e198",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccessControlBadConfirmation",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "neededRole",
                  type: "bytes32",
                },
              ],
              name: "AccessControlUnauthorizedAccount",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "previousAdminRole",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "newAdminRole",
                  type: "bytes32",
                },
              ],
              name: "RoleAdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleGranted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleRevoked",
              type: "event",
            },
            {
              inputs: [],
              name: "ADMIN",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "DEFAULT_ADMIN_ROLE",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MINTER",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
              ],
              name: "getRoleAdmin",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "grantRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "hasRole",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "callerConfirmation",
                  type: "address",
                },
              ],
              name: "renounceRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "revokeRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Factory: {
          address: "0x33750AAb8240BC6cc83b70E6a367461Ad9611476",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_secretNFTContractImplementation",
                  type: "address",
                },
                {
                  internalType: "contract IAccessManager",
                  name: "_accessManager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC1167FailedCreateClone",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyAdminCanCall",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "collectionAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              name: "NewCollectionDeployed",
              type: "event",
            },
            {
              inputs: [],
              name: "accessManager",
              outputs: [
                {
                  internalType: "contract IAccessManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IAccessManager",
                  name: "_accessManager",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "deployCollection",
              outputs: [
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getCollectionAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "_collection",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getCollectionsAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "_collections",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getCollectionsNumber",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_collectionNumber",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_collection",
                  type: "address",
                },
              ],
              name: "isCollectionAddress",
              outputs: [
                {
                  internalType: "bool",
                  name: "_isCollectionAddress",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "secretNFTContractImplementation",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_secretNFTContractImplementation",
                  type: "address",
                },
              ],
              name: "setSecretNFTContractImplementation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Bridge: {
          address: "0x2dFd1CC96bFFdf48585eC8F512c81Ae8941Ea0b5",
          abi: [
            {
              inputs: [],
              name: "MessageTooShort",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
              ],
              name: "NotAuthorisedBridge",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "destination",
                  type: "uint32",
                },
              ],
              name: "NotAuthorisedBridgeCollection",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "NotAuthorisedCaller",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "interchainGasPaymaster",
                  type: "address",
                },
              ],
              name: "NotAuthorisedInterchainGasPaymaster",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "mailbox",
                  type: "address",
                },
              ],
              name: "NotAuthorisedMailbox",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "NotAuthorisedSender",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "OnlyAccessManagerCanCall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_length",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_start",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_end",
                  type: "uint256",
                },
              ],
              name: "SliceOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "origin",
                  type: "uint32",
                },
              ],
              name: "WrongChainOrigin",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "isAuthorised",
                  type: "bool",
                },
              ],
              name: "AuthorisedBridgesSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "interchainGasPaymaster",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "isAuthorised",
                  type: "bool",
                },
              ],
              name: "AuthorisedInterchainGasPaymastersSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "mailbox",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "isAuthorised",
                  type: "bool",
                },
              ],
              name: "AuthorisedMailboxsSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint32",
                  name: "destination",
                  type: "uint32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "bridgedCollection",
                  type: "address",
                },
              ],
              name: "BridgedCollectionsSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "origin",
                  type: "uint32",
                },
              ],
              name: "InterchainTransferReceived",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "messageID",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "destination",
                  type: "uint32",
                },
              ],
              name: "InterchainTransferSent",
              type: "event",
            },
            {
              inputs: [],
              name: "accessManager",
              outputs: [
                {
                  internalType: "contract IAccessManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_bridge",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_isAuthorised",
                  type: "bool",
                },
              ],
              name: "authoriseBridge",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_interchainGasPaymaster",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_isAuthorised",
                  type: "bool",
                },
              ],
              name: "authoriseInterchainGasPaymaster",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_mailbox",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_isAuthorised",
                  type: "bool",
                },
              ],
              name: "authoriseMailbox",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              name: "bridgedCollections",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "_origin",
                  type: "uint32",
                },
                {
                  internalType: "bytes32",
                  name: "_sender",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_body",
                  type: "bytes",
                },
              ],
              name: "handle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IMailbox",
                  name: "_mailbox",
                  type: "address",
                },
                {
                  internalType: "contract IInterchainGasPaymaster",
                  name: "_interchainGasPaymaster",
                  type: "address",
                },
                {
                  internalType: "contract ISecretNFT",
                  name: "_secretNFT",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_bridge",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_recipient",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "_destinationChain",
                  type: "uint32",
                },
                {
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_gasAmount",
                  type: "uint256",
                },
              ],
              name: "interchainTransfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "interchainTransfers",
              outputs: [
                {
                  internalType: "uint256",
                  name: "blockNumber",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "blockTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "bridge",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "destination",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isAutorisedBridge",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isAutorisedInterchainGasPaymaster",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isAutorisedMailbox",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC721Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_collection",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "_destinationChain",
                  type: "uint32",
                },
                {
                  internalType: "address",
                  name: "_bridgedCollection",
                  type: "address",
                },
              ],
              name: "setBridgedCollection",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "status",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "lastMessageID",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "isBridged",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
