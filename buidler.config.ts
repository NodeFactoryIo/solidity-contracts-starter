import {usePlugin, BuidlerConfig} from "@nomiclabs/buidler/config";
import {EthGasReporterConfig} from "buidler-gas-reporter/src/types"
import accounts from "./test/Accounts"
import dotenv from 'dotenv';

dotenv.config()
declare module "@nomiclabs/buidler/types" {
  interface BuidlerConfig {
    gasReporter?: Partial<EthGasReporterConfig> & {
      coinmarketcap?: string
    }
  }
}

usePlugin("@nomiclabs/buidler-solhint");
usePlugin("@nomiclabs/buidler-ethers");

usePlugin("solidity-coverage");
usePlugin("@nodefactory/buidler-typechain")
usePlugin("buidler-gas-reporter");
usePlugin("buidler-deploy");

const config: BuidlerConfig = {
  defaultNetwork: "buidlerevm",
  solc: {
    version: "0.6.6"
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    deploy: "./scripts",
  },
  networks: {
    buidlerevm: {
      loggingEnabled: false,
      accounts: accounts
    },
    coverage: {
      url: 'http://127.0.0.1:5458'
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      live: true,
      loggingEnabled: true
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: `${process.env.GOERLI_MNEMONIC}`
      },
      chainId: 5,
      loggingEnabled: true,
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1.5
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: `${process.env.MAINNET_MNEMONIC}`
      }
    }
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    enabled: !!(process.env.REPORT_GAS && process.env.REPORT_GAS != "false"),
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5"
  },
  namedAccounts: {
    deployer: {
      default: 0,
      6: 0
    }
  }
};

export default config;
