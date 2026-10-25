import { useEffect } from 'react'
import { site } from '../data/site.js'
import { waLink, tgLink, igLink } from '../lib/contact.js'

export default function Contact() {
  useEffect(() => { document.title = 'Contact | Titanium Empire Travel Agency' }, [])
  const rows = [
    ['WhatsApp', waLink('Hello Titanium Empire Travel, I would like help planning a trip.')],
    ['Telegram', tgLink('Hello Titanium Empire Travel, I would like help planning a trip.')],
    ['Instagram', igLink()],
    ['Email', site.email && `mailto:${site.email}`],
    ['Phone', site.phone && `tel:${site.phone}`],
  ].filter(([, h]) => h)
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold">Contact us</h1>
      {rows.length === 0 ? (
        <p className="mt-4 text-muted">Add your WhatsApp, Telegram, Instagram, email and phone in src/data/site.js and they will appear here.</p>
      ) : (
        <ul className="mt-6 grid gap-3">
          {rows.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noreferrer" className="block rounded-2xl bg-paper px-5 py-4 text-lg hover:bg-sand">{l}</a></li>)}
        </ul>
      )}
    </div>
  )
}
