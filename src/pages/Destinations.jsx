import { useEffect } from 'react'
import DestinationFinder from '../components/DestinationFinder.jsx'

export default function Destinations() {
  useEffect(() => { document.title = 'Destinations | Titanium Empire Travel Agency' }, [])
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-semibold">Destinations</h1>
      <p className="mb-6 mt-2 max-w-xl text-muted">These are places we can plan a trip to. Not every place has a ready-made package, so every card leads to a trip request.</p>
      <DestinationFinder layout="grid" />
    </div>
  )
}
