import { Megaphone, Users, GitBranch, HeartHandshakeIcon } from "lucide-react";

const Awareness = () => {
  return (
    <section>
      <div className="flex items-center gap-3">
        <Megaphone size={32} className="text-primary-dark-10"/>
        <h2 className="text-xl font-semibold">Getting the Word Out</h2>
      </div>

      <p className="my-8">
        Street Ninja is built by developers, not community organizers. We know tech, but we’re not experts 
        in NGOs, city partnerships, or fundraising. To grow this project, we need people 
        who know that world and can help navigate it.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <Users size={18} className="text-primary-dark-10 flex-none"/>
          <div>
            <h3 className="font-medium">Non-Profit</h3>
            <p className="text-neutral-700 text-sm">
                If you know how nonprofits and city programs operate, we’d love your insight. Navigating this world takes experience—understanding the processes, the right approaches, and how to move things forward.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
            <HeartHandshakeIcon size={18} className="text-primary-dark-10 flex-none"/>
            <div>
                <h3 className="font-medium">Community & Lived Experience</h3>
                <p className="text-neutral-700 text-sm">
                No one understands what’s needed better than the people who have <b>lived it</b>. 
                If you have first-hand experience with homelessness, your voice matters here. 
                Tell us what works, what doesn’t, and what would actually help.
                </p>
            </div>
        </div>
        {/* <div className="flex items-start gap-3">
          <Megaphone size={18} className="text-primary-dark-10 flex-none" />
          <div>
            <h3 className="font-medium">Extroverts & Connectors</h3>
            <p className="text-neutral-700 text-sm">
              This project only works if people know about it. If you’re the kind of 
              person who makes connections happen, we need you.
            </p>
          </div>
        </div> */}

        <div className="flex items-start gap-3">
          <GitBranch size={18} className="text-primary-dark-10 flex-none" />
          <div>
            <h3 className="font-medium">Developers & Tech Contributors</h3>
            <p className="text-neutral-700 text-sm">
              If you’re a developer who wants to help, check out the GitHub repo for 
              ways to contribute: <a href="https://github.com/FirstFlush/street_ninja/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-primary-dark-10 font-medium">CONTRIBUTING.md</a>.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Awareness;
