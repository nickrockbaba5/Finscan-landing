'use client';

import Link from 'next/link';
import { Brain, ArrowLeft, FileText } from 'lucide-react';

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
              <span className="text-xl font-black">FIN<span className="text-gray-300">SCAN</span></span>
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
          <p className="text-gray-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing and using FinScan, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-400 leading-relaxed">
                Permission is granted to temporarily access the materials on FinScan for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-gray-400 leading-relaxed">
                The materials on FinScan are provided on an 'as is' basis. FinScan makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-gray-400 leading-relaxed">
                In no event shall FinScan or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use FinScan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Modifications</h2>
              <p className="text-gray-400 leading-relaxed">
                FinScan may revise these terms of service at any time without notice. By using this platform, you agree to be bound by the current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:legal@finscan.uk" className="text-gray-300 hover:text-white underline">
                  legal@finscan.uk
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-900 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 FinScan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
