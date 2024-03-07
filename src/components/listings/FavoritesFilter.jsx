import React from "react";
import { HeartIcon } from "@heroicons/react/solid"; // Make sure to install @heroicons/react

const FavoritesButton = ({ onToggleFavorites }) => {
  return (
    <button
      className="flex items-center px-4 py-2 space-x-2 font-semibold text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-200 active:bg-blue-800"
      onClick={onToggleFavorites}
    >
      <HeartIcon className="w-5 h-5 text-red-500" />
      <span>Favorites</span>
    </button>
  );
};

export default FavoritesButton;
