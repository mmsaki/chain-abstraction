"use client";

import React, { FormEvent } from "react";
import { createPasskey, loadPasskeysFromLocalStorage } from "../passkeys";
import { useRouter } from "next/navigation";
import { PasskeyArgType } from "@safe-global/protocol-kit";
import { usePrivy, Wallet } from "@privy-io/react-auth";

let RP_NAME: string;
try {
  RP_NAME = window.location.hostname;
} catch (error) {
  RP_NAME = "http://www.siera.cc";
  console.error(error);
}

function CreateAccount() {
  const router = useRouter();
  const { ready, authenticated, createWallet } = usePrivy();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString();
    const username = formData.get("username")?.toString();
    const checkbox = formData.get("smart-wallet-checkbox")?.toString();

    if (!email) return;
    if (!username) return;
    await createPasskey(RP_NAME, email, username)
      .then(async () => {
        // privy
        let wallet = await createWallet();
        let passkeys = loadPasskeysFromLocalStorage();
        localStorage.setItem("PrivyWallet", JSON.parse(wallet.address));
        console.log("🎉 Created Wallet", wallet.address);
        console.log("🎉 Created Passkeys", passkeys);
        return {
          passkeys: passkeys,
          wallet: wallet,
        };
      })
      .then((createData: { passkeys: PasskeyArgType[]; wallet: Wallet }) => {
        router.push("/sign-in");
      })
      .catch((error) => {
        alert(`Create Passkeys Failed: ${error}`);
      });
  }
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div className="flex border rounded-lg p-8">
        <form onSubmit={onSubmit} method="post" className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="focus:outline-none border border-gray-200 rounded-md p-2 mb-2 w-[300px]"
            type="email"
            name="email"
            placeholder="meek@skiff.com"
            required
          />
          <label htmlFor="username">Username</label>
          <input
            className="focus:outline-none border border-gray-200 rounded-md p-2 mb-2"
            type="username"
            name="username"
            placeholder="meek"
            required
          />
          <div className="flex flex-col pb-4">
            <div className="flex items-center gap-2">
              <input
                className="checked:bg-blue-500 "
                type="checkbox"
                name="smart-wallet-checkbox"
                id="smart-wallet-checkbox"
                defaultChecked
              />
              <label htmlFor="smart-wallet-checkbox">Create Smart Wallet</label>
            </div>
            <p className="text-gray-600 px-5">ERC4337 Safe Account</p>
          </div>
          <button
            disabled={!(ready && authenticated)}
            className="bg-gray-700 text-gray-75 py-2 rounded-lg hover:bg-gray-900"
            type="submit">
            Create Passkey
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
