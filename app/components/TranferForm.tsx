import React from "react";
import Balance from "./Balance";
import CopyIcon from "../icons/CopyIcon";
import QRCodeIcon from "../icons/QRCodeIcon";
import AddressComponent from "./AddressComponent";

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
        <AddressComponent props={{ label: "To", placeholder: "eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5" }} />
        <button className="bg-gray-700 text-gray-75 py-2 rounded-lg hover:bg-gray-900 hover:text-gray-50" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default TranferForm;
