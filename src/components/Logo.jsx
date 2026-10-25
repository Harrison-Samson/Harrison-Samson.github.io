// Shows /logo.png cropped to the emblem and name, on a black badge.
export default function Logo({ className = 'h-11' }) {
  return (
    <span
      role="img"
      aria-label="Titanium Empire Travel Agency"
      className={`block aspect-[1120/730] rounded-lg bg-black bg-no-repeat ${className}`}
      style={{
        backgroundImage: 'url(/logo.png)',
        backgroundSize: '117.86% auto',
        backgroundPosition: '50% 51.9%',
        filter: 'contrast(1.5)',
      }}
    />
  )
}
