"use client";
import NationalHomeToggleArea from "@/components/National/NationalHomeToggle";
import NationalListSide from "@/components/National/NationalListSide";
import { useEffect } from "react";

const page = () => {
  // useEffect(() => {
  //   async function addData() {
  //     const res = await fetch(
  //       "http://localhost:3000/api/nationalDisasterCommittee/responsePlan",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name: "Emergency Response Setup",
  //           disasterId: "106d3dd6-901b-4d6d-b66e-c53769273601",
  //           departmentConcerned: "Agriculture",
  //           isFailed: false,
  //           description: "Set up emergency response units in affected areas",
  //           startTime: new Date("2025-01-20T10:00:00"),
  //           estimatedTime: 180, // in minutes
  //           status: "pending",
  //           statusUpdates: [
  //             {
  //               timestamp: new Date("2024-01-19T12:30:00"),
  //               currentStatus: "25% of response units established",
  //               personnelCount: 15,
  //               additionalTimeNeeded: 4,
  //               resources: ["Ambulances", "Basic Supplies"],
  //               departments: ["Medical"],
  //               additionalResources: ["More vehicles needed"],
  //             },
  //             {
  //               timestamp: new Date("2024-01-19T15:30:00"),
  //               currentStatus: "50% of response units established",
  //               personnelCount: 25,
  //               additionalTimeNeeded: 2,
  //               resources: [
  //                 "Ambulances",
  //                 "Medical Supplies",
  //                 "Communication Equipment",
  //               ],
  //               departments: ["Medical", "Police"],
  //               additionalResources: [
  //                 "More paramedics needed",
  //                 "Additional tents required",
  //               ],
  //             },
  //           ],
  //         }),
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
