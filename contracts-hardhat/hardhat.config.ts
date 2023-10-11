import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { NetworksUserConfig } from "hardhat/types";
import "@openzeppelin/hardhat-upgrades";
import "solidity-docgen";

dotenvConfig();

function getNetworks(): NetworksUserConfig {
  if (process.env.POLYGON_URL && process.env.PRIVATE_KEY) {
    const accounts = [`0x${process.env.PRIVATE_KEY}`];

    return {
      polygon: {
        url: process.env.POLYGON_URL,
        chainId: 137,
        accounts,
      },
    };
  }

  return {};
}

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ...getNetworks(),
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS === "true",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    sources: "./contracts",
  },
  docgen: {
    outputDir: "./docs",
    pages: "files",
  },
};

export default config;
