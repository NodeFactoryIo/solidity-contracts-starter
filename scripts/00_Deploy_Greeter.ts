import {BuidlerRuntimeEnvironment, DeployFunction} from "@nomiclabs/buidler/types";

const deployFunc: DeployFunction = async function (bre: BuidlerRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = bre;
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();

  await deploy("Greeter", {from: deployer, args: ["Greeter"]});
}
export default deployFunc;
