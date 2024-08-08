// response:
// {
//   "fillStatus": "filled",
//   "fillTxHash": "text"
// }
export async function getDepositStatus(originChainId: BigInt, depositId: BigInt) {
  let baseURL = `https://app.across.to/api`;
  let route = `/deposit/status`;

  let response = await fetch(baseURL + route + `?originChainId=${originChainId}&depositId=${depositId}`);
  return response;
}
