import { Check } from 'lucide-react'

interface StepperProps {
  currentStep: number
  steps: string[]
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="flex justify-center items-center gap-8 py-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isCompleted = stepNumber < currentStep
        const isActive = stepNumber === currentStep

        return (
          <div key={step} className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-vb-blue text-white shadow-md'
                  : isCompleted
                    ? 'bg-vb-success text-white'
                    : 'bg-gray-200 text-gray-500'
              }`}
            >
              {isCompleted ? <Check size={20} /> : stepNumber}
            </div>
            <span className={`text-sm ${isActive ? 'font-semibold text-vb-blue' : 'text-vb-gray'}`}>
              {step}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-0.5 ml-2 transition-all duration-200 ${
                  isCompleted ? 'bg-vb-success' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
