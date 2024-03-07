import React from "react";

const ResultsNum = ({ Number }) => {
  return (
    <div className="flex flex-row items-center px-4 py-2 space-x-2 text-white bg-blue-600 border border-transparent hover:bg-blue-700 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-200 active:bg-blue-800 rounded-md font-semibold">
      <div className="">Results:</div>

      <span className=" "> {Number} </span>
    </div>
  );
};

export default ResultsNum;
