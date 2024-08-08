import { Address } from "viem";

export async function getSuggestedFees(
  inputToken: Address,
  outputToken: Address,
  originalChainId: BigInt,
  destinationChainId: BigInt,
  amount: BigInt
) {
  const baseUrl = `https://app.across.to/api/`;
  const response = await fetch(
    `${baseUrl}/suggested-fees/?inputToken=${inputToken}&outputToken=${outputToken}&originalChainId=${originalChainId}&destinationChainId=${destinationChainId}&amount=${amount}`
  );
  return response;
}
