import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ConfirmarForm from './ConfirmarForm'

export const metadata = {
  title: 'Confirmar presença | Stage and Speech',
}

export default function ConfirmarPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 px-4" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-lg mx-auto">
          <p
            className="text-center text-sm tracking-widest uppercase mb-2"
            style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
          >
            Inscrição
          </p>
          <h1
            className="text-center text-4xl md:text-5xl mb-2"
            style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            Confirmar presença
          </h1>
          <div className="flex justify-center mb-8">
            <div className="gold-divider w-48" />
          </div>

          <div className="vintage-card ornament-corners">
            <ConfirmarForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
