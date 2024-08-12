import React from "react";
import QRCodeIcon from "../icons/QRCodeIcon";
import CopyIcon from "../icons/CopyIcon";

function AddressComponent({ props }: any) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.label}>{props.label}</label>
      <div className="relative flex flex-1 items-center gap-2 xs:text-[11px] md:text-[11px] lg:text-sm">
        <input
          className="flex-1 focus:outline-none border border-gray-200 rounded-md p-2 mb-2"
          type="text"
          id={props.label}
          name={props.label}
          placeholder={props.placeholder}
        />
        <a
          href="/deposit"
          className="absolute inset-y-0 end-12 mb-2 pe-0 flex items-center hover:cursor-pointer xs:hidden md:flex">
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
