import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function CreateAccount() {
  const pathname = usePathname();
  return (
    <Link
      href="/create-account"
      className={`link ${
        pathname === "/create-account" ? "active text-gray-800 font-medium underline" : "text-gray-800 underline"
      }`}>
      Create Account
    </Link>
  );
}

export default CreateAccount;
