import React, { useState } from "react";

interface Location {
    latitude: number;
    longitude: number;
  }

const SaveMeForm:React.FC = () => {
    const [peopleCount, setPeopleCount] = useState<number | undefined>(undefined);
    const [location, setLocation] = useState<Location | null>(null);
    const [locationPermission, setLocationPermission] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          alert("Unable to fetch location. Please enable location services.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!locationPermission) {
      alert("Please grant permission to access your location.");
      return;
    }

    if (!location) {
      alert("Fetching location. Please wait...");
      getLocation();
      return;
    }

    if (!peopleCount || parseInt(peopleCount, 10) <= 0) {
      alert("Please enter a valid number of people.");
      return;
    }

    // Send data to helping communities (e.g., API call)
    const rescueData = {
      peopleCount,
      location,
    };
    console.log("Rescue Data Submitted:", rescueData);

    // Display submission feedback
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="flex flex-col mt-5 items-center justify-center p-6 rounded-lg shadow-lg bg-green-100 max-w-md mx-auto  text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Help is on the way!</h2>
        <p className="text-lg text-gray-700">
          Stay calm and try to follow these precautionary measures while waiting for assistance:
        </p>
        <ul className="list-disc text-left text-gray-700 mt-4 space-y-2">
          <li>Stay together with your group and keep everyone safe.</li>
          <li>Signal for help if you hear nearby rescuers.</li>
          <li>Avoid unnecessary movements to conserve energy.</li>
          <li>Use available resources wisely until help arrives.</li>
        </ul>
      </div>
    );
  }

  return (
    <div className=" mt-10">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Save Me Form</h1>
      <p className="text-gray-700 mb-4">
        Please fill in the form below to request rescue assistance. Ensure the information provided
        is accurate and complete.
      </p>
      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of People Stuck
          </label>
          <input
            type="number"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter the number of people"
            required
          />
        </div>
        <div>
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              checked={locationPermission}
              onChange={(e) => {
                setLocationPermission(e.target.checked);
                if (e.target.checked) getLocation();
              }}
              className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-2 focus:ring-red-500"
            />
            <span>Allow location access</span>
          </label>
          <p className="text-sm text-gray-500 mt-1">
            Location access is required to assist rescuers in reaching you faster.
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
        >
          Send Rescue Request
        </button>
      </form>
    </div>
  );
};

export default SaveMeForm;
