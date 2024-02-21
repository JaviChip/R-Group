import React from "react";
import Mission from "@/components/home/Mission";
import Notes from "@/components/home/Notes";
import StarButton from "@/components/listings/Favorites";
import BoxWithButtons from "@/components/listings/Pages";
const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center bg-neutral-300">
      <div className=" mt-24 mb-60">
        <Mission />
        <StarButton />
      </div>
<BoxWithButtons/>
      <Notes />
    </div>
  );
};

export default Home;
