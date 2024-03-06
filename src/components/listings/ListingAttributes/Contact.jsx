import React from "react";

import { PhoneIncomingIcon } from "@heroicons/react/solid";

const ContactSellerButton = () => {
  return (
    <button className="flex flex-none bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-xl">
      <div className="flex flex-row flex-nowrap items-center">
        <PhoneIncomingIcon className="h-8 px-1" />
        <div className=" flex flex-nowrap ml-2 pr-2">Contact</div>
      </div>
    </button>
  );
};

export default ContactSellerButton;
