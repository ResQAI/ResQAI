"use client";
import React, { useState } from "react";
import { jsPDF } from "jspdf";
import {
  ChevronDown,
  FileText,
  MapPin,
  CloudRain,
  Users,
  Truck,
  Clipboard,
  Sparkles,
} from "lucide-react";

const SituationReport = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [formData, setFormData] = useState({
    disasterStatus: {
      weatherCondition: "",
      affectedAreas: "",
      affectedPopulation: "",
    },
    casualties: {
      types: "",
      firstAid: "",
      communication: "",
    },
    materialFlow: {
      foodMaterials: "",
      airDropping: "",
      transport: "",
      medicalAid: "",
    },
    teamArrival: {
      centralTeams: "",
      internationalTeams: "",
      others: "",
    },
    quickResponse: "",
  });

  // AI Autofill Mock Function (you'd replace this with actual AI API call)
  const handleAIAutofill = () => {
    const mockAIData = {
      disasterStatus: {
        weatherCondition: "Severe Tropical Cyclone",
        affectedAreas: "Coastal Regions of Southeast Asia",
        affectedPopulation: "250,000 People",
      },
      casualties: {
        types: "Flooding, Wind Damage, Infrastructure Collapse",
        firstAid: "Emergency Medical Shelters Established",
        communication: "Satellite and Mobile Communication Deployed",
      },
      materialFlow: {
        foodMaterials: "Emergency Food Kits Dispatched",
        airDropping: "Humanitarian Supplies via Helicopter",
        transport: "Road and Maritime Rescue Corridors Opened",
        medicalAid: "Field Hospitals and Medical Supplies Mobilized",
      },
      teamArrival: {
        centralTeams: "National Disaster Response Force Deployed",
        internationalTeams: "UN Humanitarian Assistance Team Arrived",
        others: "Local NGO Support Coordinated",
      },
      quickResponse:
        "Immediate evacuation of vulnerable populations, establishment of emergency shelters, and initiation of search and rescue operations. Coordinated efforts between local authorities, national government, and international aid organizations to mitigate disaster impact and provide essential support.",
    };

    setFormData(mockAIData);
  };

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
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

  const renderSection = (title, fields, sectionKey, icon) => {
    const isActive = activeSection === sectionKey;

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div
          onClick={() => setActiveSection(isActive ? null : sectionKey)}
          className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <div className="flex items-center space-x-3">
            {icon}
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          </div>
          <ChevronDown
            className={`transform transition-transform ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </div>
        {isActive && (
          <div className="p-4 space-y-3">
            {fields.map((field) => (
              <input
                key={field.name}
                type="text"
                placeholder={field.placeholder}
                value={formData[sectionKey][field.name]}
                onChange={(e) =>
                  handleChange(sectionKey, field.name, e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 text-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <FileText size={32} />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Disaster Situation Report
              </h1>
              <p className="text-blue-100 text-sm sm:text-base mt-1">
                Comprehensive disaster reporting tool
              </p>
            </div>
          </div>
          <button
            onClick={handleAIAutofill}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-transform transform hover:scale-105"
          >
            <Sparkles size={20} />
            <span className="text-sm font-medium">AI Autofill</span>
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {renderSection(
            "Disaster Status",
            [
              { name: "weatherCondition", placeholder: "Weather Condition" },
              { name: "affectedAreas", placeholder: "Affected Areas" },
              {
                name: "affectedPopulation",
                placeholder: "Affected Population",
              },
            ],
            "disasterStatus",
            <CloudRain className="text-blue-600" />
          )}

          {renderSection(
            "Casualties",
            [
              { name: "types", placeholder: "Types of Casualties" },
              { name: "firstAid", placeholder: "First Aid" },
              { name: "communication", placeholder: "Communication" },
            ],
            "casualties",
            <Users className="text-red-600" />
          )}

          {renderSection(
            "Material Flow",
            [
              { name: "foodMaterials", placeholder: "Food and Materials" },
              { name: "airDropping", placeholder: "Air Dropping" },
              { name: "transport", placeholder: "Transport" },
              { name: "medicalAid", placeholder: "Medical Aid" },
            ],
            "materialFlow",
            <Truck className="text-green-600" />
          )}

          {renderSection(
            "Team Arrival",
            [
              { name: "centralTeams", placeholder: "Central Teams" },
              {
                name: "internationalTeams",
                placeholder: "International Teams",
              },
              { name: "others", placeholder: "Others" },
            ],
            "teamArrival",
            <MapPin className="text-purple-600" />
          )}

          <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center p-4 bg-gray-100">
              <Clipboard className="text-blue-600 mr-3" />
              <h2 className="text-lg font-semibold text-gray-800">
                Quick Response
              </h2>
            </div>
            <textarea
              placeholder="Provide a quick summary of the response efforts"
              value={formData.quickResponse}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  quickResponse: e.target.value,
                }))
              }
              className="w-full p-4 min-h-[150px] border-t border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <button
            onClick={generatePDF}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
          >
            <FileText />
            <span>Generate Detailed PDF Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SituationReport;
