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
              <h2 className="text-xl font-bold">Report ID: {report.id}</h2>
              <p className="text-sm text-gray-500">
                Disaster ID: {report.disasterId}
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
            <div className="border-b pb-4">
              <h3 className="font-semibold capitalize mb-2">Disaster Status</h3>
              <div className="pl-4">
                <p className="text-gray-600">
                  <span className="font-medium">Weather Condition:</span>{" "}
                  {report.disasterStatus.weatherCondition.primary} (
                  {report.disasterStatus.weatherCondition.details.join(", ")})
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Severity:</span>{" "}
                  {report.disasterStatus.weatherCondition.severity}
                </p>
                <div>
                  <h4 className="font-medium">Affected Areas:</h4>
                  {report.disasterStatus.affectedAreas.map((area, index) => (
                    <p key={index} className="text-gray-600">
                      {area.name} - Lat: {area.coordinates.latitude}, Long:{" "}
                      {area.coordinates.longitude}, Impact Level:{" "}
                      {area.impactLevel}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium">Affected Population:</h4>
                  <p className="text-gray-600">
                    Total: {report.disasterStatus.affectedPopulation.total}
                  </p>
                  <p className="text-gray-600">
                    Children:{" "}
                    {
                      report.disasterStatus.affectedPopulation.demographics
                        .children
                    }
                  </p>
                  <p className="text-gray-600">
                    Adults:{" "}
                    {
                      report.disasterStatus.affectedPopulation.demographics
                        .adults
                    }
                  </p>
                  <p className="text-gray-600">
                    Elderly:{" "}
                    {
                      report.disasterStatus.affectedPopulation.demographics
                        .elderly
                    }
                  </p>
                  <p className="text-gray-600">
                    Vulnerable Groups:{" "}
                    {report.disasterStatus.affectedPopulation.vulnerableGroups.join(
                      ", "
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold capitalize mb-2">Casualties</h3>
              <div className="pl-4">
                {report.casualties.types.map((type, index) => (
                  <p key={index} className="text-gray-600">
                    <span className="font-medium">{type.category}:</span>{" "}
                    {type.count}
                  </p>
                ))}
                <div>
                  <h4 className="font-medium">First Aid:</h4>
                  {report.casualties.firstAid.map((aid, index) => (
                    <p key={index} className="text-gray-600">
                      {aid.treatmentType} at {aid.treatmentLocation}, Personnel
                      Involved: {aid.personnelInvolved}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-medium">Communication Status:</span>{" "}
                  {report.casualties.communication.status}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Methods:</span>{" "}
                  {report.casualties.communication.methods.join(", ")}
                </p>
              </div>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold capitalize mb-2">Material Flow</h3>
              <div className="pl-4">
                <div>
                  <h4 className="font-medium">Food Materials:</h4>
                  {report.materialFlow.foodMaterials.map((food, index) => (
                    <p key={index} className="text-gray-600">
                      {food.type} - Quantity: {food.quantity}, Distribution
                      Method: {food.distributionMethod}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium">Air Dropping:</h4>
                  <p className="text-gray-600">
                    Active:{" "}
                    {report.materialFlow.airDropping.active ? "Yes" : "No"}
                  </p>
                  {report.materialFlow.airDropping.frequency && (
                    <p className="text-gray-600">
                      Frequency: {report.materialFlow.airDropping.frequency}
                    </p>
                  )}
                  {report.materialFlow.airDropping.locations && (
                    <div>
                      <h4 className="font-medium">Locations:</h4>
                      {report.materialFlow.airDropping.locations.map(
                        (location, index) => (
                          <p key={index} className="text-gray-600">
                            Lat: {location.latitude}, Long: {location.longitude}
                          </p>
                        )
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-medium">Transport:</h4>
                  {report.materialFlow.transport.map((transport, index) => (
                    <p key={index} className="text-gray-600">
                      {transport.type} - Capacity: {transport.capacity}, Active
                      Vehicles: {transport.activeVehicles}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium">Medical Aid:</h4>
                  {report.materialFlow.medicalAid.map((aid, index) => (
                    <p key={index} className="text-gray-600">
                      {aid.type} - Quantity: {aid.quantity}, Destination: Lat:{" "}
                      {aid.destination.latitude}, Long:{" "}
                      {aid.destination.longitude}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold capitalize mb-2">Team Arrival</h3>
              <div className="pl-4">
                <div>
                  <h4 className="font-medium">Central Teams:</h4>
                  {report.teamArrival.centralTeams.map((team, index) => (
                    <p key={index} className="text-gray-600">
                      {team.name} - Arrival Time:{" "}
                      {new Date(team.arrivalTime.toDate()).toLocaleString()},
                      Personnel Count: {team.personnelCount}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium">International Teams:</h4>
                  {report.teamArrival.internationalTeams.map((team, index) => (
                    <p key={index} className="text-gray-600">
                      {team.country} ({team.organizationName}) - Arrival Time:{" "}
                      {new Date(team.arrivalTime.toDate()).toLocaleString()},
                      Personnel Count: {team.personnelCount}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium">Others:</h4>
                  {report.teamArrival.others.map((other, index) => (
                    <p key={index} className="text-gray-600">
                      {other.name} ({other.type}) - Arrival Time:{" "}
                      {new Date(other.arrivalTime.toDate()).toLocaleString()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold capitalize mb-2">Summary</h3>
              <div className="pl-4">
                <p className="text-gray-600">
                  <span className="font-medium">Overview:</span>{" "}
                  {report.summary.overview}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Critical Observations:</span>{" "}
                  {report.summary.criticalObservations.join(", ")}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Recommended Actions:</span>{" "}
                  {report.summary.recommendedActions.join(", ")}
                </p>
              </div>
            </div>
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
                  <h4 className="font-medium text-gray-900">
                    Report ID: {report.id}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Disaster ID: {report.disasterId}
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
