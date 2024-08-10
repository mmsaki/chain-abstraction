import React from "react";
import QRCodeIcon from "../icons/QRCodeIcon";
import CopyIcon from "../icons/CopyIcon";

function AddressComponent() {
  return (
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
  );
}

export default AddressComponent;
