import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ChiSiamo from '../components/ChiSiamo'
import CosaFacciamo from '../components/CosaFacciamo'
import Partner from '../components/Partner'
import Team from '../components/Team'
import Contatti from '../components/Contatti'
import Footer from '../components/Footer'

export default function MainSite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChiSiamo />
        <CosaFacciamo />
        <Partner />
        <Team />
        <Contatti />
      </main>
      <Footer />
    </>
  )
}
