"use client";
import React, { useState, useEffect } from "react";
import { Bell, PlusCircle, Edit2, Trash2, Send, FileText } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Notification {
  // id: string;
  type: string;
  title: string;
  message: string;
  urgency: string;
  departmentsConcerned: string[];
  dateIssued: string;
  status: string;
  // attachedFiles: any[];
  disasterId?: string; // Optional for overall notifications
}
interface Disaster {
  id: string;
  name: string;
}

const AlertNotificationPage = () => {
  const [selectionType, setSelectionType] = useState("Overall"); // "Overall" or "Specific"
  const [disasters, setDisasters] = useState([]); // List of disasters from the API
  const [selectedDisaster, setSelectedDisaster] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("createAlert");
  const [notifications, setNotifications] = useState([]);
  const [AiAlert, setAiAlert] = useState("");
  const [AiAlertLoading, setAiAlertLoading] = useState(false)

  const [filteredDisaster, setFilteredDisaster] = useState(null);

  useEffect(() => {
    console.log("Selected Disaster:", selectedDisaster);
    console.log("Disasters:", disasters);
  }, [selectedDisaster, disasters]);

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "Flood Alert",
      urgency: "Critical",
      date: "2024-12-10",
      status: "Sent",
      message:
        "Severe flooding expected in low-lying areas. Residents advised to evacuate immediately.",
      audience: ["Citizens", "NGOs"],
    },
    {
      id: 2,
      title: "Earthquake Preparedness",
      urgency: "High",
      date: "2024-12-09",
      status: "Draft",
      message:
        "Seismic activity detected. Emergency response teams on standby.",
      audience: ["Organizations"],
    },
  ]);

  // Fetch disasters from the API
  const fetchDisasters = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        "/api/nationalDisasterCommittee/declaredDisasters"
      );
      if (response.data.success) {
        setDisasters(response.data.declaredDisasters);
      } else {
        setError(response.data.message || "Failed to fetch disasters");
      }
    } catch (err) {
      console.log(err.message || "An error occurred while fetching disasters");
    } finally {
      setLoading(false);
    }
  };

  // Handle selection type change
  const handleSelectionTypeChange = (e) => {
    const value = e.target.value;
    setSelectionType(value);
    setSelectedDisaster(null); // Reset selected disaster

    if (value === "Specific") {
      fetchDisasters(); // Fetch disasters only for "Specific"
    }
  };

  const [newAlert, setNewAlert] = useState({
    title: "",
    message: "",
    urgency: "low",
    audience: [],
    states: [],
    districts: [],
    // attachedFiles: [],
  });

  const [filters, setFilters] = useState({
    urgency: "",
    status: "",
  });

  const handleCreateAlert = async (e) => {
    e.preventDefault();
    if (selectionType.toLowerCase() != "overall" && selectedDisaster === "") {
      alert("Please select a disaster before creating the alert.");
      return;
    }
    console.log(newAlert);
    const departmentConcerned = [
      ...newAlert.districts,
      ...newAlert.states,
      ...newAlert.audience,
    ];

    const notification: Notification = {
      // id: uuidv4(),
      type: "alert",
      departmentsConcerned: departmentConcerned,
      urgency: newAlert.urgency.toLowerCase(),
      dateIssued: new Date().toISOString(),
      status: "unread",
      // departmentsConcerned:departmentConcerned,
      title: newAlert.title,
      // attachedFiles: newAlert.attachedFiles,
      message: newAlert.message,
      ...(selectionType.toLowerCase() !== "overall" && {
        disasterId: selectedDisaster,
      }),
    };
    const apiUrl =
      selectionType === "Overall"
        ? "/api/nationalDisasterCommittee/overallNotifications"
        : "/api/nationalDisasterCommittee/disasterNotifications";

   
    console.log(notification, apiUrl, selectedDisaster);
    try {
      const response = await axios.post(apiUrl, notification);

      if (response.data.success) {
        alert("Notification added successfully");
        setNewAlert({
          title: "",
          message: "",
          urgency: "low",
          audience: [],
          states: [],
          districts: [],
          attachedFiles: [],
        });
      } else {
        alert(response.data.message || "Failed to add notification");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the notification");
    }
  };

  const filteredAlerts = notifications.filter(
    (alert) =>
      (!filters.urgency || alert.urgency.toLowerCase() === filters.urgency.toLowerCase()) &&
      (!filters.status || alert.status.toLowerCase() === filters.status.toLowerCase())
  );

  const tabs = [
    {
      name: "createAlert",
      label: "Create Alert",
      icon: <PlusCircle className="mr-2 w-4 h-4" />,
    },
    {
      name: "manageAlerts",
      label: "Manage Alerts",
      icon: <Edit2 className="mr-2 w-4 h-4" />,
    },
    {
      name: "aiSuggestions",
      label: "AI Suggestions",
      icon: <FileText className="mr-2 w-4 h-4" />,
    },
  ];
  const [states, setStates] = useState(["State 1", "State 2", "State 3"]); // Replace with dynamic state data
  const [districts, setDistricts] = useState([
    "District 1",
    "District 2",
    "District 3",
  ]); // Replace with dynamic district data

  const [allStatesSelected, setAllStatesSelected] = useState(false);
  const [allDistrictsSelected, setAllDistrictsSelected] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAlert((prev) => ({ ...prev, [name]: value }));
  };

  const handleAudienceChange = (audience) => {
    setNewAlert((prev) => {
      const newAudience = prev.audience.includes(audience)
        ? prev.audience.filter((a) => a !== audience)
        : [...prev.audience, audience];
      return { ...prev, audience: newAudience };
    });
  };

  const handleStateChange = (state) => {
    setNewAlert((prev) => {
      const newStates = prev.states.includes(state)
        ? prev.states.filter((s) => s !== state)
        : [...prev.states, state];
      return { ...prev, states: newStates };
    });
  };

  const handleDistrictChange = (district) => {
    setNewAlert((prev) => {
      const newDistricts = prev.districts.includes(district)
        ? prev.districts.filter((d) => d !== district)
        : [...prev.districts, district];
      return { ...prev, districts: newDistricts };
    });
  };

  const toggleAllStates = () => {
    setAllStatesSelected((prev) => !prev);
    setNewAlert((prev) => ({
      ...prev,
      states: !allStatesSelected ? states : [],
    }));
  };

  const toggleAllDistricts = () => {
    setAllDistrictsSelected((prev) => !prev);
    setNewAlert((prev) => ({
      ...prev,
      districts: !allDistrictsSelected ? districts : [],
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const attachedFiles = files.map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
      url: URL.createObjectURL(file), // Replace with actual URL after upload
    }));
    setNewAlert((prev) => ({
      ...prev,
      attachedFiles: [...prev.attachedFiles, ...attachedFiles],
    }));
  };

  const fetchNotifications = async () => {
    let apiUrl = "";

    if (selectionType === "Overall") {
      apiUrl = "/api/nationalDisasterCommittee/overallNotifications";
      try {
        const response = await fetch(
          "/api/nationalDisasterCommittee/overallNotifications"
        );
        if (response.ok) {
          const data = await response.json();
          setNotifications(data.notifications);
          console.log(data.notifications);
        } else {
          console.error("Failed to fetch notifications", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    } else if (selectionType === "Specific" && selectedDisaster !== "") {
      const response = await fetch(
        "http://localhost:3000/api/nationalDisasterCommittee/disasterNotifications",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedDisaster }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Notifications:", data.notifications);
      } else {
        console.error("Failed to fetch notifications", response.statusText);
      }
      apiUrl = `/api/nationalDisasterCommittee/disasterNotifications?disasterId=${selectedDisaster}`;
    }

    if (apiUrl) {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setNotifications(data.notifications);
          console.log(data.notifications);
        } else {
          console.error("Failed to fetch notifications", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    }
  };

  const handleEditNotification = async (
    notificationId: string,
    updatedData: any
  ) => {
    try {
      const response = await fetch(
        `/api/nationalDisasterCommittee/editNotification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ notificationId, updatedData }),
        }
      );

      if (response.ok) {
        // Re-fetch notifications after edit
        fetchNotifications();
      } else {
        console.error("Failed to edit notification", response.statusText);
      }
    } catch (error) {
      console.error("Error editing notification:", error);
    }
  };

  // Function to handle delete notification
  const handleDeleteNotification = async (notificationId: string) => {
    try {
      const response = await fetch(
        `/api/nationalDisasterCommittee/deleteNotification`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ notificationId }),
        }
      );

      if (response.ok) {
        // Re-fetch notifications after delete
        fetchNotifications();
      } else {
        console.error("Failed to delete notification", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };
  const generateAlert = async () => {
    setAiAlertLoading(true)
    const disasterNow = JSON.stringify(
      disasters.find((disaster) => disaster.id === selectedDisaster)
    );
    console.log("Generating alert for disaster:", disasterNow);
    const PROMPT = `Generate an alert for the following disaster - ${disasterNow}`;

    const response = await fetch("http://localhost:5000/pro-model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: PROMPT }),
    });
    const data = await response.json();
    setAiAlert(data.response);
    setAiAlertLoading(false)
  };

  // Call the fetch function when selectionType or selectedDisaster changes
  // useEffect(() => {
  //   fetchNotifications();
  // }, [selectionType, selectedDisaster]);

  return (
    <div className="min-h-screen w-full bg-white font-sans p-4">
      <div className="grid md:grid-cols-2 ">
        <div className="mb-4">
          <label htmlFor="selectionType" className="block font-medium mb-2">
            Select Type:
          </label>
          <select
            id="selectionType"
            value={selectionType}
            onChange={handleSelectionTypeChange}
            className="
            block
            pl-3 
            pr-10 
            py-2 
            text-base 
            border 
            border-gray-300 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-blue-500 
            sm:text-sm 
            rounded-md
          "
          >
            {/* <option value="">-- Select --</option> */}
            <option value="Overall">Overall</option>
            <option value="Specific">Specific</option>
          </select>
        </div>

        {/* Conditional rendering for Specific */}
        {selectionType === "Specific" && (
          <div className="mb-4">
            <label htmlFor="disaster" className="block font-medium mb-2">
              Select Disaster:
            </label>
            {loading ? (
              <p>Loading disasters...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <select
                id="disaster"
                value={selectedDisaster}
                onChange={(e) => setSelectedDisaster(e.target.value)}
                className="
            block
            pl-3 
            pr-10 
            py-2 
            text-base 
            border 
            border-gray-300 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-blue-500 
            sm:text-sm 
            rounded-md
          "
              >
                <option value="">-- Select Disaster --</option>
                {disasters.map((disaster) => (
                  <option key={disaster.id} value={disaster.id}>
                    {disaster.name} ({disaster.level})
                  </option>
                ))}
              </select>
            )}
          </div>
        )}
      </div>
      <div className="max-w-8xl mx-auto">
        
        <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => {
                  setActiveTab(tab.name);
                  if (tab.name === "manageAlerts") {
                    fetchNotifications(); // Call fetchNotifications if "manageAlerts" tab is clicked
                  }
                }}
                className={`
                  flex items-center justify-center text-sm w-full py-4 transition-all duration-300
                  ${
                    activeTab === tab.name
                      ? "bg-blue-50 text-blue-600 border-b-4 border-blue-600"
                      : "text-gray-500 hover:bg-gray-50"
                  }
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Create Alert Tab */}
          {activeTab === "createAlert" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <PlusCircle className="mr-3 w-6 h-6 text-blue-600" />
                Create New Alert
              </h2>
              <form onSubmit={handleCreateAlert} className="space-y-5">
                {/* Title */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Alert Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newAlert.title}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="Enter alert title"
                    required
                  />
                </div>
                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={newAlert.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="Detailed alert message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                {/* Audience */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Target Audience
                  </label>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Urgency
                      </label>
                      <select
                        name="urgency"
                        value={newAlert.urgency}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        {["Critical", "High", "Medium", "Low"].map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Target Audience
                      </label>
                      <div className="space-y-4">
                        {/* Static Categories */}
                        <div className="flex space-x-4">
                          {["Citizens", "NGOs"].map((audience) => (
                            <label
                              key={audience}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                checked={newAlert.audience.includes(audience)}
                                onChange={() => handleAudienceChange(audience)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                              />
                              <span>{audience}</span>
                            </label>
                          ))}
                        </div>
                        {/* State Organizations */}
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            State Organizations
                          </label>
                          <div className="flex flex-wrap items-center gap-4">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={allStatesSelected}
                                onChange={toggleAllStates}
                                className="form-checkbox h-5 w-5 text-blue-600"
                              />
                              <span>Select All States</span>
                            </label>
                            {states.map((state) => (
                              <label
                                key={state}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="checkbox"
                                  checked={newAlert.states.includes(state)}
                                  onChange={() => handleStateChange(state)}
                                  className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span>{state}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        {/* District Organizations */}
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            District Organizations
                          </label>
                          <div className="flex flex-wrap items-center gap-4">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={allDistrictsSelected}
                                onChange={toggleAllDistricts}
                                className="form-checkbox h-5 w-5 text-blue-600"
                              />
                              <span>Select All Districts</span>
                            </label>
                            {districts.map((district) => (
                              <label
                                key={district}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="checkbox"
                                  checked={newAlert.districts.includes(
                                    district
                                  )}
                                  onChange={() =>
                                    handleDistrictChange(district)
                                  }
                                  className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span>{district}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Attachments */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Attachments
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="block text-gray-700 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  Send Alert
                </button>
              </form>
            </div>
          )}

          {/* Manage Alerts Tab */}
          {activeTab === "manageAlerts" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Manage Alerts
                </h2>
                <div className="flex space-x-4">
                  <select
                    value={filters.urgency}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        urgency: e.target.value.toLowerCase(),
                      }))
                    }
                    className="p-2 border rounded-lg"
                  >
                    <option value="">All Urgencies</option>
                    {["Critical", "High", "Medium", "Low"].map((level) => (
                      <option key={level} value={level.toLowerCase()}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filters.status}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        status: e.target.value.toLowerCase(),
                      }))
                    }
                    className="p-2 border rounded-lg"
                  >
                    <option value="">All Statuses</option>
                    <option value="Sent">Sent</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Title</th>
                      <th className="p-3 text-left">Urgency</th>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAlerts.map((alert) => (
                      <tr
                        key={alert.id}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-3">{alert.title}</td>
                        <td className="p-3">
                          <span
                            className={`
                            px-2 py-1 rounded-full text-xs font-semibold
                            ${
                              alert.urgency.toLowerCase() === "critical"
                                ? "bg-red-100 text-red-800"
                                : alert.urgency.toLowerCase() === "high"
                                ? "bg-orange-100 text-orange-800"
                                : alert.urgency.toLowerCase() === "medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }
                          `}
                          >
                            {alert.urgency}
                          </span>
                        </td>
                        <td className="p-3">
                          {alert.dateIssued.split("T")[0]}
                        </td>
                        <td className="p-3">
                          <span
                            className={`
                            px-2 py-1 rounded-full text-xs font-semibold
                            ${
                              alert.status === "Sent"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }
                          `}
                          >
                            {alert.status}
                          </span>
                        </td>
                        <td className="p-3 flex space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => handleEditNotification(alert.id)}
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleDeleteNotification(alert.id)}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* AI Suggestions Tab */}
          {activeTab === "aiSuggestions" && (
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
            <div className="p-8 text-center">
              <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
              </div>
      
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
                AI-Powered Alert Drafting
              </h2>
      
              <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Our AI assistant can help you draft more effective and targeted
                alerts by analyzing past communications and current context.
              </p>
      
              <button
                className={`
                  transition-all duration-300 ease-in-out transform 
                  px-6 py-3 rounded-xl text-white font-semibold text-lg
                  focus:outline-none focus:ring-2 focus:ring-offset-2 
                  ${selectedDisaster
                    ? "bg-blue-600 hover:bg-blue-700 hover:scale-105 focus:ring-blue-400"
                    : "bg-gray-400 cursor-not-allowed"
                  }`}
                disabled={!selectedDisaster}
                onClick={generateAlert}
              >
                {AiAlertLoading ? (
    <svg
      className="animate-spin h-5 w-5 text-white mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  ) : (
    "Generate Alert"
  )}
              </button>
      
              {AiAlert && (
                <div className="mt-10 bg-blue-50 rounded-2xl p-6 text-left shadow-inner">
                  <h3 className="text-xl font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2">
                    AI Alert Draft
                  </h3>
                  <div className="prose prose-blue max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          >
                            {children}
                          </a>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-outside ml-6 space-y-2">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-outside ml-6 space-y-2">
                            {children}
                          </ol>
                        ),
                        h1: ({ children }) => (
                          <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-2">{children}</h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-xl font-bold text-gray-800 mt-3 mb-2">{children}</h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-lg font-bold text-gray-700 mt-2 mb-2">{children}</h3>
                        ),
                        p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                      }}
                    >
                      {AiAlert}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertNotificationPage;
