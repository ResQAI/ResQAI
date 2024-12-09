import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/National/NationalListSide";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="filter-map-div h-full flex items-start mt-20 justify-center w-[50%]">
        <NationalListSide />
      </div>
      <div className="toggle-area w-[50%]">
        <NationalHomeToggleArea />
      </div>
    </div>
  );
};

export default page;
