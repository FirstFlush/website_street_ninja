'use client'
import { useEffect, useState } from 'react'
import { Container } from '@/components/layout/container'
import BackgroundImage from '../../visual/background-image'
import Tabs from './tabs'
import SectionHeader from '@/components/layout/section-header'


const HowItWorks = () => {
  const [tabOrientation, setTabOrientation] = useState<
    'horizontal' | 'vertical'
  >('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="how-it-works"
      aria-label="How Street Ninja works"
      className="relative overflow-hidden bg-background-dark pt-20 pb-28 sm:py-32"
    >
      <BackgroundImage />

      <Container className="relative !px-0 lg:px-8">
        <SectionHeader 
          title="How it works"
          subtitle="Text for help. Get real-time info. Locate key services like food and
            shelter without apps or internet."
          isDark={true}
        />
        <Tabs tabOrientation={tabOrientation} />
      </Container>
    </section>
  )
}

export default HowItWorks


