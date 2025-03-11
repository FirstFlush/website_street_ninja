'use client'
import { Container } from '@/components/layout/container'
import NextStepsMobile from './mobile'
import NextStepsDesktop from './desktop'
import SectionHeader from '@/components/layout/section-header'


const NextSteps = () => {
  return (
    <section id="next-steps" className="pt-14 sm:pt-20 lg:pt-32  pb-14 sm:pb-20 lg:pb-32">
      <Container>
        <SectionHeader 
          title="What's next"
          subtitle="To make this project a reality, we need developers, funders, and data providers. If you can help, let’s connect."
        />
        <NextStepsMobile />
        <NextStepsDesktop />
      </Container>
    </section>
  )
}

export default NextSteps;