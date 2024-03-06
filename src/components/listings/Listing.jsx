"use client";
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
import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../firebase-config";
// Need Reviews Components

const db = getFirestore(app);

const Listing = ({ listing }) => {
  const [address, setAddress] = useState("Loading...");
  const [bathrooms, setBathrooms] = useState("Loading...");
  const [beds, setBeds] = useState("Loading...");
  const [leaseStart, setLeaseStart] = useState("Loading...");
  const [leaseEnd, setLeaseEnd] = useState("Loading...");
  const [miles, setMiles] = useState("Loading...");
  const [phone, setPhone] = useState("Loading...");
  const [rent, setRent] = useState("Loading...");
  const [sqrFt, setSqFt] = useState("Loading...");

  useEffect(() => {
    const fetchName = async () => {
      const docRef = doc(db, "Listing", "pMto7pkw4HlFhKqbd02n");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setAddress(docSnap.data().Address);
        setBathrooms(docSnap.data().Bathrooms);
        setBeds(docSnap.data().Beds);
        setLeaseStart(docSnap.data().LeaseStart);
        setLeaseEnd(docSnap.data().LeaseEnd);
        setMiles(docSnap.data().Miles);
        setPhone(docSnap.data().Phone);
        setRent(docSnap.data().Rent);
        setSqFt(docSnap.data().SqrFt);
      } else {
        setAddress("N/A");
        setBathrooms("N/A");
        setBeds("N/A");
        setLeaseStart("N/A");
        setLeaseEnd("N/A");
        setMiles("N/A");
        setPhone("N/A");
        setRent("N/A");
        setSqFt("N/A");
      }
    };

    fetchName();
  }, []);

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
                <Address Address={address} />{" "}
              </div>

              <div className="ml-2 mr-2">
                {" "}
                <Rent RentAmount={rent} />{" "}
              </div>
            </div>

            <div className="mx-2 my-2">
              {" "}
              <BedBathSqrFt
                Beds={beds}
                Bathrooms={bathrooms}
                SqrFt={sqrFt}
              />{" "}
            </div>

            <div className="flex flex-row flex-nowrap">
              <div className="ml-2 mr-2 ">
                {" "}
                <LeaseTerm Start={leaseStart} End={leaseEnd} />{" "}
              </div>

              <div className="mr-2 ">
                {" "}
                <Miles Miles={miles} />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col ml-4 mr-2 ">
          <div className="my-2">
            {" "}
            <ContactSellerButton Phone={phone} />
          </div>

          <div className="my-2 w-full">
            {" "}
            <Maps />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
