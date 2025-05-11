
export interface MapPoint {
  longitude: number;
  latitude: number;
  id: number;
}


export interface MapData {
  resources: {
    shelter?: MapPoint[];
    food?: MapPoint[];
    water?: MapPoint[];
    toilet?: MapPoint[];
    wifi?: MapPoint[];
  };
}

