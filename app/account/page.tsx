"use client";

import React, { useState } from "react";
import Link from "next/link";
import LogOut from "../components/LogOut";
import CreateAccount from "../components/CreateAccount";
import SignIn from "../components/SignIn";
import { usePrivy } from "@privy-io/react-auth";
import { getAvailableRoutes } from "../availableRoutesERC7683";
import { depositERC7683 } from "../depositERC7683";
import { getDepositLimits } from "../depositLimitsERC7683";
import { Address } from "viem";
import { getSuggestedFees } from "../suggestedFeesERC7683";
import JsonViewer from "../components/JsonViewer";

function Account() {
  const { login } = usePrivy();
  const [data, setData] = useState({});

  return (
    <div className="flex flex-1  flex-col p-8 gap-2">
      <p className="sm:text-lg xs:text-md text-gray-500">Account Settings</p>
      <div className="flex flex-col">
        <a className="underline" onClick={() => login({ loginMethods: ["farcaster"] })}>
          Log in with Farcaster?
        </a>
        <a className="underline" onClick={() => login({ loginMethods: ["wallet"] })}>
          Smart Wallet
        </a>
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
        <CreateAccount />
        <SignIn />
        <Link href="" className="underline text-gray-800">
          Help
        </Link>
        <LogOut />
        {data && (
          <div className="w-[95vw]">
            <JsonViewer results={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
