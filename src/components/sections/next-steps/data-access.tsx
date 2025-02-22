import { Database, Home, HeartPulse } from "lucide-react";

const DataAccess = () => {
  return (
    <section>
      <div className="flex items-center gap-3">
        <Database size={32} className="text-primary-dark-10" />
        <h2 className="text-xl font-semibold">Expanding Data Access</h2>
      </div>

      <p className="my-8">
        The more data Street Ninja can access, the better the service becomes. 
        Real-time updates and new data sources allow us to provide 
        more accurate, relevant, and useful information.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <Home size={18} className="text-primary-dark-10 flex-none"/>
          <div>
            <h3 className="font-medium">Live Shelter Availability</h3>
            <p className="text-neutral-700 text-sm">
              Instead of static listings, <b>real-time shelter capacity data</b> means users see open beds before they arrive.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <HeartPulse size={18} className="text-primary-dark-10 flex-none" />
          <div>
            <h3 className="font-medium">Medical & Health Services</h3>
            <p className="text-neutral-700 text-sm">
              Expanding into walk-in clinics, harm reduction, and urgent care services ensures people get the help they need, faster.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Database size={18} className="text-primary-dark-10 flex-none" />
          <div>
            <h3 className="font-medium">More Data Partners</h3>
            <p className="text-neutral-700 text-sm">
                More data partners mean better, more detailed help—more accurate shelter info, 
                more up-to-date resources, and a broader reach. We're always looking to integrate with existing systems, 
                but if the infrastructure isn't there, we're open to helping build it too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataAccess;
