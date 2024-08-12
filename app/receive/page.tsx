"use client";

import React from "react";
import AddressForm from "../components/AddressForm";
import Balance from "../components/Balance";

function Receive() {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div className="flex flex-col gap-4 xs:w-[390px] sm:w-[400px] md:w-[450px] lg:w-[600px]">
        <Balance />
        <AddressForm />
      </div>
    </div>
  );
}

export default Receive;
