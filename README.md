# Titanium Empire Travel website (Stage 1)

## Run it
1. Install Node.js 18 or newer.
2. In this folder: `npm install` then `npm run dev`.
3. Open the address it prints.

## Before launch (replace these)
- `public/logo.png`: your logo with a transparent background.
- `public/images/`: photos (see README.txt there).
- `src/data/site.js`: WhatsApp, Telegram, Instagram, email, phone.
- `src/data/destinations.js`: confirm every price and description.
- `src/data/testimonials.js`: real reviews only, with permission.
- `src/pages/About.jsx`: your real story.

## Forms to Google Sheets (no n8n)
1. Create a Google Sheet. Extensions > Apps Script. Paste `apps-script/Code.gs`, set your email.
2. Deploy > New deployment > Web app. Execute as: Me. Access: Anyone. Copy the URL.
3. Copy `.env.example` to `.env` and paste the URL after `VITE_FORM_URL=`.
4. Restart `npm run dev`, send a test enquiry, and check the sheet and your inbox.

## Deploy
Netlify or Vercel: build command `npm run build`, output folder `dist`.
Add `VITE_FORM_URL` in the host's environment settings.
