'use client'
import clsx from 'clsx'
import { Button } from '../ui/Button'
import MobileNavLink from './mobile-nav-link'
import { MapPin, MessageCircle } from 'lucide-react'
import Logotype from '@/components/special/logotype'
import { useMobileNav } from '@/providers/mobile-nav'
import { motion } from 'framer-motion'


const MobileNavigation = () => {

  const { expanded, toggleNavMenu, closeNavMenu } = useMobileNav()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={expanded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={clsx(
                expanded ? "block" : "hidden",
                "z-1000 absolute inset-x-0 top-full mt-12 mx-3 min-[525px]:mx-auto max-w-[500px] flex flex-col origin-top",
                "rounded-2xl bg-[rgba(34,34,34,0.95)] p-4 text-lg tracking-tight text-foreground-dark",
                "ring-1 shadow-xl ring-slate-900/5"
            )}
        >
            <Logotype className="mb-6 mt-2" width={230}/>
            <MobileNavLink href="#how-it-works" close={closeNavMenu}>How it works</MobileNavLink>
            <MobileNavLink href="/try-it-out" close={closeNavMenu}>Try it out</MobileNavLink>
            <MobileNavLink href="/map" close={closeNavMenu}>
                <MapPin height={20} width={20} className="inline-block align-text-bottom"/> <span className="ml-1">Map</span>           
            </MobileNavLink>
            <hr className="m-2 mb-3 border-slate-300/40" />
            <MobileNavLink href="/contact" className="group flex max-w-fit" close={closeNavMenu}>
                <Button variant="solid" color="primary" className={clsx(
                    "group-hover:bg-black  group-active:bg-black", 
                    "group-focus:outline-primary-dark-10 group-focus:outline-offset-2 group-focus:bg-black group-focus:outline-2",
                )}>
                    <MessageCircle height={20} width={20}/>
                    <span className="ml-1">Contact</span>
                </Button>
            </MobileNavLink>
        </motion.div>
    )
}

export default MobileNavigation