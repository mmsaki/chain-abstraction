import { Address } from "viem";

// response:
// {
//     "isValid": true,
//     "tx": {
//         "data": "0x7b939232000000000000000000000000f8594d7baf8e106ede93fda630c75b297ba9df1f000000000000000000000000f8594d7baf8e106ede93fda630c75b297ba9df1f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c097ce7bc90715b34b9f10000000000000000000000000000000000000000000c097ce7bc90715b34b42f9a575f392000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000066b54e130000000000000000000000000000000000000000000000000000000066b55e48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000000",
//         "isSameRecipient": true,
//         "isContractRecipient": false,
//         "outputERC20": false,
//         "onBehalfOf": false,
//         "to": "0x5c7BCd6E7De5423a257D81B442095A1a6ced35C5"
//     }
// }
export async function depositERC7683(
  timestamp: number,
  relayFeeTotal: BigInt,
  tokenSymbol: string,
  destinationChainId: BigInt,
  originChainId: BigInt,
  amount: BigInt,
  recipient: Address
) {
  let baseURL = `https://api.straddl.io`;
  let route = `/deposit`;

  let response = await fetch(
    baseURL +
      route +
      `?timestamp=${timestamp}&relayFeeTotal=${relayFeeTotal}&tokenSymbol=${tokenSymbol}&destinationChainId=${destinationChainId}&originChainId=${originChainId}&amount=${amount}&recipient=${recipient}`
  );
  let data = await response.json();
  console.log(data);
  return { response: response, data: data };
}
