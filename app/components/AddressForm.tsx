import React from "react";
import AddressComponent from "./AddressComponent";

function AddressForm() {
  return (
    <div className="flex border rounded-lg p-6 flex-col gap-2">
      <form action="" method="post" className="flex flex-col gap-2">
        <AddressComponent />
        <button className="bg-gray-700 text-gray-75 py-2 rounded-lg hover:bg-gray-900 hover:text-gray-50" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
