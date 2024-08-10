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
    <div className="flex flex-1 justify-center items-center flex-col gap-16">
      <div className="flex relative">
        {/* logo */}
        <p className="drop-shadow-lg text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500">
          Siera
        </p>
        <Image
          className="absolute left-56 bottom-12 select-none"
          src="/Web3Logo.svg"
          width={72}
          height={72}
          alt="LOGO"
        />
      </div>
      {/* search input */}
      <Search />
    </div>
  );
}
