import { CallToAction } from '@/components/sections/call-to-action'
import { Faqs } from '@/components/Faqs'
import Footer from '@/components/nav/footer'

import { Hero } from '@/components/sections/hero'
import { Pricing } from '@/components/Pricing'
import HowItWorks from '@/components/sections/how-it-works'
import { SecondaryFeatures } from '@/components/sections/SecondaryFeatures'
import { Testimonials } from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HowItWorks />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
