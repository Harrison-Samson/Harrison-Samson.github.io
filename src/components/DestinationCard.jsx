import { Link } from 'react-router-dom'
import Photo from './Photo.jsx'
import { price } from '../data/destinations.js'

const tones = ['#5A4632', '#2F5D62', '#3B4A66', '#4F5B3A', '#6A4A3A', '#46405A']

export default function DestinationCard({ d, from = 'lagos', index = 0, className = '' }) {
  const p = price(d, from)
  return (
    <Link to={`/destinations/${d.slug}`} className={`group relative block overflow-hidden rounded-3xl ${className}`}>
      <Photo file={`${d.slug}.jpg`} alt={`${d.name}, ${d.country}`} tone={tones[index % tones.length]} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-white">
        <div className="text-xs opacity-90">{d.country}</div>
        <div className="font-display text-xl">{d.name}</div>
        <div className="mt-1 text-sm text-gold-light">{p ? `Estimated from ${p} per person` : 'Ask us for a quote'}</div>
      </div>
    </Link>
  )
}
