'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{ background: 'var(--color-wine)', borderBottom: '2px solid var(--color-gold-dark)' }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-circular.jpg"
            alt="Stage and Speech"
            width={44}
            height={44}
            className="rounded-full border-2"
            style={{ borderColor: 'var(--color-gold)' }}
          />
          <span
            className="font-title text-lg leading-tight hidden sm:block"
            style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            Stage&nbsp;&amp;&nbsp;Speech
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: '/#como-funciona', label: 'Como funciona' },
            { href: '/#sobre', label: 'Sobre Rebeca' },
            { href: '/#faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--color-cream)', fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </Link>
          ))}
          <Link href="/confirmar" className="btn-gold text-sm py-2 px-5">
            Participar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-5 h-0.5" style={{ background: 'var(--color-gold)' }} />
          ))}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ background: 'var(--color-wine-dark)' }}
        >
          {[
            { href: '/#como-funciona', label: 'Como funciona' },
            { href: '/#sobre', label: 'Sobre Rebeca' },
            { href: '/#faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm"
              style={{ color: 'var(--color-cream)' }}
            >
              {label}
            </Link>
          ))}
          <Link href="/confirmar" className="btn-gold text-sm py-2 px-5 text-center" onClick={() => setOpen(false)}>
            Participar
          </Link>
        </div>
      )}
    </nav>
  )
}
