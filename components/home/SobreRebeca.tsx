import Image from 'next/image'
import GoldenDivider from '@/components/ui/GoldenDivider'

export default function SobreRebeca() {
  return (
    <section id="sobre" className="py-20 px-4" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center text-sm tracking-widest uppercase mb-2"
          style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
        >
          Quem vai conduzir
        </p>
        <h2
          className="text-center text-4xl md:text-5xl mb-2"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          Rebeca Alvim
        </h2>
        <GoldenDivider className="max-w-xs mx-auto" />

        <div className="grid md:grid-cols-2 gap-12 mt-10 items-center">
          {/* Foto */}
          <div className="relative">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ border: '3px solid var(--color-gold)', boxShadow: '8px 8px 0 var(--color-gold-dark)' }}
            >
              <Image
                src="/images/bastidores-zoom.jpg"
                alt="Rebeca Alvim com alunos no Zoom"
                width={600}
                height={450}
                className="w-full object-cover"
                style={{ maxHeight: 400, objectFit: 'cover' }}
              />
            </div>
            {/* Tag flutuante */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-2 text-sm font-bold"
              style={{
                background: 'var(--color-wine)',
                color: 'var(--color-gold)',
                border: '2px solid var(--color-gold-dark)',
                fontFamily: "'Playfair Display', serif",
                transform: 'rotate(-2deg)',
              }}
            >
              Bastidores do Zoom ✦
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Atriz', 'Professora Bilíngue', 'CELTA Certified'].map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 font-bold tracking-wide rounded-full"
                  style={{ background: 'var(--color-wine)', color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              className="text-xl mb-4 leading-relaxed"
              style={{ color: 'var(--color-bark)' }}
            >
              Rebeca Alvim une dois mundos que costumam andar separados: o teatro e o ensino de idiomas.
            </p>

            <p className="text-base mb-4 leading-relaxed" style={{ color: 'var(--color-bark)', opacity: 0.85 }}>
              Atriz com formação e experiência em cena, ela é também professora bilíngue certificada pelo
              <strong style={{ color: 'var(--color-wine)' }}> CELTA</strong> — uma das certificações mais
              respeitadas no ensino de inglês. Essa combinação rara é o coração do Stage and Speech.
            </p>

            <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--color-bark)', opacity: 0.85 }}>
              No clube, ela conduz cada sessão com o mesmo cuidado de uma diretora de cena e a precisão
              de uma professora de língua. O resultado é um ambiente em que você aprende inglês
              <em> na prática</em>, de dentro para fora.
            </p>

            <a
              href="https://wa.me/5561981494556"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm"
            >
              Falar com Rebeca no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
