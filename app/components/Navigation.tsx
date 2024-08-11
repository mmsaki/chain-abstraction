"use client";

import React from "react";
import MenuIcon from "../icons/MenuIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPasskeyFromRawId, loadPasskeysFromLocalStorage } from "../passkeys";

function Navigation() {
  const pathname = usePathname();

  const passkeys = loadPasskeysFromLocalStorage();
  const rawId = getPasskeyFromRawId(passkeys[0].rawId);
  const isLoggedIn = localStorage.getItem("SieraLoggedUser");

  return (
    <div className="flex-initial w-full h-16 justify-between items-center inline-flex">
      <div className="justify-start items-center flex p-5 gap-5 font-sans text-gray-800 xs:hidden sm:flex xs:text-xs sm:text-sm">
        <Link
          href="/"
          className={`link ${pathname === "/" ? "active text-gray-800 font-medium underline" : ""}`}
          aria-current="page">
          Siera
        </Link>
      </div>
      <div
        className="w-full justify-end xs:hidden sm:flex  font-sans text-gray-800 xs:text-xs sm:text-sm"
        id="navbar-solid-bg">
        <MenuIcon />
        <Link
          href="/deposit"
          className={`link ${pathname === "/deposit" ? "active text-gray-800 font-medium underline px-3" : "px-3"}`}>
          Deposit
        </Link>
        <Link
          href="/transfer"
          className={`link ${
            pathname === "/transfer"
              ? "active text-gray-800 font-medium underline flex justify-center items-center px-3 gap-1"
              : "flex justify-center items-center px-3 gap-1"
          }`}>
          Transfer
          <span>
            <ArrowUpIcon />
          </span>
        </Link>
        <Link
          href="/receive"
          className={`link ${
            pathname === "/receive"
              ? "active text-gray-800 font-medium underline flex justify-center items-center px-3 gap-1"
              : "flex justify-center items-center px-3 gap-1"
          }`}>
          Receive
          <span>
            <ArrowDownIcon />
          </span>
        </Link>
        {!passkeys ? (
          <Link
            href="/create-account"
            className={`link ${
              pathname === "/create-account" ? "active text-gray-800 font-medium underline px-3" : "px-3"
            }`}>
            Create Account
          </Link>
        ) : (
          <Link
            href="/account"
            className={`link ${pathname === "/account" ? "active text-gray-800 font-medium underline px-3" : "px-3"}`}>
            Account
          </Link>
        )}
        {!isLoggedIn ? (
          <Link
            href="/sign-in"
            className={`link ${pathname === "/sign-in" ? "active text-gray-800 font-medium underline px-3" : "px-3"}`}>
            Sign In
          </Link>
        ) : (
          <button
            onClick={() => {
              localStorage.SieraLoggedUser = false;
            }}
            className={"text-gray-800 px-3 hover:underline"}>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Navigation;
