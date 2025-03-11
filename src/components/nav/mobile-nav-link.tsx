import clsx from "clsx"
import { useRouter, usePathname } from 'next/navigation'
import Link from "next/link"


const MobileNavLink = ({ 
  href, 
  children, 
  className,
  close 
}: { 
  href: string, 
  children: React.ReactNode, 
  className?: string,
  close: () => void 
}) => {
  const router = useRouter()
  const pathname = usePathname()
  
  const fullHref = href.startsWith('#') && pathname !== '/'
    ? `/${href}`
    : href


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    close()
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        router.push('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(href)
    }
  }

  return (
    <div onClick={() => handleClick}>
      <Link
        onClick={handleClick}
        href={fullHref}
        className={clsx(
          'block w-full p-2',
          'text-foreground-dark',
          'active:text-primary',
          'hover:text-primary focus:text-primary active:text-primary',
          'focus:outline-0',
          'transition-colors duration-300',
          'max-w-fit',
          className
        )}
      >
        {children}
      </Link>
    </div>
  )
}

export default MobileNavLink








// import Link from "next/link"
// import { PopoverButton } from "@headlessui/react"
// import clsx from "clsx"

// const MobileNavLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
//   return (
//     <PopoverButton as={Link} href={href} className={clsx(
//       'block w-full p-2',
//       'active:text-primary', 
//       className
//     )}>
//       {children}
//     </PopoverButton>
//   )
// }

// export default MobileNavLink;
