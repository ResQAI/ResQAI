import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/National/NationalListSide";
import React from "react";
import DonationList from "@/components/DonationList";

const page = () => {
  return (
    <div className="flex h-screen items-start justify-center">
      <DonationList />
    </div>
  );
};

export default page;
