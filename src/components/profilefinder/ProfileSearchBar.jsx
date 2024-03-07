"use client";
import React from "react";

const ProfileSearchBar = ({ placeholder, onSearchChange }) => {
  return (
    <div className="flex border-2 border-gray-300 rounded-lg">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-lg focus:outline-none"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
      <button
        className="px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default ProfileSearchBar;
