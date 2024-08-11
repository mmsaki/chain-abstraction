import { getAvailableRoutes } from "./availableRoutesERC7683";

test("ERC7683: can get all available routes", async () => {
  let { response } = await getAvailableRoutes();
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
