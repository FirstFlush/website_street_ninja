import React from "react";
import Logomark from "./logomark";
import Logotype from "./logotype";
import clsx from "clsx";


interface LogoProps extends React.ComponentPropsWithoutRef<'div'>{
    colorLogomark?: string
    colorLogotype?: string
    widthLogomark?: number
    widthLogotype?: number
}

const Logo = ({
    className,
    colorLogomark="white",
    colorLogotype="white",
    widthLogomark=45,
    widthLogotype=230,
    ...props
}: LogoProps) => {

    return (
        <div className={clsx("flex items-baseline gap-x-4", className)} {...props}>
            <Logomark color={colorLogomark} width={widthLogomark} />
            <Logotype className="hidden lg:block" color={colorLogotype} width={widthLogotype}/>
        </div>
    )
}

export default Logo;