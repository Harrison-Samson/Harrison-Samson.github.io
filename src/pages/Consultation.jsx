import { useEffect } from 'react'
import TripForm, { contactFields } from '../components/TripForm.jsx'

export default function Consultation() {
  useEffect(() => { document.title = 'Book a consultation | Titanium Empire Travel Agency' }, [])
  const fields = [
    ...contactFields,
    { name: 'purpose', label: 'What do you want to talk about?', type: 'select', required: true, options: ['Planning a trip', 'A group trip', 'Visa or document questions', 'Something else'] },
    { name: 'prefDate', label: 'Preferred date', type: 'date' },
    { name: 'prefTime', label: 'Preferred time', placeholder: 'e.g. after 4pm' },
    { name: 'timezone', label: 'Your time zone', placeholder: 'e.g. Lagos (WAT)' },
    { name: 'notes', label: 'Trip details, if you have them', type: 'textarea', wide: true },
  ]
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold">Book a consultation</h1>
      <p className="mb-6 mt-2 text-muted">Suggest a day and time. Your appointment is only confirmed once we reply to you.</p>
      <TripForm formType="consultation-request" fields={fields} button="Request a consultation" note="This is a request. The appointment is confirmed only when we reply." />
    </div>
  )
}
