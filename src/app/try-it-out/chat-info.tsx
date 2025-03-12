import { MessagesSquare, ArrowRight } from "lucide-react";
import { keywords } from "@/data/keywords";
import Border from "@/components/layout/border";

const ChatInfo = () => {
  return (
    <div className="max-w-lg mx-auto text-foreground lg:px-0 px-4 pt-8 sm:pt-12 md:pt-0 ">
      <h2 className="text-xl font-semibold text-primary-dark-10 flex items-center gap-3">
        <MessagesSquare />
        <span>Try Street Ninja</span>
      </h2>
      <p className="text-sm">
          This chat lets you explore the Street Ninja SMS service <span className="font-bold">right from your browser</span>.  
          Search for resources near you, just like you would in a text message.
      </p>

      <Border className="my-8"/>

      <h3 className="text-lg font-medium">You Can Search For:</h3>
      <ul className="grid grid-cols-2 gap-4 text-sm">
        {keywords.map((keyword) => (
            <li key={keyword.title} className="flex items-center gap-2"><keyword.icon className="w-4 h-4 text-primary-dark-10" />
                <span>{keyword.title.toUpperCase()}</span>
            </li>
        ))}
      </ul>

      <Border className="my-8"/>

      {/* Sample Queries */}
      <h3 className="text-lg font-medium">Try Typing:</h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-primary-dark-10" />
          <span className="font-mono bg-primary-dark-10/10 px-2 py-1 rounded">food 222 main st</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-primary-dark-10" />
          <span className="font-mono bg-primary-dark-10/10 px-2 py-1 rounded">shelter 320 Hastings e</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-primary-dark-10" />
          <span className="font-mono bg-primary-dark-10/10 px-2 py-1 rounded">wifi near 10th and Main</span>
        </div>
      </div>

      <Border className="my-8"/>

      <h3 className="text-lg font-medium">Follow Up Your Search With:</h3>
      <ul className="list-disc pl-5 text-sm">
        <li><span className="text-primary-dark-10 font-medium">MORE</span> – Shows additional results.</li>
        <li><span className="text-primary-dark-10 font-medium">INFO</span> – Details about a specific result (e.g., <span className="font-mono">2 INFO</span>).</li>
        <li><span className="text-primary-dark-10 font-medium">DIRECTIONS</span> – How to get there (e.g., <span className="font-mono">5 DIRECTIONS</span>).</li>
      </ul>

      <Border className="my-8"/>

      <h3 className="text-lg font-medium">More Examples:</h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-primary-dark-10" />
          <span className="font-mono bg-primary-dark-10/10 px-2 py-1 rounded">more</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-primary-dark-10" />
          <span className="font-mono bg-primary-dark-10/10 px-2 py-1 rounded">2 info</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-primary-dark-10" />
          <span className="font-mono bg-primary-dark-10/10 px-2 py-1 rounded">5 directions</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
