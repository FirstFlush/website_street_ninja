import { DollarSign, Database, Megaphone, LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import Funding from "./funding";
import Awareness from "./awareness";
import DataAccess from "./data-access";

export interface IStep {
  title: string;
  component: React.ElementType;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const stepsData: IStep[] = [
  {
    title: "Funding",
    component: Funding,
    icon: DollarSign,
  },
  {
    title: "Data access",
    component: DataAccess,
    icon: Database,
  },
  {
    title: "Getting the Word Out",
    component: Awareness,
    icon: Megaphone,
  },
];
// export const stepsData: IStep[] = [
//   {
//     title: "Funding to Keep It Running",
//     text: "SMS services and infrastructure cost money. To scale this project, we need funding for operational costs and to secure a dedicated short code for more reliable messaging.",
//     icon: DollarSign,
//   },
//   {
//     title: "Access to Better Resource Data",
//     text: "The more accurate the data, the better the service. We’re looking for connections to shelters, food banks, and city data sources to improve the information we provide.",
//     icon: Database,
//   },
//   {
//     title: "Getting the Word Out",
//     text: "People can’t use what they don’t know about. We need help with outreach—whether through nonprofits, social services, or word of mouth—to make sure Street Ninja reaches those who need it most.",
//     icon: Megaphone,
//   },
// ];
