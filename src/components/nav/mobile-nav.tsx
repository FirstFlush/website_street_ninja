
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { Button } from '../ui/Button'
import MobileNavIcon from './mobile-nav-icon'
import MobileNavLink from './mobile-nav-link'
import { MapPin, MessageCircle } from 'lucide-react'

const MobileNavigation = () => {
  return (
    <Popover>
      {({ close }) => (
        <>
          <PopoverButton
            className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MobileNavIcon open={open} />}
          </PopoverButton>
          <PopoverBackdrop
            key={Math.random()} // 👈 Forces React to remount it every time menu opens
            transition
            className="inset-0 bg-background-dark/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
            style={{
              backgroundColor: "color-mix(in oklab, #121212 50%, transparent)",
              position: "fixed"
            }}
          />
          <PopoverPanel
            transition
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-background-dark/95 p-4 text-lg tracking-tight text-foreground-dark ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
            // className="fixed top-0 left-0 right-0 h-screen w-screen flex origin-top flex-col rounded-2xl bg-background-dark/95 p-4 text-lg tracking-tight text-foreground-dark ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
          >
            <MobileNavLink href="#how-it-works" close={close}>How it works</MobileNavLink>
            <MobileNavLink href="#next-steps" close={close}>Next steps</MobileNavLink>
            <MobileNavLink href="/map" close={close}>
              <MapPin height={20} width={20} className="inline-block align-text-bottom"/> <span className="ml-1">Map</span>           
            </MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/contact" className="flex max-w-fit" close={close}>
              <Button variant="solid" color="primary">
                <MessageCircle height={20} width={20}/>
                <span className="ml-1">Contact</span>
              </Button>
            </MobileNavLink>
          </PopoverPanel>
        </>
      )}
    </Popover>
  )
}

export default MobileNavigation
















// import {
//     Popover,
//     PopoverButton,
//     PopoverBackdrop,
//     PopoverPanel,
//   } from '@headlessui/react'
// import MobileNavIcon from './mobile-nav-icon'
// import MobileNavLink from './mobile-nav-link'
// import { MapIcon } from 'lucide-react'


// const MobileNavigation = () => {

//     return (
//       <Popover>
//         <PopoverButton
//           className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
//           aria-label="Toggle Navigation"
//         >
//           {({ open }) => <MobileNavIcon open={open} />}
//         </PopoverButton>
//         <PopoverBackdrop
//           transition
//           className="inset-0 bg-background-dark/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
//           style={{backgroundColor:"color-mix(in oklab, #121212 50%, transparent)", position:"fixed"}}
//         />
//         <PopoverPanel
//           transition
//           className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-background-dark/95 p-4 text-lg tracking-tight text-foreground-dark ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
//         >
//           <MobileNavLink href="#how-it-works">How it works</MobileNavLink>
//           <MobileNavLink href="#next-steps">Next steps</MobileNavLink>
//           <MobileNavLink href="#get-involved">Get involved</MobileNavLink>
//           <hr className="m-2 border-slate-300/40" />
//           {/* <MobileNavLink href="/map" className="flex"> */}
//             {/* <div className="rounded-full p-2 bg-primary-dark-10">
//               <MapPin height={16} width={16} />
//             </div><div className="pl-2">Map</div> */}
//           {/* </MobileNavLink> */}
//         </PopoverPanel>
//       </Popover>
//     )
//   }


// export default MobileNavigation;