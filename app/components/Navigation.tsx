import React from "react";

function Navigation() {
  return (
    <div className="flex-initial w-full h-16 justify-between items-center inline-flex">
      <div className="justify-start items-center flex p-5 gap-5">
        <div className="text-emerald-900 hover:underline hover:cursor-pointer">Siera</div>
        <div className="text-neutral-800 hover:underline hover:cursor-pointer">Search</div>
      </div>
      <div className="justify-start items-center flex gap-5 p-5 text-neutral-800">
        <div className="hover:underline hover:cursor-pointer">Deposit</div>
        <div className="hover:underline hover:cursor-pointer">Receive</div>
        <div className="hover:underline hover:cursor-pointer">Transfer</div>
        <div className="hover:underline hover:cursor-pointer">Create Account</div>
        <div className="hover:underline hover:cursor-pointer">Sign In</div>
      </div>
    </div>
  );
}

export default Navigation;
