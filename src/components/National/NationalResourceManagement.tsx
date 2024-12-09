"use client";

// import React, { useState } from 'react';

// const ResourceRequestManagement = () => {
//   const [resourceRequests, setResourceRequests] = useState([
//     {
//       id: 1,
//       organization: 'National Disaster Response Force',
//       disaster: 'Flood in Maharashtra',
//       location: 'Kolhapur District',
//       resourceType: 'Rescue Boats',
//       quantity: 15,
//       status: 'Pending',
//       urgency: 'High',
//       progressDetails: {
//         currentSituation: 'Severe flooding has isolated multiple villages',
//         specificNeeds: 'Urgent need for high-capacity rescue boats to navigate flood waters',
//         populationAffected: 5000,
//         criticalChallenges: 'Limited access to high-ground areas, multiple rescue operations pending'
//       }
//     },
//     {
//       id: 2,
//       organization: 'Indian Red Cross Society',
//       disaster: 'Earthquake in Gujarat',
//       location: 'Bhuj Region',
//       resourceType: 'Medical Supplies',
//       quantity: 100,
//       status: 'Pending',
//       urgency: 'Critical',
//       progressDetails: {
//         currentSituation: 'Widespread structural damage and medical emergency',
//         specificNeeds: 'Emergency medical kits, trauma care supplies, and first aid equipment',
//         populationAffected: 10000,
//         criticalChallenges: 'Immediate medical intervention required, healthcare infrastructure severely impacted'
//       }
//     },
//     {
//       id: 3,
//       organization: 'State Emergency Services',
//       disaster: 'Cyclone in Odisha',
//       location: 'Puri Coast',
//       resourceType: 'Temporary Shelters',
//       quantity: 50,
//       status: 'Pending',
//       urgency: 'Medium',
//       progressDetails: {
//         currentSituation: 'Coastal areas evacuated, significant infrastructure damage',
//         specificNeeds: 'Temporary housing units for displaced population',
//         populationAffected: 3000,
//         criticalChallenges: 'Immediate shelter needs, protection from continued adverse weather conditions'
//       }
//     }
//   ]);

//   const [selectedRequest, setSelectedRequest] = useState(null);

//   const getUrgencyColor = (urgency) => {
//     switch(urgency) {
//       case 'Critical': return 'bg-red-100 text-red-800';
//       case 'High': return 'bg-orange-100 text-orange-800';
//       case 'Medium': return 'bg-yellow-100 text-yellow-800';
//       default: return 'bg-green-100 text-green-800';
//     }
//   };

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'Pending': return 'bg-gray-100 text-gray-800';
//       case 'Approved': return 'bg-green-100 text-green-800';
//       case 'Rejected': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const handleResourceAction = (id, action) => {
//     setResourceRequests(prev =>
//       prev.map(request =>
//         request.id === id
//           ? { ...request, status: action === 'approve' ? 'Approved' : 'Rejected' }
//           : request
//       )
//     );
//   };

//   const handleViewMore = (request) => {
//     setSelectedRequest(request);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           Disaster Resource Management
//         </h1>

//         <div className="grid gap-6">
//           {resourceRequests.map((request) => (
//             <div
//               key={request.id}
//               className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
//             >
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-900">
//                     {request.organization}
//                   </h2>
//                   <p className="text-gray-600 mb-2">{request.disaster} - {request.location}</p>

//                   <div className="flex space-x-2 mb-4">
//                     <span className={`px-2 py-1 rounded text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
//                       {request.urgency} Urgency
//                     </span>
//                     <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(request.status)}`}>
//                       {request.status}
//                     </span>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Resource Type</p>
//                       <p className="font-medium">{request.resourceType}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Quantity</p>
//                       <p className="font-medium">{request.quantity}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <button
//                     onClick={() => handleViewMore(request)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
//                   >
//                     View More Details
//                   </button>
//                   {request.status === 'Pending' && (
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleResourceAction(request.id, 'approve')}
//                         className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
//                       >
//                         Approve
//                       </button>
//                       <button
//                         onClick={() => handleResourceAction(request.id, 'reject')}
//                         className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
//                       >
//                         Reject
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Modal */}
//         {selectedRequest && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">{selectedRequest.organization}</h2>
//                   <p className="text-gray-600">{selectedRequest.disaster} - {selectedRequest.location}</p>
//                 </div>
//                 <button
//                   onClick={() => setSelectedRequest(null)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div className="bg-gray-100 p-4 rounded-lg">
//                   <h3 className="font-semibold text-lg mb-2">Current Situation</h3>
//                   <p>{selectedRequest.progressDetails.currentSituation}</p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="bg-gray-100 p-4 rounded-lg">
//                     <h3 className="font-semibold mb-2">Specific Needs</h3>
//                     <p>{selectedRequest.progressDetails.specificNeeds}</p>
//                   </div>
//                   <div className="bg-gray-100 p-4 rounded-lg">
//                     <h3 className="font-semibold mb-2">Population Affected</h3>
//                     <p>{selectedRequest.progressDetails.populationAffected}</p>
//                   </div>
//                 </div>

//                 <div className="bg-gray-100 p-4 rounded-lg">
//                   <h3 className="font-semibold text-lg mb-2">Critical Challenges</h3>
//                   <p>{selectedRequest.progressDetails.criticalChallenges}</p>
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-end space-x-4">
//                 {selectedRequest.status === 'Pending' && (
//                   <>
//                     <button
//                       onClick={() => {
//                         handleResourceAction(selectedRequest.id, 'approve');
//                         setSelectedRequest(null);
//                       }}
//                       className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//                     >
//                       Approve Request
//                     </button>
//                     <button
//                       onClick={() => {
//                         handleResourceAction(selectedRequest.id, 'reject');
//                         setSelectedRequest(null);
//                       }}
//                       className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                     >
//                       Reject Request
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResourceRequestManagement;

import React, { useState } from "react";
import {
  ChevronRight,
  Package,
  MapPin,
  ExternalLink,
  Phone,
  XCircle,
  Filter,
} from "lucide-react";

const ResourceRequestManagement = () => {
  const [resourceRequests, setResourceRequests] = useState([
    {
      id: 1,
      organization: "National Disaster Response Force",
      disaster: "Flood in Maharashtra",
      location: "Kolhapur District",
      resourceType: "Rescue Boats",
      quantity: 15,
      status: "Approved",
      urgency: "High",
      progressLink: "/disaster-progress/flood-maharashtra-2024",
      contactInfo: {
        phone: "+91 1234567890",
        email: "contact@ndrf.org",
      },
      progressDetails: {
        currentSituation: "Severe flooding has isolated multiple villages",
        specificNeeds:
          "Urgent need for high-capacity rescue boats to navigate flood waters",
        populationAffected: 5000,
        criticalChallenges:
          "Limited access to high-ground areas, multiple rescue operations pending",
      },
    },
    {
      id: 2,
      organization: "Indian Red Cross Society",
      disaster: "Earthquake in Gujarat",
      location: "Bhuj Region",
      resourceType: "Medical Supplies",
      quantity: 100,
      status: "Pending",
      urgency: "Critical",
      progressLink: "/disaster-progress/earthquake-gujarat-2024",
      contactInfo: {
        phone: "+91 9876543210",
        email: "emergency@indianredcross.org",
      },
      progressDetails: {
        currentSituation: "Widespread structural damage and medical emergency",
        specificNeeds:
          "Emergency medical kits, trauma care supplies, and first aid equipment",
        populationAffected: 10000,
        criticalChallenges:
          "Immediate medical intervention required, healthcare infrastructure severely impacted",
      },
    },
    {
      id: 3,
      organization: "State Emergency Services",
      disaster: "Cyclone in Odisha",
      location: "Puri Coast",
      resourceType: "Temporary Shelters",
      quantity: 50,
      status: "Rejected",
      urgency: "Medium",
      progressLink: "/disaster-progress/cyclone-odisha-2024",
      contactInfo: {
        phone: "+91 7890123456",
        email: "emergency@odisha-ses.gov.in",
      },
      progressDetails: {
        currentSituation:
          "Coastal areas evacuated, significant infrastructure damage",
        specificNeeds: "Temporary housing units for displaced population",
        populationAffected: 3000,
        criticalChallenges:
          "Immediate shelter needs, protection from continued adverse weather conditions",
      },
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [urgencyFilter, setUrgencyFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-green-100 text-green-800 border-green-200";
    }
  };

  const handleViewMore = (request) => {
    setSelectedRequest(request);
  };

  const handleProgressRedirect = (link) => {
    console.log(`Redirecting to ${link}`);
    alert(`Redirecting to disaster progress page: ${link}`);
  };

  const handleContactOrganization = (request) => {
    const { phone, email } = request.contactInfo;
    alert(`Contact Information:\nPhone: ${phone}\nEmail: ${email}`);
  };

  // Filter requests based on urgency
  const filteredRequests = resourceRequests.filter(
    (request) =>
      (urgencyFilter === "All" || request.urgency === urgencyFilter) &&
      (statusFilter === "All" || request.status === statusFilter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
        <Package className="w-10 h-10 text-blue-600 mr-4" />

          <h1 className="text-4xl font-extrabold text-gray-800">
            Disaster Resource Management
          </h1>
        </div>

        {/* Urgency Filter */}
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <h3 className="text-lg font-semibold text-gray-800 mr-4">Filter by: Urgency</h3>
        {/* Urgency Filter */}
        <div className="flex space-x-4">
          {["All", "Critical", "High", "Medium"].map((urgency) => (
            <button
              key={urgency}
              onClick={() => setUrgencyFilter(urgency)}
              className={`
                px-4 py-2 rounded-md transition-colors 
                ${
                  urgencyFilter === urgency
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              {urgency}
            </button>
          ))}
        </div>

        
        <div className="flex space-x-4">
        <h3 className="text-lg font-semibold text-gray-800 mr-4">Filter by: Status</h3>
          {["All", "Approved", "Pending", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`
                px-4 py-2 rounded-md transition-colors 
                ${
                  statusFilter === status
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4 sm:gap-2">
                  <div className="flex-1 min-w-[200px]">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {request.organization}
                    </h2>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      {request.disaster} - {request.location}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getUrgencyColor(
                        request.urgency
                      )}`}
                    >
                      {request.urgency}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${
                        request.status === "Approved"
                          ? "bg-green-100 text-green-700 border-green-300"
                          : request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                          : "bg-red-100 text-gray-700 border-gray-300"
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Resource Type</p>
                    <p className="font-medium">{request.resourceType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Quantity</p>
                    <p className="font-medium">{request.quantity}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => handleViewMore(request)}
                    className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    View Details
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-blue-600 text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {selectedRequest.organization}
                    </h2>
                    <p className="text-blue-100 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      {selectedRequest.disaster} - {selectedRequest.location}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedRequest(null)}
                    className="text-white hover:bg-blue-700 p-2 rounded-full transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Current Situation
                  </h3>
                  <p className="text-gray-700">
                    {selectedRequest.progressDetails.currentSituation}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                      Specific Needs
                    </h3>
                    <p className="text-gray-700">
                      {selectedRequest.progressDetails.specificNeeds}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                      Population Affected
                    </h3>
                    <p className="text-gray-700 text-2xl font-bold">
                      {selectedRequest.progressDetails.populationAffected}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Critical Challenges
                  </h3>
                  <p className="text-gray-700">
                    {selectedRequest.progressDetails.criticalChallenges}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    onClick={() => handleContactOrganization(selectedRequest)}
                    className="flex items-center justify-center px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Organization
                  </button>

                  <button
                    onClick={() =>
                      handleProgressRedirect(selectedRequest.progressLink)
                    }
                    className="flex items-center justify-center px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Disaster Progress
                  </button>

                  <button
                    onClick={() => {
                      setResourceRequests((prev) =>
                        prev.map((r) =>
                          r.id === selectedRequest.id
                            ? { ...r, status: "Approved" }
                            : r
                        )
                      );
                      setSelectedRequest(null);
                    }}
                    className="flex items-center justify-center px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                  >
                    Approve Request
                  </button>

                  <button
                    onClick={() => {
                      setResourceRequests((prev) =>
                        prev.map((r) =>
                          r.id === selectedRequest.id
                            ? { ...r, status: "Rejected" }
                            : r
                        )
                      );
                      setSelectedRequest(null);
                    }}
                    className="flex items-center justify-center px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                  >
                    <XCircle className="w-5 h-5 mr-2" />
                    Reject Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceRequestManagement;
