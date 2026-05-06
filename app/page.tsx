export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For YouTubers, Streamers, Podcasters & Influencers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Stop Leaving Money on the Table at Tax Time
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CreatorTax automatically categorizes your equipment, software, and travel expenses — then generates tax-ready reports so you keep more of what you earn.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking for $7/mo
        </a>
        <div className="mt-6 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Receipt storage</span>
          <span>✓ Auto-categorization</span>
          <span>✓ Tax-ready exports</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Creator Plan</div>
          <div className="text-4xl font-bold text-white mb-1">
            $7<span className="text-lg font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay tax-ready year-round.</p>
          <ul className="space-y-3 text-sm mb-8">
            {[
              "Unlimited expense tracking",
              "Receipt photo storage",
              "Auto-categorize by expense type",
              "Quarterly & annual tax reports",
              "CSV & PDF export",
              "Equipment depreciation tracking"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What expenses can I track?</h3>
            <p className="text-[#8b949e] text-sm">Cameras, microphones, lighting, editing software, streaming gear, home office costs, travel to events, and any other business expense related to your content creation.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the tax report work?</h3>
            <p className="text-[#8b949e] text-sm">We generate categorized expense summaries by tax year that you can hand directly to your accountant or use to fill out Schedule C. Export as PDF or CSV anytime.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime with no penalties. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} CreatorTax. Built for content creators.</p>
      </footer>
    </main>
  );
}
