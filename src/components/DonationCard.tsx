"use client";

import React from "react";

interface DonationCardProps {
  image: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  onDonate: () => void;
}

const DonationCard: React.FC<DonationCardProps> = ({ image, title, description, goal, raised, onDonate }) => {
//   const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-xl flex flex-col justify-between">
      {/* <img
        src={image}
        alt="Donation"
        className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
      /> */}
      <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
        {title}
      </h4>
      <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
        {description}
      </p>
      <div className="flex items-center justify-between mb-8">
        <h6 className="font-light text-gray-400 text-sm md:text-lg">
          Goals:{" "}
          <span className="font-semibold text-gray-900 text-md md:text-lg">
            ${goal.toLocaleString()}
          </span>
        </h6>
        <h6 className="font-light text-gray-400 text-sm md:text-lg">
          Raised:{" "}
          <span className="font-semibold text-gray-900 text-md md:text-lg">
            ${raised.toLocaleString()}
          </span>
        </h6>
      </div>
      {/* <div className="hidden md:block lg:flex items-center justify-between mb-8">
        <div className="relative w-full h-2 bg-info opacity-10 rounded-lg">
          <div
            className="absolute top-0 left-0 h-2 bg-info rounded-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-light text-gray-900 text-md">{progress.toFixed(0)}%</p>
      </div> */}
      <button
        className="w-full py-4 bg-info font-semibold text-white text-lg rounded-lg bg-blue-500 transition ease-in-out duration-500 hover:bg-blue-800"
        onClick={onDonate}
      >
        Donate
      </button>
    </div>
  );
};

export default DonationCard;
