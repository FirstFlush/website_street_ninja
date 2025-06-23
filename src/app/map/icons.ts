import L from "leaflet";

const createCustomIcon = (color: string) =>
  L.icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" 
          fill="${color}"
          stroke="black"
          stroke-width="0.5"
        />
      </svg>
    `)}`,
    iconSize: [25, 25], 
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

export const resourceIcons = {
  shelter: createCustomIcon("#7C3AED"),  // Indigo
  food:    createCustomIcon("#FDE047"),  // Yellow
  water:   createCustomIcon("#0EA5E9"),  // Blue
  toilet:  createCustomIcon("#22C55E"),  // Purple
  wifi:    createCustomIcon("#EF4444"),  // Red
  default: createCustomIcon("#A3A3A3"),  // Gray
};