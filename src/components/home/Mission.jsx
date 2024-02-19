import React from "react";
import Image from "next/image";
import image1 from "../../../src/public/home/houseimage.svg";

const Mission = () => {
  return (
    <div className="bg-neutral-300 flex w-full justify-center items-center">
      {/* Left empty space column with 1/12 width */}
      <div className="w-1/12"></div>

      {/* Image container with 1/3 width */}
      <div className="w-1/3 mt-6 mb-6">
        <Image alt="" src={image1} className="ml-4 mr-auto" />
      </div>

      {/* Empty space column with 1/6 width */}
      <div className="pr-5"></div>

      {/* Content container with 2/3 width */}
      <div className="w-1/2 bg-neutral-300 flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="text-blue-700 font-bold font-serif text-2xl md:text-3xl lg:text-4xl leading-8 m-0 mt-10 mr-20">
            OUR MISSION: <br />
          </p>
          {/* Empty space column with 1/6 width */}
          <div className="w-1/6"></div>
          <p className="font-sans text-lg md:text-xl lg:text-2xl leading-8 m-0 mr-10">
            This mission is to provide a transparent way for students to get
            housing, and understand living conditions. We eliminate the hurdles
            of confusing interfaces like Redfin or Zillow and help students find
            student-reviewed houses without navigating confusing sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
