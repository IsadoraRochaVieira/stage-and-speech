import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/ui/CookieBanner'

export const metadata: Metadata = {
  title: 'Stage and Speech | Clube de Leitura Dramática em Inglês',
  description:
    'Leitura dramática em inglês com a atriz e professora bilíngue Rebeca Alvim. Encontros quinzenais online para adultos nível intermediário a avançado.',
  openGraph: {
    title: 'Stage and Speech',
    description: 'Clube de Leitura Dramática em Inglês com Rebeca Alvim',
    images: ['/images/logo-collage.jpg'],
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
