import React from "react";
import Image from "next/image";
import image2 from "../../../src/public/home/ucRiverside.svg";

const Notes = () => {
  return (
    <div className="bg-neutral-300 flex w-full justify-center items-center">
      {/* Image container with 1/3 width and added padding */}
      <div className="w-1/3 mt-6 mb-6 pr-8">
        <Image alt="" src={image2} className="ml-4 mr-auto" />
      </div>

      {/* Content container with 2/3 width */}
      <div className="w-1/3 bg-neutral-300 flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="text-blue-500 font-bold font-serif text-2xl md:text-3xl lg:text-4xl leading-8 m-0 mt-10 mr-20">
            Notes For User: <br />
          </p>
          {/* Paragraph with added padding */}
          <p className="font-sans text-lg md:text-xl lg:text-2xl pl-8 m-0 mr-10 mt-4 bg-neutral-300">
            This website is designed for UCR students to be able to find housing
            if they do not have a place to live and also list houses that they
            currently live in and leave reviews.
          </p>
          <br />
          <p className="font-sans text-lg md:text-xl lg:text-2xl pl-8 m-0 mr-10 mt-4 bg-neutral-300">
            This website is not currently designed for students who are looking
            for apartments as a means for living off campus. Students should
            also not be using this site to mass-list houses they have found
            online.
          </p>
        </div>

      </div>

      <div className="w-1/3 mt-6 mb-6 pr-8">
        <Image alt="" src={image2} className="ml-4 mr-auto" />
      </div>
    </div>
  );
};

export default Notes;
