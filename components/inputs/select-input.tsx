'use client'

import React from 'react'
import { ChevronDown, Check } from 'lucide-react'

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: { value: string; label: string }[]
  error?: string
  success?: boolean
  hint?: string
}

export function SelectInput({ 
  label, 
  options, 
  error,
  success,
  hint,
  ...props 
}: SelectInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-vb-gray">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {hint && (
        <p className="text-xs text-vb-gray">{hint}</p>
      )}
      <div className="relative">
        <select
          {...props}
          className={`w-full px-4 py-3 pr-10 border-2 rounded-lg text-base appearance-none cursor-pointer transition-colors ${
            error 
              ? 'border-red-300 bg-red-50 text-vb-blue focus:outline-none focus:border-red-500' 
              : 'border-vb-border bg-white text-vb-blue focus:outline-none focus:border-vb-blue'
          }`}
        >
          <option value="">{label || 'Wählen Sie eine Option...'}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-3 text-vb-gray pointer-events-none" size={20} />
        {success && (
          <Check className="absolute right-10 top-3 text-vb-success" size={20} />
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  )
}
