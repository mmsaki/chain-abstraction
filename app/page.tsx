"use client";

import { addressToEIP3770, getChainList } from "./erc3770";
import { getTokenData, getTokenList } from "./tokelist";
import { getSearch } from "./utils";

export default function Home() {
  let owner = "ethereum-optimism";
  let repo = "ethereum-optimism.github.io";
  let path = "data";

  async function getTokensNames() {
    const tokenList = await getTokenList(owner, repo, path);
    return tokenList;
  }

  async function getTokenJson(tokenName: string) {
    const list = await getTokensNames();
    if (!list.includes(tokenName)) throw new Error(`${tokenName} not found in OP Chain list`);

    const data = await getTokenData(owner, repo, path + `/${tokenName}/data.json`);
  }

  const eip3770Address = addressToEIP3770("eth", "0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5");

  const searchResults = getSearch("");

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Chain Abstraction</h1>
      <p>Using chain-specific addresses with a human-readable chain identifier</p>
      <br />
      {/* <button className="border px-4 py-1" type="button" id="sign-in" onClick={createCred}>
        Sign Up
      </button> */}
      <form action={() => {}} method="post">
        <label htmlFor="eip3770" className="block">
          <span className="block peer-invalid:text-red-600">EIP3770 Address</span>
          <div className="border shadow-sm border-gray-300 rounded-md w-max  peer-invalid:border-red-600">
            <select className="font-light font-mono focus:outline-none p-1 text-sm" name="chainName" id="shortName">
              <option value="">Chain</option>
            </select>
            <span>:</span>
            <input
              className="peer focus-within:shadow-lg rounded-md focus:outline-none p-1 font-mono w-[320px] focus-within:border-blue-600 valid:text-green-600 invalid:text-red-600 focus:invalid:border-red-500"
              type="text"
              placeholder="0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5"
              pattern="0x(?=.*[A-Fa-f])(?=.*\d).{40}"
            />
          </div>
        </label>
      </form>
    </main>
  );
}
