export async function getMetalL2Addresses() {
  let baseURL = `https://explorer.metall2.com/api/v2/addresses`;
  let response = await fetch(baseURL);
  return {
    response: response,
    data: response.json(),
  };
}
