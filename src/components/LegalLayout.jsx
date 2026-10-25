import { useEffect } from 'react'

export default function LegalLayout({ title, updated, children }) {
  useEffect(() => { document.title = `${title} | Titanium Empire Travel Agency` }, [title])
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>
      <div className="mt-6 grid gap-6 text-ink/85 [&_h2]:mb-2 [&_h2]:text-2xl [&_li]:ml-5 [&_li]:list-disc [&_ul]:grid [&_ul]:gap-1 [&_a]:underline">
        {children}
      </div>
    </div>
  )
}
