import React, { useState } from "react";
import VideoIcon from "../icons/VideoIcon";
import MicIcon from "../icons/MicIcon";
import SearchIcon from "../icons/SearchIcon";

const Search = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <>
      <div className="">
        <form action="" method="post">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none select-none ">
              <SearchIcon />
            </div>
            <input
              onChange={(event) => setFormValues({ ...formValues, search: event.target.value })}
              type="search"
              id="search"
              name="search"
              className="block sm:p-4 sm:ps-10 sm:pe-16 xs:ps-10 xs:pe-16 xs:p-2 xs:w-[90vw] sm:w-[576px] md:w-[600px] lg:w-[600px] rounded-full border border-zinc-300 text-lgs text-gray-900 bg-gray-50 xs:focus:shadow-md sm:focus:shadow-xl focus:outline-none"
              placeholder=""
              value="eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5"
              required
            />
            <button type="submit" className="hidden">
              Search
            </button>
            <a className="absolute inset-y-0 end-2 pe-8 flex items-center hover:cursor-wait">
              <MicIcon />
            </a>
            <a className="absolute inset-y-0 end-0 pe-4 flex items-center hover:cursor-wait">
              <VideoIcon />
            </a>
          </div>
        </form>
      </div>
      <div className="flex gap-4 mt-6 text-gray-500">
        <button
          onClick={(event) => {
            setFormValues({ search: "eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5e" });
          }}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl xs:text-xs sm:text-sm"
          type="button">
          eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5
        </button>
        <button
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl xs:hidden sm:flex sm:text-sm"
          type="button">
          What is superchain?
        </button>
      </div>
    </>
  );
};

export default Search;
