import React, { useState } from "react";
import VideoIcon from "../icons/VideoIcon";
import MicIcon from "../icons/MicIcon";
import SearchIcon from "../icons/SearchIcon";
import { callERC3770Search } from "../searchERC3770";
import { getMetalL2Addresses } from "../matall2Addresses";
import JsonViewer from "./JsonViewer";
import Link from "next/link";
import { Address } from "viem";
import { getAvailableRoutes } from "../availableRoutesERC7683";
import { getDepositLimits } from "../depositLimitsERC7683";
import { getSuggestedFees } from "../suggestedFeesERC7683";
import { depositERC7683 } from "../depositERC7683";
import { getTokenData, getTokenList } from "../tokelist";
import { getChainList } from "../erc3770";

const Search = () => {
  const [formValues, setFormValues] = useState({});
  const [data, setData] = useState(null);

  return (
    <>
      <form action="" method="post">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none select-none ">
            <SearchIcon />
          </div>
          <input
            onChange={(event) => setFormValues({ ...formValues, search: event.target.value })}
            type="search"
            id="search"
            name="search"
            className="block sm:p-4 sm:ps-10 sm:pe-16 xs:ps-10 xs:pe-16 xs:p-2 xs:w-[90vw] sm:w-[576px] md:w-[600px] lg:w-[600px] rounded-full border border-zinc-300 text-lgs text-gray-900 bg-gray-50 xs:focus:shadow-md sm:focus:shadow-xl focus:outline-none"
            placeholder=""
            required
          />
          <button type="submit" className="hidden">
            Search
          </button>
          <a className="absolute inset-y-0 end-2 pe-8 flex items-center hover:cursor-wait">
            <MicIcon />
          </a>
          <a className="absolute inset-y-0 end-0 pe-4 flex items-center hover:cursor-wait">
            <VideoIcon />
          </a>
        </div>
      </form>
      <div className="flex gap-4 mt-6 text-gray-500">
        <button
          onClick={async (event) => {
            let { response, data } = await callERC3770Search("metall2:0x1AB4973a48dc892Cd9971ECE8e01DcC7688f8F23");
            console.log(data);
            setData(data);
          }}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl xs:text-xs sm:text-sm"
          type="button">
          metall2:0x1AB4973a48dc892Cd9971ECE8e01DcC7688f8F23
        </button>
        <button
          onClick={async (event) => {
            let { response, data } = await getMetalL2Addresses();
            console.log(data);
            setData(data);
          }}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl xs:hidden sm:flex sm:text-sm"
          type="button">
          Search Token addresses on MetalL2?
        </button>
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-3 p-2 xs:text-xs sm:text-sm">
        <Link
          href=""
          className="underline text-gray-800"
          onClick={async (event) => {
            let { response, data } = await getAvailableRoutes();
            console.log(data);
            setData(data);
          }}>
          Get Available L2 Routes
        </Link>
        <Link
          href=""
          className="underline text-gray-800"
          onClick={async (event) => {
            let inputToken = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" as Address;
            let outputToken = "0x4200000000000000000000000000000000000006" as Address;
            let originChainId = BigInt(1);
            let destinationChainId = BigInt(10);
            let { response, data } = await getDepositLimits(inputToken, outputToken, originChainId, destinationChainId);
            console.log(data);
            setData(data);
          }}>
          Get Deposit Limits for ERC7683
        </Link>
        <Link
          href=""
          className="underline text-gray-800"
          onClick={async (event) => {
            let tokenSymbol = "WETH";
            let timestamp = Math.floor(Date.now() / 1000);
            let originChainId = BigInt(1);
            let destinationChainId = BigInt(10);
            let amount = BigInt(1000000000000000000);
            let recipient = "0xa3ABf5d29393cE5930074dE6ccB91b9bB56D5923" as Address;
            let relayFeeTotal;

            let { data: feeData } = await getSuggestedFees(originChainId, destinationChainId, amount);
            let dataJSON = feeData;
            relayFeeTotal = BigInt(dataJSON["totalRelayFee"]["total"]);

            if (!relayFeeTotal) throw new Error("Failed to get total relay fee");
            let { response, data } = await depositERC7683(
              timestamp,
              relayFeeTotal,
              tokenSymbol,
              destinationChainId,
              originChainId,
              amount,
              recipient
            );
            console.log(data);
            setData(data);
          }}>
          Sample Deposit with ERC7683
        </Link>
        <Link
          href=""
          className="underline text-gray-800"
          onClick={async (event) => {
            let owner = "ethereum-optimism";
            let repo = "ethereum-optimism.github.io";
            let path = "data";
            let data = await getTokenList(owner, repo, path);
            console.log(data);
            setData(JSON.parse(data));
          }}>
          Get OP Token List
        </Link>
        <Link
          href=""
          className="underline text-gray-800"
          onClick={async (event) => {
            let data = await getChainList();
            console.log(data);
            setData(data);
          }}>
          Get All Chains
        </Link>
      </div>
      <div className="w-[95vw]">
        <JsonViewer results={data} />
      </div>
    </>
  );
};

export default Search;
