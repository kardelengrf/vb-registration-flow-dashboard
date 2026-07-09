'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/form-components'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-vb-blue mb-4">
            Ihre persönliche Versicherungsanalyse
          </h1>
          <p className="text-lg sm:text-xl text-vb-gray mb-8 max-w-3xl mx-auto">
            Erhalten Sie in wenigen Minuten eine maßgeschneiderte Analyse Ihrer Versicherungssituation und entdecken Sie Lücken, die Sie möglicherweise haben.
          </p>

          <Link href="/step1">
            <Button className="text-lg px-8 py-4">
              Jetzt starten →
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '⚡', title: 'Schnell', desc: 'Nur 5-10 Minuten erforderlich' },
            { icon: '🔒', title: 'Sicher', desc: 'SSL-verschlüsselt und DSGVO-konform' },
            { icon: '📊', title: 'Personalisiert', desc: 'Maßgeschneiderte Empfehlungen für Ihre Situation' },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-vb-blue mb-2">{feature.title}</h3>
              <p className="text-vb-gray">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-sm p-12 mb-16">
          <h2 className="text-3xl font-bold text-vb-blue text-center mb-12">So funktioniert&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Angaben machen', desc: 'Füllen Sie ein kurzes Profil aus' },
              { step: '2', title: 'Versicherungen eingeben', desc: 'Teilen Sie mit, welche Versicherungen Sie haben' },
              { step: '3', title: 'Analyse erhalten', desc: 'Bekommen Sie sofort Ihre persönliche Analyse' },
              { step: '4', title: 'Empfehlungen', desc: 'Erhalten Sie maßgeschneiderte Vorschläge' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-vb-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-vb-blue text-center mb-2">{item.title}</h3>
                <p className="text-sm text-vb-gray text-center">{item.desc}</p>
                {i < 3 && (
                  <div className="absolute top-6 left-1/2 w-full h-0.5 bg-vb-border -z-10" style={{ marginLeft: '24px' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-vb-blue text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit, Ihre Versicherung zu optimieren?</h2>
          <p className="text-lg text-blue-100 mb-8">Starten Sie jetzt und erhalten Sie kostenlos Ihre persönliche Analyse.</p>
          <Link href="/step1">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-vb-blue font-bold py-3 px-8">
              Kostenlos analysieren →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
