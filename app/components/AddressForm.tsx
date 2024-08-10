import React from "react";
import AddressComponent from "./AddressComponent";

function AddressForm() {
  return (
    <div className="flex border rounded-lg p-6 flex-col gap-2">
      <form action="" method="post" className="flex flex-col gap-2">
        <AddressComponent props={{ label: "To", placeholder: "eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5" }} />
        <button className="bg-gray-700 text-gray-75 py-2 rounded-lg hover:bg-gray-900 hover:text-gray-50" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
