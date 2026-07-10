'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: boolean
  hint?: string
}

export function TextInput({ 
  label, 
  error, 
  success, 
  hint,
  className,
  ...props 
}: TextInputProps) {
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
        <input
          {...props}
          className={`w-full px-4 py-3 border-2 rounded-lg text-base transition-colors ${
            error 
              ? 'border-red-300 bg-red-50 text-vb-blue placeholder:text-vb-gray focus:outline-none focus:border-red-500' 
              : 'border-vb-border bg-white text-vb-blue placeholder:text-vb-gray focus:outline-none focus:border-vb-blue'
          } ${className || ''}`}
        />
        {success && (
          <Check className="absolute right-3 top-3 text-vb-success" size={20} />
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  )
}
