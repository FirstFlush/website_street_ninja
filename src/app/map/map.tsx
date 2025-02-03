"use client";

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import { MapData, MapPoint } from "@/types/MapData";
import "leaflet/dist/leaflet.css";
import { customIcon } from "./icons";


interface MapProps {
  mapData: MapData;
}

const Map = ({ mapData }: MapProps) => {

  const center: [number, number] = [49.271340123687286, -123.09969520417636]; // just south of Hastings & Main

  return (
    <div className="relative w-full h-[100vh]">
      <MapContainer 
        center={center} 
        zoom={13} 
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="bottomleft" />
        {Object.entries(mapData.data).map(([resourceType, resources]) =>
          resources.map((resource: MapPoint, index) => {
            return (
              <Marker
                key={`${resource.latitude}-${resource.longitude}-${index}`}
                position={[resource.latitude, resource.longitude]}
                icon={customIcon}
              >
                <Popup>{resource.name ?? resourceType}</Popup>
              </Marker>
            );
          })
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
