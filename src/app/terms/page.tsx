'use client';

import Link from 'next/link';
import { Brain, ArrowLeft, FileText, Building2 } from 'lucide-react';

export default function TermsPage() {
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
            <FileText className="w-8 h-8 text-gray-400" />
            <h1 className="text-5xl font-black">Terms of Service</h1>
          </div>

          <div className="bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong>Last Updated:</strong> January 2025<br />
              <strong>Effective Date:</strong> January 2025<br />
              <strong>Service Provider:</strong> Eagle Digital Services Ltd<br />
              <strong>Company Number:</strong> 16584009<br />
              <strong>Registered Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of SniperIQ ("the Platform", "the Service"),
                an institutional-grade financial intelligence platform operated by Eagle Digital Services Ltd
                ("we", "us", "our", "the Company"), a company registered in England and Wales under company number 16584009.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                By accessing or using SniperIQ, you agree to be bound by these Terms. If you do not agree to these Terms,
                you must not access or use the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="text-gray-400 leading-relaxed">
                SniperIQ (formerly FinScan) is an AI-powered financial research and analysis platform that provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-4">
                <li>Institutional-grade market analysis using 9 specialized AI engines</li>
                <li>Company fundamentals, financial statements, and ratio analysis</li>
                <li>AI-powered research copilot for generating insights</li>
                <li>Multi-asset coverage including equities, forex, commodities, and cryptocurrencies</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong className="text-white">Important:</strong> SniperIQ provides research and analysis tools only.
                We do not provide financial advice, investment recommendations, or execute trades on your behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Use License</h2>
              <p className="text-gray-400 leading-relaxed">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable,
                revocable license to access and use the Platform for your personal or internal business purposes.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-2">
                <li>Modify, copy, or create derivative works based on the Platform</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Platform</li>
                <li>Sell, resell, license, or distribute the Platform or its content</li>
                <li>Use the Platform for any unlawful purpose or in violation of any regulations</li>
                <li>Attempt to gain unauthorized access to any systems or networks</li>
                <li>Use automated systems (bots, scrapers) to access the Platform without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Investment Disclaimer</h2>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-red-400">IMPORTANT - PLEASE READ CAREFULLY:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-4">
                  <li>SniperIQ is a research tool and does NOT constitute financial advice</li>
                  <li>Past performance is not indicative of future results</li>
                  <li>All trading and investment decisions are your sole responsibility</li>
                  <li>You may lose some or all of your invested capital</li>
                  <li>AI-generated analysis may contain errors or inaccuracies</li>
                  <li>Always conduct your own research and consult qualified financial advisors</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-4">
                  Eagle Digital Services Ltd is not authorized or regulated by the Financial Conduct Authority (FCA)
                  to provide investment advice. The Platform is intended for research and educational purposes only.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Account Responsibilities</h2>
              <p className="text-gray-400 leading-relaxed">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring your account information is accurate and up-to-date</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Subscription and Payments</h2>
              <p className="text-gray-400 leading-relaxed">
                Certain features of the Platform require a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-2">
                <li>Pay all applicable fees as described at the time of purchase</li>
                <li>Automatic renewal of subscriptions unless cancelled before the renewal date</li>
                <li>Provide accurate and complete payment information</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                Refunds are provided in accordance with our refund policy. Contact support@sniperiq.ai for refund requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                To the maximum extent permitted by applicable law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-2">
                <li>The Platform is provided on an "AS IS" and "AS AVAILABLE" basis</li>
                <li>We make no warranties regarding accuracy, reliability, or completeness of any analysis</li>
                <li>We are not liable for any trading losses, investment decisions, or financial outcomes</li>
                <li>Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                All content, features, and functionality of the Platform, including but not limited to text, graphics,
                logos, algorithms, and software, are owned by Eagle Digital Services Ltd and are protected by
                international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-gray-400 leading-relaxed">
                We may terminate or suspend your access to the Platform immediately, without prior notice, for any reason,
                including breach of these Terms. Upon termination, your right to use the Platform will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales.
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts
                of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes via
                email or prominent notice on the Platform at least 30 days before changes take effect. Continued use
                of the Platform after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-white">Eagle Digital Services Ltd</strong></p>
                    <p>71-75 Shelton Street, Covent Garden</p>
                    <p>London, WC2H 9JQ</p>
                    <p>United Kingdom</p>
                    <p className="pt-2"><strong className="text-white">Company Number:</strong> 16584009</p>
                    <p><strong className="text-white">Email:</strong> <a href="mailto:legal@sniperiq.ai" className="text-gray-200 underline hover:text-white">legal@sniperiq.ai</a></p>
                    <p><strong className="text-white">Support:</strong> <a href="mailto:support@sniperiq.ai" className="text-gray-200 underline hover:text-white">support@sniperiq.ai</a></p>
                    <p className="pt-2">
                      <a
                        href="https://find-and-update.company-information.service.gov.uk/company/16584009"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white underline text-sm"
                      >
                        View on Companies House →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-900 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>© {new Date().getFullYear()} Eagle Digital Services Ltd. All rights reserved.</p>
            <p className="text-xs">Company No. 16584009 • Registered in England & Wales</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
