import Address from "./ListingAttributes/Address";
import BedBathSqrFt from "./ListingAttributes/BedsBathSqrFt";
import ContactSellerButton from "./ListingAttributes/Contact";
import StarButton from "./ListingAttributes/FavoriteButton";
import HousingType from "./ListingAttributes/HousingType";
import LeaseTerm from "./ListingAttributes/LeaseTerm";
// Need Maps Component
import Miles from "./ListingAttributes/Miles";
import Rent from "./ListingAttributes/Rent";
import Image from "next/image";
import houseImage from "../../../src/public/home/houseimage.svg";
// Need Reviews Components

import React from "react";

const Listing = ({ image, listing }) => {
  // Assume listing contains all the data required for the child components
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 my-5 mx-auto bg-gray-300">
      <HousingType HousingType={"Town House"} />

      <div className="relative">
        <Image
          src={houseImage}
          alt="House"
          className=" mb-3 object-cover w-full h-full max-h-80 "
        />
        <div className=" absolute top-0 right-0 p-2">
          <StarButton />
        </div>
      </div>

      <div className=" flex flex-row mb-6">
        <div className=" w-full flex flex-col justify-between">
          <div>
            <div className="flex font-bold flex-row text-xl mb-2 ">
              <div className=" ml-2 mr-2">
                {" "}
                <Address Address={"1 Via Topacio "} />{" "}
              </div>

              <div className="ml-2 mr-2">
                {" "}
                <Rent RentAmount={500} />{" "}
              </div>
            </div>

            <div className="mx-2 my-2">
              {" "}
              <BedBathSqrFt Beds={1} Bathrooms={2} SqrFt={3000} />{" "}
            </div>

            <div className="flex flex-row flex-nowrap">
              <div className="ml-2 mr-2 ">
                {" "}
                <LeaseTerm Start={"May"} End={"June"} />{" "}
              </div>

              <div className="mr-2 ">
                {" "}
                <Miles Miles={500} />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col ml-4 mr-4 ">
          <ContactSellerButton />
        </div>
      </div>
    </div>
  );
};

export default Listing;
