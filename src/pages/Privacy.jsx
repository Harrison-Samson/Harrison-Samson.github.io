import LegalLayout from '../components/LegalLayout.jsx'
import { site } from '../data/site.js'

// DRAFT. Have a Nigerian lawyer read it before launch, and check the retention line and email.
export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="October 2026">
      <section>
        <h2>Who we are</h2>
        <p>Titanium Empire Travel Agency is based in Benin City, Edo State, Nigeria. We decide how the personal details you send us are used. {site.email ? <>You can write to us at <a href={`mailto:${site.email}`}>{site.email}</a>.</> : 'Our contact details are on the Contact page.'}</p>
      </section>
      <section>
        <h2>What we collect</h2>
        <p>Only what you type into our forms:</p>
        <ul>
          <li>Your name, phone or WhatsApp number, and email address</li>
          <li>How you want us to contact you</li>
          <li>Trip details you choose to share: destination, dates, number of travelers, budget and any notes</li>
        </ul>
        <p className="mt-2">Please do not send passport numbers, card numbers or bank details through our forms. We do not need them to answer an enquiry.</p>
      </section>
      <section>
        <h2>Why we use it</h2>
        <p>To reply to your enquiry, discuss trip options with you, and keep a record of what we talked about. We use your details only for this. We do not sell them.</p>
        <p className="mt-2">We rely on your consent, which you give by sending a form. You can withdraw it at any time by contacting us.</p>
      </section>
      <section>
        <h2>Who sees it</h2>
        <p>Our team members who handle enquiries. Form details are sent to a Google Sheet and an email inbox through Google services, so Google processes them for us and may store them on servers outside Nigeria. If you message us on WhatsApp, Telegram or Instagram, those companies handle that conversation under their own policies.</p>
      </section>
      <section>
        <h2>How long we keep it</h2>
        <p>We keep enquiry details for as long as we need them to handle your request and for our records, then delete them.</p>
      </section>
      <section>
        <h2>Cookies and tracking</h2>
        <p>This site does not use advertising or analytics cookies. It loads its fonts from Google Fonts, which means your browser contacts Google when a page opens.</p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>Under the Nigeria Data Protection Act 2023 you can ask us to:</p>
        <ul>
          <li>Tell you what details we hold about you and give you a copy</li>
          <li>Correct details that are wrong</li>
          <li>Delete your details, or stop using them</li>
          <li>Withdraw your consent</li>
        </ul>
        <p className="mt-2">Contact us to do any of these. You can also complain to the Nigeria Data Protection Commission.</p>
      </section>
    </LegalLayout>
  )
}
