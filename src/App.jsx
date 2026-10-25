import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ContactMenu from './components/ContactMenu.jsx'
import Home from './pages/Home.jsx'
import Destinations from './pages/Destinations.jsx'
import DestinationPage from './pages/DestinationPage.jsx'
import PlanTrip from './pages/PlanTrip.jsx'
import GroupTours from './pages/GroupTours.jsx'
import Consultation from './pages/Consultation.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'


function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/privacy" element={<Privacy />} />
<Route path="/terms" element={<Terms />} />   
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationPage />} />
          <Route path="/plan-my-trip" element={<PlanTrip />} />
          <Route path="/group-tours" element={<GroupTours />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ContactMenu />
    </>
  )
}
