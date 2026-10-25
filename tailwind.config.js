export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F3EFE4', paper: '#FAF8F2', sand: '#EAE3D3',
        ink: '#1E1B16', muted: '#6B655A', night: '#14110D',
        gold: '#C9A24B', 'gold-light': '#E3C06B',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
