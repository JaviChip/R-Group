import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Reviews = () => {
  const handleButtonClick = () => {
    window.location.href = "/reviews";
  };

  return (
    <button
      className="group bg-gray-950 hover:bg-red-500 p-3 w-full inline-flex items-center space-x-1 rounded-xl"
      onClick={handleButtonClick}
    >
      <div className="text-white font-bold"> Reviews </div>
      <div className="flex flex-row pl-3">
        <StarIcon className="h-6 w-6 text-red-500 group-hover:text-gray-950" />
      </div>
    </button>
  );
};

export default Reviews;
