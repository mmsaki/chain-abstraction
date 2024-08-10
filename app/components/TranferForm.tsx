import React from "react";
import Balance from "./Balance";
import CopyIcon from "../icons/CopyIcon";
import QRCodeIcon from "../icons/QRCodeIcon";

function TranferForm() {
  return (
    <div className="flex border rounded-lg p-6 flex-col gap-2">
      <form action="" method="post" className="flex flex-col gap-2">
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col">
            <label htmlFor="asset">Asset</label>
            <select
              name="asset"
              id="asset"
              className="focus:outline-none border bg-white border-gray-200 rounded-md p-2 mb-2">
              <option value="USDC">USDC</option>
            </select>
          </div>
          <div className="flex flex-1 flex-col">
            <label htmlFor="amount">Amount</label>
            <input
              className="focus:outline-none border border-gray-200 rounded-md p-2 mb-2 flex-1"
              type="number"
              name="amount"
              id="amount"
              placeholder="0"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="to-address">To</label>
          <div className="relative flex flex-1 items-center gap-2">
            <input
              className="flex-1 focus:outline-none border border-gray-200 rounded-md p-2 mb-2"
              type="text"
              id="to-address"
              name="to-address"
              placeholder="eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5"
            />
            <a href="/deposit" className="absolute inset-y-0 end-11 mb-2 pe-0 flex items-center hover:cursor-pointer">
              <QRCodeIcon />
            </a>
            <div className="flex-none hover:cursor-pointer">
              <CopyIcon />
            </div>
          </div>
        </div>
        <button className="bg-gray-700 text-gray-75 py-2 rounded-lg hover:bg-gray-900 hover:text-gray-50" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default TranferForm;
