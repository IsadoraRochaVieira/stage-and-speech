import TheatreMasks from '@/components/ui/TheatreMasks'

export default function Footer() {
  return (
    <footer
      className="py-12 mt-auto"
      style={{ background: 'var(--color-wine-dark)', borderTop: '2px solid var(--color-gold-dark)' }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
        <TheatreMasks size={60} />

        <div>
          <p
            className="text-2xl font-title"
            style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            Stage &amp; Speech
          </p>
          <p
            className="font-script text-base mt-1"
            style={{ color: 'var(--color-cream)', fontFamily: "'Dancing Script', cursive" }}
          >
            Clube de Leitura Dramática em Inglês
          </p>
        </div>

        <div
          className="gold-divider w-full max-w-xs"
        />

        <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'var(--color-cream-dark)' }}>
          <a
            href="https://wa.me/5561981494556"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
            style={{ color: 'var(--color-cream-dark)' }}
          >
            <span>📱</span> WhatsApp: +55 61 8149-4556
          </a>
          <a
            href="https://www.instagram.com/stageandspeech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
            style={{ color: 'var(--color-cream-dark)' }}
          >
            <span>📸</span> @stageandspeech
          </a>
        </div>

        <p className="text-xs" style={{ color: 'var(--color-gold-dark)' }}>
          Pix: +55 61 8149-4556 · Nome: Rebeca Alvim
        </p>

        <p className="text-xs" style={{ color: 'var(--color-wine-light)' }}>
          © {new Date().getFullYear()} Stage and Speech · Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
