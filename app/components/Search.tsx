import React from "react";
import Image from "next/image";

const Search = () => {
  return (
    <div className="">
      <form action="" method="post">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none select-none ">
            <Image src={"SearchIcon.svg"} alt="Search Icon" width={16} height={16} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 ps-10 pe-16s xs:w-[90vw] sm:w-[576px] md:w-[600px] lg:w-[600px] rounded-full border border-zinc-300 text-lgs text-gray-900 bg-gray-50 focus:shadow-xl"
            placeholder=""
            required
          />
          <button type="submit" className="hidden">
            Search
          </button>
          <a className="absolute inset-y-0 end-2 pe-8 flex items-center hover:cursor-pointer">
            <Image src={"MicIcon.svg"} alt="Search Icon" width={16} height={16} />
          </a>
          <a className="absolute inset-y-0 end-0 pe-4 flex items-center hover:cursor-pointer">
            <Image src={"VideoIcon.svg"} alt="Search Icon" width={16} height={16} />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Search;
