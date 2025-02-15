import Link from 'next/link'
import clsx from 'clsx'

export function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode,
  className?: string,
}) {
  return (
    <Link
      href={href}
      // className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      className={clsx(
        "inline-block rounded-full px-4 py-2 text-md",
        "text-foreground-dark/70 hover:bg-background-dark/70 hover:text-white",
        "transition-colors duration-300",
        className,
      )}
      // className={clsx(
      //   "inline-block rounded-lg px-4 py-2 text-md", 
      //   "text-foreground-dark/70 hover:text-foreground-dark hover:bg-background-dark/70",
      //   "transition-colors duration-300",
      //   className,
      // )}
    >
      {children}
    </Link>
  )
}
