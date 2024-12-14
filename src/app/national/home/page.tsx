"use client";
import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/National/NationalListSide";
import { useEffect } from "react";

const page = () => {
  // useEffect(() => {
  //   async function addData() {
  //     const payload = {
  //       disasterId: "106d3dd6-901b-4d6d-b66e-c53769273601",
  //       disasterStatus: {
  //         weatherCondition: {
  //           primary: "rain",
  //           details: ["heavy rain", "thunderstorms"],
  //           severity: 3,
  //         },
  //         affectedAreas: [
  //           {
  //             name: "Area 1",
  //             coordinates: { latitude: 12.34, longitude: 56.78 },
  //             impactLevel: 2,
  //           },
  //         ],
  //         affectedPopulation: {
  //           total: 1000,
  //           demographics: {
  //             children: 200,
  //             adults: 600,
  //             elderly: 200,
  //           },
  //           vulnerableGroups: ["elderly", "children"],
  //         },
  //       },
  //       casualties: {
  //         types: [
  //           { category: "injured", count: 50 },
  //           { category: "deceased", count: 5 },
  //         ],
  //         firstAid: [
  //           {
  //             treatmentType: "basic",
  //             treatmentLocation: "local hospital",
  //             personnelInvolved: 10,
  //           },
  //         ],
  //         communication: {
  //           status: "limited",
  //           methods: ["radio", "satellite phone"],
  //         },
  //       },
  //       materialFlow: {
  //         foodMaterials: [
  //           {
  //             type: "canned food",
  //             quantity: 500,
  //             distributionMethod: "trucks",
  //           },
  //         ],
  //         airDropping: {
  //           active: true,
  //           frequency: 2,
  //           locations: [{ latitude: 12.34, longitude: 56.78 }],
  //         },
  //         transport: [
  //           {
  //             type: "trucks",
  //             capacity: 10,
  //             activeVehicles: 5,
  //           },
  //         ],
  //         medicalAid: [
  //           {
  //             type: "first aid kits",
  //             quantity: 100,
  //             destination: { latitude: 12.34, longitude: 56.78 },
  //           },
  //         ],
  //       },
  //       teamArrival: {
  //         centralTeams: [
  //           {
  //             name: "Team A",
  //             arrivalTime: Date.now(),
  //             personnelCount: 20,
  //           },
  //         ],
  //         internationalTeams: [
  //           {
  //             country: "Country X",
  //             organizationName: "Org X",
  //             arrivalTime: Date.now(),
  //             personnelCount: 15,
  //           },
  //         ],
  //         others: [
  //           {
  //             name: "Volunteer Group",
  //             type: "NGO",
  //             arrivalTime: Date.now(),
  //           },
  //         ],
  //       },
  //       summary: {
  //         overview: "Heavy rain causing floods",
  //         criticalObservations: ["Roads blocked", "Power outage"],
  //         recommendedActions: [
  //           "Evacuate affected areas",
  //           "Provide medical aid",
  //         ],
  //       },
  //       submissionTime: Date.now(),
  //     };

  //     const res = await fetch(
  //       "http://localhost:3000/api/nationalDisasterCommittee/situationshipReports",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(payload),
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     console.log("Response Plan added successfully");
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
