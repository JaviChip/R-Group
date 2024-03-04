import React from "react";
import Mission from "@/components/home/Mission";
import Notes from "@/components/home/Notes";
import Reviews from "/Users/arnavswami/Documents/Arnav/R-Group/src/components/listings/ListingAttributes/Reviews";
const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center bg-neutral-300">
      <div className=" mt-24 mb-60">
        <Mission />
      </div>

      <Notes />

      <Reviews />
    </div>
  );
};

export default Home;
