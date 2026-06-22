'use client'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5561981494556"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Rebeca no WhatsApp"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9998,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.35)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)'
      }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.647 4.83 1.777 6.867L2 30l7.363-1.752A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 01-5.88-1.607l-.42-.25-4.37 1.04 1.072-4.25-.274-.435A11.56 11.56 0 014.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.344-8.67c-.347-.174-2.055-1.014-2.374-1.13-.319-.115-.55-.174-.782.174-.232.347-.898 1.13-1.1 1.362-.203.232-.406.26-.753.087-.347-.174-1.465-.54-2.79-1.72-1.031-.92-1.727-2.056-1.93-2.403-.202-.347-.021-.534.152-.707.157-.156.347-.405.52-.608.174-.202.232-.347.347-.579.116-.232.058-.434-.029-.608-.087-.174-.782-1.884-1.072-2.58-.282-.677-.569-.585-.782-.596l-.666-.012c-.232 0-.608.087-.926.434-.318.347-1.215 1.188-1.215 2.896s1.244 3.358 1.418 3.59c.174.232 2.45 3.74 5.937 5.243.83.358 1.478.572 1.983.732.833.265 1.592.228 2.19.138.668-.1 2.055-.84 2.345-1.652.29-.812.29-1.508.202-1.652-.086-.145-.317-.232-.665-.405z"/>
      </svg>
    </a>
  )
}
