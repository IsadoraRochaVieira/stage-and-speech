import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import ProximoEncontro from '@/components/home/ProximoEncontro'
import ComoFunciona from '@/components/home/ComoFunciona'
import ParaQuem from '@/components/home/ParaQuem'
import SobreRebeca from '@/components/home/SobreRebeca'
import Galeria from '@/components/home/Galeria'
import FAQ from '@/components/home/FAQ'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProximoEncontro />
        <ComoFunciona />
        <ParaQuem />
        <SobreRebeca />
        <Galeria />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
