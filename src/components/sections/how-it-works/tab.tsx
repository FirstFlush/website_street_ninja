import { Tab } from "@headlessui/react"
import { ITab } from "./tabsData"
import clsx from "clsx"

interface CustomTabProps {
    selectedIndex: number
    tabIndex: number
    tab: ITab
}


const CustomTab = ({ tab, tabIndex, selectedIndex }: CustomTabProps) => {

    return (
        <Tab
            className={clsx(
            'cursor-pointer font-display text-lg data-selected:not-data-focus:outline-hidden',
            selectedIndex === tabIndex
                ? 'text-white lg:text-white'
                : 'text-blue-100 hover:text-white lg:text-white',
            )}
        >
            <span className="hidden sm:block absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
            <div className="flex items-center">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                    <tab.icon
                    height={18}
                    width={18}
                    className="inline align-middle"
                    />
                </span>
                <span className="ml-4">{tab.title}</span>
            </div>
        </Tab>
    )
} 

export default CustomTab;