import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  // Basic Meta
  title: "SniperIQ - Institutional-Grade Financial Intelligence | AI-Powered Market Analysis",
  description: "SniperIQ is an advanced AI research platform combining 9 specialized engines for institutional-grade market analysis. Real-time data, professional tools, and AI-powered insights for equities, indices, forex, crypto, and commodities.",

  // Keywords for SEO
  keywords: [
    "financial intelligence",
    "market analysis",
    "AI trading platform",
    "institutional trading tools",
    "real-time market data",
    "technical analysis",
    "market research",
    "trading intelligence",
    "AI-powered analysis",
    "professional trading platform",
    "forex analysis",
    "crypto analysis",
    "gold analysis",
    "silver analysis",
    "commodities trading",
    "financial research platform",
    "algorithmic trading",
    "market sentiment analysis",
    "trading signals",
    "institutional grade analytics"
  ],

  // Authors and Creator
  authors: [{ name: "Eagle Digital Services Ltd" }],
  creator: "Eagle Digital Services Ltd",
  publisher: "Eagle Digital Services Ltd",

  // OpenGraph (for social sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://sniperiq.ai",
    siteName: "SniperIQ",
    title: "SniperIQ - Institutional-Grade Financial Intelligence",
    description: "Advanced AI research platform combining 9 specialized engines for institutional-grade market analysis across global markets.",
    images: [
      {
        url: "https://sniperiq.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "SniperIQ - Institutional Intelligence Platform",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SniperIQ - Institutional-Grade Financial Intelligence",
    description: "Advanced AI research platform with 9 specialized engines for institutional-grade market analysis.",
    images: ["https://sniperiq.ai/twitter-image.png"],
    creator: "@sniperiq",
  },

  // Additional Meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Alternate languages (if you expand internationally)
  alternates: {
    canonical: "https://sniperiq.ai",
    languages: {
      'en-GB': 'https://sniperiq.ai',
      'en-US': 'https://sniperiq.ai',
    },
  },

  // App links (for mobile apps if you build them)
  // appleWebApp: {
  //   capable: true,
  //   title: "FinScan",
  //   statusBarStyle: "black-translucent",
  // },

  // Category
  category: "Finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data for AI Crawlers (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SniperIQ",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "description": "Institutional-grade financial intelligence platform powered by 9 specialized AI engines. Provides real-time market analysis for global equities, indices, currencies, and digital assets.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "10000",
                "bestRating": "5"
              },
              "creator": {
                "@type": "Organization",
                "name": "Eagle Digital Services Ltd",
                "url": "https://sniperiq.ai",
                "logo": "https://sniperiq.ai/logo.png",
                "description": "UK-based technology company specializing in AI-powered financial intelligence platforms",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "71-75 Shelton Street",
                  "addressLocality": "Covent Garden, London",
                  "postalCode": "WC2H 9JQ",
                  "addressCountry": "GB"
                },
                "sameAs": [
                  "https://find-and-update.company-information.service.gov.uk/company/16584009",
                  "https://twitter.com/sniperiq",
                  "https://linkedin.com/company/sniperiq"
                ]
              },
              "featureList": [
                "9 specialized AI analysis engines",
                "Real-time market data",
                "Multi-asset coverage (precious metals, forex, crypto)",
                "Institutional-grade analytics",
                "Advanced technical indicators",
                "Sentiment analysis",
                "Market regime detection",
                "Professional trading tools"
              ],
              "url": "https://sniperiq.ai",
              "screenshot": "https://sniperiq.ai/screenshot.png"
            })
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eagle Digital Services Ltd",
              "legalName": "Eagle Digital Services Ltd",
              "url": "https://sniperiq.ai",
              "logo": "https://sniperiq.ai/logo.png",
              "foundingDate": "2025",
              "description": "UK-based technology company specializing in AI-powered financial intelligence platforms. Creator of FinScan Terminal.",
              "taxID": "16584009",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "71-75 Shelton Street",
                "addressLocality": "Covent Garden",
                "addressRegion": "London",
                "postalCode": "WC2H 9JQ",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "contact@sniperiq.ai",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://find-and-update.company-information.service.gov.uk/company/16584009",
                "https://twitter.com/finscan",
                "https://linkedin.com/company/finscan"
              ],
              "brand": {
                "@type": "Brand",
                "name": "SniperIQ",
                "description": "Institutional-grade financial intelligence platform"
              }
            })
          }}
        />

        {/* WebPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "SniperIQ - Institutional-Grade Financial Intelligence",
              "description": "Advanced AI research platform combining 9 specialized engines for institutional-grade market analysis",
              "url": "https://sniperiq.ai",
              "inLanguage": "en-GB",
              "isPartOf": {
                "@type": "WebSite",
                "name": "SniperIQ",
                "url": "https://sniperiq.ai"
              },
              "about": {
                "@type": "Thing",
                "name": "Financial Intelligence Platform",
                "description": "AI-powered market analysis for professional traders"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Professional Traders, Institutional Investors, Financial Analysts"
              }
            })
          }}
        />
      </head>
      <body className="antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
