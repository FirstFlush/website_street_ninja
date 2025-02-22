import { MessageSquareIcon, MapPin, Phone, Rocket } from "lucide-react";

const Funding = () => {
  return (
    <section>
      <div className="flex items-center gap-3">
        <Rocket size={32} className="text-primary-dark-10"/>
        <h2 className="text-xl font-semibold">Getting Off the Ground</h2>
      </div>

      <p className="my-8">
        Street Ninja is running on (mostly) free-tier everything—free geocoding tools,
        free map routing data, and discounted SMS services. It works, but it’s
        not ideal. With funding, we can make it <b>faster, smarter, and
        easier to use</b>.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-primary-dark-10 flex-none"/>
          <div>
            <h3 className="font-medium">Better Geospatial Data</h3>
            <p className="text-neutral-700 text-sm">
              Right now, route mapping for `directions` inquiries isn't built for foot traffic. Funding lets us <b>upgrade to premium routing APIs</b> for clearer, walking-friendly directions.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={18} className="text-primary-dark-10 flex-none" />
          <div>
            <h3 className="font-medium">Dedicated Short Code</h3>
            <p className="text-neutral-700 text-sm">
              No one remembers a random 1-800 number. A short code makes Street Ninja <b>easier to access</b> when it matters most.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MessageSquareIcon size={18} className="text-primary-dark-10 flex-none" />
          <div>
            <h3 className="font-medium">SMS Costs & Scaling</h3>
            <p className="text-neutral-700 text-sm">
            The SMS gateway powers Street Ninja’s ability to send and receive texts—it’s essential for making the service work. 
            We have a non-profit discount, but it’s still a pay-per-text system, and costs add up. Funding helps keep 
            Street Ninja accessible to everyone.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Funding;