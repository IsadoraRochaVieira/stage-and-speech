'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'var(--color-wine-dark, #3D1020)',
        borderTop: '2px solid var(--color-gold-dark, #9C7A2A)',
        padding: '1rem 1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1rem',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ color: '#E8D9B5', fontSize: 13, margin: 0, flex: 1, minWidth: 220, lineHeight: 1.5 }}>
        🍪 Este site usa cookies essenciais para funcionamento do login e da sessão.
        Ao continuar, você concorda com nosso uso de cookies conforme a{' '}
        <strong style={{ color: '#C9A84C' }}>LGPD</strong>.
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            background: 'transparent',
            border: '1px solid #9C7A2A',
            color: '#9C7A2A',
            padding: '6px 16px',
            borderRadius: 2,
            fontSize: 13,
            cursor: 'pointer',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Recusar
        </button>
        <button
          onClick={accept}
          style={{
            background: '#C9A84C',
            border: '1px solid #9C7A2A',
            color: '#3D1020',
            padding: '6px 16px',
            borderRadius: 2,
            fontSize: 13,
            cursor: 'pointer',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
          }}
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
