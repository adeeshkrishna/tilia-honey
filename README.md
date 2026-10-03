# TILIA Honey

Marketing website for **TILIA Honey**, pure giant wild honey from Kulathupuzha forest.
Orders are taken on WhatsApp, so there is no backend. It is a static site with no build step and no dependencies.

## Structure

```
.
├── index.html            Page markup, SEO and social meta tags
├── 404.html              Not-found page
├── favicon.svg
├── robots.txt
├── _headers              Security and cache headers (Cloudflare Pages and Netlify)
└── assets/
    ├── css/styles.css    All styles, with light and dark themes
    ├── js/config.js      Site settings (WhatsApp number)
    ├── js/main.js        WhatsApp links, scroll jar, bee cursor
    └── images/           Product photos and social preview image
```

## Setup

1. Open `assets/js/config.js` and set `whatsappNumber` with the country code and digits only, for example `919XXXXXXXXX`.
2. Replace the placeholder domain `https://www.example.com` in `index.html` (canonical, Open Graph and structured data) with your real domain.
   ```
   sed -i 's#https://www.example.com#https://YOUR-DOMAIN#g' index.html
   ```
   On macOS use `sed -i '' ...` instead.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly also works, but the headers in `_headers` only apply on a host.

## Deploy

**Cloudflare Pages or Netlify** (free plans): connect this repository, leave the build command empty and set the publish directory to `/` (the repo root). Every push to `main` deploys automatically. Add your custom domain in the host's settings.

## Content to keep accurate

- **Prices:** edit the price cards in `index.html` and the `offers` in the JSON-LD block in the page head so they match.
- **Lab report:** the table in `index.html` comes from Certificate of Analysis No. KH 154536 / 2025 (Interfield Laboratories, Cochin, 20 Nov 2025). Update it when you test a new batch.
- **FSSAI licence number:** shown in the footer.

## Security and privacy

- `_headers` sets a strict Content-Security-Policy, so keep scripts and styles in the `assets/` folder and avoid inline `<script>`, `<style>` or `style=""`.
- Do not commit the original lab certificate image. It shows a customer's personal address.

## License

All rights reserved. See [LICENSE](LICENSE).
