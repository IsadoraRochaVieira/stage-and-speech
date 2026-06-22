import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function AlunoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ background: 'var(--color-cream)' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
