import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { site } from '../data/site.js'
import { waLink, tgLink, igLink } from '../lib/contact.js'

export default function Footer() {
  const social = [['WhatsApp', waLink()], ['Telegram', tgLink()], ['Instagram', igLink()]].filter(([, h]) => h)
  return (
    <footer className="mt-16 bg-night px-4 py-10 text-sm text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="text-white"><Logo className="h-12" /></div>
        <nav aria-label="Footer" className="grid content-start gap-2">
          <Link to="/destinations" className="hover:text-white">Destinations</Link>
          <Link to="/group-tours" className="hover:text-white">Group tours</Link>
          <Link to="/plan-my-trip" className="hover:text-white">Plan my trip</Link>
          <Link to="/consultation" className="hover:text-white">Book a consultation</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
<Link to="/terms" className="hover:text-white">Terms of Use</Link>
        </nav>
        <div className="grid content-start gap-2">
          {site.email && <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>}
          {site.phone && <a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a>}
          {social.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer" className="hover:text-white">{l}</a>)}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-white/50">© {new Date().getFullYear()} {site.name}. Sending an enquiry is not a booking.</p>
    </footer>
  )
}
