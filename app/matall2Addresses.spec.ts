import { getMetalL2Addresses } from "./matall2Addresses";

test("Superchain: can get metalL2 matall2Addresses", async () => {
  let { response } = await getMetalL2Addresses();
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
