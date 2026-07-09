import React from 'react'
import { ChevronDown, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export function Input({ label, error, icon, ...props }: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const isPassword = props.type === 'password'
  const inputType = isPassword && showPassword ? 'text' : props.type

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-vb-blue">{label}</label>}
      <div className="relative">
        <input
          {...props}
          type={inputType}
          className={`w-full px-4 py-3 border rounded-lg transition-smooth ${
            error ? 'border-red-300 bg-red-50' : 'border-vb-border bg-white focus:ring-2 focus:ring-vb-blue focus:border-transparent'
          } text-vb-blue placeholder:text-vb-gray`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-vb-gray hover:text-vb-blue"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
        {icon && !isPassword && <div className="absolute right-3 top-3">{icon}</div>}
        {!error && props.value && !isPassword && (
          <CheckCircle size={20} className="absolute right-3 top-3 text-vb-success" />
        )}
      </div>
      {error && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} /> {error}</p>}
    </div>
  )
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: { value: string; label: string }[]
}

export function Select({ label, options, ...props }: SelectProps) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-vb-blue">{label}</label>}
      <div className="relative">
        <select
          {...props}
          className="w-full px-4 py-3 border border-vb-border rounded-lg bg-white text-vb-blue appearance-none cursor-pointer focus:ring-2 focus:ring-vb-blue focus:border-transparent transition-smooth"
        >
          <option value="">{label || 'Select...'}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={20} className="absolute right-3 top-3 text-vb-gray pointer-events-none" />
      </div>
    </div>
  )
}

interface TogglePillProps {
  isActive: boolean
  label: string
  onClick: () => void
  icon?: React.ReactNode
  disabled?: boolean
}

export function TogglePill({ isActive, label, onClick, icon, disabled }: TogglePillProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
        isActive
          ? 'bg-vb-blue text-white shadow-md'
          : disabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-vb-gray border border-vb-border hover:border-vb-blue hover:text-vb-blue'
      }`}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {label}
      {isActive && <CheckCircle size={16} className="ml-1" />}
    </button>
  )
}

interface RadioButtonProps {
  label: string
  checked: boolean
  onChange: () => void
  disabled?: boolean
}

export function RadioButton({ label, checked, onChange, disabled }: RadioButtonProps) {
  return (
    <button
      onClick={onChange}
      disabled={disabled}
      type="button"
      className={`px-3 sm:px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
        checked
          ? 'bg-vb-blue text-white'
          : disabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-vb-gray border border-vb-border hover:text-vb-blue'
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          checked ? 'bg-vb-blue border-vb-blue' : 'border-vb-border'
        }`}
      >
        {checked && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>
      {label}
    </button>
  )
}

interface CheckboxProps {
  label: React.ReactNode
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
}

export function Checkbox({ label, checked, onChange, disabled }: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="w-5 h-5 mt-0.5 rounded border-2 border-vb-border cursor-pointer accent-vb-blue"
      />
      <span className={`text-sm ${disabled ? 'text-gray-400' : 'text-vb-gray'}`}>{label}</span>
    </label>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  loading?: boolean
}

export function Button({ variant = 'primary', loading, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
        variant === 'primary'
          ? 'bg-vb-blue text-white hover:bg-blue-800'
          : variant === 'secondary'
            ? 'bg-gray-200 text-vb-blue hover:bg-gray-300'
            : 'bg-white text-vb-blue border-2 border-vb-blue hover:bg-blue-50'
      }`}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

interface InfoBoxProps {
  type: 'info' | 'success' | 'warning' | 'error'
  title?: string
  message: string
}

export function InfoBox({ type, title, message }: InfoBoxProps) {
  const colors = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  }

  return (
    <div className={`p-4 rounded-lg border ${colors[type]}`}>
      {title && <p className="font-semibold text-sm mb-1">{title}</p>}
      <p className="text-sm">{message}</p>
    </div>
  )
}

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const getStrength = () => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const strength = getStrength()
  const strengthLabels = ['', 'Schwach', 'Mittel', 'Gut', 'Stark']
  const strengthColors = ['', 'bg-red-400', 'bg-yellow-400', 'bg-green-400', 'bg-green-500']

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded ${i < strength ? strengthColors[strength] : 'bg-gray-200'}`}
          />
        ))}
      </div>
      <div className="flex gap-4 text-xs">
        <span className="text-vb-gray">Passwortst&#228;rke: {strengthLabels[strength]}</span>
        <div className="space-y-1">
          <div className={`flex items-center gap-1 ${password.length >= 8 ? 'text-vb-success' : 'text-vb-gray'}`}>
            <span>✓</span> 8+ Zeichen
          </div>
          <div className={`flex items-center gap-1 ${/[A-Z]/.test(password) ? 'text-vb-success' : 'text-vb-gray'}`}>
            <span>✓</span> Enthal&#228;lt Zahl
          </div>
          <div className={`flex items-center gap-1 ${/[0-9]/.test(password) ? 'text-vb-success' : 'text-vb-gray'}`}>
            <span>✓</span> Enthal&#228;lt Buchstabe
          </div>
        </div>
      </div>
    </div>
  )
}
