import React from "react";

const Contributers = () => {
  return (
    <div className="bg-neutral-300 flex w-full justify-center items-center">
      {/* Image container with 1/3 width and added padding */}

      {/* Content container with 2/3 width */}
      <div className="w-1/3 bg-neutral-300 flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="text-blue-500 font-bold font-serif text-2xl md:text-3xl lg:text-4xl leading-8 m-0 mt-10 mr-20">
            Contributers: <br />
          </p>
          {/* Paragraph with added padding */}
          <ul>
            <li>Cody Lin</li>
            <li>Kobe Ying</li>
            <li>Arnav Swami</li>
            <li>Javier Becerril</li>
            <li>Soorya Saravanan</li>
            <li>Yashmit Singh</li>
            <li>Wilson Law</li>
          </ul>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Contributers;
