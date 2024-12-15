"use client";
import React, { useEffect, useState } from "react";
import { FileText, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import jsPDF from "jspdf";
import { AiOutlineLoading } from "react-icons/ai";

const DisasterSituationReport = () => {
  const [disasterData, setDisasterData] = useState<
    { id: string; name: string }[]
  >([]);
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    disasterStatus: {
      weatherCondition: {
        primary: "",
        details: [],
        severity: 0,
      },
      affectedAreas: [
        {
          name: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
          impactLevel: 0,
        },
      ],
      affectedPopulation: {
        total: 0,
        demographics: {
          children: 0,
          adults: 0,
          elderly: 0,
        },
        vulnerableGroups: [],
      },
    },
    casualties: {
      types: [
        {
          category: "",
          count: 0,
        },
      ],
      firstAid: [
        {
          treatmentType: "",
          treatmentLocation: "",
          personnelInvolved: 0,
        },
      ],
      communication: {
        status: "operational" as const,
        methods: [],
      },
    },
    materialFlow: {
      foodMaterials: [
        {
          type: "",
          quantity: 0,
          distributionMethod: "",
        },
      ],
      airDropping: {
        active: false,
        frequency: 0,
        locations: [],
      },
      transport: [
        {
          type: "",
          capacity: 0,
          activeVehicles: 0,
        },
      ],
      medicalAid: [
        {
          type: "",
          quantity: 0,
          destination: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
    },
    teamArrival: {
      centralTeams: [
        {
          name: "",
          arrivalTime: Date.now(),
          personnelCount: 0,
        },
      ],
      internationalTeams: [
        {
          country: "",
          organizationName: "",
          arrivalTime: Date.now(),
          personnelCount: 0,
        },
      ],
      others: [
        {
          name: "",
          type: "",
          arrivalTime: Date.now(),
        },
      ],
    },
    summary: {
      overview: "",
      criticalObservations: [],
      recommendedActions: [],
    },
  });

  // New state to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    disasterStatus: true,
    casualties: false,
    materialFlow: false,
    teamArrival: false,
    quickResponse: true,
  });

  // Toggle section expansion
  const toggleSection = (section: any) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle input changes
  const handleChange = (section: any, field: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleAIAutofill = async (retryCount = 0) => {
    setIsLoading(true);
    try {
      console.log(disasterData);
      const disasterByName = disasterData.find(
        (disaster) => disaster.name === selectedDisaster
      );
      console.log(disasterByName);
  
      const prompt =
        "Make a structured JSON object as following: \n" +
        `{
    disasterStatus: {
      weatherCondition: {
        primary: "",
        details: [],
        severity: 0,
      },
      affectedAreas: [
        {
          name: "",
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
          impactLevel: 0,
        },
      ],
      affectedPopulation: {
        total: 0,
        demographics: {
          children: 0,
          adults: 0,
          elderly: 0,
        },
        vulnerableGroups: [],
      },
    },
    casualties: {
      types: [
        {
          category: "",
          count: 0,
        },
      ],
      firstAid: [
        {
          treatmentType: "",
          treatmentLocation: "",
          personnelInvolved: 0,
        },
      ],
      communication: {
        status: "operational" as const,
        methods: [],
      },
    },
    materialFlow: {
      foodMaterials: [
        {
          type: "",
          quantity: 0,
          distributionMethod: "",
        },
      ],
      airDropping: {
        active: false,
        frequency: 0,
        locations: [],
      },
      transport: [
        {
          type: "",
          capacity: 0,
          activeVehicles: 0,
        },
      ],
      medicalAid: [
        {
          type: "",
          quantity: 0,
          destination: {
            latitude: 0,
            longitude: 0,
          },
        },
      ],
    },
    teamArrival: {
      centralTeams: [
        {
          name: "",
          arrivalTime: Date.now(),
          personnelCount: 0,
        },
      ],
      internationalTeams: [
        {
          country: "",
          organizationName: "",
          arrivalTime: Date.now(),
          personnelCount: 0,
        },
      ],
      others: [
        {
          name: "",
          type: "",
          arrivalTime: Date.now(),
        },
      ],
    },
    summary: {
      overview: "",
      criticalObservations: [],
      recommendedActions: [],
    },
  }` +
        "\n\n" +
        "The Disaster details are as follows: \n" +
        JSON.stringify(disasterByName) +
        "\n\n" +
        "Don't use the previous reports instead analyze the current situation and add sample details. Don't leave empty fields.";
  
      console.log(prompt);
  
      const response = await fetch("http://localhost:5000/pro-model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: prompt }),
      });
  
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      const text = data.response;
  
      // Extract JSON string between markers
      const jsonString = text.replace(/```json\n([\s\S]*?)```/gm, "$1").trim();
      const parsedData = JSON.parse(jsonString);
  
      console.log(parsedData);
      setFormData(parsedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error in handleAIAutofill:", error);
  
      if (retryCount < 3) {
        console.log(`Retrying API call (${retryCount + 1}/3)...`);
        await handleAIAutofill(retryCount + 1); // Retry the function
      } else {
        console.error("Failed after 3 retries. Please check the API or the input data.");
      }
    }
  };

  // PDF Generation Function (remains the same as previous implementation)
  const generatePDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;

    // Color Palette
    const colors = {
      primary: [33, 150, 243], // Vibrant Blue
      secondary: [0, 121, 107], // Teal
      textDark: [33, 33, 33], // Almost Black
      textLight: [117, 117, 117], // Gray
      background: [250, 250, 250], // Light Gray
    };

    // Function to add a new page with header and watermark
    const addPage = () => {
      pdf.addPage();

      // Background
      pdf.setFillColor(...colors.background);
      pdf.rect(0, 0, pageWidth, pageHeight, "F");

      // Header
      pdf.setFillColor(...colors.primary);
      pdf.rect(0, 0, pageWidth, 30, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(18);
      pdf.text("Disaster Management Situation Report", pageWidth / 2, 20, {
        align: "center",
      });

      // Watermark
      pdf.setTextColor(200, 200, 200);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(60);
      pdf.text("CONFIDENTIAL", pageWidth / 2, pageHeight / 2, {
        align: "center",
        angle: -45,
        opacity: 0.1,
      });

      return 40; // Return initial y-position
    };

    // Initial page setup (without adding a new page)
    // Background
    pdf.setFillColor(...colors.background);
    pdf.rect(0, 0, pageWidth, pageHeight, "F");

    // Header
    pdf.setFillColor(...colors.primary);
    pdf.rect(0, 0, pageWidth, 30, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Disaster Management Situation Report", pageWidth / 2, 20, {
      align: "center",
    });

    // Watermark
    pdf.setTextColor(200, 200, 200);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(60);
    pdf.text("CONFIDENTIAL", pageWidth / 2, pageHeight / 2, {
      align: "center",
      angle: -45,
      opacity: 0.1,
    });

    let yPosition = 40; // Initial y-position after header

    // Color for section headers
    const sectionColors = {
      "Disaster Status": colors.primary,
      Casualties: [244, 67, 54], // Red
      "Material Flow": [76, 175, 80], // Green
      "Team Arrival": [103, 58, 183], // Purple
    };

    // Sections to render (excluding Quick Response)
    const sections = [
      { title: "Disaster Status", data: formData.disasterStatus },
      { title: "Casualties", data: formData.casualties },
      { title: "Material Flow", data: formData.materialFlow },
      { title: "Team Arrival", data: formData.teamArrival },
    ];

    // Render sections with page break handling
    sections.forEach((section) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 50) {
        yPosition = addPage();
      }

      // Section Header
      pdf.setFillColor(...(sectionColors[section.title] || colors.secondary));
      pdf.setTextColor(255, 255, 255);
      pdf.rect(10, yPosition, pageWidth - 20, 10, "F");
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.text(section.title, pageWidth / 2, yPosition + 8, {
        align: "center",
      });

      yPosition += 15;

      pdf.setTextColor(...colors.textDark);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);

      // Render section data
      Object.entries(section.data).forEach(([key, value]) => {
        // Check if we need a new page
        if (yPosition > pageHeight - 30) {
          yPosition = addPage();
        }

        const formattedKey = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());

        // Light gray line for separation
        pdf.setDrawColor(230, 230, 230);
        pdf.line(15, yPosition + 3, pageWidth - 15, yPosition + 3);

        pdf.setTextColor(...colors.textDark);
        pdf.text(formattedKey + ":", 15, yPosition + 10);

        pdf.setTextColor(...colors.textLight);
        pdf.text(value || "Not provided", 60, yPosition + 10);

        yPosition += 10;
      });

      yPosition += 15;
    });

    // Quick Response Section
    if (yPosition > pageHeight - 50) {
      yPosition = addPage();
    }

    // Adjust yPosition to push the heading down
    yPosition += 10;
    pdf.setFillColor(...colors.secondary);
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(15);
    pdf.rect(10, yPosition, pageWidth - 20, 10, "F");
    pdf.text("Quick Response", pageWidth / 2, yPosition + 8, {
      align: "center",
    });

    yPosition += 15;
    pdf.setTextColor(...colors.textDark);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);

    // Split text and handle multi-page text
    const splitText = pdf.splitTextToSize(
      formData.quickResponse || "Not provided",
      pageWidth - 30
    );

    // Render split text with page break handling
    for (let i = 0; i < splitText.length; i++) {
      if (yPosition > pageHeight - 30) {
        yPosition = addPage();
      }

      pdf.text(splitText[i], 15, yPosition);
      yPosition += 7;
    }

    // Footer
    pdf.setTextColor(...colors.textLight);
    pdf.setFontSize(10);
    pdf.text(
      `Generated on: ${new Date().toLocaleString()}`,
      15,
      pageHeight - 10
    );

    pdf.save("Disaster_Situation_Report.pdf");
  };

  // Reusable section renderer
  const renderField = (
    value: any,
    path: string[],
    onChange: (value: any) => void
  ) => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      return Object.entries(value).map(([key, val]) => (
        <div key={key} className="ml-4">
          <label className="block text-sm font-medium text-gray-700">
            {key}
          </label>
          {renderField(val, [...path, key], (newVal) => {
            const newValue = { ...value, [key]: newVal };
            onChange(newValue);
          })}
        </div>
      ));
    }

    if (Array.isArray(value)) {
      return (
        <div className="flex flex-col space-y-2">
          {value.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {renderField(item, [...path, index.toString()], (newVal) => {
                const newArray = [...value];
                newArray[index] = newVal;
                onChange(newArray);
              })}
            </div>
          ))}
          <button
            onClick={() =>
              onChange([...value, Array.isArray(value[0]) ? [] : ""])
            }
            className="text-blue-500 text-sm"
          >
            + Add Item
          </button>
        </div>
      );
    }

    if (typeof value === "boolean") {
      return (
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="rounded border-gray-300"
        />
      );
    }

    return (
      <input
        type={typeof value === "number" ? "number" : "text"}
        value={value}
        onChange={(e) =>
          onChange(
            typeof value === "number" ? Number(e.target.value) : e.target.value
          )
        }
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    );
  };

  const renderSection = (title: string, sectionKey: string, data: any) => {
    return (
      <div className="mb-6 border border-gray-200 rounded-lg">
        <div
          onClick={() => toggleSection(sectionKey)}
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
        >
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          {expandedSections[sectionKey] ? <ChevronUp /> : <ChevronDown />}
        </div>

        {expandedSections[sectionKey] && (
          <div className="p-4">
            {renderField(data, [sectionKey], (newValue) => {
              setFormData((prev) => ({
                ...prev,
                [sectionKey]: newValue,
              }));
            })}
          </div>
        )}
      </div>
    );
  };

  const handleStoreReport = async (valueDisaster: string) => {
    // Check for empty fields
    const isEmptyField = Object.values(formData).some((section) =>
      typeof section === "object"
        ? Object.values(section).some((field) => field === "")
        : section === ""
    );

    if (isEmptyField) {
      alert("Please fill in all fields before storing the report.");
      return;
    }

    const id = findIdUsingName(valueDisaster);

    // Create JSON data
    const reportData = {
      ...formData,
      submissionTime: new Date().toISOString(),
      disasterId: id,
    };

    // Send data to API
    try {
      const response = await fetch(
        "/api/nationalDisasterCommittee/situationshipReports",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reportData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to store the report");
      }

      alert("Report stored successfully!");
    } catch (error) {
      console.error("Error storing the report:", error);
      alert("An error occurred while storing the report.");
    }
  };

  const findIdUsingName = (name: string): string | undefined => {
    for (const disaster of disasterData) {
      if (disaster.name === name) {
        return disaster.id;
      }
    }
    return undefined;
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "/api/nationalDisasterCommittee/declaredDisasters"
      );
      const data = await res.json();
      setDisasterData(data.declaredDisasters);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center space-x-4">
              <FileText className="text-blue-600" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Disaster Situation Report
                </h1>
                <p className="text-gray-500 text-sm">
                  Comprehensive disaster management tool
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-8">
              <select
                onChange={(e) => {
                  const selectedDisaster = disasterData.find(
                    (disaster) => disaster.name === e.target.value
                  );
                  if (selectedDisaster) {
                    setSelectedDisaster(selectedDisaster.name);
                  } else {
                    setSelectedDisaster(null);
                  }
                }}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a disaster</option>
                {disasterData.map((disaster) => (
                  <option key={disaster.id} value={disaster.name}>
                    {disaster.name}
                  </option>
                ))}
              </select>
              {selectedDisaster != null ? (
                <button
                  onClick={() => handleStoreReport(selectedDisaster)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Store Report
                </button>
              ) : (
                <button className="px-4 py-2 bg-green-300 text-white rounded-lg cursor-not-allowed transition-colors">
                  Store Report
                </button>
              )}
            </div>
          </div>
          {selectedDisaster != null ? (
            <button
            onClick={handleAIAutofill}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? (
              <AiOutlineLoading className="animate-spin" size={16} />
            ) : (
              <Sparkles size={16} />
            )}
            <span className="text-lg">{isLoading ? "Loading..." : "AI Autofill"}</span>
          </button>
          ) : (
            <button className="flex cursor-not-allowed items-center space-x-2 px-4 py-2 bg-blue-300 text-white rounded-lg transition-colors">
              <Sparkles size={16} />
              <span className="text-lg">AI Autofill</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-8xl w-full mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        {/* Form Sections */}
        <div className="space-y-6">
          {renderSection(
            "Disaster Status",
            "disasterStatus",
            formData.disasterStatus
          )}
          {renderSection("Casualties", "casualties", formData.casualties)}
          {renderSection(
            "Material Flow",
            "materialFlow",
            formData.materialFlow
          )}
          {renderSection("Team Arrival", "teamArrival", formData.teamArrival)}
          {renderSection("Summary", "summary", formData.summary)}
        </div>

        {/* Quick Response and PDF Generation */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg">
            <div
              onClick={() => toggleSection("quickResponse")}
              className="p-4 border-b border-gray-200 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-medium text-gray-800">
                Quick Response
              </h3>
              {expandedSections.quickResponse ? <ChevronUp /> : <ChevronDown />}
            </div>
            {expandedSections.quickResponse && (
              <textarea
                placeholder="Provide a quick summary of the response efforts"
                value={formData.quickResponse}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    quickResponse: e.target.value,
                  }))
                }
                className="w-full p-4 min-h-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
          {selectedDisaster != null ? (
            <button
              onClick={generatePDF}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <FileText />
              <span>Generate Detailed PDF Report</span>
            </button>
          ) : (
            <button className="w-full cursor-not-allowed bg-blue-300 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <FileText />
              <span>Generate Detailed PDF Report</span>
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default DisasterSituationReport;
