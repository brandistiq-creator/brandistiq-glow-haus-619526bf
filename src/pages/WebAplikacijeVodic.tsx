import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Eye, Search, Smartphone, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import codeImage from "@/assets/web-development-code.jpg";

const sections = [
  {
    icon: Eye,
    number: "01",
    title: "Prvi dojam i vizualni autoritet",
    intro:
      "Prosječan korisnik stvori mišljenje o vašoj tvrtki u manje od 0,05 sekundi nakon učitavanja stranice.",
    points: [
      {
        bold: "Profesionalni dizajn:",
        text: "Kvalitetne fotografije i renderi nisu dovoljni ako je ostatak stranice nepregledan. Dizajn mora voditi kupca kroz priču – od vaših vrijednosti do vaših gotovih projekata.",
      },
      {
        bold: "Povjerenje kroz estetiku:",
        text: "Čist i moderan dizajn šalje poruku da ste precizni i u svom primarnom poslu (npr. gradnji).",
      },
    ],
  },
  {
    icon: Search,
    number: "02",
    title: "SEO optimizacija: Kako vas klijenti pronalaze?",
    intro:
      "Izgradnja web stranice bez SEO-a (optimizacije za tražilice) je kao da otvorite trgovinu usred pustinje. Ako vas nema na prvoj stranici Googlea, za većinu kupaca ne postojite.",
    points: [
      {
        bold: "Tehnički SEO:",
        text: "To je temelj same izgradnje. Uključuje čisti kod, pravilno korištenje naslova (H1-H6) i meta opisa koji „govore“ Googleu što vi točno prodajete.",
      },
      {
        bold: "Sadržajni marketing:",
        text: "Web stranica mora nuditi odgovore na pitanja koja kupci postavljaju. Tekstovi o prednostima montažne gradnje, materijalima i dozvolama pozicioniraju vas kao stručnjaka u niši.",
      },
    ],
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Brzina i mobilna prilagodba (Responsive Design)",
    intro: "Danas se više od 60% pretraživanja odvija putem mobilnih uređaja.",
    points: [
      {
        bold: "",
        text: "Ako vaša stranica nije „responzivna“ (ne prilagođava se ekranu mobitela), gubite više od polovice potencijalnih kupaca.",
      },
      {
        bold: "",
        text: "Brzina učitavanja je ključna – svaka sekunda čekanja povećava šansu da će posjetitelj otići kod konkurencije.",
      },
    ],
  },
  {
    icon: Target,
    number: "04",
    title: "Strukturirani put do upita (Conversion Rate)",
    intro: "Cilj svake web stranice je da posjetitelj postane klijent. To postižemo kroz:",
    points: [
      {
        bold: "Jasne pozive na akciju (CTA):",
        text: "Gumbi poput „Zatražite ponudu“ ili „Preuzmite katalog“ moraju biti logično raspoređeni.",
      },
      {
        bold: "Logičnu navigaciju:",
        text: "Kupac ne bi smio lutati tražeći cijenu ili kontakt. Informacije moraju biti nadohvat ruke.",
      },
    ],
  },
];

const WebAplikacijeVodic = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/8 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-secondary/6 blur-[150px] rounded-full" />

        <div className="section-container relative z-10 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Natrag na početnu
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Zašto vaša web stranica nije samo trošak, već{" "}
              <span className="gradient-text">najjači prodajni alat</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Vodič kroz strateški izgrađenu web platformu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-16">
        <div className="section-container max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 space-y-5 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              U današnjem poslovnom svijetu, vaša web stranica je često prvi, a ponekad i jedini kontakt koji potencijalni klijent ima s vašim brendom. Za tvrtke koje se bave prodajom montažnih kuća, nekretnina ili proizvodnjom, web stranica je digitalno sjedište koje mora ulijevati povjerenje.
            </p>
            <p>
              No, postoji velika razlika između posjedovanja „bilo kakve“ stranice i posjedovanja strateški izgrađene web platforme. Evo na što trebate obratiti pažnju prilikom izgradnje web stranice ako želite da ona zaista donosi rezultate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden rounded-xl relative group"
          >
            <img
              src={codeImage}
              alt="Profesionalna izgradnja web stranica - čisti kod i semantički HTML kao temelj SEO-a"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-24">
        <div className="section-container max-w-4xl space-y-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 sm:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <s.icon size={22} className="text-foreground" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary tracking-widest">{s.number}</span>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold">{s.title}</h2>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-5">{s.intro}</p>

              <ul className="space-y-3">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>
                      {p.bold && <strong className="text-foreground">{p.bold} </strong>}
                      {p.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="pb-16">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Zaključak: <span className="gradient-text">Kvalitetna izgradnja kao temelj rasta</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Investicija u profesionalnu izgradnju web stranice s ugrađenom SEO strategijom vraća se kroz veći broj kvalitetnih upita i jačanje brenda. Vaša stranica nije samo digitalna vizitka – ona je temelj vašeg marketinga i prodaje.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 text-center"
          >
            <Rocket className="mx-auto mb-4 text-primary" size={36} />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Digitalna transformacija, a ne samo dizajn
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Kao programer, ne nudim vam samo "izgled", već infrastrukturu. Ulaganje u custom web rješenje s ugrađenim konfiguratorom i vrhunskom SEO bazom najbrži je put do digitalne dominacije u vašoj niši.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Vrijeme je da vaša web stranica počne prodavati umjesto vas.
            </p>
            <a
              href="https://wa.me/385958280800"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient inline-block"
            >
              Kontaktirajte me za razvoj rješenja
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default WebAplikacijeVodic;
