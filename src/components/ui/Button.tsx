import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex cursor-pointer transition-colors duration-300 items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex cursor-pointer transition-colors duration-300 ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-hidden',
}

const variantStyles = {
  solid: {
    primary:
      'bg-primary-dark-10 text-white hover:bg-background-dark hover:text-foreground-dark active:bg-primary-light-10 focus-visible:outline-primary-dark-20',
    slate:
      'bg-background-dark text-foreground-dark hover:bg-primary-dark-10 hover:text-white active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-foreground text-foreground hover:text-primary-dark-10 hover:ring-primary-dark-10 active:bg-primary active:bg-primary focus-visible:outline-primary-light-20',
    white:
      'ring-white/70 duration-300 text-foreground-dark hover:text-primary hover:ring-primary-dark-10 active:ring-primary active:text-primary-dark-10 focus-visible:outline-primary-light-20',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
