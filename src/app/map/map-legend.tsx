
const legendItems = [
    { color: "#FDE047", label: "Shelter" },
    { color: "#4ADE80", label: "Food" },
    { color: "#3B82F6", label: "Water" },
    { color: "#EF4444", label: "Toilet" },
    { color: "#A78BFA", label: "Wifi" },
  ];
  
  const MapLegend = () => {
    return (
        <div className="absolute z-1000 bottom-16 sm:bottom-8 right-4 bg-white/80 p-3 rounded-lg shadow-md text-sm">
          {legendItems.map(({ color, label }, index) => (
            <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
              <span className="text-neutral-800 font-medium">{label}</span>
            </div>
          ))}
        </div>
    );
  };
  
  export default MapLegend;
  