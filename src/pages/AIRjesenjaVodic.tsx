import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Zap, BarChart3, FileText, MessageSquare, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import aiImage from "@/assets/ai-solutions-business.jpg";

const sections = [
  {
    icon: Zap,
    number: "01",
    title: "Automatizacija ponavljajućih zadataka",
    intro:
      "Svaki tim ima zadatke koji se ponavljaju, troše sate, a podložni su ljudskoj pogrešci. AI sustavi koje razvijamo mogu preuzeti te procese:",
    points: [
      {
        bold: "Inteligentni workflow:",
        text: "Automatizacija unosa podataka, sortiranja e-mailova ili sinkronizacije između različitih softverskih platformi.",
      },
      {
        bold: "Oslobađanje resursa:",
        text: "Vaši zaposlenici se oslobađaju repetitivnih poslova, što izravno utječe na njihovo zadovoljstvo i produktivnost.",
      },
    ],
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Pametna analitika podataka",
    intro:
      "Podaci su najvrednija imovina, ali samo ako ih znate pročitati. AI rješenja omogućuju vam da iz mora informacija izvučete konkretne poslovne uvide:",
    points: [
      {
        bold: "Prediktivna analitika:",
        text: "Predviđanje trendova prodaje, potražnje za zalihama ili ponašanja kupaca na temelju povijesnih podataka.",
      },
      {
        bold: "Donosne odluke:",
        text: "Umjesto nagađanja, dobivate precizne izvještaje koji vam pomažu u donošenju strateških poslovnih odluka u realnom vremenu.",
      },
    ],
  },
  {
    icon: FileText,
    number: "03",
    title: "Napredna obrada dokumenata s AI-jem (OCR & NLP)",
    intro:
      "Ručno prepisivanje faktura, ugovora ili narudžbenica postaje prošlost. Koristeći tehnologije poput računalnog vida i obrade prirodnog jezika (NLP), naši sustavi mogu:",
    points: [
      {
        bold: "Automatski čitati dokumente:",
        text: "AI prepoznaje ključne informacije iz skeniranih dokumenata i automatski ih unosi u vaš sustav (ERP ili CRM).",
      },
      {
        bold: "Klasifikacija sadržaja:",
        text: "Brza pretraga i kategorizacija tisuća dokumenata u nekoliko sekundi.",
      },
    ],
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Chatbot sustavi i inteligentna korisnička podrška",
    intro:
      "Korisnici očekuju odgovore odmah, čak i izvan vašeg radnog vremena. AI chatbotovi nove generacije više nisu „robotski“ i zbunjujući:",
    points: [
      {
        bold: "Ljudska interakcija:",
        text: "Naši AI asistenti razumiju kontekst i pružaju precizne odgovore na upite korisnika, rješavajući do 80% uobičajenih pitanja bez ljudske intervencije.",
      },
      {
        bold: "Dostupnost 24/7:",
        text: "Vaša podrška nikada ne spava, osiguravajući da nijedan potencijalni klijent ne ostane bez odgovora.",
      },
    ],
  },
];

const AIRjesenjaVodic = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI rješenja za poslovanje Zagreb | Automatizacija i analitika — BrandistiQ</title>
        <meta
          name="description"
          content="Praktična AI rješenja za vaše poslovanje: automatizacija zadataka, pametna analitika, obrada dokumenata (OCR/NLP) i inteligentni chatbotovi 24/7."
        />
        <link rel="canonical" href="https://brandistiq-glow-haus.lovable.app/ai-rjesenja-vodic" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI rješenja za poslovanje | Umjetna inteligencija — BrandistiQ" />
        <meta
          property="og:description"
          content="Vodič kroz praktičnu primjenu AI-ja u poslovanju: automatizacija, analitika, OCR i chatbotovi."
        />
        <meta property="og:url" content="https://brandistiq-glow-haus.lovable.app/ai-rjesenja-vodic" />
        <meta property="og:image" content="https://brandistiq-glow-haus.lovable.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI rješenja za poslovanje — BrandistiQ" />
        <meta
          name="twitter:description"
          content="Kako umjetna inteligencija povećava produktivnost vašeg tima i smanjuje troškove."
        />
      </Helmet>
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
              AI rješenja za poslovanje:{" "}
              <span className="gradient-text">Kako umjetna inteligencija radi za vaš tim</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Praktična primjena AI-ja koja povećava produktivnost i smanjuje operativne troškove
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
              U današnjem ubrzanom poslovnom okruženju, umjetna inteligencija (AI) više nije luksuz rezerviran za velike tehnološke korporacije. Ona je postala ključni faktor produktivnosti za tvrtke svih veličina. Implementacijom praktičnih AI rješenja, vaše poslovanje prestaje gubiti vrijeme na rutinu i fokusira se na inovacije i klijente.
            </p>
            <p>
              Naš cilj je integrirati AI tamo gdje on donosi neposrednu vrijednost – povećavajući učinkovitost vašeg tima i smanjujući operativne troškove.
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
              src={aiImage}
              alt="AI rješenja za poslovanje - vizualizacija neuronske mreže i automatizacije podataka"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-16">
        <div className="section-container max-w-4xl">
          <div className="space-y-12">
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
              Zaključak: <span className="gradient-text">Vaš put u digitalnu budućnost</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Implementacija AI rješenja nije samo tehnološki upgrade – to je evolucija načina na koji radite. Bilo da se radi o malom obrtu koji želi automatizirati prodaju ili velikom poduzeću koje treba dubinsku analitiku, AI je ključ za postizanje maksimalne produktivnosti.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Spremni ste uvesti pametna rješenja u svoje poslovanje? Kontaktirajte nas i otkrit ćemo vam kako AI može raditi za vas.
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
              Spremni za pametnija rješenja?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Dogovorimo kratke konzultacije i pronađimo prilike gdje AI može odmah donijeti vrijednost vašem poslovanju.
            </p>
            <a
              href="https://wa.me/385958280800"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient inline-block"
            >
              Kontaktirajte me putem WhatsAppa
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AIRjesenjaVodic;
