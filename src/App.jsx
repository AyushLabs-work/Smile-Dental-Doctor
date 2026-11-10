import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofStrip from './components/ProofStrip'
import TaglineReveal from './components/TaglineReveal'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BookingModal from './components/BookingModal'
import { useState } from 'react'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openBooking = () => setModalOpen(true)
  const closeBooking = () => setModalOpen(false)

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar onBookClick={openBooking} />
      <main id="main-content">
        <Hero onBookClick={openBooking} />
        <ProofStrip />
        <TaglineReveal />
        <Services onBookClick={openBooking} />
        <HowItWorks onBookClick={openBooking} />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact onBookClick={openBooking} />
        <FinalCTA onBookClick={openBooking} />
      </main>
      <Footer onBookClick={openBooking} />
      
      {/* Floating persistent WhatsApp Consultation button */}
      <WhatsAppButton />

      {/* Interactive Appointment Consultation Modal */}
      <BookingModal isOpen={modalOpen} onClose={closeBooking} />
    </>
  )
}
