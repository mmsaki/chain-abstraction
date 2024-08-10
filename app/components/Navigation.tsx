import React from "react";
import Image from "next/image";
import MenuIcon from "../icons/MenuIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";

function Navigation() {
  return (
    <div className="flex-initial w-full h-16 justify-between items-center inline-flex">
      <div className="justify-start items-center flex p-5 gap-5">
        <a href="/" className="font-sans text-gray-800 hover:underline hover:cursor-pointer" aria-current="page">
          Siera
        </a>
      </div>
      <div className="w-full justify-end xs:hidden sm:flex" id="navbar-solid-bg">
        <MenuIcon />
        <a href="/deposit" className="flex justify-center items-center px-3 font-sans text-gray-800 hover:underline">
          Deposit
        </a>
        <a
          href="/transfer"
          className="flex justify-center items-center px-3 font-sans gap-1 text-gray-800 rounded hover:underline">
          Transfer
          <span>
            <ArrowUpIcon />
          </span>
        </a>
        <a
          href="/receive"
          className="flex justify-center items-center px-3 font-sans gap-1 text-gray-800 rounded hover:underline">
          Receive
          <span>
            <ArrowDownIcon />
          </span>
        </a>
        <a
          href="/create-account"
          className="flex justify-center items-center px-3 font-sans text-gray-800 rounded hover:underline">
          Create Account
        </a>
        <a
          href="/sign-in"
          className="flex justify-center items-center px-3 font-sans text-gray-800 rounded hover:underline">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default Navigation;
