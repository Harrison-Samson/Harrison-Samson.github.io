import { useEffect } from 'react'
import TripForm, { contactFields } from '../components/TripForm.jsx'
import { destinations } from '../data/destinations.js'

// When you have confirmed tours, add them to src/data/tours.js and show them here as cards.
export default function GroupTours() {
  useEffect(() => { document.title = 'Group tours | Titanium Empire Travel Agency' }, [])
  const fields = [
    ...contactFields,
    { name: 'destination', label: 'Where would you like to go?', type: 'select', options: [...destinations.map((d) => d.name), 'Somewhere else'] },
    { name: 'travelers', label: 'How many people', type: 'number', placeholder: '4' },
    { name: 'when', label: 'When', placeholder: 'e.g. December 2026' },
    { name: 'notes', label: 'Questions', type: 'textarea', wide: true },
  ]
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold">Group tours</h1>
      <p className="mb-6 mt-2 text-muted">We have no group departures announced yet. Tell us where and when you would like to travel and we will contact you when a group trip matching it is planned.</p>
      <TripForm formType="group-tour-interest" fields={fields} button="Ask about group tours" />
    </div>
  )
}
