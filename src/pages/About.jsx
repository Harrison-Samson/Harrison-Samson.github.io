import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const team = [
  ['Bella', 'Sales and Marketing'],
  ['Tracy', 'Travel Operations'],
  ['Vivian', 'Customer Service'],
  ['Moses', 'Finance and Administration'],
]

const reasons = [
  ['We start with what you want', 'Your plans, your dates and your budget come first.'],
  ['Options that fit', 'We help you compare choices and pick the one that suits you.'],
  ['Clear, simple planning', 'You always know what the next step is.'],
]

export default function About() {
  useEffect(() => { document.title = 'About | Titanium Empire Travel Agency' }, [])
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold">About Titanium Empire Travel Agency</h1>
      <p className="mt-2 font-display text-xl text-muted">Your Journey, Our Priority</p>

      <p className="mt-6 text-lg text-ink/80">Titanium Empire Travel Agency is based in Benin City, Edo State, Nigeria, with 10 years of experience planning travel. Most of our customers are travelers from across Africa, and we help them plan business trips, holidays, family vacations and international adventures.</p>
      <p className="mt-4 text-ink/80">Tell us where you want to go and what you can spend, and we help you find options that fit. Most trips take a few days to a few weeks to plan, depending on where you are going and how many people are travelling.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl bg-paper p-6">
          <h2 className="text-2xl">What we aim to do</h2>
          <p className="mt-2 text-ink/80">Give travelers reliable, professional help at every step, from planning the trip to getting ready for the next destination.</p>
        </section>
        <section className="rounded-3xl bg-paper p-6">
          <h2 className="text-2xl">Where we want to be</h2>
          <p className="mt-2 text-ink/80">A name travelers trust, through good service and lasting relationships with our customers.</p>
        </section>
      </div>

      <h2 className="mt-10 text-3xl font-semibold">The team</h2>
      <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {team.map(([name, role]) => (
          <li key={name} className="rounded-2xl bg-paper px-4 py-5 text-center">
            <span className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full bg-night font-display text-gold-light" aria-hidden="true">{name[0]}</span>
            <span className="block font-medium">{name}</span>
            <span className="block text-sm text-muted">{role}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-3xl font-semibold">How we work</h2>
      <ul className="mt-4 grid gap-3">
        {reasons.map(([title, text]) => (
          <li key={title} className="rounded-2xl bg-paper px-5 py-4">
            <span className="font-medium">{title}.</span> <span className="text-ink/80">{text}</span>
          </li>
        ))}
      </ul>

      <section className="mt-10 rounded-[2rem] bg-night p-8 text-white">
        <h2 className="text-3xl font-semibold">Ready to plan?</h2>
        <p className="mt-3 text-white/80">Tell us where you want to go. We will take it from there.</p>
        <Link to="/plan-my-trip" className="mt-5 inline-block rounded-full bg-gold px-6 py-3 font-medium text-night hover:bg-gold-light">Plan my trip</Link>
        <p className="mt-5 font-display text-gold-light">Travel with Confidence. Explore with Purpose.</p>
      </section>
    </div>
  )
}
