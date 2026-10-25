import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Photo from '../components/Photo.jsx'
import DestinationFinder from '../components/DestinationFinder.jsx'
import Testimonials from '../components/Testimonials.jsx'

const steps = [
  ['Pick a place or a group tour', 'Browse the destinations, or tell us somewhere that is not listed.'],
  ['Send your dates and budget', 'A short form. Everything except your name and contact is optional.'],
  ['Talk it through with us', 'We reply with options and answer your questions.'],
  ['Confirm with us directly', 'A booking is only made when we confirm it with you. Sending a request does not book anything.'],
]

export default function Home() {
  useEffect(() => { document.title = 'Titanium Empire Travel Agency | Plan your trip' }, [])
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="grid items-center gap-6 pb-10 pt-8 md:grid-cols-2 md:pt-14">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">Your Next Adventure Starts Here</h1>
          <p className="mt-4 max-w-md text-lg text-muted">Tell us where you want to go and when. We plan the trip around you, or you can join one of our group holidays.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/plan-my-trip" className="rounded-full bg-gold px-6 py-3 font-medium text-night hover:bg-gold-light">Plan my trip</Link>
            <Link to="/group-tours" className="rounded-full border border-ink/30 px-6 py-3 hover:bg-sand">Group tours</Link>
          </div>
        </div>
        <Photo file="hero.jpg" alt="A beach with clear water" tone="#2F5D62" className="h-72 w-full rounded-[2rem] md:h-96" />
      </section>

      <section className="py-8" aria-labelledby="dest-h">
        <h2 id="dest-h" className="mb-5 text-3xl font-semibold">Twelve places we can plan for you</h2>
        <DestinationFinder />
        <Link to="/destinations" className="mt-4 inline-block rounded-full border border-ink/30 px-5 py-2.5 text-sm hover:bg-sand">See all destinations</Link>
      </section>

      <section className="grid gap-4 py-8 md:grid-cols-2" aria-label="Ways to travel">
        <Link to="/plan-my-trip" className="rounded-3xl bg-paper p-6 hover:bg-sand">
          <h3 className="text-2xl">A holiday built around you</h3>
          <p className="mt-2 text-muted">Choose the place, the dates and the pace. We find the flights and hotels and send you a plan.</p>
        </Link>
        <Link to="/group-tours" className="rounded-3xl bg-paper p-6 hover:bg-sand">
          <h3 className="text-2xl">Travel with a group</h3>
          <p className="mt-2 text-muted">We are putting our first group holidays together. Tell us where you would like to go and we will let you know.</p>
        </Link>
      </section>

      <section className="py-8" aria-labelledby="how-h">
        <h2 id="how-h" className="mb-5 text-3xl font-semibold">How it works</h2>
        <ol className="grid gap-3 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-3xl bg-paper p-5">
              <div className="font-display text-gold">{i + 1}</div>
              <div className="mt-1 font-medium">{t}</div>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-8" aria-labelledby="rev-h">
        <h2 id="rev-h" className="mb-5 text-3xl font-semibold">What travellers say when they get home</h2>
        <Testimonials />
      </section>

      <section className="my-8 rounded-[2rem] bg-night p-8 text-center text-white">
        <h2 className="text-3xl font-semibold">Ready to start planning?</h2>
        <p className="mx-auto mt-2 max-w-md text-white/70">Send us a few details. We will come back to you with options.</p>
        <Link to="/plan-my-trip" className="mt-5 inline-block rounded-full bg-gold px-6 py-3 font-medium text-night hover:bg-gold-light">Plan my trip</Link>
      </section>
    </div>
  )
}
