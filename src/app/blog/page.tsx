'use client';

import Link from 'next/link';
import { Brain, ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Understanding Market Regimes with AI',
      excerpt: 'Learn how our AI-powered regime detection engine identifies market phases and helps you adapt your trading strategy.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Analysis'
    },
    {
      title: 'The Power of Multi-Engine Consensus',
      excerpt: 'Why combining 9 specialized AI engines provides more reliable signals than any single analysis method.',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Technology'
    },
    {
      title: 'Institutional Trading Strategies Explained',
      excerpt: 'Discover the strategies used by institutional traders and how FinScan brings them to retail traders.',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Education'
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
                FIN<span className="text-gray-300">SCAN</span>
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
            FinScan <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Insights, analysis, and updates from the FinScan team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-gray-500/30 transition-all group cursor-pointer"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              More blog posts coming soon. Stay tuned!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
