import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://stageandspeech.cerradowebdesing.com.br'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/confirmar`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/links`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
