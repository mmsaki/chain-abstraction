import { Address, createPublicClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";
import { getSuggestedFees } from "./suggestedFeesERC7683";
import { depositERC7683 } from "./depositERC7683";

export const account = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

test("ERC7683 test depoist", async () => {
  let tokenSymbol = "WETH";
  let timestamp = Math.floor(Date.now() / 1000);
  let originChainId = BigInt(1);
  let destinationChainId = BigInt(10);
  let amount = BigInt(1000000000000000000);
  let recipient = "0xa3ABf5d29393cE5930074dE6ccB91b9bB56D5923" as Address;
  let relayFeeTotal;

  let feesResponse = await getSuggestedFees(originChainId, destinationChainId, amount);
  let dataJSON = await feesResponse.json();
  relayFeeTotal = BigInt(dataJSON["totalRelayFee"]["total"]);

  if (!relayFeeTotal) throw new Error("Failed to get total relay fee");
  let response = await depositERC7683(
    timestamp,
    relayFeeTotal,
    tokenSymbol,
    destinationChainId,
    originChainId,
    amount,
    recipient
  );
  expect(response.ok).toBeTruthy();
  expect(response.status).toBe(200);
});
