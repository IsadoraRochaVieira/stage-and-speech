import Link from 'next/link'
import Image from 'next/image'
import GoldenDivider from '@/components/ui/GoldenDivider'

const session = {
  number: 2,
  title: 'Liar Liar',
  subtitle: 'Jim Carrey',
  date: new Date('2026-06-20T13:00:00-03:00'),
  poster: '/images/cartaz-sessao-2.jpg',
  status: 'encerrada' as 'aberta' | 'encerrada' | 'em-breve',
}

const nextSession = {
  number: 3,
  title: 'Sessão #3',
  subtitle: 'Tema a confirmar',
  date: null,
  poster: null,
  status: 'em-breve' as 'aberta' | 'encerrada' | 'em-breve',
}

function formatDate(d: Date) {
  return d.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
function formatTime(d: Date) {
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

export default function ProximoEncontro() {
  return (
    <section id="proximo-encontro" className="py-20 px-4" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center text-sm tracking-widest uppercase mb-2"
          style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
        >
          Calendário
        </p>
        <h2
          className="text-center text-4xl md:text-5xl mb-2"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          Encontros
        </h2>
        <GoldenDivider className="max-w-xs mx-auto" />

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Sessão 2 — encerrada */}
          <div className="vintage-card ornament-corners opacity-80">
            <div className="flex gap-4 items-start">
              <div className="relative w-24 h-32 flex-shrink-0 rounded overflow-hidden border"
                style={{ borderColor: 'var(--color-gold-dark)' }}>
                <Image src={session.poster} alt={session.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium mb-2 inline-block"
                  style={{ background: 'var(--color-wine)', color: 'var(--color-cream)' }}
                >
                  Sessão #{session.number} · Encerrada
                </span>
                <h3
                  className="text-xl font-bold mt-1"
                  style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
                >
                  {session.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-bark)' }}>{session.subtitle}</p>
                <p className="text-xs mt-2" style={{ color: 'var(--color-gold-dark)' }}>
                  {formatDate(session.date)} · {formatTime(session.date)}
                </p>
              </div>
            </div>
          </div>

          {/* Sessão 3 — em breve */}
          <div className="vintage-card ornament-corners relative overflow-hidden">
            <div
              className="absolute top-0 right-0 text-xs px-3 py-1 font-bold"
              style={{ background: 'var(--color-gold)', color: 'var(--color-wine-dark)', fontFamily: "'Playfair Display', serif" }}
            >
              Em breve
            </div>
            <h3
              className="text-2xl font-bold mb-2 mt-4"
              style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
            >
              Sessão #{nextSession.number}
            </h3>
            <p
              className="font-script text-xl mb-4"
              style={{ color: 'var(--color-gold-dark)', fontFamily: "'Dancing Script', cursive" }}
            >
              ~início de julho de 2026
            </p>
            <p className="text-sm mb-6" style={{ color: 'var(--color-bark)' }}>
              Tema a confirmar em breve. Fique de olho nas redes sociais!
            </p>

            <div className="gold-divider mb-4" />

            <div className="flex gap-3 text-sm" style={{ color: 'var(--color-bark)' }}>
              <div>
                <p className="font-bold" style={{ color: 'var(--color-wine)' }}>Pré-inscritos do mês de estreia</p>
                <p className="text-2xl font-title" style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>R$15</p>
              </div>
              <div className="w-px" style={{ background: 'var(--color-gold-dark)' }} />
              <div>
                <p className="font-bold" style={{ color: 'var(--color-wine)' }}>Demais participantes</p>
                <p className="text-2xl font-title" style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>R$25</p>
              </div>
            </div>

            <Link href="/confirmar" className="btn-gold mt-6 block text-center text-sm">
              Confirmar presença →
            </Link>
          </div>
        </div>

        {/* Histórico — Sessão 1 */}
        <div className="mt-8 p-4 rounded-sm flex items-center gap-4" style={{ background: 'rgba(92,26,46,0.05)', border: '1px dashed var(--color-gold-dark)' }}>
          <Image src="/images/cartaz-sessao-1.jpg" alt="Sessão 1" width={56} height={72} className="rounded object-cover" />
          <div>
            <p className="text-xs" style={{ color: 'var(--color-gold-dark)' }}>Sessão #1 · 01/06/2026 · 19h30 · Encerrada</p>
            <p className="font-bold" style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}>Comédia de David Ives — Encontro de estreia</p>
          </div>
        </div>
      </div>
    </section>
  )
}
