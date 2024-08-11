import { ENTRYPOINT_ADDRESS_V07, createSmartAccountClient } from "permissionless";
import { signerToSafeSmartAccount } from "permissionless/accounts";
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { createPublicClient, getContract, http, parseEther } from "viem";
import { sepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

export const publicClient = createPublicClient({
  transport: http("https://rpc.ankr.com/eth_sepolia"),
});

export const paymasterClient = createPimlicoPaymasterClient({
  transport: http(`https://api.pimlico.io/v2/sepolia/rpc?apikey=${process.env.PIMLICO_API_KEY}`),
  entryPoint: ENTRYPOINT_ADDRESS_V07,
});

export const pimlicoBundlerClient = createPimlicoBundlerClient({
  transport: http(`https://api.pimlico.io/v2/sepolia/rpc?apikey=${process.env.PIMLICO_API_KEY}`),
  entryPoint: ENTRYPOINT_ADDRESS_V07,
});

const signer = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

export async function getSafeAccount() {
  const safeAccount = await signerToSafeSmartAccount(publicClient, {
    entryPoint: ENTRYPOINT_ADDRESS_V07,
    signer: signer,
    // saltNonce: BigInt(0), // Optional
    safeVersion: "1.4.1",
    // address: "0x...", // optional, only if you are using an already created account
  });

  return safeAccount;
}
