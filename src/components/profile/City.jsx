import React from "react";

const mockDatabase = {
  "John Doe": "Riverside",
};

const City = ({ name }) => {
  const City = mockDatabase[name];

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <span className="text-lg font-medium text-gray-900">City: </span>
      <span className="ml-2 p-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded border border-blue-200">
        {City ?? "N/A"}
      </span>
    </div>
  );
};

export default City;
