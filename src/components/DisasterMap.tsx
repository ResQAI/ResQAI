"use client";

import { useEffect, useRef } from "react";

interface DisasterMapProps {
  lat: number;
  lng: number;
  zoom: number;
}

declare global {
  interface Window {
    eqfeed_callback: (data: any) => void;
  }
}

const DisasterMap: React.FC<DisasterMapProps> = ({ lat, lng, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: google.maps.Map;
    let infoWindow: google.maps.InfoWindow;

    const initializeMap = async () => {
      if (!mapRef.current) return;

      // Import Maps library and required features
      const mapsLibrary = (await google.maps.importLibrary("maps")) as typeof google.maps;

      // Initialize map
      map = new mapsLibrary.Map(mapRef.current, {
        center: { lat, lng },
        zoom,
      });

      // Initialize info window
      infoWindow = new mapsLibrary.InfoWindow({ pixelOffset: new google.maps.Size(0, -37) });

      // Load earthquake data
      const script = document.createElement("script");
      script.src =
        "https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json";
      document.head.appendChild(script);

      // Add callback to process JSONP data
      window.eqfeed_callback = (data: any) => {
        map.data.addGeoJson(data);

        // Style the features
        map.data.setStyle((feature) => ({
          title: feature.getProperty("place") as string, // Ensure type safety
        }));

        // Add event listener to show info window on click
        map.data.addListener("click", (e: google.maps.Data.MouseEvent) => {
          if (!e.latLng || !e.feature) return;

          const content = `
            <div style="padding: 8px">
              <h2 style="margin-top: 0">${e.feature.getProperty("place")}</h2>
              <h3>Magnitude ${e.feature.getProperty("mag")}</h3>
              <a href="${e.feature.getProperty("url")}" target="_blank">View on USGS</a>
            </div>
          `;

          infoWindow.setOptions({ content, position: e.latLng });
          infoWindow.open(map);
        });
      };
    };

    initializeMap();
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[500px] my-5 rounded-xl border border-gray-200 shadow"
    >
      {/* Map will render here */}
    </div>
  );
};

export default DisasterMap;
