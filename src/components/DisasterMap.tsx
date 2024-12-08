"use client";

import { useEffect, useRef, useState } from "react";

const DisasterMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      if (typeof window.google !== "undefined") {
        setIsMapInitialized(true);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&v=weekly`;
      console.log(script.src)
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setIsMapInitialized(true);
      };

      script.onerror = () => {
        console.error("Google Maps script failed to load.");
      };

      document.body.appendChild(script);
    };

    loadGoogleMapsAPI();
  }, []);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || typeof window.google === "undefined") {
        return;
      }

      const { Map } = window.google.maps; // Use window.google directly

      new Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    if (isMapInitialized) {
      initializeMap();
    }
  }, [isMapInitialized]);

  return (
    <div
      ref={mapRef}
      className="w-full h-screen my-5 rounded-xl border border-gray-200 shadow"
    >
      {/* Map will render here */}
    </div>
  );
};

export default DisasterMap;
