'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Stepper } from '@/components/stepper'
import { RadioButton, Button } from '@/components/form-components'

export default function Step3() {
  const [formData, setFormData] = useState({
    familyStatus: '',
    childrenCount: '',
    employment: '',
    housing: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.familyStatus) newErrors.familyStatus = 'Required'
    if (!formData.childrenCount) newErrors.childrenCount = 'Required'
    if (!formData.employment) newErrors.employment = 'Required'
    if (!formData.housing) newErrors.housing = 'Required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      const step3Data = {
        ...formData,
      }
      sessionStorage.setItem('step3Data', JSON.stringify(step3Data))
      window.location.href = '/step4'
    }
  }

  const isComplete = formData.familyStatus && formData.childrenCount && formData.employment && formData.housing

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Stepper currentStep={2} steps={['Schritt 1', 'Schritt 2', 'Schritt 3']} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-vb-blue mb-2">Welche Lebenssituation beschreibt Sie am besten?</h1>
          <p className="text-vb-gray mb-8">Sie können diese Angaben zur Personalisierung Ihrer Empfehlungen jederzeit aktuell ändern.</p>

          {/* Info Box */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">ℹ Hinweis</span>
              <br />
              Wir nutzen diese Angaben nur zur Personalisierung Ihrer Empfehlungen. Sie können alles jederzeit ändern.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Family Status */}
            <div>
              <h3 className="text-lg font-semibold text-vb-blue mb-2">Ihr Familienstand</h3>
              <p className="text-sm text-vb-gray mb-4">Bitte wählen Sie eine Option</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'ledig', label: '+ Ledig' },
                  { value: 'relationship', label: '+ In einer Beziehung' },
                  { value: 'married', label: '✓ Verheiratet' },
                  { value: 'divorced', label: '+ Geschieden' },
                  { value: 'widowed', label: '+ Verwitwet' },
                ].map((option) => (
                  <RadioButton
                    key={option.value}
                    label={option.label}
                    checked={formData.familyStatus === option.value}
                    onChange={() => handleChange('familyStatus', option.value)}
                  />
                ))}
              </div>
              {errors.familyStatus && <p className="text-red-600 text-sm mt-2">{errors.familyStatus}</p>}
            </div>

            {/* Children */}
            <div>
              <h3 className="text-lg font-semibold text-vb-blue mb-2">Haben Sie Kinder?</h3>
              <p className="text-sm text-vb-gray mb-4">Bitte wählen Sie eine Option</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'no', label: '+ Nein' },
                  { value: 'yes', label: '✓ Ja' },
                ].map((option) => (
                  <RadioButton
                    key={option.value}
                    label={option.label}
                    checked={formData.childrenCount === option.value}
                    onChange={() => handleChange('childrenCount', option.value)}
                  />
                ))}
              </div>
              {errors.childrenCount && <p className="text-red-600 text-sm mt-2">{errors.childrenCount}</p>}

              {formData.childrenCount === 'yes' && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { value: '1', label: '+ 1' },
                    { value: '2', label: '✓ 2' },
                    { value: '3', label: '+ 3' },
                    { value: '4plus', label: '+ 4+' },
                  ].map((option) => (
                    <RadioButton
                      key={option.value}
                      label={`Wie viele Kinder haben Sie? ${option.label}`}
                      checked={false}
                      onChange={() => {}}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Employment */}
            <div>
              <h3 className="text-lg font-semibold text-vb-blue mb-2">Ihre berufliche Situation</h3>
              <p className="text-sm text-vb-gray mb-4">Bitte wählen Sie eine Option</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'employee', label: '✓ Angestellt' },
                  { value: 'self-employed', label: '+ Selbstständig' },
                  { value: 'student', label: '+ Student/in' },
                  { value: 'pensioner', label: '+ Rentner/in' },
                  { value: 'unemployed', label: '+ Arbeitssuchend' },
                  { value: 'other', label: '+ Sonstiges' },
                ].map((option) => (
                  <RadioButton
                    key={option.value}
                    label={option.label}
                    checked={formData.employment === option.value}
                    onChange={() => handleChange('employment', option.value)}
                  />
                ))}
              </div>
              {errors.employment && <p className="text-red-600 text-sm mt-2">{errors.employment}</p>}
            </div>

            {/* Housing */}
            <div>
              <h3 className="text-lg font-semibold text-vb-blue mb-2">Ihre Wohnsituation</h3>
              <p className="text-sm text-vb-gray mb-4">Bitte wählen Sie eine Option</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'rent', label: '✓ Zur Miete' },
                  { value: 'own', label: '+ Eigentümer/in' },
                ].map((option) => (
                  <RadioButton
                    key={option.value}
                    label={option.label}
                    checked={formData.housing === option.value}
                    onChange={() => handleChange('housing', option.value)}
                  />
                ))}
              </div>
              {errors.housing && <p className="text-red-600 text-sm mt-2">{errors.housing}</p>}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Link href="/step2" className="flex-1">
                <Button variant="outline" type="button" className="w-full">
                  ← Zurück
                </Button>
              </Link>
              <button onClick={handleSubmit} className="flex-1">
                <Button type="submit" disabled={!isComplete} className="w-full">
                  Weiter →
                </Button>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
