'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Stepper } from '@/components/stepper'
import { Input, Select, Button } from '@/components/form-components'

export default function Step1() {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    street: '',
    houseNumber: '',
    zipCode: '',
    city: '',
    phone: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.salutation) newErrors.salutation = 'Required'
    if (!formData.firstName) newErrors.firstName = 'Required'
    if (!formData.lastName) newErrors.lastName = 'Required'
    if (!formData.birthDate) newErrors.birthDate = 'Required'
    if (!formData.street) newErrors.street = 'Required'
    if (!formData.houseNumber) newErrors.houseNumber = 'Required'
    if (!formData.zipCode) newErrors.zipCode = 'Required'
    if (!formData.city) newErrors.city = 'Required'
    if (!formData.phone) newErrors.phone = 'Required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Save to session storage or context
      sessionStorage.setItem('step1Data', JSON.stringify(formData))
      window.location.href = '/step2'
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const isComplete =
    formData.salutation &&
    formData.firstName &&
    formData.lastName &&
    formData.birthDate &&
    formData.street &&
    formData.houseNumber &&
    formData.zipCode &&
    formData.city &&
    formData.phone

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Stepper currentStep={1} steps={['Schritt 1', 'Schritt 2', 'Schritt 3']} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-vb-blue mb-2">Willkommen! 👋</h1>
          <p className="text-vb-gray mb-8">Nur wenige Angaben und Sie erhalten Ihre persönliche Finanzierungsanalyse.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Salutation */}
            <div>
              <Select
                label="Anrede *"
                value={formData.salutation}
                onChange={(e) => handleChange('salutation', e.target.value)}
                options={[
                  { value: 'Herr', label: 'Herr' },
                  { value: 'Frau', label: 'Frau' },
                  { value: 'Divers', label: 'Divers' },
                ]}
              />
            </div>

            {/* Name Section */}
            <div>
              <p className="text-xs font-semibold text-vb-gray uppercase tracking-wide mb-4">WERT & HAFTUNG</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Vorname *"
                  placeholder="Herbert"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  error={errors.firstName}
                />
                <Input
                  label="Nachname *"
                  placeholder="Feuerstein"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  error={errors.lastName}
                />
              </div>
            </div>

            {/* Birth Date */}
            <Input
              label="Geburtsdatum *"
              type="date"
              placeholder="12.03.1960"
              value={formData.birthDate}
              onChange={(e) => handleChange('birthDate', e.target.value)}
              error={errors.birthDate}
            />
            {formData.birthDate && <p className="text-xs text-vb-gray">Geburtsdatum im Format TT.MM.JJJJ eintragen</p>}

            {/* Address Section */}
            <div>
              <p className="text-xs font-semibold text-vb-gray uppercase tracking-wide mb-4">WERT & HAFTUNG</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Straße *"
                  placeholder="Schreiberstraße"
                  value={formData.street}
                  onChange={(e) => handleChange('street', e.target.value)}
                  error={errors.street}
                />
                <Input
                  label="Hausnummer *"
                  placeholder="101 a"
                  value={formData.houseNumber}
                  onChange={(e) => handleChange('houseNumber', e.target.value)}
                  error={errors.houseNumber}
                />
              </div>
            </div>

            {/* City Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="PLZ *"
                placeholder="71345"
                value={formData.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
                error={errors.zipCode}
              />
              <Input
                label="Ort *"
                placeholder="Musterstadt"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                error={errors.city}
              />
            </div>

            {/* Phone */}
            <Input
              label="Telefon *"
              type="tel"
              placeholder="030 12 34 56 78"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={errors.phone}
            />

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Link href="/" className="flex-1">
                <Button variant="outline" type="button" className="w-full">
                  ← Zurück
                </Button>
              </Link>
              <Link href="/step2" className="flex-1">
                <Button type="submit" disabled={!isComplete} className="w-full">
                  Weiter →
                </Button>
              </Link>
            </div>
          </form>

          <p className="text-xs text-vb-gray mt-4">* Pflichtfelder</p>
        </div>
      </div>
    </div>
  )
}
