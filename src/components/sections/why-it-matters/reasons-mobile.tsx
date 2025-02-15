import Image from 'next/image'
import { reasons } from './reasons'
import ReasonDiv from './reason-div'

const ReasonsMobile = () => {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {reasons.map((reason) => (
        <div key={reason.summary}>
          <ReasonDiv reason={reason} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white ring-1 shadow-lg shadow-slate-900/5 ring-slate-500/10">
              <Image
                className="w-full"
                src={reason.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReasonsMobile
