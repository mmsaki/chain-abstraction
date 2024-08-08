// reponse:
// [
//   {
//     originChainId: 1,
//     destinationChainId: 10,
//     originToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
//     destinationToken: "0x4200000000000000000000000000000000000006",
//     originTokenSymbol: "WETH",
//     destinationTokenSymbol: "WETH",
//   },
// ];

export async function getAvailableRoutes() {
  let baseURL = `https://app.across.to/api`;
  let route = `/available-routes`;

  let response = await fetch(baseURL + route);
  return response;
}
