import { useState } from 'react'

// Shows /images/<file>. If the file is missing, a plain colour block is shown instead.
export default function Photo({ file, alt = '', className = '', tone = '#3A3328' }) {
  const [failed, setFailed] = useState(false)
  if (failed || !file) {
    return <div className={className} style={{ background: tone }} role="img" aria-label={alt} />
  }
  return <img src={`/images/${file}`} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
