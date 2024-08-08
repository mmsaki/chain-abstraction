import { getDepositStatus } from "./depositStatus";

test("can get status of deposit", async () => {
  let originChainId = BigInt(137);
  let depositId = BigInt(1349975);

  let response = await getDepositStatus(originChainId, depositId);
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
