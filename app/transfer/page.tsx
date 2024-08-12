"use client";

import React from "react";
import TranferForm from "../components/TranferForm";
import Balance from "../components/Balance";

function Transfer() {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div className="flex flex-col gap-4 xs:w-[390px] sm:w-[400px] md:w-[450px] lg:w-[600px]">
        <Balance />
        <TranferForm />
      </div>
    </div>
  );
}

export default Transfer;
