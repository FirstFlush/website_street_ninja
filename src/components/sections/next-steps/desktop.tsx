import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { stepsData } from './stepsData'
import Border from '@/components/layout/border'

const NextStepsDesktop = () => {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {stepsData.map((step, index) => (
              <Tab key={step.title} className="focus:outline-none">
                <div
                  className={clsx(
                    "flex items-center space-x-4 px-6 py-4 rounded-lg cursor-pointer ",
                    selectedIndex === index
                      ? "bg-primary-dark-10 text-white font-semibold shadow-lg"
                      : "bg-slate-200 hover:bg-slate-300 shadow-md"
                  )}
                >
                  <step.icon size={32} className={clsx(
                    selectedIndex === index ? "text-white" : "text-primary"
                  )} />
                  <span className="text-lg">{step.title}</span>
                </div>
              </Tab>
            ))}
          </TabList>
          <Border className="my-8"/>
          <TabPanels className="">
            {stepsData.map((step, index) => (
              <TabPanel key={step.title} className="transition-opacity duration-300">
                {/* <p className="text-lg text-slate-700">{step.text}</p> */}
                <step.component />
              </TabPanel>
            ))}
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export default NextStepsDesktop
