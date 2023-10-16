// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "forge-std/Test.sol";
import "forge-std/console2.sol";

import "../contracts/AccessManager.sol";
import "../contracts/SecretNFT.sol";

import "../contracts/interfaces/IAccessManager.sol";
import "../contracts/interfaces/ISecretNFT.sol";

contract SecretNFTTest is Test {
    // Contracts
    AccessManager public accessManager;
    SecretNFT public secretNFT;

    // Setup
    function setUp() public {
        accessManager = new AccessManager();
        secretNFT = new SecretNFT();
        secretNFT.initialize("SecretNFT", "SNFT", IAccessManager(address(accessManager)));
    }

    // Tests
    function testInitialisation() public {
        assertEq(secretNFT.name(), "SecretNFT");
        assertEq(secretNFT.symbol(), "SNFT");
        assertEq(address(secretNFT.accessManager()), address(accessManager));
    }

    function testAccessManager() public {
        assertTrue(accessManager.hasRole(keccak256("ADMIN"), address(this)));
        assertTrue(accessManager.hasRole(keccak256("MINTER"), address(this)));
    }

    function testMint() public {
        // Change the caller to address(1) 
        vm.startPrank(address(1));
        // Next line should fail
        vm.expectRevert();
        secretNFT.mint(ISecretNFT.MintInputData({ to: address(3), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        // Stop the prank - revert to the original caller
        vm.stopPrank();
        // Next line should pass
        secretNFT.mint(ISecretNFT.MintInputData({ to: address(3), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        assertEq(secretNFT.balanceOf(address(3)), 1);
    }

    function testMintBatch() public {
        ISecretNFT.MintInputData[] memory mintInputData = new ISecretNFT.MintInputData[](2);
        mintInputData[0] = ISecretNFT.MintInputData({ to: address(3), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" });
        mintInputData[1] = ISecretNFT.MintInputData({ to: address(3), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" });
        vm.startPrank(address(1)); // Change the caller to address(1) 
        vm.expectRevert(); // Next line should fail
        secretNFT.mintBatch(mintInputData);
        vm.stopPrank();  // Stop the prank - revert to the original caller
        secretNFT.mintBatch(mintInputData);
        assertEq(secretNFT.balanceOf(address(3)), 2);
    }

    function testUpdateEncryptedPrivateURI() public {
        secretNFT.mint(ISecretNFT.MintInputData({ to: address(5), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        assertEq(secretNFT.balanceOf(address(5)), 1);
        vm.expectRevert(); // Next line should fail
        secretNFT.setEncryptedPrivateURI(1, "newHashPrivateURI", "newEncryptedPrivateURI");
        vm.startPrank(address(5)); // Change the caller to address(5) 
        secretNFT.setEncryptedPrivateURI(1, "newHashPrivateURI", "newEncryptedPrivateURI");
        assertEq(secretNFT.balanceOf(address(5)), 1);
        (bytes memory encryptedPrivateURI, bytes32 hashPrivateURI, bytes32 originalHashPrivateURI) = secretNFT.privateTokenURI(1);
        assertEq(encryptedPrivateURI, "newEncryptedPrivateURI");
        assertEq(hashPrivateURI, "newHashPrivateURI");
        assertEq(originalHashPrivateURI, "hashPrivateURI");
    }

    function testSendEncryptedPrivateURI() public {
        secretNFT.mint(ISecretNFT.MintInputData({ to: address(5), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        assertEq(secretNFT.balanceOf(address(5)), 1);
        vm.expectRevert(); // Next line should fail
        secretNFT.safeTransferFrom("newEncryptedPrivateURI2", address(5), address(6), 1);
        vm.startPrank(address(5)); // Change the caller to address(5) 
        secretNFT.safeTransferFrom("newEncryptedPrivateURI2", address(5), address(6), 1);
        assertEq(secretNFT.balanceOf(address(5)), 0);
        assertEq(secretNFT.balanceOf(address(6)), 1);
        (bytes memory encryptedPrivateURI, bytes32 hashPrivateURI, bytes32 originalHashPrivateURI) = secretNFT.privateTokenURI(1);
        assertEq(encryptedPrivateURI, "newEncryptedPrivateURI2");
        assertEq(hashPrivateURI, "hashPrivateURI");
        assertEq(originalHashPrivateURI, "hashPrivateURI");
    }


    function testSendEncryptedPrivateURIMethod2() public {
        secretNFT.mint(ISecretNFT.MintInputData({ to: address(5), hashPrivateURI: "hashPrivateURI", encryptedPrivateURI: "encryptedPrivateURI", publicURI: "publicURI" }));
        assertEq(secretNFT.balanceOf(address(5)), 1);
        vm.expectRevert(); // Next line should fail
        secretNFT.transferFrom("newEncryptedPrivateURI2", address(5), address(6), 1);
        vm.startPrank(address(5)); // Change the caller to address(5) 
        secretNFT.transferFrom("newEncryptedPrivateURI2", address(5), address(6), 1);
        assertEq(secretNFT.balanceOf(address(5)), 0);
        assertEq(secretNFT.balanceOf(address(6)), 1);
        (bytes memory encryptedPrivateURI, bytes32 hashPrivateURI, bytes32 originalHashPrivateURI) = secretNFT.privateTokenURI(1);
        assertEq(encryptedPrivateURI, "newEncryptedPrivateURI2");
        assertEq(hashPrivateURI, "hashPrivateURI");
        assertEq(originalHashPrivateURI, "hashPrivateURI");
    }
}