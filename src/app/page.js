import React from "react";
import Mission from "@/components/home/Mission";
import Notes from "@/components/home/Notes";
import Contributors from "../../Contributors";

const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center bg-neutral-300">
      <div className=" mt-24 mb-40">
        <Mission />
      </div>
      <div className="mb-24">
        <Notes />
      </div>

      <div className="mb-24">
        <Contributors />
      </div>
    </div>
  );
};

export default Home;
