'use client';

import Link from 'next/link';
import { Brain, Mail, MessageSquare, ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.sniperiq.ai';
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('sending');
    setErrorMessage(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/support/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(PUBLIC_API_KEY ? { 'X-API-Key': PUBLIC_API_KEY } : {}),
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          source: 'landing-contact',
          user_agent:
            typeof window !== 'undefined'
              ? window.navigator.userAgent
              : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err?.message || 'Something went wrong. Please try again.',
      );
    }
  };

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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black mb-6">Contact Information</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <a href="mailto:contact@sniperiq.ai" className="text-gray-400 hover:text-white transition-colors">
                      contact@sniperiq.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Support</h3>
                    <p className="text-gray-400">
                      For technical support, please use the contact form or email us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-gray-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {status === 'success' && (
                  <p className="text-sm text-emerald-400">
                    Thank you – your message has been sent. We will get back to you as
                    soon as possible.
                  </p>
                )}

                {status === 'error' && errorMessage && (
                  <p className="text-sm text-red-400">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gray-300 to-gray-500 text-black rounded-xl font-bold hover:shadow-2xl hover:shadow-gray-500/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
