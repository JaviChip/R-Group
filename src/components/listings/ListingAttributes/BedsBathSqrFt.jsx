import React from "react";

const BedBathSqrFt = ({ Beds, Bathrooms, SqrFt }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="rounded-2xl bg-blue-900 pt-3 pr-3 pl-3 mr-3  text-center shadow-md transform transition duration-500 ease-in-out hover:scale-105">
        <div className="flex justify-center text-center flex-row ">
          <p className=" font-medium text-yellow-500 text-xl"> Beds: </p>
          <p className="text-yellow-500 text-xl ml-1 mr-2"> {Beds} </p>
        </div>
      </div>

      <div className="rounded-2xl bg-blue-900 pt-3 pr-3 pl-3 mr-3 text-center shadow-md transform transition duration-500 ease-in-out hover:scale-105">
        <div className="flex justify-center text-center flex-row ">
          <p className=" font-medium text-yellow-500 text-xl"> Bathrooms: </p>
          <p className="text-yellow-500 text-xl ml-1 mr-2"> {Bathrooms} </p>
        </div>
      </div>

      <div className="rounded-2xl bg-blue-900 pt-3 pr-3 pl-3  text-center shadow-md transform transition duration-500 ease-in-out hover:scale-105">
        <div className="flex justify-center text-center flex-row ">
          <p className=" font-medium text-yellow-500 text-xl"> Square Ft: </p>
          <p className="text-yellow-500 text-xl ml-1 "> {SqrFt} </p>
        </div>
      </div>
    </div>
  );
};

export default BedBathSqrFt;
