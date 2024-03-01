import React from "react";
import Mission from "@/components/home/Mission";
import Notes from "@/components/home/Notes";
import StarButton from "@/components/listings/Favorites";
//import BoxWithButtons from "@/components/listings/Pages";
import ContactSellerButton from "@/components/listings/ListingAttributes/Contact";
import NotFoundPage from "./not-found";
const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center bg-neutral-300">
      <div className=" mt-24 mb-60">
        <Mission />
        <StarButton />
      </div>
      <ContactSellerButton />
      <NotFoundPage />
      <Notes />
    </div>
  );
};

export default Home;
