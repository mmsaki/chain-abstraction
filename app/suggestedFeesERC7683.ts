// ressponse:
// {
//   "totalRelayFee": {
//     "pct": "376607094864283",
//     "total": "376607094864283"
//   },
//   "relayerCapitalFee": {
//     "pct": "100200000000000",
//     "total": "100200000000000"
//   },
//   "relayerGasFee": {
//     "pct": "276407094864283",
//     "total": "276407094864283"
//   },
//   "lpFee": {
//     "pct": "4552495218411721",
//     "total": "4552495218411721"
//   },
//   "timestamp": "1708047000",
//   "isAmountTooLow": false,
//   "quoteBlock": "19237525",
//   "spokePoolAddress": "0xe35e9842fceaCA96570B734083f4a58e8F7C5f2A",
//   "exclusiveRelayer": "0x428AB2BA90Eba0a4Be7aF34C9Ac451ab061AC010",
//   "exclusivityDeadline": "10"
// }

export async function getSuggestedFees(originChainId: BigInt, destinationChainId: BigInt, amount: BigInt) {
  let baseUrl = `https://api.straddl.io`;
  let route = `/suggested-fees`;
  const response = await fetch(
    baseUrl +
      route +
      `?tokenSymbol=WETH&originChainId=${originChainId}&destinationChainId=${destinationChainId}&amount=${amount}`
  );
  return response;
}
