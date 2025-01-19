
"use client"
import React, { useState } from "react";
import { ChevronLeft, Heart } from "lucide-react";
import DonationCard from "./DonationCard";
import DonatePage from "./Donate";

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

const DonationList = () => {
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
    // console.log("Donation submitted:", details);
    alert(`Thank you for donating to ${selectedFund?.title}!`);
    setSelectedFund(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-2" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Disaster Relief Campaigns
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your contribution can make a significant difference in helping
              communities recover from natural disasters across India.
            </p>
          </div>

          {selectedFund ? (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 animate-fadeIn">
              <button
                onClick={() => setSelectedFund(null)}
                className="group mb-8 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to campaigns
              </button>
              <DonatePage
                reliefFunds={[{ id: selectedFund.id, name: selectedFund.title }]}
                onDonate={handleDonate}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {donations.map((donation, index) => (
                <div
                  key={donation.id}
                  className="transform hover:-translate-y-1 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <DonationCard
                    title={donation.title}
                    description={donation.description}
                    goal={donation.goal}
                    raised={donation.raised}
                    onDonate={() => handleDonateClick(donation)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DonationList;