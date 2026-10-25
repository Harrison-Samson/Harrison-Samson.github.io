// Prices are ESTIMATES per person (flight + 5 nights, mid-range hotel) in naira.
// Check and change every number before launch. null = "ask us for a quote".
export const destinations = [
  { slug: 'paris', name: 'Paris', country: 'France', region: 'Europe', fromLagos: 2300000, fromAbuja: 2300000,
    blurb: 'Museums, cafes and long walks along the river. A good fit for couples and first trips to Europe.', styles: ['City break', 'Romantic', 'Culture'] },
  { slug: 'london', name: 'London', country: 'United Kingdom', region: 'Europe', fromLagos: 2300000, fromAbuja: 2300000,
    blurb: 'Theatre, markets, parks and a lot of history in one city. Easy to build around family visits too.', styles: ['City break', 'Culture', 'Family'] },
  { slug: 'berlin', name: 'Berlin', country: 'Germany', region: 'Europe', fromLagos: 1900000, fromAbuja: 1900000,
    blurb: 'Museums, nightlife and open green space at a lower cost than most western European capitals.', styles: ['City break', 'Culture', 'Nightlife'] },
  { slug: 'milan', name: 'Milan', country: 'Italy', region: 'Europe', fromLagos: 2100000, fromAbuja: 2100000,
    blurb: 'Fashion, food and easy day trips to the Italian lakes.', styles: ['City break', 'Shopping', 'Food'] },
  { slug: 'ibiza', name: 'Ibiza', country: 'Spain', region: 'Europe', fromLagos: 2300000, fromAbuja: 2300000,
    blurb: 'Beaches by day and parties by night. Best planned early, as summer fills up.', styles: ['Beach', 'Nightlife', 'Friends'] },
  { slug: 'zanzibar', name: 'Zanzibar', country: 'Tanzania', region: 'Africa', fromLagos: 2000000, fromAbuja: 2000000,
    blurb: 'White-sand beaches, warm water and the old stone town. Good for honeymoons and slow holidays.', styles: ['Beach', 'Romantic', 'Relaxing'] },
  { slug: 'kigali', name: 'Kigali', country: 'Rwanda', region: 'Africa', fromLagos: 1500000, fromAbuja: 1500000,
    blurb: 'A clean, hilly city with strong food and coffee, and a base for trips into the surrounding country.', styles: ['City break', 'Nature', 'Culture'] },
  { slug: 'abuja', name: 'Abuja', country: 'Nigeria', region: 'Africa', fromLagos: 900000, fromAbuja: null,
    blurb: 'A calm, planned capital with hotels, restaurants and hills nearby. Easy to reach from Lagos.', styles: ['City break', 'Business', 'Weekend'] },
  { slug: 'new-york', name: 'New York', country: 'United States', region: 'Americas', fromLagos: 3800000, fromAbuja: 3800000,
    blurb: 'Skyline, museums, shows and neighbourhoods worth a week of walking. Allow time for visa steps.', styles: ['City break', 'Shopping', 'Family'] },
  { slug: 'rio-de-janeiro', name: 'Rio de Janeiro', country: 'Brazil', region: 'Americas', fromLagos: 2800000, fromAbuja: 2800000,
    blurb: 'Beaches, mountain views and music. Plan for a longer flight and a longer stay.', styles: ['Beach', 'Nature', 'Friends'] },
  { slug: 'dubai', name: 'Dubai', country: 'United Arab Emirates', region: 'Asia and Middle East', fromLagos: 1900000, fromAbuja: 1900000,
    blurb: 'Shopping, desert trips and big hotels, with short flights from West Africa.', styles: ['City break', 'Shopping', 'Family'] },
  { slug: 'bali', name: 'Bali', country: 'Indonesia', region: 'Asia and Middle East', fromLagos: 2500000, fromAbuja: 2500000,
    blurb: 'Rice terraces, temples and beaches. A long journey, so it suits trips of a week or more.', styles: ['Beach', 'Nature', 'Relaxing'] },
]

export const regions = ['All', 'Europe', 'Africa', 'Americas', 'Asia and Middle East']

export function price(d, from) {
  const n = from === 'abuja' ? d.fromAbuja : d.fromLagos
  if (!n) return null
  return n >= 1e6 ? `₦${(n / 1e6).toFixed(1).replace('.0', '')}M` : `₦${Math.round(n / 1000)}k`
}
