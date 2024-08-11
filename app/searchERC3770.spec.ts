import { callERC3770Search } from "./searchERC3770";

test("ERC3770 chain-address search returns results", async () => {
  let query = "metall2:0x1AB4973a48dc892Cd9971ECE8e01DcC7688f8F23";
  let { response } = await callERC3770Search(query);
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
