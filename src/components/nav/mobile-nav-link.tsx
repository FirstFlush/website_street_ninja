import Link from "next/link"
import { PopoverButton } from "@headlessui/react"
import clsx from "clsx"

const MobileNavLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
  return (
    <PopoverButton as={Link} href={href} className={clsx(
      'block w-full p-2',
      'active:text-amber-300', 
      className
    )}>
      {children}
    </PopoverButton>
  )
}

export default MobileNavLink;
