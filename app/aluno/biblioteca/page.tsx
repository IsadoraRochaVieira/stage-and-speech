import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import GoldenDivider from '@/components/ui/GoldenDivider'

export const metadata = { title: 'Biblioteca | Stage and Speech' }

export default async function BibliotecaPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/aluno/login')

  const sessions = await prisma.clubSession.findMany({
    orderBy: { number: 'desc' },
    include: { materials: true },
  })

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/aluno" className="text-sm" style={{ color: 'var(--color-gold-dark)' }}>
          ← Dashboard
        </Link>
      </div>

      <p
        className="text-sm tracking-widest uppercase mb-1"
        style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
      >
        Histórico
      </p>
      <h1
        className="text-4xl"
        style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
      >
        Biblioteca de sessões
      </h1>
      <GoldenDivider className="max-w-xs" />

      <div className="flex flex-col gap-8 mt-8">
        {sessions.map(s => (
          <div key={s.id} className="vintage-card ornament-corners">
            <div className="flex gap-4 items-start flex-wrap md:flex-nowrap">
              {s.posterImage && (
                <div
                  className="relative w-28 h-36 flex-shrink-0 rounded-sm overflow-hidden"
                  style={{ border: '1px solid var(--color-gold-dark)' }}
                >
                  <Image src={s.posterImage} alt={s.title} fill className="object-cover" />
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs" style={{ color: 'var(--color-gold-dark)' }}>
                  Sessão #{s.number} ·{' '}
                  {new Date(s.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </p>
                <h2
                  className="text-xl font-bold mt-1 mb-2"
                  style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h2>

                {s.videoEmbed && (
                  <div className="mb-4 rounded-sm overflow-hidden" style={{ aspectRatio: '16/9', maxWidth: 480 }}>
                    <iframe
                      src={s.videoEmbed}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {s.materials.length > 0 && (
                  <div>
                    <p className="text-sm font-bold mb-2" style={{ color: 'var(--color-wine)' }}>Materiais:</p>
                    <div className="flex flex-wrap gap-2">
                      {s.materials.map(m => (
                        <a
                          key={m.id}
                          href={m.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-gold text-xs py-1 px-3"
                        >
                          📄 {m.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {!s.videoEmbed && s.materials.length === 0 && (
                  <p className="text-sm italic" style={{ color: 'var(--color-bark)', opacity: 0.5 }}>
                    Materiais em breve.
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
