import { Address } from "viem";

export async function getDepositLimits(
  inputToken: Address,
  outputToken: Address,
  originChainId: BigInt,
  destinationChainId: BigInt
) {
  let baseURL = `https://app.across.to/api`;
  let route = `/limits`;

  let response = await fetch(
    baseURL +
      route +
      `?inputToken=${inputToken}&outputToken=${outputToken}&originChainId=${originChainId}&destinationChainId=${destinationChainId}`
  );

  return response;
}
