"use client";
import React, { useState, useMemo } from 'react';
import { 
  AlertCircle, 
  Info, 
  MapPin, 
  Clock, 
  Shield, 
  Alert, 
  X, 
  Filter 
} from 'lucide-react';

// Enhanced Disaster Interface
interface Disaster {
  id: number;
  name: string;
  location: string;
  details: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  type: 'Hurricane' | 'Wildfire' | 'Earthquake' | 'Flood' | 'Tsunami';
  impactedPopulation: number;
  estimatedDamage: number;
  timestamp: string;
  responseStatus: 'Monitoring' | 'Evacuating' | 'Responding' | 'Stabilizing';
}

// Initial Disasters Data
const initialDisasters: Disaster[] = [
  {
    id: 1,
    name: "Hurricane Maya",
    location: "Gulf Coast, USA",
    details: "Category 3 hurricane with winds up to 120 mph. Predicted to make landfall in 48 hours. Mandatory evacuation for coastal regions.",
    severity: 'High',
    type: 'Hurricane',
    impactedPopulation: 250000,
    estimatedDamage: 1500000000,
    timestamp: "2024-03-15T10:30:00Z",
    responseStatus: 'Evacuating'
  },
  {
    id: 2,
    name: "California Wildfire Outbreak",
    location: "Sierra Nevada, California",
    details: "Multiple wildfires spreading across dry forest regions. Over 10,000 acres currently affected. High risk of rapid expansion.",
    severity: 'Critical',
    type: 'Wildfire',
    impactedPopulation: 75000,
    estimatedDamage: 750000000,
    timestamp: "2024-03-14T15:45:00Z",
    responseStatus: 'Responding'
  },
  {
    id: 3,
    name: "Tokyo Seismic Event",
    location: "Tokyo, Japan",
    details: "6.5 magnitude earthquake detected. Tsunami warning issued for coastal areas. Emergency response teams are on high alert.",
    severity: 'High',
    type: 'Earthquake',
    impactedPopulation: 500000,
    estimatedDamage: 2200000000,
    timestamp: "2024-03-16T02:15:00Z",
    responseStatus: 'Monitoring'
  }
];

const NationalDisasterTracker: React.FC = () => {
  const [selectedDisaster, setSelectedDisaster] = useState<Disaster | null>(null);
  const [disasters, setDisasters] = useState<Disaster[]>(initialDisasters);
  const [filter, setFilter] = useState<{
    severity?: Disaster['severity'],
    type?: Disaster['type']
  }>({});

  // Severity color mapping
  const severityColors = {
    'Low': 'bg-green-100 text-green-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'High': 'bg-orange-100 text-orange-800',
    'Critical': 'bg-red-100 text-red-800'
  };

  // Filtered and sorted disasters
  const filteredDisasters = useMemo(() => {
    return disasters
      .filter(disaster => 
        (!filter.severity || disaster.severity === filter.severity) &&
        (!filter.type || disaster.type === filter.type)
      )
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [disasters, filter]);

  const handleViewInfo = (disaster: Disaster) => {
    setSelectedDisaster(disaster);
  };

  const handleDeclareDisaster = (id: number) => {
    const updatedDisasters = disasters.map(disaster => 
      disaster.id === id 
        ? { ...disaster, responseStatus: 'Responding' } 
        : disaster
    );
    setDisasters(updatedDisasters);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
        Incoming Disasters Information
        </h1>
        <div className="flex space-x-2">
          <select 
            onChange={(e) => setFilter(prev => ({ 
              ...prev, 
              severity: e.target.value as Disaster['severity'] 
            }))}
            className="px-3 py-2 border rounded-md text-gray-700"
          >
            <option value="">All Severities</option>
            {Object.keys(severityColors).map(severity => (
              <option key={severity} value={severity}>{severity}</option>
            ))}
          </select>
          <select 
            onChange={(e) => setFilter(prev => ({ 
              ...prev, 
              type: e.target.value as Disaster['type'] 
            }))}
            className="px-3 py-2 border rounded-md text-gray-700"
          >
            <option value="">All Types</option>
            {['Hurricane', 'Wildfire', 'Earthquake', 'Flood', 'Tsunami'].map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredDisasters.map((disaster) => (
          <div
            key={disaster.id}
            className="bg-white shadow-md rounded-lg p-5 flex justify-between items-center border-l-4"
            style={{ 
              borderColor: {
                'Low': 'green',
                'Medium': 'yellow',
                'High': 'orange',
                'Critical': 'red'
              }[disaster.severity] 
            }}
          >
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-bold text-gray-800">
                  {disaster.name}
                </h2>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${severityColors[disaster.severity]}`}>
                  {disaster.severity}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mt-2 space-x-3">
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>{disaster.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{new Date(disaster.timestamp).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleDeclareDisaster(disaster.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center"
              >
                <Shield className="mr-2" size={20} />
                Activate Response
              </button>
              <button
                onClick={() => handleViewInfo(disaster)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition flex items-center"
              >
                <Info className="mr-2" size={20} />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal */}
      {selectedDisaster && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative">
            <button 
              onClick={() => setSelectedDisaster(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mr-4">
                {selectedDisaster.name}
              </h2>
              <span className={`px-3 py-1 rounded text-sm font-semibold ${severityColors[selectedDisaster.severity]}`}>
                {selectedDisaster.severity}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex items-center text-gray-700 mb-2">
                  <MapPin className="mr-2" />
                  <strong>Location:</strong>
                </div>
                <p>{selectedDisaster.location}</p>
              </div>
              <div>
                <div className="flex items-center text-gray-700 mb-2">
                  <Alert className="mr-2" />
                  <strong>Type:</strong>
                </div>
                <p>{selectedDisaster.type}</p>
              </div>
              <div>
                <div className="flex items-center text-gray-700 mb-2">
                  <Shield className="mr-2" />
                  <strong>Response Status:</strong>
                </div>
                <p>{selectedDisaster.responseStatus}</p>
              </div>
              <div>
                <div className="flex items-center text-gray-700 mb-2">
                  <Clock className="mr-2" />
                  <strong>Timestamp:</strong>
                </div>
                <p>{new Date(selectedDisaster.timestamp).toLocaleString()}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{selectedDisaster.details}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong className="text-gray-700">Impacted Population</strong>
                <p className="text-xl font-semibold">{selectedDisaster.impactedPopulation.toLocaleString()}</p>
              </div>
              <div>
                <strong className="text-gray-700">Estimated Damage</strong>
                <p className="text-xl font-semibold">
                  ${selectedDisaster.estimatedDamage.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NationalDisasterTracker;