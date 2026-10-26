"use client";

import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const PINS = [
  { city: "Chicago", lat: 41.870172029691815, lon: -87.64921432584315 },
  { city: "Naperville", lat: 41.70809463875043, lon: -88.20065314430416 },
  { city: "Urbana", lat: 40.11374958520935, lon: -88.22493172575905 },
];

export default function IllinoisMap() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          bounds: [[-90.6, 39.6], [-86.9, 42.3]],
          fitBoundsOptions: { padding: 24 },
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        scrollZoom={false}
        attributionControl={false}
        logoPosition="top-right"
      >
        <NavigationControl position="bottom-right" showCompass={false} />
        {PINS.map(({ city, lat, lon }) => (
          <Marker key={city} latitude={lat} longitude={lon} anchor="bottom">
            <div className="flex flex-col items-center">
              <span className="mb-1 bg-accent px-1.5 py-0.5 text-[13px] font-semibold text-on-accent whitespace-nowrap">
                {city}
              </span>
              <div className="h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
}
