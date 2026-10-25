import { useEffect } from 'react'
import { destinations } from '../data/destinations.js'
import TripForm, { contactFields } from '../components/TripForm.jsx'

export default function PlanTrip() {
  useEffect(() => { document.title = 'Plan my trip | Titanium Empire Travel Agency' }, [])
  const fields = [
    ...contactFields,
    { name: 'destination', label: 'Where do you want to go?', type: 'select', required: true, options: [...destinations.map((d) => d.name), 'Somewhere else', 'Not sure yet'] },
    { name: 'otherDestination', label: 'If somewhere else, where?' },
    { name: 'departure', label: 'Flying from', type: 'select', options: ['Lagos', 'Abuja', 'Other'] },
    { name: 'departDate', label: 'Preferred departure date', type: 'date' },
    { name: 'duration', label: 'Return date or length of trip', placeholder: 'e.g. 7 nights' },
    { name: 'adults', label: 'Adults', type: 'number', placeholder: '2' },
    { name: 'children', label: 'Children', type: 'number', placeholder: '0' },
    { name: 'budget', label: 'Estimated budget in naira', placeholder: '₦' },
    { name: 'style', label: 'Style of trip', type: 'select', options: ['Beach and relaxing', 'City break', 'Culture', 'Adventure and nature', 'Romantic', 'Family', 'A mix'] },
    { name: 'notes', label: 'Anything else we should know', type: 'textarea', wide: true },
  ]
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold">Plan my trip</h1>
      <p className="mb-6 mt-2 text-muted">Only your name, phone and destination are required. After you send this, we contact you by your preferred method to discuss options. Nothing is booked until we confirm it with you.</p>
      <TripForm formType="plan-my-trip" fields={fields} button="Send my trip request" />
    </div>
  )
}
