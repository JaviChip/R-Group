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
      <div className="w-1/6"></div>

      {/* Content container with 2/3 width */}
      <div className="w-1/2 bg-neutral-300 flex flex-col justify-center items-center">
        <div className="text-center">
          <p
            style={{
              lineHeight: "2",
              margin: "0",
              marginTop: "10px",
              marginRight: "20px",
            }}
          >
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                fontFamily: "Georgia, sans-serif",
                fontSize: "38px",
              }}
            >
              OUR MISSION: <br />
            </span>
          </p>
          {/* Empty space column with 1/6 width */}
          <div className="w-1/6"></div>
          <p style={{ lineHeight: "2", margin: "0", marginRight: "10px" }}>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "22px" }}>
              This mission is to provide a transparent way for students to get
              housing, and understand living conditions. We eliminate the
              hurdles of confusing interfaces like Redfin or Zillow and help
              students find student-reviewed houses without navigating confusing
              sites.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
