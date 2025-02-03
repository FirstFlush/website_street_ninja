

export interface MapData {
    data: {
      shelter?: MapPoint[];
      food?: MapPoint[];
      water?: MapPoint[];
      toilet?: MapPoint[];
      wifi?: MapPoint[];
    };
}

export interface MapPoint {
    longitude: number;
    latitude: number;
    key: number;
    name?: string | null;  // Optional, since it's missing in your current API response
}

