'use client';

import Link from 'next/link';
import { Brain, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-[1px]">
                <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-gray-300" />
                </div>
              </div>
              <span className="text-xl font-black">
                SNIPER<span className="text-gray-300">IQ</span>
              </span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-500" />
            <h1 className="text-5xl font-black">Risk Disclaimer</h1>
          </div>
          <p className="text-gray-400 mb-8">Last updated: January 2025</p>

          <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-500 mb-2">Important Notice</h3>
            <p className="text-gray-300">
              Trading and investing in financial markets involves substantial risk of loss and is not suitable for every investor.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Not Financial Advice</h2>
              <p className="text-gray-400 leading-relaxed">
                The information provided by SniperIQ is for informational and educational purposes only. It does not constitute financial, investment, trading, or other types of advice and should not be treated as such.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Risk of Loss</h2>
              <p className="text-gray-400 leading-relaxed">
                Trading stocks, forex, futures, cryptocurrencies, and other financial instruments involves substantial risk of loss. You should carefully consider whether trading is appropriate for you in light of your experience, objectives, financial resources, and other relevant circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Past Performance</h2>
              <p className="text-gray-400 leading-relaxed">
                Past performance is not indicative of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. No Guarantees</h2>
              <p className="text-gray-400 leading-relaxed">
                SniperIQ makes no representations or warranties concerning the accuracy, completeness, or timeliness of the information provided. While we strive for accuracy, the information may contain errors or inaccuracies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. AI-Generated Analysis</h2>
              <p className="text-gray-400 leading-relaxed">
                Our platform uses artificial intelligence and machine learning models. While these models are sophisticated, they are not infallible and may produce incorrect or misleading results. Always conduct your own research and due diligence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Professional Advice</h2>
              <p className="text-gray-400 leading-relaxed">
                Before making any investment decisions, you should seek advice from independent financial, tax, legal, and accounting advisors regarding your particular circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Regulatory Notice</h2>
              <p className="text-gray-400 leading-relaxed">
                SniperIQ is not a registered investment advisor, broker-dealer, or exchange. We do not provide personalized investment recommendations or execute trades on behalf of users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
              <p className="text-gray-400 leading-relaxed">
                For questions about this disclaimer, contact us at{' '}
                <a href="mailto:legal@sniperiq.ai" className="text-gray-300 hover:text-white underline">
                  legal@sniperiq.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-900 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 SniperIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
