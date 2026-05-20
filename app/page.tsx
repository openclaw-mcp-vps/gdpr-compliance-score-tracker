export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Your GDPR Score <br />
          <span className="text-[#58a6ff]">Before Regulators Do</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly scan any website for GDPR violations — missing cookie banners, privacy policies, and data disclosures — and get a compliance score with actionable fixes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $15/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for first scan. Cancel anytime.</p>

        {/* Score preview card */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-[#8b949e]">example.com — Compliance Score</span>
            <span className="text-2xl font-bold text-[#f85149]">42 / 100</span>
          </div>
          <div className="w-full bg-[#21262d] rounded-full h-2 mb-5">
            <div className="bg-[#f85149] h-2 rounded-full" style={{width: '42%'}}></div>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#f85149]">✗</span> Cookie consent banner missing</li>
            <li className="flex items-center gap-2"><span className="text-[#f85149]">✗</span> No privacy policy linked in footer</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> HTTPS enabled</li>
            <li className="flex items-center gap-2"><span className="text-[#f85149]">✗</span> Third-party trackers without consent</li>
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Unlimited website scans</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Full compliance report & score</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Actionable fix recommendations</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Cookie & tracker detection</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> PDF export for clients</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Email alerts on score changes</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">What does the scanner check?</h3>
            <p className="text-sm text-[#8b949e]">We check for cookie consent banners, privacy policy pages, data processing disclosures, third-party tracker usage, HTTPS, and more — mapped to key GDPR requirements.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Who is this for?</h3>
            <p className="text-sm text-[#8b949e]">SaaS founders, agency owners, and compliance officers who need a fast, affordable way to audit client or product websites for GDPR issues without hiring a lawyer.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Is this a legal guarantee?</h3>
            <p className="text-sm text-[#8b949e]">No. Our tool provides technical compliance signals and guidance, not legal advice. For full legal assurance, consult a qualified GDPR attorney.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} GDPR Compliance Score Tracker. Not legal advice.
      </footer>
    </main>
  )
}
