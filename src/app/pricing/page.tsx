"use client";

import { useState } from "react";
import Link from "next/link";
import { Brain, Check, Zap, TrendingUp, Crown, Building2, Gift, ArrowLeft } from "lucide-react";

const tiers = [
  { name: "Free", price: 0, tagline: "Get Started", description: "Try SniperIQ with limited access", icon: Gift, color: "gray", features: ["3 analyses/day", "5 AI queries", "Basic engines", "1 year data"], cta: "Start Free", href: "https://app.sniperiq.ai/register" },
  { name: "Starter", price: 39, yearly: 390, tagline: "Essential Intelligence", description: "Perfect for individual investors", icon: Zap, color: "blue", features: ["10 analyses/day", "20 AI queries", "Basic engines", "10 exports/mo"], cta: "Get Started", href: "https://app.sniperiq.ai/register?tier=starter" },
  { name: "Pro", price: 99, yearly: 990, tagline: "Professional Suite", description: "Full access for serious traders", icon: TrendingUp, color: "emerald", popular: true, features: ["50 analyses/day", "100 AI queries", "All 9 engines", "Real-time data", "Priority support"], cta: "Go Pro", href: "https://app.sniperiq.ai/register?tier=pro" },
  { name: "Advanced", price: 199, yearly: 1990, tagline: "Institutional Grade", description: "Complete platform for professionals", icon: Crown, color: "purple", features: ["200 analyses/day", "500 AI queries", "All 9 engines", "API access", "Engine Lab"], cta: "Go Advanced", href: "https://app.sniperiq.ai/register?tier=advanced" },
  { name: "Enterprise", price: 0, tagline: "Custom Solutions", description: "Tailored for institutions", icon: Building2, color: "amber", features: ["Unlimited everything", "Dedicated support", "Custom integrations", "White-label options"], cta: "Contact Sales", href: "mailto:enterprise@sniperiq.ai" }
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/60 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-[1px]">
              <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-gray-300" />
              </div>
            </div>
            <span className="text-xl font-black">SNIPER<span className="text-gray-300">IQ</span></span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"><ArrowLeft className="w-4 h-4" /> Back</Link>
        </div>
      </header>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-400">Institutional-grade intelligence at every level</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={yearly ? "text-gray-500" : "text-white"}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className="w-14 h-7 bg-gray-700 rounded-full relative">
              <div className={`absolute top-1 w-5 h-5 bg-emerald-400 rounded-full transition-transform ${yearly ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={yearly ? "text-white" : "text-gray-500"}>Yearly <span className="ml-2 px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">Save 17%</span></span>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              const price = yearly && tier.yearly ? Math.round(tier.yearly / 12) : tier.price;
              return (
                <div key={tier.name} className={`relative p-6 rounded-2xl border-2 transition-all ${tier.popular ? "border-emerald-400 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" : "border-gray-800 bg-gray-900/50"}`}>
                  {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-400 text-black text-xs font-bold rounded-full">MOST POPULAR</div>}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl ${tier.popular ? "bg-emerald-400" : "bg-gray-800"}`}><Icon className={tier.popular ? "text-black" : "text-white"} size={24} /></div>
                    <div><h2 className="text-xl font-bold">{tier.name}</h2><p className="text-xs text-gray-400">{tier.tagline}</p></div>
                  </div>
                  <div className="mb-4">{tier.name === "Enterprise" ? <div className="text-2xl font-bold">Custom</div> : <><span className="text-4xl font-black">£{price}</span><span className="text-gray-400">/mo</span></>}</div>
                  <p className="text-sm text-gray-400 mb-6">{tier.description}</p>
                  <div className="space-y-2 mb-6">{tier.features.map((f) => <div key={f} className="flex items-center gap-2 text-sm"><Check size={14} className="text-emerald-400" /><span>{f}</span></div>)}</div>
                  <a href={tier.href} className={`block w-full py-3 rounded-xl font-bold text-center transition-all ${tier.popular ? "bg-gradient-to-r from-emerald-400 to-teal-400 text-black hover:shadow-lg hover:shadow-emerald-400/30" : tier.name === "Enterprise" ? "bg-gradient-to-r from-amber-400 to-orange-400 text-black" : "bg-white text-black hover:bg-gray-100"}`}>{tier.cta}</a>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-xl font-bold mb-4">Questions?</h3>
            <p className="text-gray-400 mb-6">14-day free trial on all plans. No credit card required.</p>
            <div className="flex justify-center gap-4">
              <a href="mailto:support@sniperiq.ai" className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm">Contact Support</a>
              <a href="mailto:enterprise@sniperiq.ai" className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 rounded-lg text-sm text-black font-semibold">Enterprise</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6"><Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300">Terms</Link><Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300">Privacy</Link><Link href="/disclaimer" className="text-sm text-gray-500 hover:text-gray-300">Disclaimer</Link></div>
          <p className="text-sm text-gray-500">© 2025 SniperIQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
