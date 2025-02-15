import Link from 'next/link'
import clsx from 'clsx'
import { useRouter, usePathname } from 'next/navigation'

export function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode,
  className?: string,
}) {
  const router = useRouter();
  const pathname = usePathname();

  const fullHref = href.startsWith('#') && pathname !== '/' 
    ? `/${href}`
    : href

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // If it's a hash link
    if (href.startsWith('#')) {
      // If we're not already on the home page
      if (window.location.pathname !== '/') {
        router.push('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        // If we're already on home page, just scroll
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
        "text-foreground-dark/70 hover:bg-background-dark/70 hover:text-white",
        "transition-colors duration-300",
        className,
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
