import { site } from '../data/site.js'

export const waLink = (msg = '') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}` : ''
export const tgLink = (msg = '') =>
  site.telegram ? `https://t.me/${site.telegram}?text=${encodeURIComponent(msg)}` : ''
export const igLink = () => site.instagram || ''
