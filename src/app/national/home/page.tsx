"use client";
import NationalListSide from "@/components/National/NationalListSide";

const page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col gap-4">
        <div className="p-4 bg-white">
          <h1 className="text-2xl font-bold mb-4">Disaster Reports</h1>
          <div className="filter-map-div w-full">
            <NationalListSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;