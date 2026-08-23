// Brevo waitlist config for the Frugia landing page.
//
// Setup (once):
// 1. Create a free Brevo account: https://www.brevo.com/
// 2. Contacts → Lists → create list "Frugia Warteliste"
// 3. Contacts → Forms → Create a sign-up form (email only, German, double opt-in ON)
// 4. Share → Embed → copy the form action URL from "Simple HTML"
//    (looks like https://xxxx.sibforms.com/serve/MUIEA...)
// 5. Paste that URL below into formAction, then commit & push.
//
// Contact form stays on FormSubmit; only the waitlist uses Brevo.

window.FRUGIA_BREVO = {
  formAction: '',
};
