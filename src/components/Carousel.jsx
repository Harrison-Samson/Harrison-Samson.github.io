import { useRef } from 'react'

// Cards slide sideways: swipe or drag on phones, arrow buttons on larger screens.
export default function Carousel({ children, label }) {
  const ref = useRef(null)
  const move = (dir) => ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  return (
    <div className="relative">
      <div ref={ref} role="region" aria-label={label} tabIndex={0}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
        {children}
      </div>
      <div className="mt-3 hidden justify-end gap-2 md:flex">
        <button onClick={() => move(-1)} aria-label="Previous" className="h-10 w-10 rounded-full bg-paper text-lg hover:bg-sand">←</button>
        <button onClick={() => move(1)} aria-label="Next" className="h-10 w-10 rounded-full bg-paper text-lg hover:bg-sand">→</button>
      </div>
    </div>
  )
}
