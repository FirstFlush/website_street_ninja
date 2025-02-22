import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";



const createCustomIcon = (colorDark: string, colorLight: string) =>
  L.icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" 
          fill="${colorLight}"
          stroke="black"
          stroke-width="0.5"
        />
      </svg>

    `)}`,
    iconSize: [25, 25], 
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

// Define different gradient colors for each resource type
export const resourceIcons = {
  shelter: createCustomIcon("#EAB308", "#FDE047"),   // Brighter Gold  
  food: createCustomIcon("#22C55E", "#4ADE80"),      // Brighter Green  
  water: createCustomIcon("#2563EB", "#3B82F6"),     // Brighter Blue  
  toilet: createCustomIcon("#DC2626", "#EF4444"),    // Brighter Red  
  wifi: createCustomIcon("#7C3AED", "#A78BFA"),      // Brighter Purple  
  default: createCustomIcon("#737373", "#A3A3A3"),   // Brighter Gray  
  // shelter: createCustomIcon("#D97706", "#FACC15"),   // Gold (dark to light)
  // food: createCustomIcon("#15803D", "#16A34A"),      // Green (dark to light)
  // water: createCustomIcon("#1E3A8A", "#2563EB"),     // Blue (dark to light)
  // toilet: createCustomIcon("#991B1B", "#DC2626"),    // Red (dark to light)
  // wifi: createCustomIcon("#5B21B6", "#7C3AED"),      // Purple (dark to light)
  // default: createCustomIcon("#525252", "#737373"),   // Gray (dark to light)
};



// <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <defs>
//     <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
//       <stop offset="0%" style="stop-color:${colorLight}; stop-opacity:1" />
//       <stop offset="100%" style="stop-color:${colorDark}; stop-opacity:1" />
//     </linearGradient>
//   </defs>
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="url(#grad1)"/>
// </svg>