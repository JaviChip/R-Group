"use client";
import React, { useEffect, useState } from "react";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../firebase-config";
import Address from "./ListingAttributes/Address";
import BedBathSqrFt from "./ListingAttributes/BedsBathSqrFt";
import ContactSellerButton from "./ListingAttributes/Contact";
import StarButton from "./ListingAttributes/FavoriteButton";
import HousingType from "./ListingAttributes/HousingType";
import LeaseTerm from "./ListingAttributes/LeaseTerm";
import Maps from "./ListingAttributes/Maps";
import Miles from "./ListingAttributes/Miles";
import Rent from "./ListingAttributes/Rent";
import Image from "next/image";
import houseImage from "../../../src/public/home/houseimage.svg";

const db = getFirestore(app);

const ListingApp = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const q = query(collection(db, "Listing"));
      const querySnapshot = await getDocs(q);
      const listingsArray = [];
      querySnapshot.forEach((doc) => {
        listingsArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setListings(listingsArray);
    };

    fetchListings();
  }, []);

  return (
    <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="flex flex-col rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 my-5 mx-auto bg-gray-300"
        >
          <HousingType HousingType={listing.HousingType} />
          <div className="relative">
            <Image
              src={houseImage}
              alt="House"
              className="mb-3 object-cover w-full h-full max-h-80"
            />
            <div className="absolute top-0 right-0 p-2">
              <StarButton />
            </div>
          </div>
          <div className="flex flex-row  mb-6">
            <div className="w-full flex flex-col justify-between">
              <div>
                <div className="flex flex-nowrap font-bold flex-row text-xl mb-2">
                  <div className=" flex-auto ml-2 mr-2">
                    <Address Address={listing.Address} />
                  </div>
                  <div className=" flex-auto ml-2 mr-2">
                    <Rent RentAmount={listing.Rent} />
                  </div>
                </div>
                <div className="flex-auto mx-2 my-2">
                  <BedBathSqrFt
                    Beds={listing.Beds}
                    Bathrooms={listing.Bathrooms}
                    SqrFt={listing.SqrFt}
                  />
                </div>
                <div className="flex flex-row ">
                  <div className="flex-none ml-2 mr-2">
                    <LeaseTerm
                      Start={listing.LeaseStart}
                      End={listing.LeaseEnd}
                    />
                  </div>
                  <div className=" flex-none mr-2">
                    <Miles Miles={listing.Miles} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-4 mr-2">
              <div className=" my-2">
                <ContactSellerButton Phone={listing.Phone} />
              </div>
              <div className="my-2 w-full">
                <Maps />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingApp;
