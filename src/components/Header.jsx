import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  ['/destinations', 'Destinations'],
  ['/group-tours', 'Group tours'],
  ['/consultation', 'Book a consultation'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="mx-auto max-w-6xl rounded-full bg-paper/95 px-3 py-2 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Home"><Logo /></Link>
          <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'font-semibold' : 'text-muted hover:text-ink')}>{label}</NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/plan-my-trip" className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-night hover:bg-gold-light">Plan my trip</Link>
            <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu" className="rounded-full bg-sand px-4 py-2 text-sm md:hidden">
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {open && (
          <nav id="menu" className="mt-2 grid gap-1 border-t border-sand pb-2 pt-2 md:hidden" aria-label="Menu">
            {links.map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base hover:bg-sand">{label}</Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
