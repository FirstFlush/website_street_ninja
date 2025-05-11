import { keywords } from "@/data/keywords";

  const MapLegend = () => {
    return (
        <div className="absolute z-500 bottom-16 sm:bottom-8 right-4 bg-white/85 p-3 rounded-lg shadow-md text-sm">
          {keywords.map(({ color, title }, index) => (
            <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
              <span className="font-mono text-medium tracking-wider">{title}</span>
            </div>
          ))}
        </div>
    );
  };
  
  export default MapLegend;
  