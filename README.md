# Aaron Cone AC & Heating — Demo Site

Single-page static demo site for Aaron Cone Air Conditioning & Heating (Brownwood, TX), built by Agavi AI as a sales demo. Plain HTML + CSS + vanilla JS — no build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire page |
| `styles.css` | All styles |
| `app.js` | Callback-form demo behavior (front-end only) |

## Deploy to Cloudflare Pages

Two commands from this directory:

```sh
npx wrangler login
npx wrangler pages deploy . --project-name=aaron-cone-hvac
```

The first command opens a browser to authorize your Cloudflare account (one-time). The second uploads the site and prints the live `*.pages.dev` URL. Re-run the deploy command after any edit.

## Before the client meeting — checklist

- [ ] **Fill the four empty review slots.** Open the live Google listing for Aaron Cone Air Conditioning and paste short excerpts **verbatim** (plus reviewer first name) into the four cards marked `REVIEW SLOT` in `index.html`. Do not paraphrase or invent reviews.
- [ ] **Verify the TX license number.** Look it up on the TDLR license search (tdlr.texas.gov) and replace `TX License # [VERIFY-TDLR]` in the footer. Do not present the site with the placeholder if the number is available.
- [ ] **Confirm business hours** with the owner and replace the `HOURS: [confirm with owner]` placeholder in the footer.
- [ ] **Check the status of coneairconditioning.com** — is the old domain live, parked, or expired? This affects the domain pitch (point the existing domain at the new site vs. register fresh).
- [ ] **Get real photos** to replace the labeled `PHOTO:` placeholder blocks (crew/family in front of the shop) after the client signs.
- [ ] Test the page on a phone at 375px width — the call bar should be reachable at every scroll position.

## Production notes

- The **Request Service form is front-end only** in this demo. For production, wire it to a Cloudflare Pages Function that sends an email or SMS (see the HTML comment above the form section).
- No BBB claims, review counts, star averages, financing, or "24/7" language appear on the page — these were unverified and must stay off until confirmed.
