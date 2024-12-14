"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  FileText,
  Eye,
  Download,
  Cloud,
  Users,
  Ambulance,
  Truck,
  AlertTriangle,
  Plane,
  Building,
  Globe,
  FileText as FileIcon,
  Loader2,
} from "lucide-react";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import { RootStateOrAny } from "react-redux";

const PreviousReports = () => {
  const reports = useSelector(
    (state: RootStateOrAny) => state.activeDisaster.situationReports
  );
  const [processedReports, setProcessedReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [analysisError, setAnalysisError] = useState(null);

  useEffect(() => {
    const convertTimes = (reports) => {
      return reports.map((report) => {
        const convertTime = (time) => new Date(time);
        return {
          ...report,
          teamArrival: {
            ...report.teamArrival,
            centralTeams: report.teamArrival.centralTeams.map((team) => ({
              ...team,
              arrivalTime: convertTime(team.arrivalTime),
            })),
            internationalTeams: report.teamArrival.internationalTeams.map(
              (team) => ({
                ...team,
                arrivalTime: convertTime(team.arrivalTime),
              })
            ),
            others: report.teamArrival.others.map((other) => ({
              ...other,
              arrivalTime: convertTime(other.arrivalTime),
            })),
          },
        };
      });
    };

    setProcessedReports(convertTimes(reports));
  }, [reports]);

  const analyzeReports = async () => {
    setIsAnalyzing(true);
    setAnalysisError(null);

    try {
      
      const PROMPT = `Analyze and provide a collective overview of the following disaster reports: ${JSON.stringify(reports)}. Focus on identifying key patterns, summarizing critical observations, recommended actions, team responses, casualties, material flows, and disaster status. Highlight any overlapping details and provide actionable recommendations based on the aggregated data.`;

      

      const response = await fetch("http://localhost:5000/pro-model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: PROMPT }),
      });
      

      

      if (!response.ok) {
        throw new Error("Failed to analyze reports");
      }

      const data = await response.json();
      setAnalysisData(data);
      setShowAnalysisModal(true);
    } catch (error) {
      if (error.name === "AbortError") {
        setAnalysisError("Analysis timed out. Please try again.");
      } else {
        setAnalysisError(
          "Error while analyzing the reports. Please try again."
        );
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Modal component
  const ReportModal = ({ report, onClose, reportIndex }) => {
    if (!report) return null;

    const SectionCard = ({ title, icon: Icon, children }) => (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 flex items-center">
          <Icon className="w-5 h-5 text-gray-500 mr-2" />
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="p-4 space-y-3">{children}</div>
      </div>
    );

    const DataRow = ({ label, value }) => (
      <div className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
        <span className="text-sm font-medium text-gray-600">{label}:</span>
        <span className="text-sm text-gray-800 text-right ml-4">{value}</span>
      </div>
    );

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-50 rounded-lg w-11/12 max-w-6xl max-h-[90vh] overflow-hidden shadow-xl">
          <div className="px-6 py-4 border-b border-gray-200 bg-white flex justify-between items-center sticky top-0">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Report {reportIndex + 1}
              </h2>
              <p className="text-sm text-gray-500">
                Submitted: {new Date(report.submissionTime).toLocaleString()}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              ×
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SectionCard title="Disaster Status" icon={Cloud}>
                <DataRow
                  label="Weather Condition"
                  value={`${
                    report.disasterStatus.weatherCondition.primary
                  } (${report.disasterStatus.weatherCondition.details.join(
                    ", "
                  )})`}
                />
                <DataRow
                  label="Severity"
                  value={report.disasterStatus.weatherCondition.severity}
                />
                <h4 className="font-medium text-gray-700 mt-4 mb-2">
                  Affected Areas
                </h4>
                {report.disasterStatus.affectedAreas.map((area, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-md mb-2">
                    <p className="font-medium text-sm">{area.name}</p>
                    <p className="text-sm text-gray-600">
                      Location: {area.coordinates.latitude},{" "}
                      {area.coordinates.longitude}
                    </p>
                    <p className="text-sm text-gray-600">
                      Impact: {area.impactLevel}
                    </p>
                  </div>
                ))}
              </SectionCard>

              <SectionCard title="Affected Population" icon={Users}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">
                      {report.disasterStatus.affectedPopulation.total}
                    </p>
                    <p className="text-sm text-blue-600">Total Affected</p>
                  </div>
                  <div className="space-y-2">
                    <DataRow
                      label="Children"
                      value={
                        report.disasterStatus.affectedPopulation.demographics
                          .children
                      }
                    />
                    <DataRow
                      label="Adults"
                      value={
                        report.disasterStatus.affectedPopulation.demographics
                          .adults
                      }
                    />
                    <DataRow
                      label="Elderly"
                      value={
                        report.disasterStatus.affectedPopulation.demographics
                          .elderly
                      }
                    />
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Casualties" icon={AlertTriangle}>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    {report.casualties.types.map((type, index) => (
                      <DataRow
                        key={index}
                        label={type.category}
                        value={type.count}
                      />
                    ))}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      First Aid
                    </h4>
                    {report.casualties.firstAid.map((aid, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-3 rounded-md mb-2"
                      >
                        <p className="font-medium text-sm">
                          {aid.treatmentType}
                        </p>
                        <p className="text-sm text-gray-600">
                          Location: {aid.treatmentLocation}
                        </p>
                        <p className="text-sm text-gray-600">
                          Personnel: {aid.personnelInvolved}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Communication
                    </h4>
                    <DataRow
                      label="Status"
                      value={report.casualties.communication.status}
                    />
                    <DataRow
                      label="Methods"
                      value={report.casualties.communication.methods.join(", ")}
                    />
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Material Flow" icon={Truck}>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Food Materials
                    </h4>
                    {report.materialFlow.foodMaterials.map((food, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-3 rounded-md mb-2"
                      >
                        <p className="font-medium text-sm">{food.type}</p>
                        <p className="text-sm text-gray-600">
                          Quantity: {food.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Distribution: {food.distributionMethod}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Air Dropping
                    </h4>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <DataRow
                        label="Status"
                        value={
                          report.materialFlow.airDropping.active
                            ? "Active"
                            : "Inactive"
                        }
                      />
                      {report.materialFlow.airDropping.frequency && (
                        <DataRow
                          label="Frequency"
                          value={report.materialFlow.airDropping.frequency}
                        />
                      )}
                    </div>
                    {report.materialFlow.airDropping.locations && (
                      <div className="mt-2">
                        {report.materialFlow.airDropping.locations.map(
                          (loc, index) => (
                            <p key={index} className="text-sm text-gray-600">
                              Location {index + 1}: {loc.latitude},{" "}
                              {loc.longitude}
                            </p>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Medical Aid
                    </h4>
                    {report.materialFlow.medicalAid.map((aid, index) => (
                      <div
                        key={index}
                        className="bg-green-50 p-3 rounded-md mb-2"
                      >
                        <p className="font-medium text-sm">{aid.type}</p>
                        <p className="text-sm text-gray-600">
                          Quantity: {aid.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Destination: {aid.destination.latitude},{" "}
                          {aid.destination.longitude}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Team Arrival" icon={Users}>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Central Teams
                    </h4>
                    {report.teamArrival.centralTeams.map((team, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-3 rounded-md mb-2"
                      >
                        <p className="font-medium text-sm">{team.name}</p>
                        <p className="text-sm text-gray-600">
                          Arrival: {team.arrivalTime.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">
                          Personnel: {team.personnelCount}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      International Teams
                    </h4>
                    {report.teamArrival.internationalTeams.map(
                      (team, index) => (
                        <div
                          key={index}
                          className="bg-blue-50 p-3 rounded-md mb-2"
                        >
                          <p className="font-medium text-sm">
                            {team.organizationName}
                          </p>
                          <p className="text-sm text-gray-600">
                            Country: {team.country}
                          </p>
                          <p className="text-sm text-gray-600">
                            Arrival: {team.arrivalTime.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            Personnel: {team.personnelCount}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Summary" icon={FileIcon}>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-800">
                      {report.summary.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Critical Observations
                    </h4>
                    <ul className="list-disc pl-4 space-y-1">
                      {report.summary.criticalObservations.map((obs, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {obs}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Recommended Actions
                    </h4>
                    <ul className="list-disc pl-4 space-y-1">
                      {report.summary.recommendedActions.map(
                        (action, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            {action}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AnalysisModal = ({ data, onClose }) => {
    // Function to handle downloading the content as a text file
    const handleDownload = () => {
      const element = document.createElement("a");
      const file = new Blob([data.response || "No content available"], {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = "AI_Analysis_Results.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-11/12 max-w-3xl max-h-[90vh] overflow-hidden shadow-xl">
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">AI Analysis Results</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Close Modal"
            >
              ×
            </button>
          </div>
  
          {/* Modal Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside ml-6">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside ml-6">{children}</ol>
                ),
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold mb-2">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold mb-2">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-medium mb-2">{children}</h3>
                ),
                p: ({ children }) => <p className="mb-4 text-gray-700">{children}</p>,
              }}
            >
              {data.response || "No analysis data available."}
            </ReactMarkdown>
          </div>
  
          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end items-center gap-4">
            <button
              onClick={handleDownload}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition-colors"
            >
              Download as Text
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md shadow hover:bg-gray-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  function generatePDF(data) {
    const doc = new jsPDF();
  
    // Utility function to format timestamps
    const formatDate = (timestamp) => new Date(timestamp).toLocaleString();
  
    // Add Header
    const addHeader = () => {
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text("Disaster Management Report", 105, 15, { align: "center" });
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.line(10, 20, 200, 20);
    };
  
    // Add Footer
    const addFooter = (pageNumber) => {
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Page ${pageNumber}`, 105, 285, { align: "center" });
    };
  
    // Add Section Title
    const addSectionTitle = (title, yPosition) => {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text(title, 10, yPosition);
      return yPosition + 8;
    };
  
    // Add Content
    const addContent = (content, yPosition, lineHeight = 6) => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      content.forEach((line) => {
        doc.text(line, 10, yPosition);
        yPosition += lineHeight;
      });
      return yPosition;
    };
  
    let y = 25;
  
    addHeader();
  
    // Overview Section
    y = addSectionTitle("Overview", y);
    y = addContent([data.summary.overview || "N/A"], y);
  
    // Critical Observations Section
    y = addSectionTitle("Critical Observations", y + 5);
    y = addContent(
      (data.summary.criticalObservations || []).map((item, i) => `${i + 1}. ${item}`),
      y
    );
  
    // Recommended Actions Section
    y = addSectionTitle("Recommended Actions", y + 5);
    y = addContent(
      (data.summary.recommendedActions || []).map((item, i) => `${i + 1}. ${item}`),
      y
    );
  
    // Casualties Section
    y = addSectionTitle("Casualties", y + 5);
    y = addContent(
      (data.casualties.types || []).map((c, i) => `${i + 1}. ${c.category}: ${c.count}`),
      y
    );
  
    // Team Arrivals Section
    y = addSectionTitle("Team Arrivals", y + 5);
    const teamDetails = [];
    (data.teamArrival.centralTeams || []).forEach((team, i) => {
      teamDetails.push(`Central Team ${i + 1}: ${team.name} - ${team.personnelCount} personnel`);
    });
    (data.teamArrival.internationalTeams || []).forEach((team, i) => {
      teamDetails.push(`International Team ${i + 1}: ${team.organizationName} (${team.country}) - ${team.personnelCount} personnel`);
    });
    (data.teamArrival.others || []).forEach((team, i) => {
      teamDetails.push(`Other Team ${i + 1}: ${team.name} (${team.type})`);
    });
    y = addContent(teamDetails, y);
  
    // Material Flow Section
    y = addSectionTitle("Material Flow", y + 5);
    const materialDetails = [];
    (data.materialFlow.foodMaterials || []).forEach((item, i) => {
      materialDetails.push(`${i + 1}. Food: ${item.type} - Quantity: ${item.quantity} - Distribution: ${item.distributionMethod}`);
    });
    (data.materialFlow.medicalAid || []).forEach((item, i) => {
      materialDetails.push(`${i + 1}. Medical Aid: ${item.type} - Quantity: ${item.quantity} - Destination: (${item.destination.latitude}, ${item.destination.longitude})`);
    });
    y = addContent(materialDetails, y);
  
    // Disaster Status Section
    y = addSectionTitle("Disaster Status", y + 5);
    const statusDetails = [
      `Affected Population: ${data.disasterStatus.affectedPopulation.total || "N/A"}`,
      `Weather Condition: ${data.disasterStatus.weatherCondition.primary || "N/A"}`
    ];
    y = addContent(statusDetails, y);
  
    // Affected Areas
    y = addSectionTitle("Affected Areas", y + 5);
    const areaDetails = (data.disasterStatus.affectedAreas || []).map(
      (area, i) =>
        `${i + 1}. ${area.name} - Impact Level: ${area.impactLevel} - Coordinates: (${area.coordinates.latitude}, ${area.coordinates.longitude})`
    );
    y = addContent(areaDetails, y);
  
    // Add Timestamp
    if (y > 270) {
      addFooter(1);
      doc.addPage();
      y = 25;
    }
    y = addSectionTitle("Report Timestamp", y + 10);
    y = addContent([`Generated: ${formatDate(data.submissionTime)}`], y);
  
    addFooter(1);
  
    // Save the PDF
    doc.save("Disaster_Report.pdf");
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-800">Previous Reports</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {processedReports.length != 0
          ? processedReports?.map((report, index) => (
              <div
                key={report.id}
                className="p-4 hover:bg-gray-50 flex justify-between items-center"
              >
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-900">
                    Report {index + 1}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Submitted:{" "}
                    {new Date(report.submissionTime).toLocaleString()}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      setSelectedReport(report);
                      setIsModalOpen(true);
                    }}
                    className="text-blue-500 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50"
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    onClick={() => generatePDF(report)}
                    className="text-green-500 hover:text-green-600 p-2 rounded-full hover:bg-green-50"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
            ))
          : "No results to show."}
      </div>

      {processedReports.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={analyzeReports}
            disabled={isAnalyzing}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white 
              ${
                isAnalyzing ? "bg-green-500" : "bg-green-600 hover:bg-green-700"
              }
              transition-colors flex items-center justify-center`}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing Reports...
              </>
            ) : (
              "Generate AI Analysis of All Reports"
            )}
          </button>
          {analysisError && (
            <p className="mt-2 text-red-500 text-sm text-center">
              {analysisError}
            </p>
          )}
        </div>
      )}

      {showAnalysisModal && analysisData && (
        <AnalysisModal
          data={analysisData}
          onClose={() => {
            setShowAnalysisModal(false);
            setAnalysisData(null);
          }}
        />
      )}

      {isModalOpen && (
        <ReportModal
          report={selectedReport}
          reportIndex={processedReports.findIndex(
            (r) => r.id === selectedReport.id
          )}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedReport(null);
          }}
        />
      )}
    </div>
  );
};

export default PreviousReports;
