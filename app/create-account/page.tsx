import React from "react";

function CreateAccount() {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <div className="flex border rounded-lg p-8">
        <form action="" method="post" className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="focus:outline-none border border-gray-200 rounded-md p-2 mb-2 w-[300px]"
            type="email"
            placeholder="meek@skiff.com"
          />
          <label htmlFor="username">Username</label>
          <input
            className="focus:outline-none border border-gray-200 rounded-md p-2 mb-2"
            type="username"
            placeholder="meek"
          />
          <div className="flex flex-col pb-4">
            <div className="flex items-center gap-2">
              <input
                className="checked:bg-blue-500 "
                type="checkbox"
                name="smart-wallet-checkbox"
                id="smart-wallet-checkbox"
              />
              <label htmlFor="smart-wallet-checkbox">Create Wallet</label>
            </div>
            <p className="text-gray-600 px-5">Safe Multi-sig Account</p>
          </div>
          <button className="bg-gray-700 text-gray-75 py-2 rounded-lg hover:bg-gray-900" type="submit">
            Create Passkey
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
