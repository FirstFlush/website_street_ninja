// import screenshotExpenses from '@/images/screenshots/expenses.png'
// import screenshotPayroll from '@/images/screenshots/payroll.png'
// import screenshotReporting from '@/images/screenshots/reporting.png'
// import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import infoImg from '@/images/sms/info_food.webp'
import moreImg from '@/images/sms/more_shelters.webp'
import welcomeImg from '@/images/sms/welcome_shelters.webp'
import filterImg from '@/images/sms/filter_shelter_pets.webp'
import directionsImg from '@/images/sms/directions.webp'


import { List, PlusCircle, Info, Map, Filter, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface ITab {
  title: string
  description: string
  image: StaticImageData
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const tabs: Array<ITab> = [
    {
      title: 'Resources',
      description:
        "Find food, shelter, water, restrooms, and WiFi instantly with a simple text.",
      image: welcomeImg,
      icon: List
    },
    {
      title: 'More',
      description:
        "Get additional results when there are too many to fit in one message.",
      image: moreImg,
      icon: PlusCircle
    },
    {
      title: 'Info',
      description:
        "Check extra details like bed availability, meal times, or shelter rules.",
      image: infoImg,
      icon: Info,
    },
    {
      title: 'Directions',
      description:
        "Receive step-by-step text directions to any listed location.",
      image: directionsImg,
      icon: Map,
    },
    {
      title: 'Filter',
      description:
        "Filter searches by pet-friendly, women-only, wheelchair access, and more.",
      image: filterImg,
      icon: Filter,
    },
  ];
