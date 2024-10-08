"use client";

import React, { useState } from "react";
import Link from "next/link";
import LogOut from "../components/LogOut";
import CreateAccount from "../components/CreateAccount";
import SignIn from "../components/SignIn";
import { usePrivy } from "@privy-io/react-auth";

function Account() {
  const { login } = usePrivy();

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
        <CreateAccount />
        <SignIn />
        <Link href="" className="underline text-gray-800">
          Help
        </Link>
        <LogOut />
      </div>
    </div>
  );
}

export default Account;
