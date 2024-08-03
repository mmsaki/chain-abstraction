"use client";
import { createCred } from "./passkeys";
import { addressToEIP3770 } from "./utils";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Chain Abstraction</h1>
      <p>1. Create Credentials</p>
      {}
      <button className="border px-4 py-1" type="button" id="sign-in" onClick={createCred}>
        Sign Up
      </button>
      <p>{addressToEIP3770("ETH", "0x000b")}</p>
    </main>
  );
}
