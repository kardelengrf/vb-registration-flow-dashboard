'use client'

import React from 'react'
import { Search, X } from 'lucide-react'

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  onClear?: () => void
}

export function SearchInput({ 
  label,
  onClear,
  value,
  onChange,
  ...props 
}: SearchInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-vb-gray">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-vb-gray" size={20} />
        <input
          {...props}
          type="text"
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-10 py-3 border-2 border-vb-border rounded-lg text-base bg-white text-vb-blue placeholder:text-vb-gray focus:outline-none focus:border-vb-blue transition-colors"
        />
        {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-3 text-vb-gray hover:text-vb-blue transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  )
}
