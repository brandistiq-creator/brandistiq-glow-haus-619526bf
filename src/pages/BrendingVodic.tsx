import { motion } from "framer-motion";
import { ArrowLeft, Palette, Package, Layers, BookOpen, Sparkles, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import brandingImage from "@/assets/branding-design.jpg";

const sections = [
  {
    icon: Palette,
    number: "01",
    title: "Jedinstveni logo dizajn: Srce vašeg brenda",
    intro:
      "Logo je temelj vašeg vizualnog identiteta. On mora biti jednostavan, pamtljiv i funkcionalan, bilo da se nalazi na sitnoj posjetnici ili na velikom reklamnom panou.",
    points: [
      {
        bold: "Autentičnost:",
        text: "Izbjegavamo generička rješenja. Svaki logo koji kreiramo rezultat je duboke analize vaše djelatnosti i vrijednosti koje želite prenijeti.",
      },
      {
        bold: "Bezvremenski stil:",
        text: "Cilj je stvoriti dizajn koji će biti relevantan i moderan i za deset godina.",
      },
    ],
  },
  {
    icon: Package,
    number: "02",
    title: "Kompletan branding paket",
    intro:
      "Sam logo nije dovoljan za ozbiljan nastup na tržištu. Brending je cjelovit sustav koji obuhvaća sve dodirne točke koje kupac ima s vašom tvrtkom. Naš branding paket uključuje:",
    points: [
      {
        bold: "Paletu boja:",
        text: "Definiranje boja koje izazivaju željenu emociju kod kupca (npr. sigurnost, luksuz ili inovaciju).",
      },
      {
        bold: "Tipografiju:",
        text: "Odabir fontova koji osiguravaju čitljivost i naglašavaju karakter brenda.",
      },
      {
        bold: "Dizajn popratnih materijala:",
        text: "Vizitke, memorandumi, potpisi u e-mailu i dizajn za društvene mreže.",
      },
    ],
  },
  {
    icon: Layers,
    number: "03",
    title: "Konzistentnost na svim kanalima",
    intro:
      "Najveća snaga uspješnih brendova je konzistentnost. Bez obzira vidi li vas klijent na vašoj web stranici, mobilnoj aplikaciji, na terenu ili u tiskanom oglasu, osjećaj mora biti isti.",
    points: [
      {
        bold: "",
        text: "Stvaranjem jedinstvenog vizualnog jezika, gradite prepoznatljivost. Klijenti brže donose odluke o kupnji kada prepoznaju vizualne obrasce kojima vjeruju.",
      },
    ],
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Vizualne smjernice (Brand Manual)",
    intro:
      "Kako bi vaš brend ostao dosljedan i u budućnosti, uz svako rješenje izrađujemo knjigu grafičkih standarda. Ovaj dokument služi kao priručnik za vas i vaše partnere (tiskare, marketing agencije), precizno definirajući:",
    points: [
      { bold: "", text: "Kako pravilno koristiti logo (i kako ne)." },
      { bold: "", text: "Točne kodove boja (HEX, CMYK, Pantone)." },
      { bold: "", text: "Pravila pozicioniranja i razmaka." },
    ],
  },
];

const BrendingVodic = () => {
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
              Dizajn logotipa i brending:{" "}
              <span className="gradient-text">Stvorite vizualni identitet koji prodaje</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Vodič kroz strateški dizajn brenda koji izgrađuje povjerenje i prepoznatljivost
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
              U svijetu gdje smo svakodnevno bombardirani tisućama informacija, vaš vizualni identitet je prva linija komunikacije s klijentom. On je razlika između tvrtke koja izgleda kao „jedna od mnogih“ i brenda koji zrači profesionalnošću, kvalitetom i pouzdanošću.
            </p>
            <p>
              Dizajn nije samo pitanje ljepote – to je strateški alat koji vas izdvaja od konkurencije i stvara trajnu vezu s vašom ciljanom publikom.
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
              src={brandingImage}
              alt="Dizajn logotipa i brending - dizajner radi na vizualnom identitetu pomoću grafičkog tableta"
              loading="lazy"
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

      {/* Portfolio link banner */}
      <section className="pb-16">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 text-center"
          >
            <Sparkles className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3">
              Pogledajte naša brending rješenja
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Istražite naš portfolio i pogledajte primjere brendova koje smo izgradili od nule.
            </p>
            <Link to="/#portfolio" className="btn-outline-glow inline-block">
              Naš portfolio
            </Link>
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
              Zaključak: <span className="gradient-text">Investicija u profesionalni identitet</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Kvalitetan brending povećava percipiranu vrijednost vaše usluge. Kada izgledate profesionalno, klijenti su spremniji platiti premium cijenu jer vizualni identitet jamči ozbiljnost i stabilnost tvrtke.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dopustite nam da vašu poslovnu viziju pretvorimo u snažnu vizualnu priču. Započnimo izgradnju vašeg brenda koji će se pamtiti. Pogledajte i{" "}
              <Link to="/#portfolio" className="text-primary hover:underline font-medium">
                naš portfolio
              </Link>{" "}
              za inspiraciju.
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
              Spremni za novi vizualni identitet?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Kontaktirajte nas putem WhatsAppa i dogovorimo besplatne konzultacije za vaš brending projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/385958280800"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gradient inline-block"
              >
                Kontaktirajte me putem WhatsAppa
              </a>
              <Link to="/#portfolio" className="btn-outline-glow inline-block">
                Pogledaj portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BrendingVodic;
