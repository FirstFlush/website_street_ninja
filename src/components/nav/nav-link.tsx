import Link from 'next/link'
import clsx from 'clsx'
import { useRouter, usePathname } from 'next/navigation'

interface NavLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode
}


export function NavLink({children, className, href="/", ...props}: NavLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const fullHref = href.startsWith('#') && pathname !== '/' 
    ? `/${href}`
    : href

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  
    e.preventDefault()
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
    <Link
      href={fullHref}
      onClick={handleClick}
      className={clsx(
        "inline-block rounded-full px-4 py-2 text-md",
        "text-foreground-dark hover:bg-background-dark/70 hover:text-white",
        "transition-colors duration-300",
        className,
      {...props}
      )}
    >
      {children}
    </Link>
  )
}


























// import Link from 'next/link'
// import clsx from 'clsx'

// export function NavLink({
//   href,
//   children,
//   className,
// }: {
//   href: string
//   children: React.ReactNode,
//   className?: string,
// }) {
//   return (
//     <Link
//       href={href}
//       // className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
//       className={clsx(
//         "inline-block rounded-full px-4 py-2 text-md",
//         "text-foreground-dark/70 hover:bg-background-dark/70 hover:text-white",
//         "transition-colors duration-300",
//         className,
//       )}
//       // className={clsx(
//       //   "inline-block rounded-lg px-4 py-2 text-md", 
//       //   "text-foreground-dark/70 hover:text-foreground-dark hover:bg-background-dark/70",
//       //   "transition-colors duration-300",
//       //   className,
//       // )}
//     >
//       {children}
//     </Link>
//   )
// }
