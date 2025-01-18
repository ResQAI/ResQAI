"use client";
import NationalListSide from "@/components/National/NationalListSide";

const page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <div className=" p-4 bg-white flex flex-col gap-4">

          <div className="filter-map-div w-full">
            <NationalListSide />
          </div>
        
      </div>
    </div>
  );
};

export default page;