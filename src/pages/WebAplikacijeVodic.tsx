import { motion } from "framer-motion";
import { ArrowLeft, Zap, Settings, Search, Database, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const sections = [
  {
    icon: Zap,
    number: "01",
    title: "Arhitektura usmjerena na performanse (Tech Stack)",
    intro: "Brzina učitavanja stranice izravno utječe na vašu poziciju na Googleu i stopu napuštanja stranice.",
    points: [
      {
        bold: "Moderni Frameworks:",
        text: "Korištenje tehnologija poput React.js ili Next.js omogućuje kreiranje "Single Page Applications" (SPA) koje se učitavaju trenutno.",
      },
      {
        bold: "Vite i Optimizacija:",
        text: "Za razliku od zastarjelih WordPress rješenja, moji projekti koriste moderne alate za build koji eliminiraju nepotreban kod, čineći stranicu "laganom" i responzivnom na svim uređajima.",
      },
    ],
  },
  {
    icon: Settings,
    number: "02",
    title: "Interaktivni konfiguratori: Programiranje prodajnog procesa",
    intro: "Najveća prednost custom programiranja je mogućnost izrade interaktivnih konfiguratora. Umjesto statičnih tablica cijena, klijentima nudimo alat u kojem u realnom vremenu mogu:",
    points: [
      { bold: "", text: "Birati module i dimenzije (npr. 5,9m x 2,35m kontejnerske jedinice)." },
      { bold: "", text: "Vizualizirati promjene materijala i opreme." },
      { bold: "", text: "Dobiti trenutačni izračun cijene temeljem složene logike koju programiramo u pozadini." },
    ],
    outro: "To nije samo "slika", to je prodajni asistent koji automatizira proces ponude.",
  },
  {
    icon: Search,
    number: "03",
    title: "SEO optimizacija iz perspektive koda",
    intro: "SEO nije samo pisanje ključnih riječi; to je tehnička disciplina. Kvalitetno programiran web uključuje:",
    points: [
      {
        bold: "Semantički HTML:",
        text: "Pravilna hijerarhija tagova koja pomaže Googleovim crawlerima da razumiju vaš sadržaj.",
      },
      {
        bold: "Server-Side Rendering (SSR):",
        text: "Omogućuje pretraživačima da odmah pročitaju sav sadržaj, što je ključno za brzo rangiranje.",
      },
      {
        bold: "Web Vitals:",
        text: "Optimizacija LCP, FID i CLS parametara koji su danas primarni faktori za Googleov ranking.",
      },
    ],
  },
  {
    icon: Database,
    number: "04",
    title: "Integracija s backend sustavima",
    intro: "Vaša web stranica treba biti povezana s bazom podataka. Svaki upit iz konfiguratora automatski se sprema, omogućujući vam:",
    points: [
      { bold: "", text: "Upravljanje leadovima kroz administratorsko sučelje." },
      { bold: "", text: "Automatsko slanje personaliziranih PDF ponuda klijentima." },
      { bold: "", text: "Praćenje analitike ponašanja korisnika unutar aplikacije." },
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
              Zašto vaše poslovanje treba{" "}
              <span className="gradient-text">web aplikaciju</span>, a ne samo web stranicu
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Vodič kroz moderni razvoj
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 space-y-5 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              U svijetu digitalne prisutnosti, granica između obične web stranice i kompleksne web aplikacije postaje sve jasnija. Za poduzetnike u industrijama poput montažne gradnje ili proizvodnje, posjedovanje "digitalnog letka" više nije dovoljno. Kako biste skalirali prodaju, trebate rješenje koje radi za vas 24/7.
            </p>
            <p>
              Kao programer, fokusiram se na izradu rješenja koja ne samo da izgledaju profesionalno, već su inženjerski optimizirana za konverziju i brzinu. Evo što čini razliku između prosječnog i vrhunskog weba.
            </p>
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

              {s.outro && (
                <p className="text-muted-foreground leading-relaxed mt-5 italic">{s.outro}</p>
              )}
            </motion.div>
          ))}
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
            <a href="/#kontakt" className="btn-primary-gradient inline-block">
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
