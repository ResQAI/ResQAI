import React, { useState } from 'react';
import { DisasterStatus, DisasterLevel, GeoLocation } from '@/models/nationalDisasterCommittee';

interface DisasterModalProps {
  onDisasterAdded?: () => void;
}

const DisasterModal: React.FC<DisasterModalProps> = ({ onDisasterAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tags: [] as string[],
    exactLocation: {
      latitude: 0,
      longitude: 0,
      address: '',
      affectedArea: ''
    } as GeoLocation,
    estimatedEconomicImpact: 0,
    status: '' as DisasterStatus,
    level: '' as DisasterLevel,
    geologicalData: {
      magnitude: undefined,
      depth: undefined,
      richterScale: undefined
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof formData],
          [child]: 
            name.startsWith('exactLocation.') 
              ? (child === 'latitude' || child === 'longitude' ? Number(value) : value)
              : (child === 'magnitude' || child === 'depth' || child === 'richterScale' ? Number(value) : value)
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'estimatedEconomicImpact' ? Number(value) : value
      }));
    }
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagString = e.target.value;
    setFormData(prev => ({
      ...prev,
      tags: tagString.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.name) errors.push('Disaster name is required');
    if (!formData.exactLocation.latitude) errors.push('Latitude is required');
    if (!formData.exactLocation.longitude) errors.push('Longitude is required');
    if (!formData.status) errors.push('Status is required');
    if (!formData.level) errors.push('Disaster level is required');

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (validationErrors.length > 0) {
      validationErrors.forEach(error => alert(error));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/nationalDisasterCommittee/incomingDisaster', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        alert('Disaster reported successfully');
        onDisasterAdded?.();
        setIsOpen(false);
        // Reset form
        setFormData({
          name: '',
          tags: [],
          exactLocation: {
            latitude: 0,
            longitude: 0,
            address: '',
            affectedArea: ''
          },
          estimatedEconomicImpact: 0,
          status: '' as DisasterStatus,
          level: '' as DisasterLevel,
          geologicalData: {
            magnitude: undefined,
            depth: undefined,
            richterScale: undefined
          }
        });
      } else {
        alert(result.message || 'Failed to report disaster');
      }
    } catch (error) {
      console.error('Disaster submission error:', error);
      alert('An error occurred while reporting the disaster');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Report New Disaster
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Report a Disaster</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Disaster Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Disaster Name
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter disaster name"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <input 
                  type="text"
                  name="tags"
                  value={formData.tags.join(', ')}
                  onChange={handleTagsChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Comma-separated tags"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location Details
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input 
                    type="number" 
                    name="exactLocation.latitude"
                    value={formData.exactLocation.latitude}
                    onChange={handleInputChange}
                    step="0.0001"
                    placeholder="Latitude"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="number" 
                    name="exactLocation.longitude"
                    value={formData.exactLocation.longitude}
                    onChange={handleInputChange}
                    step="0.0001"
                    placeholder="Longitude"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="text"
                    name="exactLocation.address"
                    value={formData.exactLocation.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Economic Impact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Economic Impact
                </label>
                <input 
                  type="number"
                  name="estimatedEconomicImpact"
                  value={formData.estimatedEconomicImpact}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter economic impact"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Disaster Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Status</option>
                  {Object.values(DisasterStatus).map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              {/* Disaster Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Disaster Level
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Level</option>
                  {Object.values(DisasterLevel).map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Geological Data */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Geological Data
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input 
                    type="number"
                    name="geologicalData.magnitude"
                    value={formData.geologicalData.magnitude ?? ''}
                    onChange={handleInputChange}
                    step="0.1"
                    placeholder="Magnitude"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="number"
                    name="geologicalData.depth"
                    value={formData.geologicalData.depth ?? ''}
                    onChange={handleInputChange}
                    placeholder="Depth"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="number"
                    name="geologicalData.richterScale"
                    value={formData.geologicalData.richterScale ?? ''}
                    onChange={handleInputChange}
                    step="0.1"
                    placeholder="Richter Scale"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end space-x-4 mt-6">
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'Submitting...' : 'Report Disaster'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisasterModal;