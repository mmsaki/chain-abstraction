"use client";

import React, { FormEvent } from "react";
import { Safe4337Pack } from "@safe-global/relay-kit";
import { createPasskey } from "../passkeys";
import { useRouter } from "next/navigation";

const RP_NAME = "Siera Smart Account";

function CreateAccount() {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString();
    const username = formData.get("username")?.toString();
    if (!email) return;
    if (!username) return;
    await createPasskey(RP_NAME, email, username)
      .then(() => {
        router.push("/sign-in");
      })
      .catch((error) => {
        alert(error);
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
            // onClick={() => router.push("/sign-in")}
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
