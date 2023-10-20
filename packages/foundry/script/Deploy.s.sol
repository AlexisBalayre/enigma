//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/SecretNFT.sol";
import "../contracts/Factory.sol";
import "../contracts/AccessManager.sol";
import "../contracts/Bridge.sol";
import "../contracts/interfaces/IAccessManager.sol";
import "../contracts/interfaces/ISecretNFT.sol";
    
import "./DeployHelpers.s.sol";

contract DeployScript is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);





    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);
        SecretNFT secretNFT = new SecretNFT();


        // Deploy the AccessManager contract
        AccessManager _accessManagerInstance = new AccessManager();
        // Assign the deployed contract's address to the IAccessManager interface
        IAccessManager accessManager = IAccessManager(address(_accessManagerInstance));

        Factory factory = new Factory(address(secretNFT),accessManager);

        Bridge bridge = new Bridge();


        console.logString(
            string.concat(
                "SecretNFT: ",
                vm.toString(address(secretNFT))
            )
        );

        console.logString(
            string.concat(
                "AccessManager: ",
                vm.toString(address(accessManager))
            )
        );

        console.logString(
            string.concat(
                "Factory: ",
                vm.toString(address(factory))
            )
        );

        console.logString(
            string.concat(
                "Bridge: ",
                vm.toString(address(bridge))
            )
        );

        vm.stopBroadcast();

        /**
         * This function generates the file containing the contracts Abi definitions.
         * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
         * This function should be called last.
         */
        exportDeployments();
    }

    function test() public {}
}
