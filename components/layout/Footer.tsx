'use client'
import TheatreMasks from '@/components/ui/TheatreMasks'

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.647 4.83 1.777 6.867L2 30l7.363-1.752A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 01-5.88-1.607l-.42-.25-4.37 1.04 1.072-4.25-.274-.435A11.56 11.56 0 014.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.344-8.67c-.347-.174-2.055-1.014-2.374-1.13-.319-.115-.55-.174-.782.174-.232.347-.898 1.13-1.1 1.362-.203.232-.406.26-.753.087-.347-.174-1.465-.54-2.79-1.72-1.031-.92-1.727-2.056-1.93-2.403-.202-.347-.021-.534.152-.707.157-.156.347-.405.52-.608.174-.202.232-.347.347-.579.116-.232.058-.434-.029-.608-.087-.174-.782-1.884-1.072-2.58-.282-.677-.569-.585-.782-.596l-.666-.012c-.232 0-.608.087-.926.434-.318.347-1.215 1.188-1.215 2.896s1.244 3.358 1.418 3.59c.174.232 2.45 3.74 5.937 5.243.83.358 1.478.572 1.983.732.833.265 1.592.228 2.19.138.668-.1 2.055-.84 2.345-1.652.29-.812.29-1.508.202-1.652-.086-.145-.317-.232-.665-.405z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

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

        <div className="gold-divider w-full max-w-xs" />

        <div className="flex justify-center gap-5">
          <a
            href="https://wa.me/5561981494556"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold)',
              border: '1px solid rgba(201,168,76,0.3)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-gold)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.3)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)'
            }}
          >
            <IconWhatsApp />
          </a>
          <a
            href="https://www.instagram.com/rebecalvim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold)',
              border: '1px solid rgba(201,168,76,0.3)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-gold)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.3)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)'
            }}
          >
            <IconInstagram />
          </a>
        </div>

        <p className="text-xs" style={{ color: 'var(--color-wine-light)' }}>
          © {new Date().getFullYear()} Stage and Speech · Todos os direitos reservados
        </p>

        <p className="text-xs" style={{ color: 'rgba(201,168,76,0.35)', letterSpacing: '0.05em' }}>
          Desenvolvido por{' '}
          <a
            href="https://cerradowebdesing.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(201,168,76,0.55)', textDecoration: 'none', fontWeight: 600 }}
          >
            Cerrado Web Design
          </a>
        </p>
      </div>
    </footer>
  )
}
