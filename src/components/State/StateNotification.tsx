"use client";
import React, { useState, useEffect } from "react";
import {
  Bell,
  PlusCircle,
  Edit2,
  Trash2,
  Send,
  FileText,
  Filter,
  Search,
} from "lucide-react";

const AlertNotificationPage = () => {
  const [activeTab, setActiveTab] = useState("createAlert");
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

  const [newAlert, setNewAlert] = useState({
    title: "",
    message: "",
    urgency: "Medium",
    audience: [],
    states: [], // Ensure this is initialized as an empty array
    districts: [], // Same for districts if required
  });

  const [filters, setFilters] = useState({
    urgency: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAlert((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAudienceChange = (audience: any) => {
    setNewAlert((prev) => ({
      ...prev,
      audience: prev.audience.includes(audience)
        ? prev.audience.filter((a) => a !== audience)
        : [...prev.audience, audience],
    }));
  };

  const handleCreateAlert = (e) => {
    e.preventDefault();
    const newAlertItem = {
      ...newAlert,
      id: alerts.length + 1,
      date: new Date().toISOString().split("T")[0],
      status: "Draft",
    };
    setAlerts([...alerts, newAlertItem]);
    // Reset form
    setNewAlert({
      title: "",
      message: "",
      urgency: "Medium",
      audience: [],
      attachments: null,
    });
  };

  const filteredAlerts = alerts.filter(
    (alert) =>
      (!filters.urgency || alert.urgency === filters.urgency) &&
      (!filters.status || alert.status === filters.status)
  );

  const tabs = [
    {
      name: "createAlert",
      label: "Create Alert",
      icon: <PlusCircle className="mr-2 w-5 h-5" />,
    },
    {
      name: "manageAlerts",
      label: "Manage Alerts",
      icon: <Edit2 className="mr-2 w-5 h-5" />,
    },
    {
      name: "aiSuggestions",
      label: "AI Suggestions",
      icon: <FileText className="mr-2 w-5 h-5" />,
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

  const handleStateChange = (state) => {
    setNewAlert((prev) => ({
      ...prev,
      states: prev.states.includes(state)
        ? prev.states.filter((s) => s !== state)
        : [...prev.states, state],
    }));
  };

  const handleDistrictChange = (district) => {
    setNewAlert((prev) => ({
      ...prev,
      districts: prev.districts.includes(district)
        ? prev.districts.filter((d) => d !== district)
        : [...prev.districts, district],
    }));
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

  return (
    <div className="min-h-screen w-full bg-white font-sans p-4">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Bell className="mr-3 w-8 h-8 text-blue-600" />
            Alert Management System
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`
                  flex items-center justify-center text-md w-full py-4 transition-all duration-300
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
                                checked={newAlert.districts.includes(district)}
                                onChange={() => handleDistrictChange(district)}
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
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Attachments
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      className="block text-gray-700 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  <Send className="mr-2 w-5 h-5" /> Send Alert
                </button>
              </form>
            </div>
          )}

          {/* Manage Alerts Tab */}
          {activeTab === "manageAlerts" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Manage Alerts
                </h2>
                <div className="flex space-x-4">
                  <select
                    value={filters.urgency}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        urgency: e.target.value,
                      }))
                    }
                    className="p-2 border rounded-lg"
                  >
                    <option value="">All Urgencies</option>
                    {["Critical", "High", "Medium", "Low"].map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filters.status}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        status: e.target.value,
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
                              alert.urgency === "Critical"
                                ? "bg-red-100 text-red-800"
                                : alert.urgency === "High"
                                ? "bg-orange-100 text-orange-800"
                                : alert.urgency === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }
                          `}
                          >
                            {alert.urgency}
                          </span>
                        </td>
                        <td className="p-3">{alert.date}</td>
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
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
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
            <div className="text-center py-12">
              <FileText className="mx-auto w-16 h-16 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                AI-Powered Alert Drafting
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Our AI assistant can help you draft more effective and targeted
                alerts by analyzing past communications and current context.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg max-w-md mx-auto">
                <p className="italic text-blue-800">
                  "Coming Soon: Advanced AI suggestions to optimize your
                  emergency communications."
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertNotificationPage;
