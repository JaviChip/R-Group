// pages/profile.js
"use client";
import React from "react";
import ProfileSearchBar from "@/components/profilefinder/ProfileSearchBar";
import ProfileFavoritesButton from "@/components/profilefinder/ProfileFavoritesFilter";
import ProfileAttributesFilter from "@/components/profilefinder/ProfileAttributesFilter";
import Profile from "@/components/profilefinder/profile";
import App from "@/components/profilefinder/App";

const ProfileFinderPage = () => {
  return (
    // This outer div controls the overall alignment and spacing from the top of the page
    <div className="flex justify-center relative flex-col my-24">
      {/* Full width, minimal horizontal margin to the gray box itself to fit the screen */}
      <div className="w-full bg-gray-300 p-10">
        {/* Container for the ProfileSearchBar, might want to adjust padding/margins here too */}
        <div className="w-full mt-5 mb-10">
          <ProfileSearchBar />
        </div>
        {/* Container for buttons/filters */}
        <div className="flex flex-row justify-center w-full mb-10">
          <div className="m-2">
            <ProfileFavoritesButton />
          </div>

          <div className="m-2">
            <ProfileAttributesFilter />
          </div>
        </div>
      </div>
      {/* <Profile /> */}
      <App />
    </div>
  );
};

export default ProfileFinderPage;
