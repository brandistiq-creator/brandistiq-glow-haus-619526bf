import { motion } from "framer-motion";
import { Globe, AppWindow, Palette, Bot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Izrada web stranica",
    description: "Moderne, brze i responzivne web stranice koje privlače klijente i povećavaju konverzije.",
    benefits: [
      "Prilagođeni dizajn za vašu branšu",
      "SEO optimizacija za bolju vidljivost",
      "Mobilna responzivnost",
      "Brzo učitavanje stranica",
    ],
    link: "/web-aplikacije-vodic",
  },
  {
    icon: AppWindow,
    title: "Izrada web aplikacija",
    description: "Pametne web aplikacije koje automatiziraju vaše procese i štede vrijeme.",
    benefits: [
      "Prilagođena funkcionalnost",
      "Intuitivno korisničko sučelje",
      "Sigurnost podataka",
      "Skalabilna arhitektura",
    ],
  },
  {
    icon: Palette,
    title: "Dizajn logotipa i brending",
    description: "Profesionalni vizualni identitet koji vas izdvaja od konkurencije.",
    benefits: [
      "Jedinstveni logo dizajn",
      "Kompletni branding paket",
      "Konzistentnost na svim kanalima",
      "Vizualni smjernice za brend",
    ],
  },
  {
    icon: Bot,
    title: "AI rješenja za poslovanje",
    description: "Praktična AI rješenja koja povećavaju produktivnost vašeg tima.",
    benefits: [
      "Automatizacija ponavljajućih zadataka",
      "Pametna analitika podataka",
      "Obrada dokumenata s AI-jem",
      "Chatbot i korisnička podrška",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="usluge" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Naše <span className="gradient-text">usluge</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sve što vašem malom poduzeću treba za uspjeh u digitalnom svijetu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card-hover p-8"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: "var(--gradient-primary)" }}>
                <s.icon size={24} className="text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{s.description}</p>
              <ul className="space-y-2 mb-5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              {s.link && (
                <Link
                  to={s.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                >
                  Saznaj više
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
