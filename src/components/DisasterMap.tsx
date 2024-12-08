"use client";

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
    </div>
  );
};

export default MyComponent;
