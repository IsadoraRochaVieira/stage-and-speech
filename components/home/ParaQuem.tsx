import GoldenDivider from '@/components/ui/GoldenDivider'

const profiles = [
  {
    emoji: '🎬',
    title: 'Atores e atrizes',
    subtitle: 'que querem desenvolver o inglês',
    desc: 'Seu corpo e voz já sabem atuar. O Stage and Speech amplia seu repertório para papéis em inglês.',
    tag: 'Perfil #1',
  },
  {
    emoji: '💬',
    title: 'Pessoas fluentes',
    subtitle: 'que querem desenvolver interpretação',
    desc: 'Você já fala inglês com confiança. Aqui você aprende a habitar o idioma com presença dramática.',
    tag: 'Perfil #2',
  },
  {
    emoji: '✨',
    title: 'Os dois — e tudo bem!',
    subtitle: 'desenvolver inglês E interpretação',
    desc: 'Quer aprender tudo de uma vez? Você vai estar em boa companhia. É exatamente para isso que o clube existe.',
    tag: 'Perfil #3',
  },
]

export default function ParaQuem() {
  return (
    <section className="py-20 px-4" style={{ background: 'var(--color-cream)' }}>
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center text-sm tracking-widest uppercase mb-2"
          style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
        >
          Quem participa
        </p>
        <h2
          className="text-center text-4xl md:text-5xl mb-2"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          Para quem é
        </h2>
        <GoldenDivider className="max-w-xs mx-auto" />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {profiles.map((p, i) => (
            <div key={i} className="vintage-card ornament-corners text-center flex flex-col gap-3">
              <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-gold-dark)' }}>{p.tag}</p>
              <div className="text-4xl">{p.emoji}</div>
              <h3
                className="text-xl font-bold leading-tight"
                style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
              >
                {p.title}
              </h3>
              <p
                className="text-base"
                style={{ color: 'var(--color-gold-dark)', fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
              >
                {p.subtitle}
              </p>
              <div className="gold-divider" />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-bark)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-10 text-base"
          style={{ color: 'var(--color-bark)', fontFamily: "'Dancing Script', cursive", fontWeight: 600, fontSize: '1.2rem' }}
        >
          Nível intermediário a avançado · Adultos · Online
        </p>
      </div>
    </section>
  )
}
