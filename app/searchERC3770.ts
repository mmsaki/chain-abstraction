import { parseERC3770String, toValidERC3770String } from "./erc3770";
import { Address } from "viem";

import { parseQuery } from "./utils";

export async function callERC3770Search(params: string) {
  let { match, operator, param } = parseQuery(params);
  if (!match || !operator || !param) throw new Error("Failed to parse query");

  // 1. check match is and a valid ERC3770 string
  // @ts-ignore
  let erc3770String = await toValidERC3770String(operator, param);
  if (match !== erc3770String) alert(`$Error: match ${match} does not match erc3770String ${erc3770String}`);

  // 2. parse our match to ERC3770 shortName and address
  let { shortName, address } = await parseERC3770String(match);
  if (operator !== shortName) alert(`$Error: Operator ${operator} does not match shortName ${shortName}`);
  if (param !== address) alert(`$Error: Param ${param} does not match address ${address}`);
  let response;
  if (shortName === "metall2") {
    response = await fetch(`https://explorer.metall2.com/api/v2/addresses/${address}`);
  } else if (shortName === "fraxtal-testnet") {
    response = await fetch(
      `https://api-holesky.fraxscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=latest&page=1&offset=2&sort=asc&apikey=${process.env.FraxcanApi}`
    );
  }
  if (!response) throw new Error("Sorry, EIP-3091: Block Explorer API Routes has not been implimented");

  let data = await response.json();
  return {
    response: response,
    data: data,
  };
}
