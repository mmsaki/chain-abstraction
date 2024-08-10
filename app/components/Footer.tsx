"use client";

import { usePathname } from "next/navigation";
import React from "react";

function Footer() {
  const pathname = usePathname();
  return (
    <div className="flex-initial h-16 w-full justify-between items-center gap-20 inline-flex text-zinc-600 p-5">
      <a
        href="/about"
        className={`link ${pathname === "/about" ? "active text-gray-800 font-medium underline px-3" : "px-3"}`}>
        About
      </a>
      <a
        href="/feedback"
        className={`link ${pathname === "/feedback" ? "active text-gray-800 font-medium underline px-3" : "px-3"}`}>
        Feedback
      </a>
    </div>
  );
}

export default Footer;
