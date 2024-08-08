import { Address } from "viem";
import { getDepositLimits } from "./depositLimitsERC7683";

test("ERC7683 can get deposit limit", async () => {
  let inputToken = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" as Address;
  let outputToken = "0x4200000000000000000000000000000000000006" as Address;
  let originChainId = BigInt(1);
  let destinationChainId = BigInt(10);

  let response = await getDepositLimits(inputToken, outputToken, originChainId, destinationChainId);
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
