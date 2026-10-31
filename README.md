# Padmini Vidhya Niketan website

The homepage is static HTML so course details, FAQs and contact information are present in the first response to search engines and visitors.

## Local development and build

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run dev` and `npm run build` generate the six static course pages, the thank-you page and `public/sitemap.xml` from [`scripts/generate-seo-pages.mjs`](./scripts/generate-seo-pages.mjs). The generator checks course-page copy for the requested 400–600 word range and meta descriptions for a 155-character limit. `vite.config.js` and `vercel.json` map the clean course URLs to their HTML files.

## Publishing checklist

- Confirm the current class timetable, opening days/hours, fee policies and current official exam syllabi.
- Add verified latitude and longitude and opening hours to the LocalBusiness JSON-LD before publishing those fields.
- Confirm student result years and image permissions; publish only real, approved testimonials.
- Verify the live Google rating and review count. The rating is shown as supplied by the institute, but is intentionally not marked up as `aggregateRating` because reviews about the business on its own website are self-serving for Google review snippets.
- Replace the Google Maps search link with the institute’s exact Business Profile/review link when available.
- Deploy to Vercel, then check `https://www.pvnedu.com/sitemap.xml` and submit it in Google Search Console.

The enquiry form opens a prefilled WhatsApp message and then shows `/thank-you`. It does not send or store information on a website server.
