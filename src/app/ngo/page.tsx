// import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/Citizen/CitizenListSide";
import ProfileComponent from "@/components/Profile"
import React from "react";
import DonationList from "@/components/DonationList";

const page = () => {
  return (
    <div className="flex h-screen items-start justify-center">
      {/* Left Half */}
      <div className="filter-map-div h-full flex flex-col mt-12 w-[90%] bg-white">
        {/* <NationalListSide /> */}
        <DonationList/>
        {/* <ProfileComponent /> */}
      </div>
      
      {/* Right Half
      <div className="toggle-area h-full flex flex-col w-[50%] bg-white">
        <NationalHomeToggleArea />
      </div> */}
    </div>
  );
};

export default page;
