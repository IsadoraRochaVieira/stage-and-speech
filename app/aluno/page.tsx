import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import Countdown from '@/components/aluno/Countdown'
import GoldenDivider from '@/components/ui/GoldenDivider'

export const metadata = { title: 'Dashboard | Stage and Speech' }

export default async function AlunoDashboard() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/aluno/login')

  const sessions = await prisma.clubSession.findMany({
    orderBy: { date: 'asc' },
    take: 5,
  })

  const upcoming = sessions.find(s => new Date(s.date) > new Date())
  const next = upcoming ?? sessions[sessions.length - 1]

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
          >
            Bem-vindo(a) de volta
          </p>
          <h1
            className="text-3xl md:text-4xl"
            style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            {session.user?.name ?? session.user?.email}
          </h1>
        </div>
        <form action="/api/auth/signout" method="POST">
          <button
            type="submit"
            className="text-sm btn-outline-gold py-1.5 px-4"
          >
            Sair
          </button>
        </form>
      </div>

      <GoldenDivider />

      {/* Próximo encontro */}
      {next && (
        <div className="vintage-card ornament-corners mt-8">
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
          >
            Próximo encontro
          </p>
          <h2
            className="text-2xl font-bold mb-1"
            style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
          >
            Sessão #{next.number} — {next.title}
          </h2>
          <p className="text-sm mb-4" style={{ color: 'var(--color-bark)' }}>
            {new Date(next.date).toLocaleDateString('pt-BR', {
              weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
            })}{' '}
            às{' '}
            {new Date(next.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </p>

          <Countdown target={new Date(next.date)} />

          {next.zoomLink ? (
            <a
              href={next.zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 inline-block text-sm"
            >
              🎥 Entrar no Zoom
            </a>
          ) : (
            <p className="mt-4 text-sm italic" style={{ color: 'var(--color-bark)', opacity: 0.6 }}>
              Link do Zoom será disponibilizado após confirmação do pagamento.
            </p>
          )}
        </div>
      )}

      {/* Atalhos */}
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/aluno/biblioteca" className="vintage-card ornament-corners hover:shadow-lg transition-shadow block">
          <p className="text-3xl mb-2">📚</p>
          <h3
            className="text-lg font-bold"
            style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
          >
            Biblioteca de sessões
          </h3>
          <p className="text-sm mt-1" style={{ color: 'var(--color-bark)' }}>
            Acesse os vídeos e materiais das sessões anteriores.
          </p>
        </Link>

        <a
          href="https://wa.me/5561981494556"
          target="_blank"
          rel="noopener noreferrer"
          className="vintage-card ornament-corners hover:shadow-lg transition-shadow block"
        >
          <p className="text-3xl mb-2">📱</p>
          <h3
            className="text-lg font-bold"
            style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
          >
            Falar com Rebeca
          </h3>
          <p className="text-sm mt-1" style={{ color: 'var(--color-bark)' }}>
            Dúvidas, feedback ou só um oi — WhatsApp direto.
          </p>
        </a>
      </div>
    </div>
  )
}
