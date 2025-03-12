import Image from 'next/image'
import { faqsData } from './faqData'
import { Container } from '@/components/layout/container'
import Border from '@/components/layout/border'
import backgroundImage from '@/images/bg/blood-bg.webp'
import SectionHeader from '@/components/layout/section-header'

const Faqs = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%] select-none"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        loading="lazy"
        // unoptimized
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <SectionHeader
            title="Frequently asked questions"
            subtitle="If you’ve read how it works but still have a few questions, this should help."
            align="left"
          />
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqsData.map((column, columnIndex) => (
            <li key={columnIndex} className="flex flex-col gap-y-8">
              <h3 className="text-xl font-bold tracking-wider text-primary-dark-10">
                {column.header}
              </h3>
              <Border />
              <ul className="mb-[-48px]">
                {column.data.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h4 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h4>
                    <p className="mt-2 sm:mt-4 mb-12 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqsData.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
              <h3 className="text-primary-dark-10 text-xl font-bold tracking-wider">{column.header}</h3>
              <Border />
                {column.data.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h4 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h4>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul> */}
      </Container>
    </section>
  )
}

export default Faqs
