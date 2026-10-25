import { testimonials } from '../data/testimonials.js'
import Carousel from './Carousel.jsx'

export default function Testimonials() {
  return (
    <Carousel label="Customer reviews">
      {testimonials.map((t, i) => (
        <figure key={i} className="w-72 shrink-0 snap-start rounded-3xl bg-paper p-5">
          <div className="text-gold" aria-label={`${t.stars} out of 5 stars`}>{'★'.repeat(t.stars)}</div>
          <blockquote className="mt-3 text-base leading-relaxed text-ink/80">{t.text}</blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-night text-sm text-gold-light" aria-hidden="true">{t.name.slice(0, 1)}</span>
            <span className="text-sm"><span className="block font-medium">{t.name}</span><span className="text-muted">{t.trip}</span></span>
          </figcaption>
        </figure>
      ))}
    </Carousel>
  )
}
