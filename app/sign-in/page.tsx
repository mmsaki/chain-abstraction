"use client";
import React from "react";
import AccountIcon from "../icons/AccounIcon";
import { useRouter } from "next/navigation";
import Providers from "../Providers";

function SignIn() {
  const router = useRouter();

  async function onSubmit(event: FormData) {
    const name = event.get("username");
    console.log("Username:", name);

    const options: PublicKeyCredentialRequestOptions = {
      timeout: 60000,
      challenge: crypto.getRandomValues(new Uint8Array(32)),
      rpId: window.location.hostname,
      userVerification: "preferred",
    } as PublicKeyCredentialRequestOptions;

    await navigator.credentials
      .get({ publicKey: options })
      .then((credentials) => {
        console.log("Credentials:", credentials);
        try {
          localStorage.setItem("SieraLoggedUser", "true");
        } catch (error) {
          console.error("Failed to set log in status", error);
        }
        router.push("/transfer");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <Providers>
      <div className="flex flex-1 justify-center items-center flex-col">
        <div className="flex border rounded-lg p-8">
          <form action={onSubmit} method="post" className="flex flex-col gap-2">
            <label htmlFor="username">Name</label>
            <input
              className="focus:outline-none border border-gray-200 rounded-md p-2 mb-2 w-[300px]"
              type="text"
              name="username"
              placeholder="username"
            />
            <button
              className="flex items-center justify-center bg-gray-700 text-gray-75 py-2 rounded-lg hover:bg-gray-900"
              type="submit">
              Sign In
              <span className="px-2">
                <AccountIcon />
              </span>
            </button>
            <a className="underline" href="">
              Forget Password?
            </a>
          </form>
        </div>
      </div>
    </Providers>
  );
}

export default SignIn;
