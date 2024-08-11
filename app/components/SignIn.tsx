import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SignIn() {
  const pathname = usePathname();
  return (
    <Link href="/sign-in" className={"text-gray-800 underline"}>
      Sign In
    </Link>
  );
}

export default SignIn;
