"use client";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const Reviews = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-black p-3 inline-flex items-center space-x-1">
      <span className="text-white font-bold">Reviews</span>
      <button onClick={toggleFavorite} className="focus:outline-none">
        <StarIcon
          className={`h-6 w-6 ${
            isFavorited ? "text-yellow-500" : "text-red-500"
          }`}
        />
      </button>
      <button onClick={toggleFavorite} className="focus:outline-none">
        <StarIcon
          className={`h-6 w-6 ${
            isFavorited ? "text-yellow-500" : "text-red-500"
          }`}
        />
      </button>
      <button onClick={toggleFavorite} className="focus:outline-none">
        <StarIcon
          className={`h-6 w-6 ${
            isFavorited ? "text-yellow-500" : "text-red-500"
          }`}
        />
      </button>
      <button onClick={toggleFavorite} className="focus:outline-none">
        <StarIcon
          className={`h-6 w-6 ${
            isFavorited ? "text-yellow-500" : "text-red-500"
          }`}
        />
      </button>
      <button onClick={toggleFavorite} className="focus:outline-none">
        <StarIcon
          className={`h-6 w-6 ${
            isFavorited ? "text-yellow-500" : "text-red-500"
          }`}
        />
      </button>
    </div>
  );
};

export default Reviews;
