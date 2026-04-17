import { motion } from "framer-motion";
import { ArrowLeft, Zap, Cloud, TrendingUp, Shield, Building2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import officeImage from "@/assets/web-applications-office.jpg";

const sections = [
  {
    icon: Zap,
    number: "01",
    title: "Automatizacija i ušteda vremena",
    intro:
      "Najveći neprijatelj produktivnosti su ponavljajući zadaci i ručni unos podataka u tablice.",
    points: [
      {
        bold: "",
        text: "Web aplikacija može automatizirati generiranje faktura, praćenje radnih naloga ili komunikaciju s klijentima. Rezultat je manje ljudskih pogrešaka i više vremena za fokus na razvoj poslovanja.",
      },
    ],
  },
  {
    icon: Cloud,
    number: "02",
    title: "Dostupnost bilo gdje i bilo kada",
    intro:
      "Budući da se web aplikacije nalaze u cloudu, vaši zaposlenici i klijenti mogu im pristupiti s bilo kojeg uređaja (mobitel, tablet, računalo) bez potrebe za instalacijom softvera.",
    points: [
      {
        bold: "",
        text: "Ovo je ključno za moderne, hibridne timove i tvrtke s terenskim radnicima.",
      },
    ],
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Skalabilnost i fleksibilnost",
    intro:
      "Vaše poslovanje raste, a vaša web aplikacija raste s vama.",
    points: [
      {
        bold: "",
        text: "Za razliku od gotovih (SaaS) rješenja koja vas ograničavaju brojem korisnika ili funkcijama, aplikacija izrađena po mjeri razvija se paralelno s vašim potrebama. U bilo kojem trenutku možemo dodati nove module ili integrirati aplikaciju s drugim sustavima koje već koristite.",
      },
    ],
  },
  {
    icon: Shield,
    number: "04",
    title: "Sigurnost i kontrola podataka",
    intro: "Vlasništvo nad podacima je ključno.",
    points: [
      {
        bold: "",
        text: "Kod custom web aplikacija imate potpunu kontrolu nad sigurnosnim protokolima i razinama pristupa. Vaši poslovni podaci su izolirani, zaštićeni i pohranjeni prema najvišim standardima struke.",
      },
    ],
  },
];

const industries = [
  {
    bold: "Trgovina i e-commerce:",
    text: "Napredni sustavi za upravljanje zalihama i lojalnost kupaca.",
  },
  {
    bold: "Turizam:",
    text: "Sustavi za booking i upravljanje gostima bez visokih provizija posrednika.",
  },
  {
    bold: "Logistika i transport:",
    text: "Praćenje pošiljaka, optimizacija ruta i upravljanje voznim parkom.",
  },
  {
    bold: "Uslužne djelatnosti:",
    text: "Sustavi za naručivanje klijenata i evidenciju radnog vremena.",
  },
];

const WebAplikacijeAppVodic = () => {
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
              Web aplikacije: Kako prilagođeni softver{" "}
              <span className="gradient-text">transformira moderno poslovanje</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Vodič kroz custom web aplikacije kao motor vašeg poslovanja
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
              Dok je web stranica vaše digitalno lice prema svijetu, web aplikacija je motor koji pokreće vaše unutarnje poslovne procese. U današnjem gospodarstvu, tvrtke koje se oslanjaju na generička rješenja često udaraju u zid onoga što njihov softver može izvesti. Upravo tu nastaje prostor za custom web aplikacije – rješenja koja se prilagođavaju vama, a ne obrnuto.
            </p>
            <p>
              Bez obzira na to u kojoj gospodarskoj djelatnosti poslujete, digitalna transformacija kroz namjenske aplikacije donosi mjerljive prednosti.
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
              src={officeImage}
              alt="Razvoj web aplikacija - programeri rade na custom softverskim rješenjima"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* What is a web app */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Što je zapravo <span className="gradient-text">web aplikacija?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Za razliku od klasične web stranice koja je primarno informativna, web aplikacija je interaktivni softver kojem se pristupa putem preglednika. Ona omogućuje korisnicima da izvršavaju složene zadatke: od upravljanja zalihama i rezervacijskih sustava do automatizacije prodajnih procesa i analize velikih količina podataka u realnom vremenu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-16">
        <div className="section-container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl sm:text-3xl font-bold mb-10 text-center"
          >
            Ključne prednosti za <span className="gradient-text">vaše poslovanje</span>
          </motion.h2>

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

      {/* Industries */}
      <section className="pb-16">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Building2 size={22} className="text-foreground" />
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold">
                Primjena u svim granama gospodarstva
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-5">
              Web aplikacije ne poznaju granice industrije:
            </p>

            <ul className="space-y-3">
              {industries.map((p, j) => (
                <li key={j} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">{p.bold} </strong>
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
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
              Zaključak: <span className="gradient-text">Softver kao konkurentska prednost</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ulaganje u razvoj web aplikacije nije samo tehnička odluka, već strateški poslovni potez. Tvrtke koje digitaliziraju svoje specifično znanje i procese kroz namjenski softver postaju brže, učinkovitije i otpornije na promjene na tržištu.
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
              Pretvorimo vaše ideje u funkcionalan alat
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Imate li poslovni proces koji bi se mogao digitalizirati? Dopustite nam da vaše ideje pretvorimo u funkcionalan alat koji će raditi za vas.
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

export default WebAplikacijeAppVodic;
