import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white border-b border-vb-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-vb-blue rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">VB</span>
          </div>
          <span className="text-lg font-bold text-vb-blue hidden sm:inline">Volksbank</span>
        </Link>
        <div className="text-xs sm:text-sm text-vb-gray">
          🔒 SSL-verschlüsselt • 🏢 Deutsches Unternehmen • ⭐ 4.8 / 5 Kundenbewertung
        </div>
      </div>
    </header>
  )
}
