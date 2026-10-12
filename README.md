# Maria Chicago Photography — family-photography

Next.js (App Router, TypeScript) build of the **Maria Chicago Photography** design from Claude Design,
exported as static HTML for **Azure Static Web Apps**.

Pages: `/` · `/portfolio` · `/pricing` · `/about` · `/contact`

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
npm start            # serve ./out locally
```

## Project layout

| Path | What it is |
| --- | --- |
| `app/` | One folder per page, plus the shared layout and 404 |
| `components/` | Nav, footer, blueprint frames, gallery + lightbox, contact form |
| `styles/ds.css` | The "Industry" design-system tokens and component classes |
| `styles/theme.css` | Maria Chicago's warm retune (paper ground, clay accent, Outfit headings) |
| `styles/site.css` | Page styles shared across pages |
| `lib/motion.ts` | GSAP reveal sequence ported from the design's `motion.js` (respects reduced motion) |
| `lib/images.ts` | Which photograph fills each image slot |
| `public/staticwebapp.config.json` | Azure SWA routing, 404 and caching |

## Adding photographs

The design shipped with empty image placeholders. Put files in `public/images/` and set their
paths in `lib/images.ts`, for example `'mp-home-hero': '/images/hero.jpg'`. Slots are 4:5 and
cropped with `object-fit: cover`. Portfolio photographs open in a lightbox once they have a file.

## Contact form

As in the design, the form validates and shows a confirmation on the page but **does not send
anything yet**. Options for wiring it up: an Azure Functions API in the Static Web App (`api/`
folder), or a hosted form service. Update `components/ContactForm.tsx` either way.

## Deploy to Azure Static Web Apps

1. Create a Static Web App in the Azure portal (plan: Free is fine). Choose **Other** as the
   deployment source, or connect this repo.
2. Copy the app's **deployment token** and add it to this GitHub repo as the secret
   `AZURE_STATIC_WEB_APPS_API_TOKEN` (Settings → Secrets and variables → Actions).
3. Push to `main`. `.github/workflows/azure-static-web-apps.yml` builds with `npm run build` and
   uploads `out/`. Pull requests get preview environments.

If you let the Azure portal connect the repo, it adds its own workflow file — keep only one of the two.
