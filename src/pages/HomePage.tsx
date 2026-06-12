import Hero from '../components/Hero'
import Vehicles from '../components/Vehicles'
import Benefits from '../components/Benefits'
import Tours from '../components/Tours'
import HowItWorks from '../components/HowItWorks'
import Promo from '../components/Promo'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <Vehicles />
      <Benefits />
      <Tours />
      <HowItWorks />
      <Promo />
      <Gallery />
      <Reviews />
      <Contact />
    </div>
  )
}
