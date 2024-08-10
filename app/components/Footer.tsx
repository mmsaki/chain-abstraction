import React from "react";

function Footer() {
  return (
    <div className="flex-initial h-16 w-full justify-between items-center gap-20 inline-flex text-zinc-600 p-5">
      <div className="hover:underline hover:cursor-pointer">About</div>
      <div className="hover:underline hover:cursor-pointer">How Siera works</div>
      <div className="hover:underline hover:cursor-pointer">Feedback</div>
    </div>
  );
}

export default Footer;
