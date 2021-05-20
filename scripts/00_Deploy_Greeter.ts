import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";

const deployFunc: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();

  await deploy("Greeter", {from: deployer, args: ["Greeter"]});
}
export default deployFunc;

// skip running this deployment script if deploying to mainnet - other/more networks are supported
deployFunc.skip = async (hre: HardhatRuntimeEnvironment) => {
  return hre.network.name === 'mainnet'
};
