'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/form-components'
import { Shield, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react'

export default function Step5() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Top Navigation */}
      <div className="bg-white border-b border-vb-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex gap-8 text-sm">
            <button className="text-vb-blue font-semibold border-b-2 border-vb-blue pb-2">Übersicht</button>
            <button className="text-vb-gray hover:text-vb-blue pb-2">Versicherungen</button>
            <button className="text-vb-gray hover:text-vb-blue pb-2">Lebenssituation</button>
            <button className="text-vb-gray hover:text-vb-blue pb-2">Zugangsdaten</button>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-vb-blue mb-2">Willkommen, Herbert Feuerstein</h1>
          <p className="text-vb-gray mb-6">Ein Profil ist angemeldet. Folgen Sie den Tipps unten, um Ihre persönliche Finanzanalyse zu erhalten.</p>

          <div className="mb-6 text-xs text-vb-gray space-y-1">
            <p>🔒 SSL-verschlüsselt • 🏢 Deutsches Unternehmen • ⭐ 4.8 / 5 Kundenbewertung</p>
            <p className="font-semibold mt-4">PROFILFORTSCHRITT</p>
          </div>

          <Link href="/step1">
            <Button className="mt-4">Weiter →</Button>
          </Link>
        </div>

        {/* VB Score Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-lg font-bold text-vb-blue mb-6">Ihr VB-Score</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center mb-6 sm:mb-0">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-vb-success bg-green-50">
                <div>
                  <div className="text-4xl font-bold text-vb-success">742</div>
                  <div className="text-sm text-vb-gray">von 1000</div>
                </div>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-vb-gray mb-2">Besser als 68% der Nutzer</p>
              <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-vb-success" style={{ width: '68%' }} />
              </div>
              <p className="text-xs text-vb-gray mt-2">Zuletzt aktualisiert: heute</p>
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-vb-blue mb-4">EMPFOHLENE NÄCHSTE SCHRITTE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <h3 className="font-semibold text-vb-blue mb-2">Versicherungscheck abschließen</h3>
                <p className="text-sm text-vb-gray mb-4">Prüfen Sie Ihre Absicherung und schließen Sie Lücken.</p>
                <div className="text-xs text-vb-gray mb-4">60% abgeschlossen • ~5 Min.</div>
                <Button className="w-full">Fortsetzen →</Button>
              </div>
            ))}
          </div>
        </div>

        {/* My Insurances */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-vb-blue">Meine Versicherungen</h2>
            <button className="text-vb-blue text-sm font-semibold hover:text-blue-700">+ Versicherung hinzufügen</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Haftpflicht */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-vb-gray uppercase">WERT & HAFTUNG</p>
                  <h3 className="text-lg font-bold text-vb-blue mt-2">Haftpflichtversicherung</h3>
                </div>
                <span className="text-lg font-bold text-vb-blue">60%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-vb-blue" style={{ width: '60%' }} />
              </div>
              <ul className="text-sm text-vb-gray space-y-1 mb-4">
                <li>✓ Privatpflicht</li>
                <li>✓ Schlüsselverlust</li>
                <li>✓ Mietschäden</li>
              </ul>
              <Link href="#" className="text-vb-blue text-sm font-semibold hover:underline">
                Details ansehen →
              </Link>
            </div>

            {/* Hausrat */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-vb-gray uppercase">BESTE KARTE</p>
                  <h3 className="text-lg font-bold text-vb-blue mt-2">Haftpflichtversicherung</h3>
                </div>
                <span className="text-lg font-bold text-vb-blue">48%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-blue-300" style={{ width: '48%' }} />
              </div>
              <ul className="text-sm text-vb-gray space-y-1 mb-4">
                <li>✓ Privatpflicht</li>
                <li>✓ Schlüsselverlust</li>
                <li>✓ Mietschäden</li>
              </ul>
              <Link href="#" className="text-vb-blue text-sm font-semibold hover:underline">
                Details ansehen →
              </Link>
            </div>

            {/* Risikolebensversicherung */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-vb-gray uppercase">VORSORGE & EXISTENZ</p>
                  <h3 className="text-lg font-bold text-vb-blue mt-2">Risikolebensversicherung</h3>
                </div>
                <span className="text-lg font-bold text-vb-blue">20%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-blue-200" style={{ width: '20%' }} />
              </div>
              <ul className="text-sm text-vb-gray space-y-1 mb-4">
                <li>✓ Versicherungssumme</li>
                <li>✓ Versicherungssumme</li>
                <li>✓ Laufzeit</li>
              </ul>
              <Link href="#" className="text-vb-blue text-sm font-semibold hover:underline">
                Details ansehen →
              </Link>
            </div>

            {/* Krankenversicherung */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-vb-gray uppercase">GESUNDHEIT</p>
                  <h3 className="text-lg font-bold text-vb-blue mt-2">Krankenversicherung</h3>
                </div>
              </div>
              <p className="text-sm text-vb-gray mb-4">Hilf dabei, Ihre Schutzlöcken zu erkennen und passende Ergänzungen vorzuschlagen.</p>
              <Link href="#" className="text-vb-blue text-sm font-semibold hover:underline">
                + Erste Police hinzufügen
              </Link>
            </div>
          </div>
        </div>

        {/* Complete Profile CTA */}
        <div className="bg-vb-blue text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Das erwartet Sie mit einem vollständigen Profil</h2>
          <p className="text-blue-100 mb-8">Füllen Sie das Profil zu 100% aus und erhalten Sie personalisierte Empfehlungen, Lückenanalysen und maßgeschneiderte Versicherungslösungen.</p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
            {[
              { icon: '🛡', title: 'Persönliche Empfehlungen', desc: 'Wir analysieren Ihre Versicherungsvorsätze, abgestimmt auf Ihre individuelle Lebenssituation und Ihre Ziele.' },
              { icon: '🔍', title: 'Lückenanalyse', desc: 'Wir erkennen Versicherungslücken in Ihrem Schutz und zeigen Ihnen, wo Sie unterversichert sein könnten.' },
              { icon: '💰', title: 'Sparmöglichkeiten', desc: 'Identifizieren Sie Einsparpotenziale bei bestehenden Verträgen und profitieren Sie von besseren Konditionen.' },
              { icon: '📊', title: 'Risikobericht', desc: 'Eine vollständige Übersicht Ihres Risikoprofils mit klaren Handlungsempfehlungen für jeden Lebensbereich.' },
            ].map((item, i) => (
              <div key={i} className="bg-blue-900 bg-opacity-50 rounded-lg p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-vb-blue font-bold py-3 px-8 rounded-lg transition-smooth">
            Profil jetzt vervollständigen →
          </button>
          <p className="text-xs text-blue-200 mt-4">Dauert nur 2 Minuten</p>
        </div>
      </div>
    </div>
  )
}
