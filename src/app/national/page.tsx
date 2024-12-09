import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/National/NationalListSide";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <div className="filter-map-div  w-[50%]">
        <NationalListSide />
      </div>
      <div className="toggle-area  w-[50%]">
        <NationalHomeToggleArea />
      </div>
    </div>
  );
};

export default page;
