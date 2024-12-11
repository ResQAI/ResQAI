"use client";
import React from "react";
import DisasterList, { DisasterItem } from "../DisasterList";

const NationalListSide: React.FC = () => {
  const disasterData: DisasterItem[] = [
    {
      name: "Earthquake",
      area: "San Francisco Bay Area, California",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 3", type: "level" },
        { label: "Critical" },
      ],
    },
    {
      name: "Wildfire",
      area: "Los Angeles County, California",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 2", type: "level" },
      ],
    },
    {
      name: "Drought",
      area: "Central Valley, California",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 2", type: "level" },
        { label: "Warning" },
      ],
    },
    {
      name: "Mudslide",
      area: "Santa Barbara County, California",
      tags: [
        { label: "Warning", type: "status" },
        { label: "Level 2", type: "level" },
      ],
    },
    {
      name: "Wildfire",
      area: "San Diego County, California",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 3", type: "level" },
        { label: "Critical" },
      ],
    },
    {
      name: "Coastal Flooding",
      area: "Monterey County, California",
      tags: [
        { label: "Warning", type: "status" },
        { label: "Level 1", type: "level" },
      ],
    },
  ];

  const handleOpenModal = () => {
    alert("Modal would open here");
  };

  return (
    <DisasterList
      title="Active Disasters"
      disasters={disasterData}
      onOpenModal={handleOpenModal}
      lat={28.6139}
      lng={77.209}
      zoom={10}
    />
  );
};

export default NationalListSide;
