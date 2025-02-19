
export interface MapPoint {
  longitude: number;
  latitude: number;
  key: number;
  data: Record<string, any>
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


// export interface ShelterPoint extends MapPoint {
//   facility: string
//   category: string
// }
// export interface FoodPoint extends MapPoint {
//   name: string
// }
// export interface WaterPoint extends MapPoint {
//   name: string
// }
// export interface ToiletPoint extends MapPoint {

// }
// export interface WifiPoint extends MapPoint {
//   bssid: string
// }



// export interface MapData {
//     data: {
//       shelter?: ShelterPoint[];
//       food?: FoodPoint[];
//       water?: WaterPoint[];
//       toilet?: ToiletPoint[];
//       wifi?: WifiPoint[];
//     };
// }
