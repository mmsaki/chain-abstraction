export async function getMetalL2Addresses() {
  let baseURL = `https://explorer.metall2.com/api/v2/addresses`;
  let response = await fetch(baseURL);
  let data = await response.json();
  return {
    response: response,
    data: data,
  };
}
