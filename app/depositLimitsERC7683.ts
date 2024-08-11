import { Address } from "viem";

// response:
// {
//   "minDeposit": 7799819,
//   "maxDeposit": 22287428516241,
//   "maxDepositInstant": 201958902363,
//   "maxDepositShortDelay": 2045367713809,
//   "recommendedDepositInstant": 2045367713809
// }
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

  let data = await response.json();
  console.log(data);
  return { response: response, data: data };
}
