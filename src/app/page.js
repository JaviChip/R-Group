import React from "react";
import Mission from "@/components/home/Mission";
import Notes from "@/components/home/Notes";
import StarButton from "@/components/listings/Favorites";

const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center bg-neutral-300">
      <div className=" mt-24 mb-60">
        <Mission />
        <StarButton />
      </div>

      <Notes />

      <Reviews />
    </div>
  );
};

export default Home;
