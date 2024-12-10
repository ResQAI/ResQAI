"use client";

import React from "react";
import DonationCard from "./DonationCard";

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
];

const DonationList: React.FC = () => {
  const handleDonate = (id: number) => {
    console.log(`Donating to campaign ID: ${id}`);
    alert(`Donation process started for campaign ID: ${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {donations.map((donation) => (
        <DonationCard
          key={donation.id}
          image={donation.image}
          title={donation.title}
          description={donation.description}
          goal={donation.goal}
          raised={donation.raised}
          onDonate={() => handleDonate(donation.id)}
        />
      ))}
    </div>
  );
};

export default DonationList;
