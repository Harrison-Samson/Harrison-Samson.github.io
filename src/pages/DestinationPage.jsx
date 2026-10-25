import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { destinations, price } from '../data/destinations.js'
import Photo from '../components/Photo.jsx'
import TripForm, { contactFields } from '../components/TripForm.jsx'
import { waLink } from '../lib/contact.js'

export default function DestinationPage() {
  const { slug } = useParams()
  const d = destinations.find((x) => x.slug === slug)
  useEffect(() => { if (d) document.title = `${d.name} trips | Titanium Empire Travel Agency` }, [d])
  if (!d) return <div className="mx-auto max-w-6xl px-4 py-16"><p>We could not find that destination. <Link className="underline" to="/destinations">See all destinations</Link></p></div>

  const fields = [
    ...contactFields,
    { name: 'dates', label: 'Preferred dates', placeholder: 'e.g. mid December, 7 nights' },
    { name: 'adults', label: 'Adults', type: 'number', placeholder: '2' },
    { name: 'children', label: 'Children', type: 'number', placeholder: '0' },
    { name: 'departure', label: 'Flying from', type: 'select', options: ['Lagos', 'Abuja', 'Other'] },
    { name: 'budget', label: 'Budget in naira (optional)', placeholder: '₦' },
    { name: 'notes', label: 'Anything we should know', type: 'textarea', wide: true },
  ]
  const wa = waLink(`Hello Titanium Empire Travel, I would like help planning a trip to ${d.name}. My preferred dates are: `)
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link to="/destinations" className="text-sm text-muted hover:text-ink">← All destinations</Link>
      <Photo file={`${d.slug}.jpg`} alt={`${d.name}, ${d.country}`} tone="#3A3328" className="mt-3 h-64 w-full rounded-[2rem] md:h-96" />
      <div className="mt-6 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-sm text-muted">{d.country}</p>
          <h1 className="text-4xl font-semibold">{d.name}</h1>
          <p className="mt-3 text-lg text-ink/80">{d.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-2">{d.styles.map((s) => <span key={s} className="rounded-full bg-paper px-3 py-1 text-sm">{s}</span>)}</div>
          <p className="mt-6 text-sm text-muted">Estimated from</p>
          <p className="text-3xl font-display">{price(d, 'lagos') ? `${price(d, 'lagos')} per person` : 'Ask us for a quote'}</p>
          <p className="mt-1 text-xs text-muted">Estimate for a flight and five nights in a mid-range hotel. Final price depends on dates, hotel and season.</p>
          {wa && <a href={wa} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-full border border-ink/30 px-5 py-2.5 text-sm hover:bg-sand">Ask on WhatsApp instead</a>}
        </div>
        <div className="md:col-span-3">
          <h2 className="mb-3 text-2xl font-semibold">Request a trip to {d.name}</h2>
          <TripForm formType="destination-request" hidden={{ destination: d.name }} fields={fields} />
        </div>
      </div>
    </div>
  )
}
