import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  gradient: string;
}

const portfolioItems: PortfolioItem[] = [
  { title: "Kozmetički salon Bella", description: "Moderna web stranica za kozmetički salon s online rezervacijama i galerijom radova.", category: "Kozmetički saloni", gradient: "from-pink-500/20 to-purple-500/20" },
  { title: "Frizer Studio M", description: "Responzivna stranica za frizerski salon s cjenikom usluga i kontakt formom.", category: "Frizerski saloni", gradient: "from-blue-500/20 to-cyan-500/20" },
  { title: "Masažni studio Relax", description: "Elegantna stranica za wellness i masažni studio s terminskim kalendarom.", category: "Masažni studiji", gradient: "from-green-500/20 to-teal-500/20" },
  { title: "ČistoMi servis", description: "Profesionalna web prezentacija za servis čišćenja s online kalkulatorom cijena.", category: "Servisi za čišćenje", gradient: "from-sky-500/20 to-blue-500/20" },
  { title: "KlimaPlus montaža", description: "Web stranica za montere klima uređaja s cjenikom i servisnim zahtjevima.", category: "Monteri klima uređaja", gradient: "from-indigo-500/20 to-violet-500/20" },
  { title: "SecureGuard zaštita", description: "Korporativna stranica za tvrtku tehničke zaštite s portfeljem projekata.", category: "Tehničke zaštite", gradient: "from-red-500/20 to-orange-500/20" },
];

const appItems: PortfolioItem[] = [
  { title: "DocuVault", description: "Web aplikacija za pohranu, organizaciju i dijeljenje poslovnih dokumenata.", category: "Web aplikacija", gradient: "from-violet-500/20 to-purple-500/20" },
  { title: "JPG2PDF Converter", description: "Brzi online pretvarač slika u PDF format s batch obradom.", category: "Web aplikacija", gradient: "from-amber-500/20 to-orange-500/20" },
  { title: "TeamPulse", description: "Dashboard za praćenje učinkovitosti zaposlenika s analitikom i izvještajima.", category: "Web aplikacija", gradient: "from-emerald-500/20 to-green-500/20" },
  { title: "MiniCRM", description: "Jednostavan CRM sustav za mala poduzeća — upravljanje kontaktima, ponudama i zadacima.", category: "Web aplikacija", gradient: "from-blue-500/20 to-indigo-500/20" },
];

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="glass-card-hover group overflow-hidden"
  >
    <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
      <span className="font-heading text-2xl font-bold text-foreground/30 group-hover:text-foreground/50 transition-colors">
        {item.title.charAt(0)}
      </span>
    </div>
    <div className="p-6">
      <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3">
        {item.category}
      </span>
      <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
      <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors">
        Pogledaj projekt <ExternalLink size={14} />
      </button>
    </div>
  </motion.div>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent/5 blur-[150px] rounded-full" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Naš <span className="gradient-text">portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pogledajte projekte koje smo realizirali za naše klijente
          </p>
        </motion.div>

        {/* Web sites */}
        <h3 className="font-heading text-xl font-semibold mb-6 text-muted-foreground">Web stranice</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {portfolioItems.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Web apps */}
        <h3 className="font-heading text-xl font-semibold mb-6 text-muted-foreground">Web aplikacije</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {appItems.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
