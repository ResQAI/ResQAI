"use client";

import React, { useState } from "react";
import DonationCard from "./DonationCard";
import DonatePage from "./donate";

interface Donation {
  id: number;
  image: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
}

const donations: Donation[] = [
  {
    id: 1,
    image: "/img/donation-1.png",
    title: "Help flood victims in Indonesia",
    description: "Help flood victims in Indonesia by donating sincerely.",
    goal: 25000,
    raised: 21000,
  },
  {
    id: 2,
    image: "/img/donation-2.png",
    title: "Donation for COVID-19 in Indonesia",
    description: "Donation for COVID-19 in Indonesia by donating sincerely.",
    goal: 24000,
    raised: 19000,
  },
  {
    id: 3,
    image: "/img/donation-3.png",
    title: "Help homeless cat to find a home",
    description: "Help homeless cats and other animals by donating.",
    goal: 15000,
    raised: 13000,
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
    <div className="container mx-auto px-6 ">
      <h1 className="text-3xl font-semibold text-gray-900 mb-10">
        Donation Campaigns
      </h1>

      {/* Conditionally render DonatePage if a fund is selected */}
      {selectedFund ? (
        <DonatePage
          reliefFunds={[
            { id: selectedFund.id, name: selectedFund.title },
          ]}
          onDonate={handleDonate}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <DonationCard
              key={donation.id}
              image={donation.image}
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
  );
};

export default DonationList;
