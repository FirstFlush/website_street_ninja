'use client'
import { Button } from "@/components/ui/Button"
import { ArrowRightIcon } from 'lucide-react';
import SectionHeader from "@/components/layout/section-header";


export default function Error() {
  return (
      <div className="grid min-h-full sm:place-items-center px-6 py-44 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-primary-dark-10 glitch">500</p>
          <SectionHeader 
            title="An unexpected error occurred" 
            subtitle="Sorry! We have been notified of this error and will work to fix it ASAP."
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="/"
              color="primary"
            >
              Go back home
            </Button>
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
  )
}


