import type { MetadataRoute } from 'next'

// Static sitemap for main marketing pages
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sniperiq.ai'

  const routes = [
    '', // home
    '/about',
    '/research',
    '/screener',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
  ]

  const now = new Date().toISOString()

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.6,
  }))
}

