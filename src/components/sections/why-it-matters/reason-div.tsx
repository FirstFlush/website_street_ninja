import clsx from "clsx"
import { Reason } from "./reasons"
import ContentIcon from "@/components/ui/content-icon"

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
      <ContentIcon icon={reason.icon} />
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