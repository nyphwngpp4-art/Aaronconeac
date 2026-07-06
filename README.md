# Aaron Cone AC & Heating — Demo Site

Single-page static demo site for Aaron Cone Air Conditioning & Heating (Brownwood, TX), built by Agavi AI as a sales demo. Plain HTML + CSS + vanilla JS — no build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire page |
| `styles.css` | All styles |
| `app.js` | Callback-form demo behavior (front-end only) |
| `fonts/oswald-latin-var.woff2` | Self-hosted display font (no third-party requests) |
| `favicon.svg` / `apple-touch-icon.png` | Browser tab + home screen icons |
| `og-image.png` | Social share preview card (1200x630) |
| `photos/shop-van.jpg` | Shop-front van photo used in the About section |

## Deploy to Cloudflare Pages

Two commands from this directory:

```sh
npx wrangler login
npx wrangler pages deploy . --project-name=aaron-cone-hvac
```

The first command opens a browser to authorize your Cloudflare account (one-time). The second uploads the site and prints the live `*.pages.dev` URL. Re-run the deploy command after any edit.

## Before the client meeting — checklist

- [x] **Review slots filled.** All six review cards carry verbatim short excerpts from real reviews. Add reviewer first names to the two newest Google review cards if known.
- [x] **TX license verified.** Footer shows TACLA00088672E (TDLR, Active, expires 05/17/2027).
- [x] **Hours added.** Footer shows Mon-Fri 8 AM-5 PM, weekends closed (per the Google/Yelp listings).
- [x] **Real photo in place.** The About section uses the shop-front van photo (`photos/shop-van.jpg`, color-corrected). Swap in a crew/family shot later if the owner has one.
- [ ] **Check the status of aaronconeac.com** — this is the domain painted on the shop sign (the older directory listing said coneairconditioning.com; check both). If it's live or parked, the pitch is "point your existing domain at the new site."
- [ ] **Pitch material: the Google listing has a typo** — Tuesday reads "8 AM-5 AM." Offering to clean up the listing is an easy add-on to the site pitch.
- [ ] Test the page on a phone at 375px width — the call bar should be reachable at every scroll position.

## Custom domain (aaronconehvac.agaviai.com)

After the first deploy, in the Cloudflare dashboard: **Workers & Pages → aaron-cone-hvac → Custom domains → Set up a custom domain** → `aaronconehvac.agaviai.com`. The agaviai.com zone is on Cloudflare, so the CNAME and TLS certificate are created automatically (CLI equivalent: `npx wrangler pages domain add aaronconehvac.agaviai.com --project-name=aaron-cone-hvac`). If the zone lives in a different Cloudflare account than the Pages project, instead add a proxied CNAME `aaronconehvac` → `aaron-cone-hvac.pages.dev` in the zone and complete validation in the Pages project.

## Design notes (taste-skill pass)

- **Design read:** redesign-preserve of a trust-first local trade landing page for rural Texas homeowners; plain-spoken family-shop language; native CSS type-and-color system (no framework, per the no-build constraint).
- **Dials:** `DESIGN_VARIANCE 4 / MOTION_INTENSITY 3 / VISUAL_DENSITY 4` (trust-first preset, not baseline).
- **Theme lock:** one fixed light theme; dark navy appears only as chrome (hero + footer). No mid-page inversions, no `prefers-color-scheme` dark variant by brand decision (the demo must look identical on the owner's phone regardless of OS setting).
- **Icons:** Phosphor Icons (fill weight), inlined as SVG symbols from `@phosphor-icons/core` v2.1.1. One family, one weight.
- **Deliberate skill overrides, justified by the client brief:** brand pills are text-only (trademark-clean requirement, so no logo wall with real SVG logos); imagery is a real photo of the business, never stock/Picsum (zero-stock-photography requirement); the persistent call CTA appears in header, hero, and mobile bar by design (it is the single conversion goal) with one shared label form.
- **Motion:** hover/active states plus smooth anchor scroll only; smooth scroll is gated behind `prefers-reduced-motion: no-preference`.

## Production notes

- The **Request Service form is front-end only** in this demo. For production, wire it to a Cloudflare Pages Function that sends an email or SMS (see the HTML comment above the form section).
- No BBB claims, review counts, star averages, financing, or "24/7" language appear on the page — these were unverified and must stay off until confirmed.
