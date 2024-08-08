import { doERC3770Search } from "./search";

test("doERC3770Search returns results", async () => {
  let query = "metall2:0xdAC17F958D2ee523a2206206994597C13D831ec7";
  let response = await doERC3770Search(query);
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
