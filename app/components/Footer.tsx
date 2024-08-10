import React from "react";

function Footer() {
  return (
    <div className="flex-initial h-16 w-full justify-between items-center gap-20 inline-flex text-zinc-600 p-5">
      <a href="/about" className="hover:underline">
        About
      </a>
      <a href="" className="hover:underline hover:cursor-not-allowed xs:opacity-0 sm:opacity-100">
        How Siera works
      </a>
      <a href="/feedback" className="hover:underline">
        Feedback
      </a>
    </div>
  );
}

export default Footer;
