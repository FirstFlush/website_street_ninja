import Image from 'next/image'
import { faqsData } from './faqData'
import { Container } from '@/components/layout/container'
// import backgroundImage from '@/images/background-faqs.jpg'
import Border from '@/components/layout/border'
import backgroundImage from '@/images/blood-bg.jpg'
import SectionHeader from '@/components/layout/section-header'


const Faqs = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute select-none top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <SectionHeader 
            title="Frequently asked questions"
            subtitle="If you’ve read how it works but still have a few questions, this should help."
            align="left"
          />
          {/* <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you’ve read how it works but still have a few questions, this should help.
          </p> */}
        </div>
        <ul
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
        </ul>
      </Container>
    </section>
  )
}

export default Faqs;