import React from "react";

const Profile = ({ name, age, year, major, hobbies }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Age: {age}</p>
        <p className="text-gray-700 text-base">Year: {year}</p>
        <p className="text-gray-700 text-base">Major: {major}</p>
        <p className="text-gray-700 text-base">Hobbies: {hobbies}</p>
      </div>
    </div>
  );
};

export default Profile;
