'use client';
import { createContext, useContext, useState } from 'react';


interface IMobileNavContext {
    expanded: boolean
    toggleNavMenu: () => void
    closeNavMenu: () => void
}

const MobileNavContext = createContext<IMobileNavContext | undefined>(undefined)

export const MobileNavProvider = ({ children }: { children: React.ReactNode }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleNavMenu = () => setExpanded((prev) => !prev);
    const closeNavMenu = () => setExpanded(false);

    return (
        <MobileNavContext.Provider value={{ expanded, toggleNavMenu, closeNavMenu }}>
            {children}
        </MobileNavContext.Provider>
    )
}

export const useMobileNav = () => {
    const context = useContext(MobileNavContext);
    if (!context) {
      throw new Error('useMobileNav must be used within a MobileNavProvider');
    }
    return context;
  };
