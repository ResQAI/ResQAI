"use client";
import React, { useState } from "react";
import { FileText, Eye, Download } from "lucide-react";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import { RootStateOrAny } from "react-redux";

const PreviousReports = () => {
  const initialReports = useSelector(
    (state: RootStateOrAny) => state.activeDisaster.situationReports
  );

  console.log(initialReports);
  const [reports, setReports] = useState(initialReports);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal component
  const ReportModal = ({ report, onClose }) => {
    if (!report) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-3/4 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">{report.name}</h2>
              <p className="text-sm text-gray-500">
                Submission Time: {new Date(report.submittedAt).toLocaleString()}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(report.data).map(([section, content]) => (
              <div key={section} className="border-b pb-4">
                <h3 className="font-semibold capitalize mb-2">
                  {section.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                {typeof content === "object" ? (
                  <div className="pl-4">
                    {Object.entries(content).map(([key, value]) => (
                      <p key={key} className="text-gray-600">
                        <span className="font-medium">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>{" "}
                        {value}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">{content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-800">Previous Reports</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {reports.length != 0
          ? reports?.map((report) => (
              <div
                key={report.id}
                className="p-4 hover:bg-gray-50 flex justify-between items-center"
              >
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-900">{report.name}</h4>
                  <p className="text-sm text-gray-500">
                    Submission Time:{" "}
                    {new Date(report.submittedAt).toLocaleString()}
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
                    onClick={() => generatePDF(report.data)}
                    className="text-green-500 hover:text-green-600 p-2 rounded-full hover:bg-green-50"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
            ))
          : "No results to show."}
      </div>

      {isModalOpen && (
        <ReportModal
          report={selectedReport}
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
