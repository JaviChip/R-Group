import React from "react";

const mockDatabase = {
  "John Doe": "123 riverside ave",
};

const Street = ({ name }) => {
  const Street = mockDatabase[name];

  return (
    // Component container with rounded corners, shadow, and spacing
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <span className="text-lg font-medium text-gray-900">Street: </span>
      {/* Zip code with standout styling */}
      <span className="ml-2 p-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded border border-blue-200">
        {Street ?? "N/A"}
      </span>
    </div>
  );
};

export default Street;
