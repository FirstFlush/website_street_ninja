import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";


// const createCustomIcon = (color: string) =>
//   L.divIcon({
//     className: `bg-${color}-500 text-white flex items-center justify-center rounded-full w-8 h-8 border border-white`,
//     html: `
//     <svg height="16" width="16" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
//       <style type="text/css">
//         .st0{fill:${color};}
//       </style>
//       <g>
//         <path class="st0" d="M256,0C160.798,0,83.644,77.155,83.644,172.356c0,97.162,48.158,117.862,101.386,182.495   C248.696,432.161,256,512,256,512s7.304-79.839,70.97-157.148c53.228-64.634,101.386-85.334,101.386-182.495   C428.356,77.155,351.202,0,256,0z M256,231.921c-32.897,0-59.564-26.668-59.564-59.564s26.668-59.564,59.564-59.564   c32.896,0,59.564,26.668,59.564,59.564S288.896,231.921,256,231.921z"/>
//       </g>
//     </svg>
//     `,
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
//     popupAnchor: [0, -30],
//   });

//   export const resourceIcons = {
//     shelter: createCustomIcon("#DC2626"), // Tailwind Red-600
//     food: createCustomIcon("#16A34A"), // Tailwind Green-600
//     water: createCustomIcon("#2563EB"), // Tailwind Blue-600
//     toilet: createCustomIcon("#7C3AED"), // Tailwind Purple-600
//     wifi: createCustomIcon("#FACC15"), // Tailwind Yellow-400
//     default: createCustomIcon("#737373"), // Tailwind Neutral-500
//   };


const createCustomIcon = (color: string) =>
  L.icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg height="30" width="30" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="200" fill="${color}" stroke="white" stroke-width="20"/>
      </svg>
    `)}`,
    iconSize: [15, 15],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

export const resourceIcons = {
  shelter: createCustomIcon("#FACC15"),   // Red
  food: createCustomIcon("#16A34A"),      // Green
  water: createCustomIcon("#2563EB"),     // Blue
  toilet: createCustomIcon("#DC2626"),    // Yellow
  wifi: createCustomIcon("#7C3AED"),      // Purple
  default: createCustomIcon("#737373"),   // Gray
};





export const customIcon = new L.Icon({
  iconUrl: markerIconPng.src,
  shadowUrl: markerShadowPng.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});



// export const foodIcon = new L.Icon({
// //   iconUrl: "/icons/food-marker.png",i..
//   iconUrl: markerIconPng.src, 
//   shadowUrl: markerShadowPng.src,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// export const shelterIcon = new L.Icon({
//   iconUrl: markerIconPng.src, 
//   shadowUrl: markerShadowPng.src,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });
