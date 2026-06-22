import Link from 'next/link'
import TheatreMasks from '@/components/ui/TheatreMasks'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-wine-dark)' }}
    >
      {/* Vídeo de fundo */}
      <video
        className="hero-video opacity-30"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/cartaz-sessao-2.jpg"
      >
        <source src="/videos/reel-1.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(61,16,32,0.7) 0%, rgba(92,26,46,0.5) 50%, rgba(61,16,32,0.85) 100%)',
        }}
      />

      {/* Moldura decorativa */}
      <div
        className="absolute inset-6 md:inset-12 pointer-events-none"
        style={{ border: '1px solid rgba(201,168,76,0.25)' }}
      />
      <div
        className="absolute inset-8 md:inset-14 pointer-events-none"
        style={{ border: '1px solid rgba(201,168,76,0.12)' }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <TheatreMasks size={100} className="mx-auto mb-6 opacity-90" />

        <p
          className="text-base tracking-[0.3em] uppercase mb-3"
          style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif" }}
        >
          Rebeca Alvim apresenta
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-8xl leading-none mb-4"
          style={{
            color: 'var(--color-gold)',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            textShadow: '0 2px 20px rgba(201,168,76,0.3)',
          }}
        >
          Stage
          <br />
          <span style={{ color: 'var(--color-cream)' }}>&amp;</span>
          <br />
          Speech
        </h1>

        <p
          className="text-xl sm:text-2xl mb-2"
          style={{ color: 'var(--color-cream)', fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
        >
          Clube de Leitura Dramática em Inglês
        </p>

        <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-cream-dark)' }}>
          Encontros quinzenais online. Pronúncia, expressividade e cenas
          em inglês — para atores, fluentes e curiosos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/confirmar" className="btn-gold text-base">
            Quero participar →
          </Link>
          <a href="#como-funciona" className="btn-outline-gold text-base">
            Como funciona
          </a>
        </div>

        <p
          className="mt-8 text-sm"
          style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
        >
          Encontros quinzenais · Online via Zoom · 1h15–2h · Mínimo 8 participantes
        </p>
      </div>

      {/* Seta para baixo */}
      <a
        href="#proximo-encontro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'var(--color-gold)' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
