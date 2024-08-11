"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function LogOut() {
  const router = useRouter();
  return (
    <Link
      onClick={() => {
        try {
          localStorage.setItem("SieraLoggedUser", "false");
        } catch (error) {
          console.error(error);
        }
        router.push("/");
      }}
      href="/"
      className={"text-gray-800 underline"}>
      Log Out
    </Link>
  );
}

export default LogOut;
