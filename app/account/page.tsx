"use client";

import React from "react";
import Link from "next/link";
import LogOut from "../components/LogOut";
import CreateAccount from "../components/CreateAccount";
import SignIn from "../components/SignIn";

function Account() {
  return (
    <div className="flex flex-1  flex-col p-8 gap-2">
      <p className="sm:text-lg xs:text-md text-gray-500">Account Settings</p>
      <div className="flex flex-col">
        <Link href="" className="underline text-gray-800">
          Chains
        </Link>
        <Link href="" className="underline text-gray-800">
          Transfer Learning
        </Link>
        <Link href="" className="underline text-gray-800">
          Passkeys
        </Link>
        <Link href="" className="underline text-gray-800">
          Smart Wallet
        </Link>
        <Link href="" className="underline text-gray-800">
          Transactions
        </Link>
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
