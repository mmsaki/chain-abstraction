import { writeFileSync } from "fs";
import { ENTRYPOINT_ADDRESS_V07 } from "permissionless";
import { signerToSafeSmartAccount } from "permissionless/accounts";
import { createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { createPublicClient, Hex, http } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

const apiKey = process.env.PIMLICO_API_KEY;
const paymasterUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`;

const privateKey =
  (process.env.PRIVATE_KEY as Hex) ??
  (() => {
    const pk = generatePrivateKey();
    writeFileSync(".env", `PRIVATE_KEY=${pk}`);
    return pk;
  })();

export const publicClient = createPublicClient({
  transport: http("https://rpc.ankr.com/eth_sepolia"),
});

export const paymasterClient = createPimlicoPaymasterClient({
  transport: http(paymasterUrl),
  entryPoint: ENTRYPOINT_ADDRESS_V07,
});

async function init() {
  const account = await signerToSafeSmartAccount(publicClient, {
    signer: privateKeyToAccount(privateKey),
    entryPoint: ENTRYPOINT_ADDRESS_V07, // global entrypoint
    safeVersion: "1.4.1",
  });
  console.log(`Smart account address: https://eth-sepolia.blockscout.com/address/${account.address}`);
}

init();
