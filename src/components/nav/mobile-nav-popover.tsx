// 'use client'
// import {
//   Popover,
//   PopoverButton,
//   PopoverPanel,
//   PopoverBackdrop,
// } from '@headlessui/react'
// import { Button } from '../ui/Button'
// import MobileNavIcon from './mobile-nav-icon'
// import MobileNavLink from './mobile-nav-link'
// import { MapPin, MessageCircle } from 'lucide-react'
// import Logotype from '../special/logotype'
// import { useMobileNav } from '@/providers/mobile-nav'

// const MobileNavigation = () => {

//   const { expanded, toggleNavMenu, closeNavMenu } = useMobileNav()

//   const handleClose = (close: () => void) => {
//     closeNavMenu();
//     close();
//   }

//   return (
//     <Popover>
//       {({ close }) => (
//         <>
//           <PopoverButton
            
//             className="relative flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
//             aria-label="Toggle Navigation"
//             onClick={toggleNavMenu}
//           >
//             { ({ open }) => <MobileNavIcon open={open} /> }
//           </PopoverButton>
//           <PopoverPanel
//             transition
//             // className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-background-dark/95 p-4 text-lg tracking-tight text-foreground-dark ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
//             className="absolute inset-x-0 top-[68px] mt-4  rounded-2xl bg-background-dark/95 p-4 text-lg tracking-tight text-foreground-dark ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
//           >
//             <Logotype className="mb-6 mt-2" width={230}/>
//             <MobileNavLink href="#how-it-works" close={() => handleClose(close)}>How it works</MobileNavLink>
//             <MobileNavLink href="/try-it-out" close={() => handleClose(close)}>Try it out</MobileNavLink>
//             <MobileNavLink href="/map" close={() => handleClose(close)}>
//               <MapPin height={20} width={20} className="inline-block align-text-bottom"/> <span className="ml-1">Map</span>           
//             </MobileNavLink>
//             <hr className="m-2 mb-3 border-slate-300/40" />
//             <MobileNavLink href="/contact" className="flex max-w-fit" close={() => handleClose(close)}>
//               <Button variant="solid" color="primary">
//                 <MessageCircle height={20} width={20}/>
//                 <span className="ml-1">Contact</span>
//               </Button>
//             </MobileNavLink>
//           </PopoverPanel>
//         </>
//       )}
//     </Popover>
//   )
// }

// export default MobileNavigation