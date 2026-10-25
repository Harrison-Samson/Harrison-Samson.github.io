import { useState } from 'react'
import { waLink, tgLink, igLink } from '../lib/contact.js'

export default function ContactMenu() {
  const [open, setOpen] = useState(false)
  const items = [
    ['WhatsApp', waLink('Hello Titanium Empire Travel, I would like help planning a trip.')],
    ['Telegram', tgLink('Hello Titanium Empire Travel, I would like help planning a trip.')],
    ['Instagram', igLink()],
  ].filter(([, href]) => href)
  if (items.length === 0) return null
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2">
      {open && items.map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-full bg-paper px-4 py-2 text-sm shadow">{label}</a>
      ))}
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="rounded-full bg-gold px-5 py-3 text-sm font-medium text-night shadow-lg">
        {open ? 'Close' : 'Chat with us'}
      </button>
    </div>
  )
}
