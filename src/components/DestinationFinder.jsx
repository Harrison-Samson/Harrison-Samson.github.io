import { useMemo, useState } from 'react'
import { destinations, regions } from '../data/destinations.js'
import DestinationCard from './DestinationCard.jsx'
import Carousel from './Carousel.jsx'

export default function DestinationFinder({ layout = 'carousel' }) {
  const [region, setRegion] = useState('All')
  const [q, setQ] = useState('')
  const [from, setFrom] = useState('lagos')

  const list = useMemo(() => destinations.filter((d) =>
    (region === 'All' || d.region === region) &&
    `${d.name} ${d.country}`.toLowerCase().includes(q.trim().toLowerCase())), [region, q])

  return (
    <div>
      <label htmlFor="dest-search" className="sr-only">Search a city or country</label>
      <input id="dest-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a city or country"
        className="w-full rounded-full border border-sand bg-paper px-5 py-3 text-base md:max-w-md" />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0" role="group" aria-label="Region">
          {regions.map((r) => (
            <button key={r} onClick={() => setRegion(r)} aria-pressed={region === r}
              className={`shrink-0 rounded-full px-4 py-2 text-sm ${region === r ? 'bg-night text-gold-light' : 'bg-paper hover:bg-sand'}`}>{r}</button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm md:ml-auto" role="group" aria-label="Flying from">
          <span className="text-muted">Flying from</span>
          {['lagos', 'abuja'].map((c) => (
            <button key={c} onClick={() => setFrom(c)} aria-pressed={from === c}
              className={`rounded-full px-3 py-1.5 capitalize ${from === c ? 'bg-gold text-night' : 'border border-sand bg-paper'}`}>{c}</button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        {list.length === 0 ? (
          <p className="rounded-2xl bg-paper p-6 text-muted">Nothing matches that search. Try another name, or tell us where you want to go on the trip request page.</p>
        ) : layout === 'carousel' ? (
          <Carousel label="Destinations">
            {list.map((d, i) => <DestinationCard key={d.slug} d={d} from={from} index={i} className="h-[22rem] w-64 shrink-0 snap-start" />)}
          </Carousel>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {list.map((d, i) => <DestinationCard key={d.slug} d={d} from={from} index={i} className="h-72" />)}
          </div>
        )}
      </div>
      <p className="mt-3 text-xs text-muted">Prices are estimates for a flight and five nights in a mid-range hotel. The final price depends on your dates, hotel and season.</p>
    </div>
  )
}
