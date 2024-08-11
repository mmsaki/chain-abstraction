"use client";

import { getTokenData, getTokenList } from "./tokelist";
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
    <div className="flex flex-1 justify-center items-center flex-col">
      <div className="flex relative sm:mb-12 xs:mb-8">
        {/* logo */}

        <p className="xs:text-6xl sm:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500">
          Siera
        </p>
        <Image
          className="absolute sm:left-56 sm:bottom-12 xs:left-36 xs:bottom-6 sm:w-14 sm:h-14 xs:w-12 xs:h-12 select-none "
          src="/Web3Logo.svg"
          width={64}
          height={64}
          alt="LOGO"
        />
      </div>
      {/* search input */}
      <Search />
    </div>
  );
}
