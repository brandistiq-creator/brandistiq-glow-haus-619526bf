# BrandistiQ SEO implementacija

## Implementirano
- Homepage title, meta description, canonical i Open Graph metadata.
- Jedinstvene SEO landing stranice za web stranice, web aplikacije, branding, AI rješenja i SEO optimizaciju.
- Jedinstveni canonical URL-ovi na `https://www.brandistiq.eu`.
- XML sitemap s glavnim servisnim i vodič stranicama.
- `robots.txt` sa sitemap direktivom.
- Netlify SPA fallback putem `public/_redirects`.
- `netlify.toml` s Vite build postavkama i cache zaglavljima.
- Organization/ProfessionalService, WebSite, Service i BreadcrumbList strukturirani podaci.
- FAQPage strukturirani podaci na početnoj stranici.
- Article + BreadcrumbList strukturirani podaci na vodičima.
- Google Analytics SPA page-view praćenje za React navigaciju.
- OG slika 1200x630 i poster za hero video.
- Hero video smanjen s približno 7.4 MB na približno 1.7 MB.
- Dimenzije portfolio slika postavljene radi stabilnijeg layouta.
- Uklonjene stare `lovable.app` canonical/OG reference.

## Nakon deploya
1. Provjeriti `https://www.brandistiq.eu/robots.txt`.
2. Provjeriti `https://www.brandistiq.eu/sitemap.xml`.
3. U Google Search Console poslati sitemap.
4. Zatražiti indeksaciju početne i glavnih servisnih stranica.
5. U GA4 provjeriti `page_view` događaje na React rutama.
6. Pokrenuti Lighthouse/PageSpeed i po potrebi dodatno optimizirati Core Web Vitals.

SEO ne može jamčiti poziciju na Googleu; cilj ove implementacije je ukloniti tehničke prepreke i izgraditi jasnu strukturu za organsku vidljivost.
