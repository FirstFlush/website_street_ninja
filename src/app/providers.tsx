import React from "react";
import { MobileNavProvider } from "@/providers/mobile-nav";

interface ProviderProps {
    children: React.ReactNode
}

const Providers = ({ children }: ProviderProps) => {

    return (
        <MobileNavProvider>
            {children}
        </MobileNavProvider>
    )
}

export default Providers;