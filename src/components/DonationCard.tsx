"use client";

import React from "react";

interface DonationCardProps {
  title: string;
  description: string;
  goal: number;
  raised: number;
  onDonate: () => void;
}

const DonationCard: React.FC<DonationCardProps> = ({
  title,
  description,
  goal,
  raised,
  onDonate,
}) => {
  const progress = (raised / goal) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">
              Raised: ₹{raised.toLocaleString()}
            </span>
            <span className="text-gray-600">
              Goal: ₹{goal.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={onDonate}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
