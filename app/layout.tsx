import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/ui/CookieBanner'

const base = 'https://stageandspeech.cerradowebdesing.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: 'Stage and Speech | Clube de Leitura Dramática em Inglês',
    template: '%s | Stage and Speech',
  },
  description:
    'Clube de Leitura Dramática em Inglês com Rebeca Alvim — atriz, professora bilíngue e CELTA Certified. Encontros quinzenais online para adultos nível intermediário a avançado.',
  keywords: [
    'clube de leitura em inglês',
    'leitura dramática',
    'inglês para atores',
    'Rebeca Alvim',
    'Stage and Speech',
    'aula de inglês online',
    'CELTA',
    'teatro em inglês',
    'pronúncia inglês',
  ],
  authors: [{ name: 'Rebeca Alvim' }],
  creator: 'Rebeca Alvim',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: base,
    siteName: 'Stage and Speech',
    title: 'Stage and Speech | Clube de Leitura Dramática em Inglês',
    description:
      'Encontros quinzenais online de leitura dramática em inglês com Rebeca Alvim — atriz e professora CELTA Certified.',
    images: [{ url: '/images/logo-collage.jpg', width: 800, height: 600, alt: 'Stage and Speech' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stage and Speech',
    description: 'Clube de Leitura Dramática em Inglês com Rebeca Alvim',
    images: ['/images/logo-collage.jpg'],
  },
  verification: {
    google: 'Z9cD5Od7j3iqjKu1Ky0HlSW7A36d9lxPl_bqr_VK2wg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
