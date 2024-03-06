"use client";
import React from "react";
import Image from "next/image";
import MapsIcon from "../../../public/listings/Maps.svg"; // Simplify the path if possible

const Maps = () => {
  const ucRiversideAddress =
    "University of California Riverside, Riverside, CA 92521";
  const userAddress = "1431 Everton Pl, Riverside, CA 92507"; // Replace with your actual address

  const handleMapsRedirect = () => {
    const googleMapsDirectionUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      ucRiversideAddress
    )}&destination=${encodeURIComponent(userAddress)}`;
    window.open(googleMapsDirectionUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleMapsRedirect}
      className="flex flex-row w-full items-center bg-gray-100 hover:bg-gray-300 justify-center shadow-md rounded-xl transition duration-300"
    >
      <div className="text-black font-bold text-xl mx-2">Maps</div>
      {/* Ensure you have the SVG properly loaded with an image loader configured for next/image */}
      <Image src={MapsIcon} alt="Map" width={48} height={40} />
    </button>
  );
};

export default Maps;
