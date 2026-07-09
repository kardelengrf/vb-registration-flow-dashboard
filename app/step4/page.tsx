'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Stepper } from '@/components/stepper'
import { Input, Button, Checkbox, PasswordStrength } from '@/components/form-components'

export default function Step4() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    termsProduct: false,
    termsData: false,
    termsPrivacy: false,
    termsNewsletter: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = 'Required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email'
    }

    if (!formData.password) {
      newErrors.password = 'Required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Minimum 8 characters'
    }

    if (!formData.termsProduct || !formData.termsData || !formData.termsPrivacy) {
      newErrors.terms = 'Please accept all required terms'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => {
      if (typeof prev[field as keyof typeof prev] === 'boolean') {
        return { ...prev, [field]: !prev[field as keyof typeof prev] }
      }
      return { ...prev, [field]: value }
    })
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
      const step4Data = {
        email: formData.email,
        password: formData.password,
        newsletter: formData.termsNewsletter,
      }
      sessionStorage.setItem('step4Data', JSON.stringify(step4Data))
      window.location.href = '/step5'
    }
  }

  const isComplete =
    formData.email &&
    formData.password &&
    formData.termsProduct &&
    formData.termsData &&
    formData.termsPrivacy

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Stepper currentStep={3} steps={['Schritt 1', 'Schritt 2', 'Schritt 3']} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <p className="text-xs font-semibold text-vb-gray uppercase tracking-wide mb-4">KONTO ERSTELLEN</p>
          <h1 className="text-3xl font-bold text-vb-blue mb-2">Fast fertig!</h1>
          <p className="text-vb-gray mb-8">Erstellen Sie Ihre Zugangsdaten, um Verträge und Empfehlungen jederzeit einzusehen.</p>

          {/* Security Features */}
          <div className="flex flex-wrap gap-4 mb-8 text-xs">
            <span className="flex items-center gap-2">
              <span>🔒</span> SSL-verschlüsselt
            </span>
            <span className="flex items-center gap-2">
              <span>🏢</span> Deutsches Unternehmen
            </span>
            <span className="flex items-center gap-2">
              <span>⭐</span> 4.8 / 5 Kundenbewertung
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <Input
              label="E-Mail Addresse *"
              type="email"
              placeholder="herbert@feuerstein.de"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
            />
            {formData.email && !errors.email && <p className="text-xs text-vb-success">✓ E-Mail gültig</p>}

            {/* Password */}
            <div>
              <Input
                label="Passwort *"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                error={errors.password}
              />
              {formData.password && <PasswordStrength password={formData.password} />}
            </div>

            {/* Terms and Conditions */}
            <div>
              <p className="text-xs font-semibold text-vb-gray uppercase tracking-wide mb-4">ERFORDERLICH</p>
              <div className="space-y-3">
                <Checkbox
                  label={
                    <>
                      Ich stimme den Allgemeinen Geschäftsbedingungen zu{' '}
                      <a href="#" className="text-vb-blue hover:underline">
                        Zur Produktbeschreibung und AGB →
                      </a>
                    </>
                  }
                  checked={formData.termsProduct}
                  onChange={() => handleChange('termsProduct', !formData.termsProduct)}
                />
                <Checkbox
                  label={
                    <>
                      Ich stimme den Allgemeinen Geschäftsbedingungen zu{' '}
                      <a href="#" className="text-vb-blue hover:underline">
                        Datenschutzrichtlinie zur Kenntnis genommen →
                      </a>
                    </>
                  }
                  checked={formData.termsData}
                  onChange={() => handleChange('termsData', !formData.termsData)}
                />
                <Checkbox
                  label={
                    <>
                      Ich stimme den Allgemeinen Geschäftsbedingungen zu{' '}
                      <a href="#" className="text-vb-blue hover:underline">
                        Informationen zur Verarbeitung personenbezogener Daten →
                      </a>
                    </>
                  }
                  checked={formData.termsPrivacy}
                  onChange={() => handleChange('termsPrivacy', !formData.termsPrivacy)}
                />
              </div>
              {errors.terms && <p className="text-red-600 text-sm mt-2">{errors.terms}</p>}
            </div>

            {/* Optional Newsletter */}
            <div>
              <p className="text-xs font-semibold text-vb-gray uppercase tracking-wide mb-4">OPTIONAL</p>
              <Checkbox
                label={
                  <>
                    Ich stimme den Allgemeinen Geschäftsbedingungen zu{' '}
                    <a href="#" className="text-vb-blue hover:underline">
                      Ihre Daten werden für maßgeschneiderte Angebote genutzt →
                    </a>
                  </>
                }
                checked={formData.termsNewsletter}
                onChange={() => handleChange('termsNewsletter', !formData.termsNewsletter)}
              />
            </div>

            {/* Security Footer */}
            <div className="flex flex-wrap gap-4 text-xs text-vb-gray pb-6 border-b border-vb-border">
              <span>🔒 SSL-verschlüsselt</span>
              <span>🏢 Deutsches Unternehmen</span>
              <span>⭐ 4.8 / 5 Kundenbewertung</span>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Link href="/step3" className="flex-1">
                <Button variant="outline" type="button" className="w-full">
                  ← Zurück
                </Button>
              </Link>
              <button onClick={handleSubmit} className="flex-1">
                <Button type="submit" disabled={!isComplete} className="w-full">
                  Fertigstellen →
                </Button>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
