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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome and Score Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Welcome Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-2xl font-bold text-vb-blue mb-2">Willkommen, Herbert Feuerstein</h1>
            <p className="text-sm text-vb-gray mb-6">Ein Profil ist angemeldet. Folgen Sie den Tipps unten, um Ihre persönliche Finanzanalyse zu erhalten.</p>

            <div className="mb-6">
              <p className="text-xs text-vb-gray uppercase font-semibold mb-3">PROFILFORTSCHRITT</p>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-vb-blue" style={{ width: '45%' }} />
              </div>
            </div>

            <div className="text-xs text-vb-gray">
              🔒 SSL-verschlüsselt • 🏢 Deutsches Unternehmen • ⭐ 4.8 / 5 Kundenbewertung
            </div>
          </div>

          {/* VB Score Card */}
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center">
            <p className="text-xs text-vb-gray uppercase font-semibold mb-4">Ihr VB-Score</p>
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="55" fill="none" stroke="#e0e6ed" strokeWidth="8" />
                <circle cx="60" cy="60" r="55" fill="none" stroke="#00a86b" strokeWidth="8" strokeDasharray={`${(742 / 1000) * 345.6} 345.6`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-vb-blue">742</div>
                <div className="text-xs text-vb-gray">von 1000</div>
              </div>
            </div>
            <p className="text-xs text-vb-success font-semibold">Gut</p>
            <p className="text-xs text-vb-gray mt-3 text-center">Besser als 68% der Nutzer</p>
            <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-vb-success" style={{ width: '68%' }} />
            </div>
            <p className="text-xs text-vb-gray mt-3">Zuletzt aktualisiert: heute</p>
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
        <div className="bg-vb-blue text-white rounded-lg p-12 text-center">
          <p className="inline-block bg-orange-500 text-vb-blue text-xs font-bold px-3 py-1 rounded-full mb-6">PROFIL VERVOLLSTÄNDIGEN</p>
          <h2 className="text-3xl font-bold mb-4">Das erwartet Sie mit einem<br />vollständigen Profil</h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto">Füllen Sie das Profil zu 100% aus und erhalten Sie personalisierte Empfehlungen, Lückenanalysen und maßgeschneiderte Versicherungslösungen.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: '🏢', badge: 'KI-gesteuert', title: 'Persönliche Empfehlungen', desc: 'Wir analysieren Ihre Versicherungsvorsätze, abgestimmt auf Ihre individuelle Lebenssituation und Ihre Ziele.' },
              { icon: '🔍', badge: 'Automatisch', title: 'Lückenanalyse', desc: 'Wir erkennen Versicherungslücken in Ihrem Schutz und zeigen Ihnen, wo Sie unterversichert sein könnten.' },
              { icon: '💰', badge: 'Bis zu 5 Werte', title: 'Sparmöglichkeiten', desc: 'Identifizieren Sie Einsparpotenziale bei bestehenden Verträgen und profitieren Sie von besseren Konditionen.' },
              { icon: '🛡', badge: 'Detailliert', title: 'Risikobericht', desc: 'Eine vollständige Übersicht Ihres Risikoprofils mit klaren Handlungsempfehlungen für jeden Lebensbereich.' },
            ].map((item, i) => (
              <div key={i} className="bg-blue-800 bg-opacity-60 rounded-lg p-6 text-left">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-xs font-bold text-orange-400 mb-2">{item.badge}</p>
                <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-vb-blue font-bold py-3 px-8 rounded-lg transition-all duration-200">
            Profil jetzt vervollständigen →
          </button>
          <p className="text-xs text-blue-200 mt-4">Dauert nur 2 Minuten</p>
        </div>
      </div>
    </div>
  )
}
