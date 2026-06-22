import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://stageandspeech.cerradowebdesing.com.br'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/aluno', '/api/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
