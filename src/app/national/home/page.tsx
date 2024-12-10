import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/National/NationalListSide";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen items-start justify-center">
      {/* Left Half */}
      <div className="filter-map-div h-full flex flex-col mt-2 w-[50%] bg-white">
        <NationalListSide />
      </div>
      
      {/* Right Half */}
      <div className="toggle-area h-full flex flex-col w-[50%] bg-white">
        <NationalHomeToggleArea />
      </div>
    </div>
  );
};

export default page;
