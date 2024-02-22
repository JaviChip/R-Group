import React from "react";

const HousingType = ({ HousingType }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      TownHouse
      <p className="text-lg font-semibold">{HousingType}</p>
    </div>
  );
};

export default HousingType;
