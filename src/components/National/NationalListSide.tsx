"use client";
import React from 'react';
import DisasterList from '../DisasterList';

const NationalListSide: React.FC = () => {
  const disasterData = [
    {
      name: "Earthquake",
      area: "San Francisco, CA",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 3", type: "level" },
        { label: "Critical" }
      ]
    },
    {
      name: "Hurricane Elena",
      area: "Florida Coast",
      tags: [
        { label: "Upcoming", type: "status" },
        { label: "Warning" }
      ]
    },
    {
      name: "Wildfire",
      area: "California Wilderness",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 2", type: "level" }
      ]
    },
    {
      name: "Wildfire",
      area: "California Wilderness",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 2", type: "level" }
      ]
    },
    {
      name: "Flood",
      area: "Louisiana Delta",
      tags: [
        { label: "Resolved", type: "status" },
        { label: "Level 1", type: "level" }
      ]
    },
    {
      name: "Tropical Storm",
      area: "Gulf of Mexico",
      tags: [
        { label: "Warning" },
        { label: "Level 2", type: "level" }
      ]
    },
    {
      name: "Avalanche",
      area: "Rocky Mountains",
      tags: [
        { label: "Critical" },
        { label: "Level 3", type: "level" }
      ]
    }
  ];

  const handleOpenModal = () => {
    alert("Modal would open here");
  };

  return (
    <DisasterList 
      title="Countrywide Disasters"
      disasters={disasterData}
      onOpenModal={handleOpenModal}
    />
  );
};

export default NationalListSide;