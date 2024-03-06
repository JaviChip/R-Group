"use client";
import React from "react";
import Image from "next/image";
import MapsIcon from "../../../../src/public/listings/Maps.svg";

const Maps = () => {
  const ucRiversideAddress =
    "University of California Riverside, Riverside, CA 92521";
  const userAddress = "1431 Everton Pl, Riverside, CA 92507"; // Replace with your actual address
  const googleMapsDirectionUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    ucRiversideAddress
  )}&destination=${encodeURIComponent(userAddress)}`;

  return (
    <a
      href={googleMapsDirectionUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus:outline-none"
    >
      <button className="bg-white p-3 inline-flex items-center space-x-1 shadow-md rounded">
        <span className="text-black font-bold">Maps</span>
        <Image src={MapsIcon} alt="Map" className="h-10 w-6" />
      </button>
    </a>
  );
};

export default Maps;
