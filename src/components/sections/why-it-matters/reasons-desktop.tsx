import { Tab, TabGroup, TabList } from '@headlessui/react'
import { reasons } from './reasons'
import ReasonDiv from './reason-div'

function ReasonsDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
          <TabList className="grid grid-cols-3 gap-x-8">
            {reasons.map((reason, reasonIndex) => (
              <ReasonDiv
                key={reason.summary}
                reason={{
                  ...reason,
                  eyebrow: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      {reason.eyebrow}
                    </Tab>
                  ),
                }}
                isActive
                className="relative"
              />
            ))}
          </TabList>
      )}
    </TabGroup>
  )
}

export default ReasonsDesktop;