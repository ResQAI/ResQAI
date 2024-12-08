"use client";

<<<<<<< HEAD
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
=======
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from 'leaflet';

const MyComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Your code that uses the window object
    }
  }, []);

  return (
    <div>
      <MapContainer
        center={[0, 0]} // Centering at [latitude, longitude]
        zoom={2}
        scrollWheelZoom={false}
        className="w-[72%] h-[80vh] text-center m-5 rounded-2xl border border-neutral-100 hover:shadow"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
>>>>>>> adbcf5c0b332a47b0f69d2c16c696c1f33b17ee1
    </div>
  );
};

<<<<<<< HEAD
export default DisasterMap;
=======
export default MyComponent;
>>>>>>> adbcf5c0b332a47b0f69d2c16c696c1f33b17ee1
