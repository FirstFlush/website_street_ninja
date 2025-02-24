"use client";
import { useMobileNav } from "@/providers/mobile-nav"
import clsx from "clsx"

const RootLayoutInner = ({ children }: { children: React.ReactNode }) => {
    
    const { expanded, toggleNavMenu, closeNavMenu} = useMobileNav() 

    return (
        <>
            <div 
                // onClick={closeNavMenu}
                className={clsx(
                    expanded ? "block" : "hidden",
                    "bg-black/50",
                    "fixed inset-0 z-400"
            )}>
                
            </div>
            {children}
        </>
    )
}

export default RootLayoutInner;