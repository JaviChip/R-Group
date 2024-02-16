import React from "react";
import Image from "next/image";
import image1 from "../../../src/public/home/houseimage.svg";

const Mission = () => {
  return (
    <div className="bg-red-200 flex w-full justify-center items-center">
      {/* Image container with 1/3 width */}
      <div className="w-1/3">
        <Image alt="" src={image1} className="mt-3 ml-auto mr-auto" />
      </div>

      {/* Content container with 2/3 width */}
      <div className="w-1/3 bg-white flex flex-col justify-center items-center">
        <div>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Mission Statement:
            </span>{" "}
            The mission for this group has been from the beginnging to provide a
            more transparent way for students to get access to housing as well
            as make it a lot less stressful. Students should be able to easily
            find houses they find appealing without having to look through
            RedFin or Zillow which may have a confusing interface to follow.
          </p>
        </div>
      </div>

      <div className="w-1/3">
        <Image alt="" src={image1} className="mt-3 ml-auto mr-auto" />
      </div>
    </div>
  );
};

export default Mission;
