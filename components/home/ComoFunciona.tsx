import GoldenDivider from '@/components/ui/GoldenDivider'

const steps = [
  {
    icon: '🎙️',
    title: 'Aquecimentos',
    desc: 'Exercícios de pronúncia e expressividade vocal para entrar no estado certo.',
  },
  {
    icon: '📖',
    title: 'Análise de cena',
    desc: 'Contexto dramático, vocabulário e intenção — entender antes de ler.',
  },
  {
    icon: '🎭',
    title: 'Leitura coletiva',
    desc: 'Cada participante assume um papel e lê em voz alta com a turma.',
  },
  {
    icon: '⭐',
    title: 'Feedback personalizado',
    desc: 'Apresentações em dupla com devolutiva da Rebeca sobre pronúncia e interpretação.',
  },
]

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-20 px-4"
      style={{ background: 'var(--color-wine)', color: 'var(--color-cream)' }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center text-sm tracking-widest uppercase mb-2"
          style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif" }}
        >
          A cada encontro
        </p>
        <h2
          className="text-center text-4xl md:text-5xl mb-2"
          style={{ color: 'var(--color-cream)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          Como funciona
        </h2>
        <div className="flex justify-center">
          <div className="gold-divider w-64" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Steps */}
          <div className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="text-3xl w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-sm"
                  style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid var(--color-gold-dark)' }}
                >
                  {s.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-cream-dark)' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-4 p-4 rounded-sm" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid var(--color-gold-dark)' }}>
              <p className="text-sm" style={{ color: 'var(--color-cream)' }}>
                <strong style={{ color: 'var(--color-gold)' }}>Duração:</strong> 1h15 a 2h &nbsp;|&nbsp;
                <strong style={{ color: 'var(--color-gold)' }}>Plataforma:</strong> Zoom &nbsp;|&nbsp;
                <strong style={{ color: 'var(--color-gold)' }}>Frequência:</strong> quinzenal
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-cream-dark)' }}>
                Sessões independentes — você não precisa ter participado das anteriores.
                O tema é divulgado com antecedência.
              </p>
            </div>
          </div>

          {/* Vídeo ilustrativo */}
          <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: '9/16', maxHeight: 480, border: '2px solid var(--color-gold-dark)' }}>
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/reel-2.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute bottom-0 left-0 right-0 p-3 text-center text-xs"
              style={{ background: 'rgba(61,16,32,0.8)', color: 'var(--color-cream-dark)' }}
            >
              Rebeca Alvim em ação
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
