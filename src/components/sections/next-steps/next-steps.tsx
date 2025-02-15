'use client'
import { Container } from '@/components/container'
import NextStepsMobile from './mobile'
import NextStepsDesktop from './desktop'

export function NextSteps() {
  return (
    <section id="next-steps" className="pb-14 sm:pb-20 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            The next steps
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            This project works, but to reach more people, we need funding, better data, and more awareness. If you can help, let’s connect.
          </p>
        </div>
        <NextStepsMobile />
        <NextStepsDesktop />
      </Container>
    </section>
  )
}
