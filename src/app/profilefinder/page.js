// pages/profile.js
"use client";
import React from "react";
import Age from "../../components/profile/Age";
import City from "../../components/profile/City";
import Email from "../../components/profile/Email";
import Gender from "../../components/profile/Gender";
import HousingStatus from "../../components/profile/HousingStatus";
import Major from "../../components/profile/Major";
import Phone from "../../components/profile/Phone";
import Street from "../../components/profile/Street";
import Year from "../../components/profile/Year";
import Zip from "../../components/profile/Zip";
import Profile from "@/components/profilefinder/profile";
import App from "@/components/profilefinder/App";

const ProfileFinderPage = () => {
  let userId = "MAEg37ufOCdZrrNhIiNv";
  if (typeof window !== "undefined") {
    userId = window.location.href.substring(30);
  }
  return (
    <div className="my-40">
      {/* Example usage with a hardcoded name */}
      <h1>Profile Page</h1>
      <HousingStatus userId={userId} />
      <City userId={userId} />
      <Street userId={userId} />
      <Zip userId={userId} />
      <Phone userId={userId} />
      <Gender userId={userId} />
      <Email userId={userId} />
      <Year userId={userId} />
      <Age userId={userId} />
      <Major userId={userId} />
      <Profile />
      <App />
    </div>
  );
};

export default ProfileFinderPage;
