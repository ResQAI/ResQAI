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
    const loadGoogleMapsAPI = () => {
      return new Promise<void>((resolve, reject) => {
        if (typeof window.google !== "undefined") {
          resolve(); 
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&v=weekly&callback=initMapLibrary`;
        script.async = true;
        script.defer = true;

        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Google Maps API script"));

        document.body.appendChild(script);
      });
    };

    const initializeMap = async () => {
      try {
        await loadGoogleMapsAPI();

        if (!mapRef.current) return;

        const mapsLibrary = (await google.maps.importLibrary("maps")) as typeof google.maps;

        // Initialize map
        const map = new mapsLibrary.Map(mapRef.current, {
          center: { lat, lng },
          zoom,
        });

        const infoWindow = new mapsLibrary.InfoWindow({ pixelOffset: new google.maps.Size(0, -37) });

        // Load earthquake data
        const script = document.createElement("script");
        script.src = "https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json";
        document.head.appendChild(script);


        window.eqfeed_callback = (data: any) => {
          map.data.addGeoJson(data);


          map.data.setStyle((feature) => ({
            title: feature.getProperty("place") as string,
          }));

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
      } catch (error) {
        console.error(error);
      }
    };

    initializeMap();
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[500px] my-5 rounded-xl border border-gray-200 shadow"
    >
    </div>
  );
};

export default DisasterMap;
