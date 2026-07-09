'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Lock, Zap, Eye } from 'lucide-react'
import { Header } from '@/components/header'
import { Stepper } from '@/components/stepper'
import { TogglePill, Button, InfoBox } from '@/components/form-components'

const INSURANCE_OPTIONS = [
  { id: 'haftpflicht', label: 'Haftpflicht', category: 'common' },
  { id: 'hausrat', label: 'Hausrat', category: 'common' },
  { id: 'kfz', label: 'KFZ / Auto', category: 'common' },
  { id: 'rechtsschutz', label: 'Rechtsschutz', category: 'common' },
  { id: 'unfall', label: 'Unfall', category: 'common' },
  { id: 'beruf', label: 'Berufsunfähigkeit', category: 'extra' },
  { id: 'todesfall', label: 'Todesfallschutz', category: 'extra' },
  { id: 'krankentag', label: 'Krankentagegeld', category: 'extra' },
  { id: 'zahnzusatz', label: 'Zahnzusatz', category: 'extra' },
  { id: 'wohngebaeude', label: 'Wohngebäude', category: 'extra' },
]

export default function Step2() {
  const [selectedInsurances, setSelectedInsurances] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [noInsurance, setNoInsurance] = useState(false)
  const [unsure, setUnsure] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const commonInsurances = INSURANCE_OPTIONS.filter((ins) => ins.category === 'common')
  const extraInsurances = INSURANCE_OPTIONS.filter((ins) => ins.category === 'extra')

  const filteredExtra = useMemo(() => {
    if (!searchQuery) return extraInsurances
    return extraInsurances.filter((ins) =>
      ins.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const toggleInsurance = (id: string) => {
    if (noInsurance || unsure) return
    setSelectedInsurances((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleNoInsurance = () => {
    setNoInsurance(!noInsurance)
    if (!noInsurance) {
      setSelectedInsurances([])
      setUnsure(false)
    }
  }

  const handleUnsure = () => {
    setUnsure(!unsure)
    if (!unsure) {
      setSelectedInsurances([])
      setNoInsurance(false)
    }
  }

  const isValid = selectedInsurances.length > 0 || noInsurance || unsure

  const handleSubmit = () => {
    const step2Data = {
      selectedInsurances,
      noInsurance,
      unsure,
    }
    sessionStorage.setItem('step2Data', JSON.stringify(step2Data))
    window.location.href = '/step3'
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Stepper currentStep={2} steps={['Schritt 1', 'Schritt 2', 'Schritt 3']} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-vb-blue mb-2">Welche Versicherungen haben Sie bereits?</h1>
          <p className="text-vb-gray mb-6">So können wir Ihre Absicherung analysieren und mögliche Lücken erkennen.</p>

          {/* Info Box */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">ℹ Hinweis</span>
              <br />
              Wir nutzen diese Angaben nur zur Personalisierung Ihrer Empfehlungen. Sie können alles jederzeit ändern.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-1">🔒</div>
              <p className="text-xs font-semibold text-vb-gray">Datenschutz</p>
              <p className="text-xs text-vb-gray">SSL & DSGVO</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⚡</div>
              <p className="text-xs font-semibold text-vb-gray">Schnell</p>
              <p className="text-xs text-vb-gray">in 5 Minuten</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">👁</div>
              <p className="text-xs font-semibold text-vb-gray">Top Bewertung</p>
              <p className="text-xs text-vb-gray">4.8 / 5 Sterne</p>
            </div>
          </div>

          {/* Insurance Selection */}
          <div className="space-y-6">
            {/* Common Insurance */}
            <div>
              <p className="text-sm font-semibold text-vb-blue mb-4 uppercase tracking-wide">WERT & HAFTUNG</p>
              <div className="flex flex-wrap gap-3">
                {commonInsurances.map((insurance) => (
                  <TogglePill
                    key={insurance.id}
                    isActive={selectedInsurances.includes(insurance.id)}
                    label={insurance.label}
                    onClick={() => toggleInsurance(insurance.id)}
                    disabled={noInsurance || unsure}
                  />
                ))}
              </div>
            </div>

            {/* Show More Extra Insurance */}
            <div>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-vb-blue font-semibold text-sm hover:text-blue-700 flex items-center gap-2"
              >
                {showMore ? '▼' : '▶'} Weitere Versicherungen anzeigen
              </button>

              {showMore && (
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {extraInsurances.map((insurance) => (
                      <TogglePill
                        key={insurance.id}
                        isActive={selectedInsurances.includes(insurance.id)}
                        label={insurance.label}
                        onClick={() => toggleInsurance(insurance.id)}
                        disabled={noInsurance || unsure}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-vb-blue mb-2">Versicherung suchen... *</label>
              <div className="relative">
                <Search size={20} className="absolute left-3 top-3 text-vb-gray" />
                <input
                  type="text"
                  placeholder="z. B. Haftpflicht oder Hausrat"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  disabled={noInsurance || unsure}
                  className="w-full pl-10 pr-4 py-3 border border-vb-border rounded-lg focus:ring-2 focus:ring-vb-blue focus:border-transparent transition-smooth disabled:bg-gray-100 disabled:cursor-not-allowed text-vb-blue placeholder:text-vb-gray"
                />
              </div>

              {searchQuery && filteredExtra.length > 0 && (
                <div className="mt-4 space-y-2">
                  {filteredExtra.map((insurance) => (
                    <TogglePill
                      key={insurance.id}
                      isActive={selectedInsurances.includes(insurance.id)}
                      label={insurance.label}
                      onClick={() => toggleInsurance(insurance.id)}
                      disabled={noInsurance || unsure}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Radio Options */}
            <div className="space-y-3 pt-4 border-t border-vb-border">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={noInsurance}
                  onChange={handleNoInsurance}
                  className="w-4 h-4 accent-vb-blue"
                />
                <span className="text-sm text-vb-gray">Ich habe aktuell keine Versicherungen</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={unsure}
                  onChange={handleUnsure}
                  className="w-4 h-4 accent-vb-blue"
                />
                <span className="text-sm text-vb-gray">Ich bin mir nicht sicher</span>
              </label>
            </div>

            {/* Success Message */}
            {selectedInsurances.length > 0 && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <span className="text-lg">✓</span>
                <div>
                  <p className="font-semibold text-green-900 text-sm">Gut zu wissen</p>
                  <p className="text-sm text-green-800">Wir helfen Ihnen dabei, passende Absicherung zu finden.</p>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-8">
            <Link href="/step1" className="flex-1">
              <Button variant="outline" type="button" className="w-full">
                ← Zurück
              </Button>
            </Link>
            <button onClick={handleSubmit} className="flex-1">
              <Button disabled={!isValid} className="w-full">
                Weiter →
              </Button>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
