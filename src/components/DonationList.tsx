"use client";

import React, { useState } from "react";
import DonationCard from "./DonationCard";
import DonatePage from "./donate";

interface Donation {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
}

const donations: Donation[] = [
  {
    id: 1,
    title: "Gujarat Earthquake Relief Fund",
    description:
      "Support victims of the recent earthquake in Gujarat. Your donations will provide emergency shelter, medical aid, and essential supplies.",
    goal: 500000,
    raised: 320000,
  },
  {
    id: 2,
    title: "Kerala Flood Relief Campaign",
    description:
      "Help flood-affected communities in Kerala rebuild their lives. Funds will support evacuation efforts and rehabilitation.",
    goal: 750000,
    raised: 490000,
  },
  {
    id: 3,
    title: "Odisha Cyclone Emergency Response",
    description:
      "Urgent support needed for cyclone victims in Odisha. Providing food, clean water, and temporary housing.",
    goal: 600000,
    raised: 280000,
  },
];

const DonationList: React.FC = () => {
  const [selectedFund, setSelectedFund] = useState<Donation | null>(null);

  const handleDonateClick = (donation: Donation) => {
    setSelectedFund(donation);
  };

  const handleDonate = (details: {
    name: string;
    email: string;
    reliefFundId: number;
    amount: number;
  }) => {
    console.log("Donation submitted:", details);
    alert(`Thank you for donating to ${selectedFund?.title}!`);
    setSelectedFund(null); // Close the form after submission
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center tracking-tight">
          National Disaster Relief Campaigns
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Your contribution can make a significant difference in helping
          communities recover from natural disasters across India.
        </p>

        {selectedFund ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <button
              onClick={() => setSelectedFund(null)}
              className="mb-6 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200 flex items-center"
            >
              <span>← Back to campaigns</span>
            </button>
            <DonatePage
              reliefFunds={[{ id: selectedFund.id, name: selectedFund.title }]}
              onDonate={handleDonate}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donations.map((donation) => (
              <DonationCard
                key={donation.id}
                title={donation.title}
                description={donation.description}
                goal={donation.goal}
                raised={donation.raised}
                onDonate={() => handleDonateClick(donation)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationList;
