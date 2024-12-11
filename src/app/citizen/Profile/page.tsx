import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/National/NationalListSide";
import React from "react";
import Profile from "@/components/Profile";

const page = () => {
  return (
    <div className=" h-screen items-start justify-center">
      <Profile/>
      <div className="p-5">
      <div className=" bg-blue-600 text-white p-4 rounded-lg shadow-lg mb-10 ">
      <h3 className="text-lg font-bold">Join as a Volunteer</h3>
      <p className="text-sm my-2">
        Make a difference in your community by volunteering with us!
      </p>
      <div className="flex justify-end space-x-2">
        <button className="px-3 py-1 bg-gray-100 text-black rounded-md text-sm hover:bg-gray-200">
          Learn More
        </button>
        <button className="px-3 py-1 bg-white text-black rounded-md text-sm hover:bg-gray-300">
          Join Now
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default page;
