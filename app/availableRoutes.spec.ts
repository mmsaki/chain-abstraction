import { getAvailableRoutes } from "./availableRoutes";

test("can get all available routes", async () => {
  let response = await getAvailableRoutes();
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
