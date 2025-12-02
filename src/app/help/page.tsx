'use client';

import Link from 'next/link';
import { Brain, ArrowLeft, HelpCircle, BookOpen, MessageSquare } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-[1px]">
                <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-gray-300" />
                </div>
              </div>
              <span className="text-xl font-black">
                SNIPER<span className="text-gray-300">IQ</span>
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-gray-400" />
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                Help &amp; Documentation
              </h1>
            </div>
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              Overview of how to get started with SniperIQ, how the institutional engines
              work, and where to get assistance. This page is designed for both new users
              and reviewers.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-gray-300" />
                Getting Started
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>
                  Create a free account at{' '}
                  <a
                    href="https://app.sniperiq.ai/register"
                    className="underline hover:text-white"
                  >
                    app.sniperiq.ai/register
                  </a>
                  .
                </li>
                <li>
                  After signup, returning to{' '}
                  <span className="font-semibold">sniperiq.ai</span> and clicking{' '}
                  <span className="font-semibold">Launch Terminal</span> will open the
                  dashboard while you remain logged in.
                </li>
                <li>
                  Use the symbol bar (AAPL, MSFT, GLD, BTC, etc.) to switch the instrument
                  being analysed.
                </li>
                <li>
                  Scroll to <span className="font-semibold">Engine Intelligence</span> to
                  see individual engines such as ICT, Market Profile, Technical/Volatility,
                  Options/Gamma, Macro Regime, and ML/Fusion.
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-gray-300" />
                Getting Help
              </h2>
              <p className="text-gray-300 mb-3">
                For questions, account issues, or feedback, contact our team:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-semibold">Support:</span>{' '}
                  <a
                    href="mailto:support@sniperiq.ai"
                    className="underline hover:text-white"
                  >
                    support@sniperiq.ai
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Legal &amp; compliance:</span>{' '}
                  <a
                    href="mailto:legal@sniperiq.ai"
                    className="underline hover:text-white"
                  >
                    legal@sniperiq.ai
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Privacy:</span>{' '}
                  <a
                    href="mailto:privacy@sniperiq.ai"
                    className="underline hover:text-white"
                  >
                    privacy@sniperiq.ai
                  </a>
                </li>
              </ul>
              <p className="text-gray-400 mt-4 text-sm">
                Typical response time is within one UK business day.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Does SniperIQ provide financial advice?
                </h3>
                <p className="text-gray-400">
                  No. SniperIQ is a research and analysis platform only. All outputs are
                  classified as market research and educational material. You remain fully
                  responsible for any trading or investment decisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Where does your data come from?
                </h3>
                <p className="text-gray-400">
                  Market, fundamental, and positioning data are sourced from
                  institutional-grade vendors. The backend consolidates these sources and
                  exposes them through the documented API at{' '}
                  <span className="font-mono text-gray-200">api.sniperiq.ai</span>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  How should I interpret engine confidence scores?
                </h3>
                <p className="text-gray-400">
                  Each engine outputs a directional bias (bullish, bearish, or neutral)
                  and a confidence value from 0–100 based on signal strength and data
                  quality. The dashboard headline bias blends several core engines to avoid
                  overconfidence and always includes risk factors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Does SniperIQ execute trades or hold client money?
                </h3>
                <p className="text-gray-400">
                  No. SniperIQ does not execute trades, hold client funds, or act as a
                  broker. It is operated by Eagle Digital Services Ltd in the UK as a
                  research platform only.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

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

