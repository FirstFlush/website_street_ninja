import clsx from 'clsx'
import Image from 'next/image'
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { tabs } from './tabsData'
import CustomTab from './tab'
import Conversation from '@/components/chat/conversation'
import { standardQuery } from '@/data/chatData'

interface TabsProps {
    tabOrientation: 'horizontal' | 'vertical'
} 

const Tabs = ({ tabOrientation }: TabsProps) => {

    return (
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {tabs.map((tab, tabIndex) => (
                    <div
                      key={tab.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === tabIndex
                          ? 'bg-background-dark/40 lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <CustomTab 
                          tab={tab}
                          tabIndex={tabIndex}
                          selectedIndex={selectedIndex}
                        />
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === tabIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {tab.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {tabs.map((tab) => (
                  <TabPanel key={tab.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {tab.description}
                      </p>
                    </div>

                    <div 
                      className={clsx(
                        "py-12 lg:py-0",
                        "relative mt-10 lg:mt-0",
                        "w-full lg:w-[67.8125rem]",
                        "overflow-hidden rounded-xl",
                        "bg-slate-50 bg-[url('/images/bg-abstract-red.webp')] bg-cover bg-center",
                        "shadow-xl shadow-red-900/20"
                      )}
                    >

                      <div className="h-[30rem] lg:h-[44rem] flex items-center justify-center">
                        <Image
                          className="w-[20rem] lg:w-[22rem] mx-auto lg:ml-24"
                          src={tab.image}
                          alt=""
                          priority
                          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 60vw, 80vw"
                        />
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
    )
}

export default Tabs;
