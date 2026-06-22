import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stage and Speech | Links',
  description: 'Clube de Leitura Dramática em Inglês com Rebeca Alvim',
  openGraph: {
    title: 'Stage and Speech',
    description: 'Clube de Leitura Dramática em Inglês com Rebeca Alvim — Atriz & Professora CELTA',
    images: ['/images/logo-collage.jpg'],
  },
}

const links = [
  {
    href: 'https://stageandspeech.cerradowebdesing.com.br/',
    label: 'Acesse o site do clube',
    desc: 'Sessões, inscrições e muito mais',
    variant: 'cream' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    href: 'https://chat.whatsapp.com/Gmk2YDSpnQlJruRZFxft4I?mode=gi_t',
    label: 'Entre no grupo do WhatsApp',
    desc: 'Comunidade de alunos',
    variant: 'wine' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
]

function Masks() {
  return (
    <svg width="80" height="48" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="52" cy="44" rx="36" ry="40" fill="#C9A84C" stroke="#9C7A2A" strokeWidth="2" />
      <circle cx="40" cy="36" r="5" fill="#9C7A2A" />
      <circle cx="64" cy="36" r="5" fill="#9C7A2A" />
      <path d="M38 55 Q52 68 66 55" stroke="#9C7A2A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="36" cy="22" rx="8" ry="5" fill="#C9A84C" stroke="#9C7A2A" strokeWidth="1.5" />
      <ellipse cx="68" cy="22" rx="8" ry="5" fill="#C9A84C" stroke="#9C7A2A" strokeWidth="1.5" />
      <ellipse cx="108" cy="44" rx="36" ry="40" fill="#5C1A2E" stroke="#3D1020" strokeWidth="2" />
      <circle cx="96" cy="36" r="5" fill="#3D1020" />
      <circle cx="120" cy="36" r="5" fill="#3D1020" />
      <path d="M94 62 Q108 50 122 62" stroke="#E8D9B5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="92" cy="22" rx="8" ry="5" fill="#5C1A2E" stroke="#3D1020" strokeWidth="1.5" />
      <ellipse cx="124" cy="22" rx="8" ry="5" fill="#5C1A2E" stroke="#3D1020" strokeWidth="1.5" />
      <ellipse cx="104" cy="52" rx="3" ry="5" fill="#C9A84C" />
    </svg>
  )
}

function TicketPerf({ bg }: { bg: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', right: -1, top: 0, bottom: 0, width: 7,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
        pointerEvents: 'none',
      }}
    >
      {[0,1,2,3,4].map(i => (
        <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: bg, display: 'block' }} />
      ))}
    </div>
  )
}

export default function LinksPage() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        background: '#F5EDD8',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.045'/%3E%3C/svg%3E")`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          position: 'relative',
          padding: '40px 28px 32px',
          border: '1px solid rgba(201,168,76,0.35)',
          background: 'rgba(251,247,238,0.6)',
        }}
      >
        {/* Moldura interna */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 6, border: '1px solid rgba(201,168,76,0.15)', pointerEvents: 'none' }}
        />

        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <Masks />
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 34,
              color: '#5C1A2E',
              margin: '8px 0 0',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
            }}
          >
            Stage &amp; Speech
          </h1>
          <p
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 600,
              fontSize: 17,
              color: '#9C7A2A',
              margin: '4px 0 0',
            }}
          >
            Clube de Leitura Dramática em Inglês
          </p>
        </div>

        {/* Divisor dourado */}
        <div style={{ height: 1.5, background: 'linear-gradient(to right, transparent, #C9A84C, transparent)', margin: '16px 0' }} />

        <p
          style={{
            textAlign: 'center',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#9C7A2A',
            fontFamily: "'Playfair Display', serif",
            marginBottom: 24,
          }}
        >
          com Rebeca Alvim · Atriz &amp; Professora
        </p>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {links.map((link) => {
            const isCream = link.variant === 'cream'
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 20px 14px 16px',
                  background: isCream ? '#fff8f0' : '#5C1A2E',
                  border: `1.5px solid #C9A84C`,
                  borderRadius: 2,
                  textDecoration: 'none',
                  boxShadow: isCream ? '3px 3px 0 #9C7A2A' : '3px 3px 0 #3D1020',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
              >
                {/* Ícone */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    background: isCream ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.1)',
                    border: `1px solid rgba(201,168,76,${isCream ? 0.35 : 0.4})`,
                    color: '#C9A84C',
                  }}
                  aria-hidden="true"
                >
                  {link.icon}
                </div>

                {/* Texto */}
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: isCream ? '#5C1A2E' : '#C9A84C',
                      display: 'block',
                      lineHeight: 1.2,
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: isCream ? '#9C7A2A' : 'rgba(245,237,216,0.65)',
                      display: 'block',
                      marginTop: 2,
                    }}
                  >
                    {link.desc}
                  </span>
                </div>

                {/* Seta */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isCream ? '#C9A84C' : 'rgba(201,168,76,0.7)'} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>

                {/* Picote de ticket */}
                <TicketPerf bg={isCream ? '#F5EDD8' : '#5C1A2E'} />
              </a>
            )
          })}
        </div>

        {/* Rodapé */}
        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <div style={{ height: 1.5, background: 'linear-gradient(to right, transparent, #C9A84C, transparent)', marginBottom: 14 }} />
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 13,
              color: '#9C7A2A',
            }}
          >
            ✦ @stageandspeech ✦
          </p>
        </div>
      </div>
    </main>
  )
}
