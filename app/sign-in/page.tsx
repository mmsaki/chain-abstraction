import React from "react";
import AccountIcon from "../icons/AccounIcon";

function SignIn() {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div className="flex border rounded-lg p-8">
        <form action="" method="post" className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            className="focus:outline-none border border-gray-200 rounded-md p-2 mb-2 w-[300px]"
            type="username"
            placeholder="meek"
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
  );
}

export default SignIn;
