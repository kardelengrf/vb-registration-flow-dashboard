'use client'

import React, { useState } from 'react'
import { Eye, EyeOff, Check } from 'lucide-react'

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: boolean
}

export function PasswordInput({ 
  label, 
  error, 
  success,
  ...props 
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-vb-gray">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          {...props}
          type={showPassword ? 'text' : 'password'}
          className={`w-full px-4 py-3 pr-10 border-2 rounded-lg text-base transition-colors ${
            error 
              ? 'border-red-300 bg-red-50 text-vb-blue placeholder:text-vb-gray focus:outline-none focus:border-red-500' 
              : 'border-vb-border bg-white text-vb-blue placeholder:text-vb-gray focus:outline-none focus:border-vb-blue'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-vb-gray hover:text-vb-blue transition-colors"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {success && (
          <Check className="absolute right-12 top-3 text-vb-success" size={20} />
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  )
}
