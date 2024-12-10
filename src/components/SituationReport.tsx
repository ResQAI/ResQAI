"use client";
import React, { useState } from 'react';
import { FileText, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import jsPDF from 'jspdf';

const DisasterSituationReport = () => {
  const [formData, setFormData] = useState({
    disasterStatus: {
      weatherCondition: '',
      affectedAreas: '',
      affectedPopulation: ''
    },
    casualties: {
      types: '',
      firstAid: '',
      communication: ''
    },
    materialFlow: {
      foodMaterials: '',
      airDropping: '',
      transport: '',
      medicalAid: ''
    },
    teamArrival: {
      centralTeams: '',
      internationalTeams: '',
      others: ''
    },
    quickResponse: ''
  });

  // New state to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    disasterStatus: true,
    casualties: false,
    materialFlow: false,
    teamArrival: false,
    quickResponse: true
  });

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle input changes
  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

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
  const renderSection = (title, sectionKey, fields) => {
    return (
      <div className="mb-6 border border-gray-200 rounded-lg">
        <div 
          onClick={() => toggleSection(sectionKey)}
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          {expandedSections[sectionKey] ? <ChevronUp /> : <ChevronDown />}
        </div>
        
        {expandedSections[sectionKey] && (
          <div className="p-4">
            {fields.map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                value={formData[sectionKey][field]}
                onChange={(e) => handleChange(sectionKey, field, e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 py-6 flex justify-between items-center">
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
          <button
            onClick={handleAIAutofill}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Sparkles size={16} />
            <span className="text-lg">AI Autofill</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-8xl w-full mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        {/* Form Sections */}
        <div className="space-y-6">
          {renderSection('Disaster Status', 'disasterStatus', ['weatherCondition', 'affectedAreas', 'affectedPopulation'])}
          {renderSection('Casualties', 'casualties', ['types', 'firstAid', 'communication'])}
          {renderSection('Material Flow', 'materialFlow', ['foodMaterials', 'airDropping', 'transport', 'medicalAid'])}
          {renderSection('Team Arrival', 'teamArrival', ['centralTeams', 'internationalTeams', 'others'])}
        </div>

        {/* Quick Response and PDF Generation */}
        <div className="space-y-6">
          <div 
            className="bg-white border border-gray-200 rounded-lg"
          >
            <div 
              onClick={() => toggleSection('quickResponse')}
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

          <button
            onClick={generatePDF}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
          >
            <FileText />
            <span>Generate Detailed PDF Report</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default DisasterSituationReport;