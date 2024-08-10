import React from "react";
import Image from "next/image";
import MenuIcon from "../icons/MenuIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";

function Navigation() {
  return (
    <div className="flex-initial w-full h-16 justify-between items-center inline-flex">
      <div className="justify-start items-center flex p-5 gap-5 font-medium">
        <a className="text-gray-900 hover:underline hover:cursor-pointer" aria-current="page">
          Siera
        </a>
      </div>
      <div className="w-full justify-end xm:hidden sm:flex" id="navbar-solid-bg">
        <MenuIcon />
        <a href="#" className="flex justify-center items-center px-3 text-gray-900 hover:underline">
          Deposit
        </a>
        <a href="#" className="flex justify-center items-center px-3 gap-1 text-gray-900 rounded hover:underline">
          Receive
          <span>
            <ArrowDownIcon />
          </span>
        </a>
        <a href="#" className="flex justify-center items-center px-3 gap-1 text-gray-900 rounded hover:underline">
          Transfer
          <span>
            <ArrowUpIcon />
          </span>
        </a>

        <a href="#" className="flex justify-center items-center px-3 text-gray-900 rounded hover:underline">
          Create Account
        </a>
        <a href="#" className="flex justify-center items-center px-3 text-gray-900 rounded hover:underline">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default Navigation;
