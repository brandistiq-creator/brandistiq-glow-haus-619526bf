# BrandistiQ — izmjene i testiranje

## Izmjene u ovoj verziji
- Ujednačeni canonical URL-ovi na `https://www.brandistiq.eu/`.
- Dodani Open Graph i Twitter/X metapodaci na javne HTML stranice.
- Dodani osnovni JSON-LD `Organization` podaci prema pravnoj stranici.
- Ažurirani naslovi i meta opisi ključnih stranica.
- Početna stranica pozicionirana je oko AI automatizacije, poslovnih kalkulatora i web aplikacija.
- Dodani sadržajni blokovi na glavne stranice usluga i vodiče.
- Stranica O nama proširena je bez izmišljanja biografije, certifikata ili rezultata.
- Sitemap ponovno generiran iz postojećih javnih `index.html` stranica.
- Dodane oznake i autocomplete atributi kontaktnom obrascu.
- Dodano mjerenje klikova na WhatsApp, telefon, kontaktni CTA i slanje obrasca; događaji se šalju samo ako je korisnik prihvatio analitiku i konfiguriran je GA4 ID.
- AI funkcija sada provjerava metodu, content type, veličinu poruke i postojanje API ključa prije stvaranja OpenAI klijenta.

## Prije produkcijske objave obavezno
1. Provjeriti da `public/assets/brandistiq-hero.png` prikazuje dobro u društvenim pregledima i da je dovoljno kvalitetan za Open Graph.
2. Ako je postavljena stvarna GA4 Measurement ID vrijednost, provjeriti da je učitavanje analitike usklađeno s pravilima privole i da se događaji pojavljuju u DebugViewu.
3. Testirati Netlify Forms slanje na deploy previewu.
4. Testirati AI funkciju na Netlify deploy previewu s valjanim `OPENAI_API_KEY` i bez njega.
5. Pokrenuti PageSpeed Insights i provjeriti stvarne Core Web Vitals; oni se ne mogu zaključiti samo iz izvornog koda.
6. Pregledati strukturirane podatke u Rich Results Testu i Search Consoleu nakon objave.
7. Napomena: zaštita od zloupotrebe AI endpointa zahtijeva dodatno ograničenje brzine na infrastrukturnoj razini (npr. edge/WAF/rate-limit servis). Validacija ulaza sama po sebi nije potpuna rate-limit zaštita.

## Objavljivanje
`netlify.toml` i `publish = "public"` namjerno su ostavljeni nepromijenjeni jer je to postojeća produkcijska arhitektura u ovom ZIP-u. React/Vite datoteke u korijenu nisu automatski spojene s javnom statičkom verzijom.
