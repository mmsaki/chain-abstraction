import { Address } from "viem";
import { getSuggestedFees } from "./suggestedFees";

test("ERC7683: can get suggested fees", async () => {
  let inputToken = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" as Address;
  let outputToken = "0x4200000000000000000000000000000000000006" as Address;
  let originalChainId = BigInt(1);
  let destinationChainId = BigInt(10);
  let amount = BigInt(1000000000000000);

  const response = await getSuggestedFees(inputToken, outputToken, originalChainId, destinationChainId, amount);
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
