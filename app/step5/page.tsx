'use client'

import Link from 'next/link'

export default function Step5() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f1f5f9' }}>

      {/* Navbar */}
      <div className="bg-white border-b border-vb-border" style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.06)' }}>
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* VB Logo */}
          <div className="w-10 h-8 bg-vb-blue rounded flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">VB</span>
          </div>

          {/* Nav tabs */}
          <div className="flex h-[72px] items-center gap-1">
            {/* Active: Übersicht */}
            <div className="flex flex-col h-[72px] items-center justify-between pt-[22px] w-[100px]">
              <span className="font-semibold text-[14px] text-vb-blue whitespace-nowrap">Übersicht</span>
              <div className="h-[3px] w-[84px] rounded-full bg-vb-blue" />
            </div>
            {['Bedarf', 'Neue Versicherung', 'Beratung'].map((tab) => (
              <div key={tab} className="flex flex-col h-[72px] items-center pt-[22px] px-4">
                <span className="font-normal text-[14px] text-vb-gray whitespace-nowrap hover:text-vb-blue cursor-pointer">{tab}</span>
              </div>
            ))}
          </div>

          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-semibold text-[13px] text-vb-blue"
            style={{ backgroundColor: '#dde6f4' }}
          >
            CS
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col gap-10">

        {/* Hero Row: Welcome + Score */}
        <div className="flex gap-6 items-stretch">
          {/* Welcome card (left) */}
          <div
            className="bg-white rounded-[20px] px-10 py-9 flex flex-col justify-between flex-1"
            style={{ boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.04), 0px 8px 32px 0px rgba(11,58,130,0.06)' }}
          >
            <div className="flex flex-col gap-3">
              {/* Status badges */}
              <div className="flex gap-2 flex-wrap">
                {['✓  Konto erstellt', '✓  Profil angelegt', '✓  Empfehlungen bereit'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap"
                    style={{ backgroundColor: 'rgba(22,126,64,0.09)', color: '#167e40' }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="text-[30px] font-extrabold text-vb-blue whitespace-nowrap">
                Willkommen, Herbert Feuerstein
              </h1>
              <p className="text-[14px] text-vb-gray">
                Ihr Profil ist eingerichtet. Fügen Sie Ihre Versicherungen hinzu, um eine persönliche Analyse zu erhalten.
              </p>

              <p className="text-[11px] font-semibold tracking-[1.2px] mt-1" style={{ color: '#616f84' }}>
                PROFILFORTSCHRITT
              </p>

              {/* Progress bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#e2e8f0' }}>
                  <div className="h-full bg-vb-blue rounded-full" style={{ width: '65%' }} />
                </div>
                <span className="text-[15px] font-bold text-vb-blue">65%</span>
              </div>

              <p className="text-[12px]" style={{ color: '#616f84' }}>
                Noch 2 Schritte bis zu Ihrer vollständigen Versicherungsanalyse.
              </p>
            </div>

            <Link href="/step1">
              <button
                className="mt-6 px-6 h-11 rounded-lg text-[14px] font-semibold text-white"
                style={{ backgroundColor: '#0065b3' }}
              >
                Weiter →
              </button>
            </Link>
          </div>

          {/* Score card (right, dark navy) */}
          <div
            className="rounded-[20px] p-9 flex flex-col w-[426px] shrink-0"
            style={{
              backgroundColor: '#002047',
              boxShadow: '0px 12px 40px 0px rgba(11,58,130,0.3)',
            }}
          >
            <p className="text-[11px] font-semibold tracking-[1.2px] whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.5)' }}>
              ABSICHERUNGSSTATUS
            </p>
            <p className="text-[56px] font-extrabold text-white mt-5 leading-tight">65%</p>
            <p className="text-[14px] mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Ihres Profils sind vollständig
            </p>

            {/* White progress bar */}
            <div className="mt-6 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <div className="h-full rounded-full" style={{ width: '65%', backgroundColor: 'rgba(255,255,255,0.9)' }} />
            </div>

            <div className="mt-5 text-[13px] leading-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <p>Ihre persönliche Risikoanalyse</p>
              <p>startet nach der ersten Police.</p>
            </div>
          </div>
        </div>

        {/* Recommended Next Steps */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold tracking-[1.2px]" style={{ color: '#616f84' }}>
            EMPFOHLENE NÄCHSTE SCHRITTE
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: Haftpflichtversicherung */}
            <div
              className="bg-white rounded-[16px] px-7 pt-7 pb-6 flex flex-col"
              style={{
                border: '1.5px solid rgba(11,58,130,0.2)',
                boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.04), 0px 6px 24px 0px rgba(11,58,130,0.1)',
              }}
            >
              <span
                className="self-start px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap"
                style={{ backgroundColor: 'rgba(11,58,130,0.08)', color: '#0b3a82' }}
              >
                Empfohlen für Sie
              </span>
              <p className="text-[17px] font-bold mt-3.5" style={{ color: '#1e2a3c' }}>Haftpflichtversicherung</p>
              <p className="text-[13px] mt-1" style={{ color: '#616f84' }}>Für Familien besonders empfohlen</p>
              <div className="mt-5 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#e2e8f0' }}>
                <div className="h-full rounded-full bg-vb-blue" style={{ width: '40%' }} />
              </div>
              <div className="mt-1.5 flex justify-between text-[12px]" style={{ color: '#616f84' }}>
                <span className="font-medium">40% vollständig</span>
                <span>ca. 2 Minuten</span>
              </div>
              <button
                className="mt-5 self-start px-5 py-2.5 rounded-[10px] text-[13px] font-semibold text-white"
                style={{ backgroundColor: '#0065b3', boxShadow: '0px 4px 14px 0px rgba(11,58,130,0.25)' }}
              >
                Jetzt einrichten →
              </button>
            </div>

            {/* Card 2: Hausratversicherung */}
            <div
              className="bg-white rounded-[16px] px-7 pt-7 pb-6 flex flex-col"
              style={{ boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.04), 0px 6px 24px 0px rgba(11,58,130,0.05)' }}
            >
              <p className="text-[17px] font-bold" style={{ color: '#1e2a3c' }}>Hausratversicherung</p>
              <p className="text-[13px] mt-1" style={{ color: '#616f84' }}>Schützt Ihren Hausstand</p>
              <div className="mt-5 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#e2e8f0' }}>
                <div className="h-full rounded-full" style={{ width: '60%', backgroundColor: '#167e40' }} />
              </div>
              <div className="mt-1.5 flex justify-between text-[12px]" style={{ color: '#616f84' }}>
                <span className="font-medium">60% vollständig</span>
                <span>ca. 1 Minute</span>
              </div>
              <button
                className="mt-5 self-start px-5 py-2.5 rounded-[10px] text-[13px] font-semibold text-vb-blue"
                style={{ backgroundColor: '#f1f5f9', border: '1.5px solid #c7d0e0' }}
              >
                Fortsetzen →
              </button>
            </div>

            {/* Card 3: Profil vervollständigen */}
            <div
              className="bg-white rounded-[16px] px-7 pt-7 pb-6 flex flex-col"
              style={{ boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.04), 0px 6px 24px 0px rgba(11,58,130,0.05)' }}
            >
              <span
                className="self-start px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap"
                style={{ backgroundColor: 'rgba(22,126,64,0.09)', color: '#167e40' }}
              >
                Fast fertig
              </span>
              <p className="text-[17px] font-bold mt-3.5" style={{ color: '#1e2a3c' }}>Profil vervollständigen</p>
              <p className="text-[13px] mt-1" style={{ color: '#616f84' }}>Für eine vollständige Analyse</p>
              <div className="mt-5 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#e2e8f0' }}>
                <div className="h-full rounded-full" style={{ width: '85%', backgroundColor: '#167e40' }} />
              </div>
              <div className="mt-1.5 flex justify-between text-[12px]" style={{ color: '#616f84' }}>
                <span className="font-medium">85% vollständig</span>
                <span>ca. 30 Sekunden</span>
              </div>
              <button
                className="mt-5 self-start px-5 py-2.5 rounded-[10px] text-[13px] font-semibold text-vb-blue"
                style={{ backgroundColor: '#f1f5f9', border: '1.5px solid #c7d0e0' }}
              >
                Fortsetzen →
              </button>
            </div>
          </div>
        </div>

        {/* My Insurances */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[20px] font-bold" style={{ color: '#1e2a3c' }}>Meine Versicherungen</h2>
            <button
              className="px-5 py-2.5 rounded-[10px] text-[13px] font-semibold text-vb-blue bg-white"
              style={{ border: '1.5px solid #c7d0e0' }}
            >
              + Versicherung hinzufügen
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1: Haftpflichtversicherung */}
            <InsuranceCard
              category="BESITZ & HAFTUNG"
              title="Haftpflichtversicherung"
              percent={60}
              missingItems={['Vertragsnummer', 'Monatlicher Beitrag']}
              lastUpdated="Heute"
            />

            {/* Card 2: Hausratversicherung */}
            <InsuranceCard
              category="BESITZ & HAFTUNG"
              title="Hausratversicherung"
              percent={40}
              missingItems={['Versicherte Summe', 'Vertragsnummer', 'Anbieter']}
              lastUpdated="Heute"
            />

            {/* Card 3: Risikolebensversicherung */}
            <InsuranceCard
              category="VORSORGE & EXISTENZ"
              title="Risikolebensversicherung"
              percent={20}
              missingItems={['Versicherungssumme', 'Laufzeit', 'Beitragszahler']}
              lastUpdated="Noch nicht gestartet"
            />

            {/* Card 4: Krankenversicherung (empty) */}
            <div
              className="bg-white rounded-[16px] px-7 py-6 flex flex-col"
              style={{ border: '1.5px solid #e2e8f0' }}
            >
              <p className="text-[10px] font-semibold tracking-[0.8px]" style={{ color: '#616f84' }}>GESUNDHEIT</p>
              <p className="text-[16px] font-bold mt-2.5" style={{ color: 'rgba(30,42,60,0.45)' }}>
                Krankenversicherung
              </p>
              <p className="text-[13px] mt-1.5" style={{ color: '#616f84' }}>
                Hilft dabei, Ihre Schutzlücken zu erkennen und passende Ergänzungen vorzuschlagen.
              </p>
              <div className="mt-4">
                <button
                  className="px-4 py-2.5 rounded-lg text-[13px] font-semibold text-vb-blue"
                  style={{ backgroundColor: '#f1f5f9' }}
                >
                  + Erste Police hinzufügen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Value Unlock — white card */}
        <div
          className="bg-white rounded-[20px] px-10 py-9"
          style={{ boxShadow: '0px 6px 24px 0px rgba(11,58,130,0.05)' }}
        >
          <p className="text-[11px] font-semibold tracking-[1.2px]" style={{ color: '#616f84' }}>
            DAS ERWARTET SIE MIT EINEM VOLLSTÄNDIGEN PROFIL
          </p>
          <h2 className="text-[20px] font-bold mt-4" style={{ color: '#1e2a3c' }}>
            Ihr persönliches Versicherungs-Dashboard
          </h2>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { title: ['Personalisierte', 'Empfehlungen'], desc: 'Auf Ihre Lebenssituation abgestimmte Vorschläge' },
              { title: ['Lückenanalyse'], desc: 'Fehlende Absicherung auf einen Blick' },
              { title: ['Sparmöglichkeiten'], desc: 'Entdecken Sie günstigere Alternativen' },
              { title: ['Risikoübersicht'], desc: 'Vollständige Bewertung Ihrer Absicherung' },
            ].map((item, i) => (
              <div key={i} className="rounded-[14px] p-5 flex flex-col gap-2" style={{ backgroundColor: '#f1f5f9' }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold"
                  style={{ backgroundColor: 'rgba(22,126,64,0.12)', color: '#167e40' }}
                >
                  ✓
                </div>
                <div>
                  {item.title.map((line, j) => (
                    <p key={j} className="text-[14px] font-bold leading-5" style={{ color: '#1e2a3c' }}>{line}</p>
                  ))}
                </div>
                <p className="text-[12px]" style={{ color: '#64748b' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function InsuranceCard({
  category,
  title,
  percent,
  missingItems,
  lastUpdated,
}: {
  category: string
  title: string
  percent: number
  missingItems: string[]
  lastUpdated: string
}) {
  return (
    <div
      className="bg-white rounded-[16px] px-7 py-6 flex flex-col"
      style={{ boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.03), 0px 6px 24px 0px rgba(11,58,130,0.05)' }}
    >
      <p className="text-[10px] font-semibold tracking-[0.8px]" style={{ color: '#616f84' }}>{category}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-[16px] font-bold" style={{ color: '#1e2a3c' }}>{title}</p>
        <span
          className="px-2.5 py-1 rounded-full text-[12px] font-semibold text-vb-blue"
          style={{ backgroundColor: '#f1f5f9' }}
        >
          {percent}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-3.5 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#e2e8f0' }}>
        <div className="h-full bg-vb-blue rounded-full" style={{ width: `${percent}%` }} />
      </div>

      {/* Missing items */}
      <p className="text-[11px] font-medium mt-3.5" style={{ color: '#64748b' }}>Fehlende Angaben:</p>
      <div className="mt-1.5 flex flex-col gap-1">
        {missingItems.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-sm shrink-0" style={{ backgroundColor: '#616f84' }} />
            <p className="text-[12px]" style={{ color: '#616f84' }}>{item}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-1">
        <p className="text-[11px]" style={{ color: '#616f84' }}>Zuletzt: {lastUpdated}</p>
        <button className="text-[13px] font-semibold text-vb-blue">Fortsetzen →</button>
      </div>
    </div>
  )
}
