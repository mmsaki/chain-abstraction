import React from "react";
import RefreshIcon from "../icons/RefreshIcon";
import MoreVerticalIcon from "../icons/MoreVerticalIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";

function Balance() {
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
        <a href="/deposit" className="flex justify-center items-center font-sans hover:underline hover:text-gray-900">
          Deposit
        </a>
        <a
          href="/transfer"
          className="flex justify-center items-center font-sans gap-1 rounded underline hover:text-gray-900">
          Transfer
          <span>
            <ArrowUpIcon />
          </span>
        </a>
        <a
          href="/receive"
          className="flex justify-center items-center font-sans gap-1 rounded hover:underline hover:text-gray-900">
          Receive
          <span>
            <ArrowDownIcon />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Balance;
