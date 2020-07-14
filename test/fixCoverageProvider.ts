// Workaround fix of failing deployment for coverage run as ethers expect a sendAsync function to be present.
// Buidler will fix that in a future version with a provider compatibility layer.
// For now plugin needs to handle that and currently buidler-deploy assume the provider is set at the get-go.
// Unfortunately solidity-coverage create a new provider and thus do not get the extra sendAsync added.
// Fix by @wighawag

import {BuidlerRuntimeEnvironment} from "@nomiclabs/buidler/types";
import bre from "@nomiclabs/buidler";

function fixProvider(env: BuidlerRuntimeEnvironment) {
  // allow it to be used by ethers without any change
  const provider = env.ethereum as any;
  if (provider.sendAsync === undefined) {
    provider.sendAsync = (
      req: {
        id: number;
        jsonrpc: string;
        method: string;
        params: any[];
      },
      callback: (error: any, result: any) => void
    ) => {
      provider
        .send(req.method, req.params)
        .then((result: any) =>
          callback(null, {result, id: req.id, jsonrpc: req.jsonrpc})
        )
        .catch((error: any) => callback(error, null));
    };
  }
}

if (process.env.COVERAGE) {
  fixProvider(bre);
}
