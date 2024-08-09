import { Address } from "viem";
import { getSuggestedFees } from "./suggestedFeesERC7683";

test("ERC7683: can get suggested fees", async () => {
  let originChainId = BigInt(1);
  let destinationChainId = BigInt(10);
  let amount = BigInt(1000000000000000);

  const response = await getSuggestedFees(originChainId, destinationChainId, amount);
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
