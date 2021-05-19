# Solidity-contract-starter

## Requirements

Following software is required to be installed to use this repo:
* [NodeJS](https://nodejs.org/en/) >= v12.0.0

This repo also uses dependecies that are associated with `hardhat` but not built-in:
* [hardhat-deploy](https://github.com/wighawag/hardhat-deploy)
* [hardhat-gas-reporter](https://github.com/cgewecke/hardhat-gas-reporter/tree/master)
* [hardhat-typechain](https://github.com/rhlsthrm/hardhat-typechain)

## Usage

On first use of this repo, run `yarn install` to install all required dependencies.
Then run `yarn run build` to set up the repo.

Available commands:
* `build` - Compiles the entire project and generates Typechain typings
* `lint` - Runs solhint on current project
* `clean` - Clears the cache and deletes all artifacts
* `compile` - Compiles the entire project, building all artifacts
* `deploy:<network>` - Run deploy script on \<network\>
* `help` - Prints all available hardhat commands
* `node:local` - Starts a JSON-RPC server on top of hardhat EVM
* `script` - Runs a user-defined script after compiling the project
* `test:localhost` - Runs mocha tests
* `test:ci`  - Runs gas check and solidity coverage
* `test:gas` - Runs gas check
* `test:coverage` - Runs solidity coverage
* `typechain` - Generate Typechain typings for compiled contracts
