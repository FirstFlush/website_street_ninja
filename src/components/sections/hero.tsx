import clsx from 'clsx';
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className="relative h-[95svh] w-full"
      style={{
        backgroundImage: "url('/images/bg-abstract-white.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="w-fit h-fit mx-auto my-auto pt-[72px]">
          <h1 className="lg:hidden md:text-6xl text-foreground mb-6 font-display text-5xl tracking-tight font-light">Street Ninja</h1>
          <h2 className={clsx(
            "mx-auto max-w-4xl font-display px-4 sm:px-0", 
            "font-light tracking-tight text-foreground sm:text-5xl",
            "text-xl sm:text-3xl"
          )}>
            An <span className="text-primary font-normal text-[115%] tracking-normal">SMS-powered</span> tool to connect vulnerable people with real help.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-foreground">
            Real-time access to food, shelter, wifi, and other essential resources—fast, simple, and judgment-free.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button href="#how-it-works" color="primary">How it works</Button>
            <Button
              href="/try-it-out"
              variant="outline"
              className="group"
            >
              <span className="mr-1">Try it out</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:text-primary-dark-10 transition-colors duration-300"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;