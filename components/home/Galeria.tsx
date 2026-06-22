import Image from 'next/image'
import GoldenDivider from '@/components/ui/GoldenDivider'

export default function Galeria() {
  return (
    <section className="py-20 px-4" style={{ background: 'var(--color-wine-dark)' }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-sm tracking-widest uppercase mb-2"
          style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif" }}
        >
          Nos bastidores
        </p>
        <h2
          className="text-center text-4xl md:text-5xl mb-2"
          style={{ color: 'var(--color-cream)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          Galeria
        </h2>
        <div className="flex justify-center">
          <div className="gold-divider w-48" />
        </div>

        {/* Grid assimétrico */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {/* Cartazes — tamanho maior */}
          <div
            className="row-span-2 relative overflow-hidden rounded-sm"
            style={{ border: '2px solid var(--color-gold-dark)' }}
          >
            <Image
              src="/images/cartaz-sessao-1.jpg"
              alt="Sessão #1 — David Ives"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute bottom-0 inset-x-0 p-2 text-xs text-center"
              style={{ background: 'rgba(61,16,32,0.85)', color: 'var(--color-gold)' }}
            >
              Sessão #1 · David Ives
            </div>
          </div>

          <div
            className="row-span-2 relative overflow-hidden rounded-sm"
            style={{ border: '2px solid var(--color-gold-dark)' }}
          >
            <Image
              src="/images/cartaz-sessao-2.jpg"
              alt="Sessão #2 — Liar Liar"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute bottom-0 inset-x-0 p-2 text-xs text-center"
              style={{ background: 'rgba(61,16,32,0.85)', color: 'var(--color-gold)' }}
            >
              Sessão #2 · Liar Liar
            </div>
          </div>

          {/* Reels em loop */}
          {[3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="relative overflow-hidden rounded-sm"
              style={{ border: '1px solid var(--color-gold-dark)' }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={`/videos/reel-${n}.mp4`} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        {/* Linha extra com imagens extras */}
        <div className="mt-3 grid grid-cols-2 gap-3 auto-rows-[160px]">
          <div
            className="relative overflow-hidden rounded-sm"
            style={{ border: '1px solid var(--color-gold-dark)' }}
          >
            <Image
              src="/images/bastidores-zoom.jpg"
              alt="Bastidores do Zoom"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute bottom-0 inset-x-0 p-2 text-xs text-center"
              style={{ background: 'rgba(61,16,32,0.85)', color: 'var(--color-gold)' }}
            >
              Bastidores · Zoom
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-sm"
            style={{ border: '1px solid var(--color-gold-dark)' }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/reel-7.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
