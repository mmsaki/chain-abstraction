import { getAvailableRoutes } from "./availableRoutes";

test("ERC7683: can get all available routes", async () => {
  let response = await getAvailableRoutes();
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
