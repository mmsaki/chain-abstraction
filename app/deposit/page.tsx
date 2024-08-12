"use client";

import React from "react";
import AddressComponent from "../components/AddressComponent";
import { QRCode } from "react-qrcode-logo";

function Deposit() {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div className="flex border rounded-lg p-6 flex-col gap-2 xs:w-[390px] sm:w-[400px] md:w-[450px]">
        <AddressComponent props={{ label: "Deposit", placeholder: "eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5" }} />
        <div className="flex justify-center">
          <QRCode
            value="https://siera.cc/create-account"
            logoImage="/Logo.svg"
            qrStyle="dots"
            removeQrCodeBehindLogo={true}
            logoPaddingStyle="circle"
            style={{ width: "100vw", height: "inherit" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Deposit;
