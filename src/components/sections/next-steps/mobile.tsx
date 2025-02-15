import { stepsData } from './stepsData'

const NextStepsMobile = () => {
  return (
    <div className="mt-16 flex flex-col gap-y-10 lg:hidden">
      {stepsData.map((step) => (
        <div key={step.title} className="flex items-start space-x-4">
          <step.icon size={62} className="text-primary" />
          <div>
            <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NextStepsMobile
