"use client";
import React, { useState } from "react";
import DisasterList from "../DisasterList";
import DisasterMap from "../DisasterMap";

const NationalListSide: React.FC = () => {
  const [view, setView] = useState<"list" | "map">("list");
  const [mapLevel, setMapLevel] = useState<"country" | "city">("country");
  const [mapView, setMapView] = useState({ lat: 20.5937, lng: 78.9629, zoom: 5 });

  const disasterData = [
    {
      name: "Earthquake",
      area: "San Francisco, CA",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 3", type: "level" },
        { label: "Critical" },
      ],
    },
    {
      name: "Hurricane Elena",
      area: "Florida Coast",
      tags: [
        { label: "Upcoming", type: "status" },
        { label: "Warning" },
      ],
    },
    {
      name: "Wildfire",
      area: "California Wilderness",
      tags: [
        { label: "Ongoing", type: "status" },
        { label: "Level 2", type: "level" },
      ],
    },
    {
      name: "Flood",
      area: "Louisiana Delta",
      tags: [
        { label: "Resolved", type: "status" },
        { label: "Level 1", type: "level" },
      ],
    },
    {
      name: "Tropical Storm",
      area: "Gulf of Mexico",
      tags: [
        { label: "Warning" },
        { label: "Level 2", type: "level" },
      ],
    },
    {
      name: "Avalanche",
      area: "Rocky Mountains",
      tags: [
        { label: "Critical" },
        { label: "Level 3", type: "level" },
      ],
    },
  ];

  const handleMapLevelChange = (level: "country" | "city") => {
    setMapLevel(level);
  };

  return (
    <div>

        <DisasterList
          title="Countrywide Disasters"
          disasters={disasterData}
          onOpenModal={() => alert("Modal would open here")}
          onClick={() =>
            setMapView({ lat: 20.5937, lng: 78.9629, zoom: 5 }) // India
          }
          lat={mapView.lat} lng={mapView.lng} zoom={mapView.zoom}
        />
        <div className="mt-10">
        <DisasterList
          title="Citywide Disasters"
          disasters={disasterData}
          onOpenModal={() => alert("Modal would open here")}
          // onClick={() =>
          //   setMapView({ lat: 28.6139, lng: 77.209, zoom: 10 }) // Delhi
          // }
          lat={28.6139} lng={77.209} zoom={10}
        />
        </div>
    
    </div>
  );
};

export default NationalListSide;
