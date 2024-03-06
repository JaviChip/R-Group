import React from "react";

const Address = ({ Address }) => {
  return (
    <div className="rounded-2xl bg-gray-100 pt-3 pr-3 pl-3  text-center shadow-md transform transition duration-500 ease-in-out hover:scale-105">
      <div className="flex justify-center text-center flex-row ">
        <p className=" font-medium text-black text-xl pr-1"> Address: </p>
        <p className="text-blue-900 text-xl ml-1"> {Address} </p>
      </div>
    </div>
  );
};

export default Address;
