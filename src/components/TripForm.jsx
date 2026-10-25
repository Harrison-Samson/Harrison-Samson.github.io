import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { waLink } from '../lib/contact.js'

const input = 'w-full rounded-2xl border border-sand bg-white px-4 py-3 text-base'

function Field({ f }) {
  const id = `f-${f.name}`
  return (
    <div className={f.wide ? 'md:col-span-2' : ''}>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">{f.label}{f.required && <span aria-hidden="true"> *</span>}</label>
      {f.type === 'textarea' ? (
        <textarea id={id} name={f.name} rows={4} required={f.required} className={input} placeholder={f.placeholder} />
      ) : f.type === 'select' ? (
        <select id={id} name={f.name} required={f.required} className={input} defaultValue="">
          <option value="" disabled>Choose one</option>
          {f.options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input id={id} name={f.name} type={f.type || 'text'} required={f.required} min={f.type === 'number' ? 0 : undefined}
          className={input} placeholder={f.placeholder} autoComplete={f.auto} />
      )}
    </div>
  )
}

// formType decides which sheet tab the enquiry is saved to.
export default function TripForm({ formType, fields, button = 'Send my request', hidden = {}, note }) {
  const [state, setState] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!site.formUrl) { setState('unconnected'); return }
    const data = { formType, ...hidden, ...Object.fromEntries(new FormData(form)), sentAt: new Date().toISOString() }
    setState('sending')
    try {
      await fetch(site.formUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(data) })
      form.reset()
      setState('sent')
    } catch { setState('error') }
  }

  if (state === 'sent') {
    return (
      <div role="status" className="rounded-3xl bg-paper p-6">
        <h3 className="text-xl">Request received</h3>
        <p className="mt-2 text-muted">Thank you. This is an enquiry, not a booking. We will contact you by your preferred method to talk through the options.</p>
      </div>
    )
  }
  const backup = waLink('Hello Titanium Empire Travel, my form did not send. I would like help with a trip.')
  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl bg-paper p-5 md:grid-cols-2 md:p-6">
      {fields.map((f) => <Field key={f.name} f={f} />)}
      <div className="md:col-span-2">
        <button disabled={state === 'sending'} className="w-full rounded-full bg-gold px-6 py-3 font-medium text-night hover:bg-gold-light disabled:opacity-60 md:w-auto">
          {state === 'sending' ? 'Sending…' : button}
        </button>
        <p className="mt-3 text-sm text-muted">{note || 'Sending this is not a booking. We will get back to you to discuss options.'}</p>
        <p className="mt-1 text-xs text-muted">By sending this you agree that we may use your details to reply, as described in our <Link to="/privacy" className="underline">Privacy Policy</Link>.</p>
        {state === 'unconnected' && <p role="alert" className="mt-3 text-sm text-red-700">The form is not connected yet. Add your Google Apps Script link in src/data/site.js.</p>}
        {state === 'error' && (
          <p role="alert" className="mt-3 text-sm text-red-700">It did not send. Check your connection and try again{backup && <>, or <a className="underline" href={backup}>message us on WhatsApp</a></>}.</p>
        )}
      </div>
    </form>
  )
}

export const contactFields = [
  { name: 'name', label: 'Full name', required: true, auto: 'name' },
  { name: 'phone', label: 'Phone or WhatsApp', type: 'tel', placeholder: '+234', required: true, auto: 'tel' },
  { name: 'email', label: 'Email', type: 'email', auto: 'email' },
  { name: 'contactMethod', label: 'Best way to reach you', type: 'select', options: ['Whatsapp', 'Telegram', 'Phone call', 'Email'], required: true },
]
