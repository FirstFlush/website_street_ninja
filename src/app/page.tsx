import { CallToAction } from '@/components/sections/call-to-action'
import { Faqs } from '@/components/Faqs'
import Footer from '@/components/nav/footer'

import { Hero } from '@/components/sections/hero'
import { Pricing } from '@/components/Pricing'
import HowItWorks from '@/components/sections/how-it-works/how-it-works'
import { WhyItMatters } from '@/components/sections/why-it-matters/why-it-matters'
import { Testimonials } from '@/components/sections/Testimonials'
import { NextSteps } from '@/components/sections/next-steps/next-steps'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HowItWorks />
        <WhyItMatters />
        <NextSteps />
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Faqs /> 
      </main>
      <Footer />
    </>
  )
}
