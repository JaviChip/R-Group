import React from "react";

const Miles = ({ Miles }) => {
  return (
    <div className="rounded-2xl bg-blue-900 pt-3 pr-3 pl-3  text-center shadow-md transform transition duration-500 ease-in-out hover:scale-105">
      <div className="flex justify-center text-center flex-row ">
        <p className=" font-medium text-yellow-500 text-xl">
          {" "}
          Miles From UCR :{" "}
        </p>
        <p className="text-yellow-500 text-xl ml-1"> {Miles} </p>
      </div>
    </div>
  );
};

export default Miles;
