"use client";
import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/National/NationalListSide";
import { useEffect } from "react";

const page = () => {
  // useEffect(() => {
  //   async function addData() {
  //     const sampleIncomingDisasters = [
  //       {
  //         id: "INC001",
  //         name: "Coastal Cyclone Alert",
  //         tags: ["cyclone", "coastal", "high-wind"],
  //         exactLocation: {
  //           latitude: 13.0827,
  //           longitude: 80.2707,
  //           address: "Chennai Coastal Region",
  //           affectedArea: "Marina Beach Coast",
  //         },
  //         level: "High",
  //         peopleAffected: 50000,
  //         estimatedEconomicImpact: 1000000,
  //         startTime: Date.now(),
  //         status: "Potential",
  //         weatherData: {
  //           windSpeed: 120,
  //           precipitation: 250,
  //           temperature: 27,
  //         },
  //       },
  //       {
  //         id: "INC002",
  //         name: "Himalayan Earthquake",
  //         tags: ["earthquake", "landslide", "mountain"],
  //         exactLocation: {
  //           latitude: 30.7333,
  //           longitude: 79.0666,
  //           address: "Uttarakhand Himalayan Region",
  //           affectedArea: "Chamoli District",
  //         },
  //         level: "Critical",
  //         peopleAffected: 25000,
  //         estimatedEconomicImpact: 2000000,
  //         startTime: Date.now(),
  //         status: "Active",
  //         geologicalData: {
  //           magnitude: 6.8,
  //           depth: 15,
  //           richterScale: 6.8,
  //         },
  //       },
  //       {
  //         id: "INC003",
  //         name: "Kerala Flood Warning",
  //         tags: ["flood", "rain", "dam-overflow"],
  //         exactLocation: {
  //           latitude: 9.9312,
  //           longitude: 76.2673,
  //           address: "Ernakulam District",
  //           affectedArea: "Periyar River Basin",
  //         },
  //         level: "Medium",
  //         peopleAffected: 35000,
  //         estimatedEconomicImpact: 800000,
  //         startTime: Date.now(),
  //         status: "Potential",
  //         weatherData: {
  //           windSpeed: 45,
  //           precipitation: 350,
  //           temperature: 24,
  //         },
  //       },
  //       {
  //         name: "Rajasthan Drought Alert",
  //         tags: ["drought", "heatwave", "water-scarcity"],
  //         exactLocation: {
  //           latitude: 26.9124,
  //           longitude: 75.7873,
  //           address: "Jaipur Region",
  //           affectedArea: "Western Rajasthan",
  //         },
  //         level: "Low",
  //         peopleAffected: 100000,
  //         estimatedEconomicImpact: 1500000,
  //         startTime: Date.now(),
  //         weatherData: {
  //           temperature: 45,
  //           precipitation: 0,
  //           windSpeed: 15,
  //         },
  //         status: "Active",
  //       },
  //     ];

  //     for (let i = 0; i < sampleIncomingDisasters.length; i++) {
  //       const res = await fetch(
  //         "http://localhost:3000/api/nationalDisasterCommittee/incomingDisaster",
  //         {
  //           method: "POST",
  //           body: JSON.stringify(sampleIncomingDisasters[i]),
  //         }
  //       );

  //       const data = await res.json();
  //       console.log(data);
  //       console.log("Response Plan added successfully");
  //     }
  //   }

  //   addData();
  // }, []);
  return (
    <div className="flex gap-4 h-screen items-start justify-center">
      {/* Left Half */}
      <div className="filter-map-div h-full flex flex-col mt-2 w-[50%] bg-white">
        <NationalListSide />
      </div>

      {/* Right Half */}
      <div className="toggle-area h-full flex flex-col w-[50%] bg-white">
        <NationalHomeToggleArea />
      </div>
    </div>
  );
};

export default page;
