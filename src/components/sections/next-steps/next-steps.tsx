'use client'
import { Container } from '@/components/container'
import NextStepsMobile from './mobile'
import NextStepsDesktop from './desktop'

export function NextSteps() {
  return (
    <section id="next-steps" className="pt-14 sm:pt-20 lg:pt-32  pb-14 sm:pb-20 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            The next steps
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            To make this project a reality, we need developers, funders, and data providers. If you can help, let’s connect.
          </p>
        </div>
        <NextStepsMobile />
        <NextStepsDesktop />
      </Container>
    </section>
  )
}
