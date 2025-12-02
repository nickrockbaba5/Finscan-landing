'use client';

import Link from 'next/link';
import { Brain, TrendingUp, Shield, Zap, Target, Globe, Users, Award, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  const engines = [
    {
      name: 'AI Regime Detection',
      description: 'Identifies market phases using machine learning algorithms trained on decades of market data.',
      icon: Brain
    },
    {
      name: 'ICT Smart Money Concepts',
      description: 'Analyzes institutional order flow, liquidity zones, and smart money footprints.',
      icon: TrendingUp
    },
    {
      name: 'Market Profile & Volume Analysis',
      description: 'Professional-grade volume distribution and market structure analysis.',
      icon: Target
    },
    {
      name: 'Technical & Volatility Engine',
      description: 'Advanced technical indicators combined with volatility regime detection.',
      icon: Zap
    },
    {
      name: 'Macro Fundamental Analysis',
      description: 'Real-time economic data integration with sentiment analysis.',
      icon: Globe
    },
    {
      name: 'ML Prediction Models',
      description: 'Ensemble machine learning models for price direction forecasting.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-500/10 to-transparent"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/10 border border-gray-500/20 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
            </span>
            <span className="text-sm text-gray-400 font-medium">Institutional Intelligence Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Democratizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Institutional Intelligence</span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            We believe professional traders deserve the same powerful tools that hedge funds use daily. SniperIQ makes that vision a reality.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 border-t border-gray-800 bg-gradient-to-b from-gray-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full mb-6">
                <Target className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400 font-medium">Our Story</span>
              </div>

              <h2 className="text-4xl font-black mb-6">Why We Built <span className="text-gray-300">SniperIQ</span></h2>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  The financial markets have always been divided. On one side, institutional investors with access to
                  multi-million dollar Bloomberg terminals, proprietary data feeds, and teams of quantitative analysts.
                  On the other, retail traders making decisions with basic charts and gut feelings.
                </p>
                <p>
                  We asked ourselves: <span className="text-white font-semibold">Why should sophisticated market analysis be exclusive to Wall Street?</span>
                </p>
                <p>
                  SniperIQ was born from this frustration. We combined expertise in artificial intelligence, quantitative finance,
                  and professional trading to build something unprecedented: institutional-grade market intelligence accessible
                  to individual traders worldwide.
                </p>
                <p className="text-gray-300 font-semibold">
                  Today, SniperIQ processes millions of data points daily, running 9 specialized AI engines that analyze markets
                  with the same sophistication as hedge fund analysts—but at a fraction of the cost.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Founded 2024</h3>
                    <p className="text-sm text-gray-400">
                      Built by traders and AI engineers who understood both the markets and the technology needed to analyze them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Professional Traders Worldwide</h3>
                    <p className="text-sm text-gray-400">
                      From London to Singapore, professional traders rely on SniperIQ for real-time market intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Millions of Analyses Daily</h3>
                    <p className="text-sm text-gray-400">
                      Our engines process vast amounts of market data 24/7, identifying opportunities as they emerge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full mb-6">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400 font-medium">Our Vision</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-8">
            The Future of <span className="text-gray-300">Market Intelligence</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We envision a world where every professional trader has access to the same level of market intelligence as the largest hedge funds.
            Where decisions are data-driven, not emotional. Where success is determined by skill and access to information, not by the size of your brokerage account.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-400 text-sm">
                Continuously evolving artificial intelligence that learns from market patterns and adapts to changing conditions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Accessibility</h3>
              <p className="text-gray-400 text-sm">
                Professional-grade tools available to traders worldwide, breaking down geographical and financial barriers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparent & Reliable</h3>
              <p className="text-gray-400 text-sm">
                Every signal backed by data, every analysis explained. No black boxes, no hidden algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Our <span className="text-gray-300">Mission</span></h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We believe that institutional-grade financial analysis should be accessible to professional traders
                worldwide. SniperIQ democratizes advanced market intelligence by combining artificial intelligence,
                real-time data feeds, and professional analytical tools into a unified platform.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our platform processes millions of data points daily, applying sophisticated algorithms and machine
                learning models to identify high-probability trading opportunities across global markets.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 font-semibold">Institutional-Grade Quality</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 font-semibold">Professional Traders</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-black mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Multi-Engine Consensus</h4>
                    <p className="text-sm text-gray-400">9 specialized AI engines vote on every analysis, reducing false signals.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Real-Time Intelligence</h4>
                    <p className="text-sm text-gray-400">Sub-second data latency with continuous market monitoring.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Transparent Methodology</h4>
                    <p className="text-sm text-gray-400">Every signal includes confidence scoring and reasoning.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engines Section */}
      <section className="py-20 px-6 border-t border-gray-800 bg-gradient-to-b from-transparent to-gray-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Analysis <span className="text-gray-300">Engines</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform combines 9 specialized engines, each focusing on different aspects of market analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engines.map((engine, index) => {
              const Icon = engine.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-gray-500/30 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{engine.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{engine.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Built with <span className="text-gray-300">Precision</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure designed for reliability, speed, and accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gray-500/50">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-400">
                Real-time analysis with optimized data pipelines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gray-500/50">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">99.9% Uptime</h3>
              <p className="text-sm text-gray-400">
                Enterprise infrastructure with automated failover and continuous monitoring for maximum reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gray-500/50">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Coverage</h3>
              <p className="text-sm text-gray-400">
                Multi-asset analysis across forex, equities, crypto, and commodities from markets worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Trade with <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Institutional Intelligence</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join professional traders worldwide using FinScan for advanced market analysis.
          </p>
          <Link
            href="https://app.finscan.uk"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-300 to-gray-500 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-gray-500/50 transition-all"
          >
            <span>Launch Research Terminal</span>
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 FinScan. All rights reserved.</p>
            <p className="mt-2">
              <span className="text-amber-500 font-semibold">Risk Warning:</span> Trading involves significant risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
