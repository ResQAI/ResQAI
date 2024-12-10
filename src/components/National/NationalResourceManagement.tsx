import React, { useState } from "react";
import {
  ChevronRight,
  Package,
  MapPin,
  AlertCircle,
  Check,
  X,
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
      progressDetails: {
        currentSituation: "Severe flooding has isolated multiple villages",
        specificNeeds: "Urgent need for high-capacity rescue boats to navigate flood waters",
        populationAffected: 5000,
        criticalChallenges: "Limited access to high-ground areas, multiple rescue operations pending",
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
      progressDetails: {
        currentSituation: "Widespread structural damage and medical emergency",
        specificNeeds: "Emergency medical kits, trauma care supplies, and first aid equipment",
        populationAffected: 10000,
        criticalChallenges: "Immediate medical intervention required, healthcare infrastructure severely impacted",
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
      progressDetails: {
        currentSituation: "Coastal areas evacuated, significant infrastructure damage",
        specificNeeds: "Temporary housing units for displaced population",
        populationAffected: 3000,
        criticalChallenges: "Immediate shelter needs, protection from continued adverse weather conditions",
      },
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filters, setFilters] = useState({
    urgency: "All",
    status: "All",
  });


  interface Filters {
    urgency: string;
    status: string;
  }
  
  const handleFilterChange = (filterType: FilterType, value: string): void => {
    // Assuming filters are stored in a state or a similar context
    setFilters((prevFilters: Filters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  
    // Add any additional logic, e.g., fetching filtered data
    console.log(`Filter updated: ${filterType} = ${value}`);
  };
  
  // Example usage in a React component:
  // const [filters, setFilters] = React.useState<Filters>({
  //   urgency: "All",
  //   status: "All",
  // });

  // Color and styling helpers
  const getUrgencyStyles = (urgency) => {
    const styles = {
      Critical: "bg-red-100 text-red-800 border-red-200",
      High: "bg-orange-100 text-orange-800 border-orange-200",
      Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Low: "bg-green-100 text-green-800 border-green-200",
    };
    return styles[urgency] || styles.Low;
  };

  const getStatusStyles = (status) => {
    const styles = {
      Approved: "bg-green-100 text-green-700 border-green-300",
      Pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
      Rejected: "bg-red-100 text-red-700 border-red-300",
    };
    return styles[status] || "bg-gray-100 text-gray-700 border-gray-300";
  };

  // Filtering logic
  const filteredRequests = resourceRequests.filter(request => 
    (filters.urgency === "All" || request.urgency === filters.urgency) &&
    (filters.status === "All" || request.status === filters.status)
  );

  // Render filter buttons
  const renderFilterButtons = (type, options) => {
    return options.map(option => (
      <button
        key={option}
        onClick={() => setFilters(prev => ({ ...prev, [type]: option }))}
        className={`
          px-3  py-1 rounded-full text-xs transition-colors
          ${filters[type] === option 
            ? "bg-blue-500 text-white" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
        `}
      >
        {option}
      </button>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-10 space-x-4">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-800">
            Disaster Resource Management
          </h1>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
  <div className="flex flex-wrap gap-2 items-center">
    <label className="text-gray-700 text-sm font-medium mr-2" htmlFor="urgency-filter">Urgency:</label>
    <select
      id="urgency-filter"
      className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
      onChange={(e) => handleFilterChange("urgency", e.target.value)}
    >
      <option value="All">All</option>
      <option value="Critical">Critical</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
    </select>
  </div>
  <div className="flex flex-wrap gap-2 items-center">
    <label className="text-gray-700 text-sm font-medium mr-2" htmlFor="status-filter">Status:</label>
    <select
      id="status-filter"
      className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
      onChange={(e) => handleFilterChange("status", e.target.value)}
    >
      <option value="All">All</option>
      <option value="Approved">Approved</option>
      <option value="Pending">Pending</option>
      <option value="Rejected">Rejected</option>
    </select>
  </div>
</div>


        {/* Request Cards */}
        <div className="grid grid-cols-2 gap-6">
  {filteredRequests.map(request => (
    <div 
      key={request.id} 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col"
    >
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-md font-bold text-gray-900 mb-1 p-1">
                {request.organization}
              </h2>
              <p className="text-gray-600 text-xs flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                {request.disaster}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <span 
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyStyles(request.urgency)}`}
              >
                {request.urgency}
              </span>
              <span 
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyles(request.status)}`}
              >
                {request.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <p className="text-xs text-gray-500">Resource</p>
              <p className="font-medium text-xs text-gray-800">{request.resourceType}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Quantity</p>
              <p className="font-medium text-xs text-gray-800">{request.quantity}</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setSelectedRequest(request)}
          className="w-full flex items-center text-sm justify-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mt-auto"
        >
          View Details
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  ))}
</div>


        {/* Details Modal */}
        {selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-blue-600 text-white p-6 rounded-t-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-bold">{selectedRequest.organization}</h2>
                    <p className="text-blue-100 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      {selectedRequest.disaster} - {selectedRequest.location}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedRequest(null)}
                    className="text-white hover:bg-blue-700 p-2 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Current Situation
                  </h3>
                  <p className="text-gray-700">
                    {selectedRequest.progressDetails.currentSituation}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Specific Needs
                    </h3>
                    <p className="text-gray-700">
                      {selectedRequest.progressDetails.specificNeeds}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Population Affected
                    </h3>
                    <p className="text-3xl font-bold text-gray-800">
                      {selectedRequest.progressDetails.populationAffected}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Critical Challenges
                  </h3>
                  <p className="text-gray-700">
                    {selectedRequest.progressDetails.criticalChallenges}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => {
                      setResourceRequests(prev => 
                        prev.map(r => 
                          r.id === selectedRequest.id 
                            ? { ...r, status: "Approved" } 
                            : r
                        )
                      );
                      setSelectedRequest(null);
                    }}
                    className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    Approve
                  </button>
                  <button 
                    onClick={() => {
                      setResourceRequests(prev => 
                        prev.map(r => 
                          r.id === selectedRequest.id 
                            ? { ...r, status: "Rejected" } 
                            : r
                        )
                      );
                      setSelectedRequest(null);
                    }}
                    className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Reject
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