'use client'
import GoldenDivider from '@/components/ui/GoldenDivider'

const items = [
  {
    q: 'Preciso ter experiência com teatro para participar?',
    a: 'Não! O clube recebe pessoas com os mais variados perfis — atores, professores, estudantes de inglês, curiosos. O único pré-requisito é um nível intermediário a avançado de inglês.',
  },
  {
    q: 'As sessões são independentes ou preciso ter ido na anterior?',
    a: 'Cada sessão é independente. O tema e o texto são divulgados com antecedência, então você chega preparada — mas não precisa ter participado das outras.',
  },
  {
    q: 'O que acontece se não tiver o mínimo de 8 participantes?',
    a: 'Se a sessão não atingir o mínimo, ela é reagendada ou cancelada. Nesse caso, o valor pago é devolvido integralmente.',
  },
  {
    q: 'Preciso ter a câmera ligada?',
    a: 'Sim! A leitura dramática é uma experiência presencial-online. Ver uns aos outros faz parte do processo de interpretação e conexão com a cena.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'O pagamento é via Pix para a chave +55 61 8149-4556 (Rebeca Alvim). O comprovante deve ser enviado até a quarta-feira antes do encontro. Após a confirmação, você recebe o link do Zoom.',
  },
  {
    q: 'Posso me inscrever no dia do encontro?',
    a: 'Não é recomendado. As inscrições têm prazo (comprovante até quarta), pois Rebeca precisa organizar a dinâmica das duplas e o material com antecedência.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4" style={{ background: 'var(--color-cream)' }}>
      <div className="max-w-3xl mx-auto">
        <p
          className="text-center text-sm tracking-widest uppercase mb-2"
          style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
        >
          Dúvidas frequentes
        </p>
        <h2
          className="text-center text-4xl md:text-5xl mb-2"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          FAQ
        </h2>
        <GoldenDivider className="max-w-xs mx-auto" />

        <div className="mt-10 flex flex-col gap-3">
          {items.map((item, i) => (
            <details
              key={i}
              className="vintage-card group"
              style={{ padding: '0' }}
            >
              <summary
                className="flex items-center justify-between px-5 py-4 font-bold text-base select-none"
                style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
              >
                <span>{item.q}</span>
                <span className="faq-icon ml-4 text-xl flex-shrink-0" style={{ color: 'var(--color-gold)' }}>+</span>
              </summary>
              <div
                className="px-5 pb-4 text-sm leading-relaxed"
                style={{ color: 'var(--color-bark)', borderTop: '1px solid var(--color-cream-dark)' }}
              >
                <p className="pt-3">{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base mb-4" style={{ color: 'var(--color-bark)' }}>
            Ainda tem dúvidas? Fale diretamente com a Rebeca.
          </p>
          <a
            href="https://wa.me/5561981494556"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wine text-sm"
          >
            📱 Enviar mensagem no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
