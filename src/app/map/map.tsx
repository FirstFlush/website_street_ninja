"use client";
import MapLegend from "./map-legend";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import { MapData, MapPoint } from "@/types/MapData";
import "leaflet/dist/leaflet.css";
import { resourceIcons } from "./icons";
import { ResourceType } from "@/types/resourceType";
import PopoverContent from "./popover-content";

interface MapProps {
  mapData: MapData;
}

const Map = ({ mapData }: MapProps) => {

  const center: [number, number] = [49.271340123687286, -123.09969520417636]; // just south of Hastings & Main
  
  return (
    <div className="relative w-full h-[100vh]">
      <MapContainer 
        center={center} 
        zoom={12} 
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <div className="relative">
          <ZoomControl position="bottomleft" />
        </div> */}
        {Object.entries(mapData.resources).map(([resourceType, mapPoints]) =>
          mapPoints.map((resource: MapPoint, index) => {
            const typescriptSafeResource = resourceType.toLowerCase() as Lowercase<ResourceType>
            return (
              <Marker
                key={`${index}`}
                position={[resource.latitude, resource.longitude]}
                icon={resourceIcons[typescriptSafeResource] || resourceIcons["default"]}
              >
                <Popup maxWidth={250} minWidth={250} autoPan={true}>
                  <PopoverContent id={resource.id} resourceType={resourceType} />
                </Popup>
              </Marker>
            );
          })
        )}
      </MapContainer>
      <MapLegend />
    </div>
  );
};

export default Map;
