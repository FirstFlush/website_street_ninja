import clsx from "clsx"
import { Reason } from "./reasons"


interface ReasonDivProps extends React.ComponentPropsWithoutRef<'div'> {
  reason: Reason
  isActive: boolean
}

const ReasonDiv = ({ reason, isActive, className, ...props }: ReasonDivProps) => {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'inline-flex items-center justify-center w-10 h-10 rounded-lg',
          'text-white',
          isActive ? 'bg-primary-dark-10' : 'bg-slate-500',
        )}
      >
          <reason.icon />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-primary-dark-10' : 'text-slate-600',
        )}
      >
        {reason.eyebrow}
      </h3>
      <p className="mt-2 font-display text-lg text-slate-900">
        {reason.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{reason.description}</p>
    </div>
  )
}

export default ReasonDiv;