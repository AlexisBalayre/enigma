// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "forge-std/Test.sol";
import "forge-std/console2.sol";

import "../src/AccessManager.sol";
import "../src/Factory.sol";
import "../src/SecretNFT.sol";

import "../src/interfaces/IAccessManager.sol";

contract FactoryTest is Test {
    // Contracts
    AccessManager public accessManager;
    AccessManager public accessManager2;

    Factory public factory;


    // Setup
    function setUp() public {
        accessManager = new AccessManager();
        accessManager2 = new AccessManager();
        factory = new Factory(address(0), IAccessManager(address(accessManager)));
        factory.setSecretNFTContractImplementation(address(new SecretNFT()));
    }

    // Tests
    function testInitialisation() public {
        assertEq(address(factory.accessManager()), address(accessManager));
    }

    function testDeployment()  public {
        // Change the caller to address(1) 
        vm.startPrank(address(1));
        // Next line should fail
        vm.expectRevert();
        factory.deployCollection(IAccessManager(address(accessManager2)), "SecretNFT", "SNFT");
        vm.stopPrank();
        // Next line should pass
        factory.deployCollection(IAccessManager(address(accessManager2)), "SecretNFT", "SNFT");
        assertEq(factory.getCollectionsAddresses().length, 1);
    }

    function testAccessManager() public {
        // Deploy some collections with deferent access managers
        address collection1Addr = factory.deployCollection(IAccessManager(address(accessManager2)), "SecretNFT", "SNFT");
        address collection2Addr = factory.deployCollection(IAccessManager(address(accessManager)), "SecretNFT 1", "SNFT 1");
        // Check that the collections exist 
        assertEq(IFactory(address(factory)).getCollectionAddress(0), collection1Addr);
        assertEq(IFactory(address(factory)).getCollectionAddress(1), collection2Addr);
        // Verify Names and Symbols
        SecretNFT collection1 = SecretNFT(collection1Addr);
        SecretNFT collection2 = SecretNFT(collection2Addr);
        assertEq(collection1.name(), "SecretNFT");
        assertEq(collection1.symbol(), "SNFT");
        assertEq(collection2.name(), "SecretNFT 1");
        assertEq(collection2.symbol(), "SNFT 1");   
        // Verify access managers
        assertEq(address(collection1.accessManager()), address(accessManager2));
        assertEq(address(collection2.accessManager()), address(accessManager));
        // Grant the MINTER role to some address
        accessManager2.grantRole(keccak256("MINTER"), address(1));
        accessManager.grantRole(keccak256("MINTER"), address(2));
        // Perform minting operations
        vm.startPrank(address(2));
        vm.expectRevert();
        collection1.mint(ISecretNFT.MintInputData({ to: address(3), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        collection2.mint(ISecretNFT.MintInputData({ to: address(3), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        vm.stopPrank();
        vm.startPrank(address(1));
        collection1.mint(ISecretNFT.MintInputData({ to: address(3), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        vm.expectRevert();
        collection2.mint(ISecretNFT.MintInputData({ to: address(3), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        vm.stopPrank();
        assertEq(collection1.balanceOf(address(3)), 1);
        assertEq(collection2.balanceOf(address(3)), 1);
    }
}