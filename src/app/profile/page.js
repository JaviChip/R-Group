// pages/profile.js
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

const ProfilePage = () => {
  return (
    <div className="my-40">
      {/* Example usage with a hardcoded name */}
      <h1>Profile Page</h1>
      <HousingStatus name="John Doe" />
      <City name="John Doe" />
      <Street name="John Doe" />
      <Zip name="John Doe" />
      <Phone name="John Doe" />
      <Gender name="John Doe" />
      <Email name="John Doe" />
      <Year name="John Doe" />
      <Age name="John Doe" />
      <Major name="John Doe" />
    </div>
  );
};

export default ProfilePage;
