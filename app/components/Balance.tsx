"use client";

import React from "react";
import RefreshIcon from "../icons/RefreshIcon";
import MoreVerticalIcon from "../icons/MoreVerticalIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Balance() {
  const pathname = usePathname();
  return (
    <div className="flex border rounded-lg p-6 flex-col gap-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">BALANCE</p>
          <p className="text-xl font-medium">$0</p>
        </div>
        <div className="flex gap-2">
          <button>
            <RefreshIcon />
          </button>
          <button>
            <MoreVerticalIcon />
          </button>
        </div>
      </div>
      <div className="flex gap-2 text-gray-600">
        <Link
          href="/deposit"
          className={`link ${pathname === "/deposit" ? "active text-gray-800 font-medium underline px-3" : "px-3"}`}>
          Deposit
        </Link>
        <Link
          href="/transfer"
          className={`link ${
            pathname === "/transfer"
              ? "active text-gray-800 font-medium underline flex justify-center items-center px-3 gap-1"
              : "flex justify-center items-center px-3 gap-1"
          }`}>
          Transfer
          <span>
            <ArrowUpIcon />
          </span>
        </Link>
        <Link
          href="/receive"
          className={`link ${
            pathname === "/receive"
              ? "active text-gray-800 font-medium underline flex justify-center items-center px-3 gap-1"
              : "flex justify-center items-center px-3 gap-1"
          }`}>
          Receive
          <span>
            <ArrowDownIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Balance;
