"use client";

import { getTokenData, getTokenList } from "./tokelist";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import Search from "./components/Search";

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

  return (
    <div className="flex flex-1 content-center justify-center">
      <div className="flex justify-center items-center flex-col gap-8">
        {/* logo */}
        <Image src="LOGO_Full.svg" width={300} height={300} alt="LOGO" />
        {/* search input */}
        <Search />
      </div>
    </div>
  );
}
