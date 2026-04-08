import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ivanaBeautyImg from "@/assets/portfolio-ivana-beauty.jpg";
import frizerStudioImg from "@/assets/portfolio-frizer-studio.jpg";
import masazniRelaxImg from "@/assets/portfolio-masazni-relax.jpg";
import cistoMiImg from "@/assets/portfolio-cistomi.jpg";
import klimaPlusImg from "@/assets/portfolio-klimaplus.jpg";
import secureGuardImg from "@/assets/portfolio-secureguard.jpg";
import docuVaultImg from "@/assets/portfolio-docuvault.jpg";
import jpg2PdfImg from "@/assets/portfolio-jpg2pdf.jpg";
import teamPulseImg from "@/assets/portfolio-teampulse.jpg";
import miniCrmImg from "@/assets/portfolio-minicrm.jpg";

interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  gradient: string;
  image: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  { title: "Ivana Beauty Salon", description: "Elegantna wellness & beauty web stranica s online rezervacijama, višejezičnom podrškom i luksuznim dizajnom.", category: "Kozmetički saloni", gradient: "from-pink-500/20 to-purple-500/20", image: ivanaBeautyImg, link: "https://ivanabeauty.lovable.app/" },
  { title: "Frizer Studio M", description: "Responzivna stranica za frizerski salon s cjenikom usluga i kontakt formom.", category: "Frizerski saloni", gradient: "from-blue-500/20 to-cyan-500/20", image: frizerStudioImg },
  { title: "Masažni studio Relax", description: "Elegantna stranica za wellness i masažni studio s terminskim kalendarom.", category: "Masažni studiji", gradient: "from-green-500/20 to-teal-500/20", image: masazniRelaxImg },
  { title: "ČistoMi servis", description: "Profesionalna web prezentacija za servis čišćenja s online kalkulatorom cijena.", category: "Servisi za čišćenje", gradient: "from-sky-500/20 to-blue-500/20", image: cistoMiImg },
  { title: "KlimaPlus montaža", description: "Web stranica za montere klima uređaja s cjenikom i servisnim zahtjevima.", category: "Monteri klima uređaja", gradient: "from-indigo-500/20 to-violet-500/20", image: klimaPlusImg },
  { title: "SecureGuard zaštita", description: "Korporativna stranica za tvrtku tehničke zaštite s portfeljem projekata.", category: "Tehničke zaštite", gradient: "from-red-500/20 to-orange-500/20", image: secureGuardImg },
];

const appItems: PortfolioItem[] = [
  { title: "DocuVault", description: "Web aplikacija za pohranu, organizaciju i dijeljenje poslovnih dokumenata.", category: "Web aplikacija", gradient: "from-violet-500/20 to-purple-500/20", image: docuVaultImg },
  { title: "JPG2PDF Converter", description: "Brzi online pretvarač slika u PDF format s batch obradom.", category: "Web aplikacija", gradient: "from-amber-500/20 to-orange-500/20", image: jpg2PdfImg },
  { title: "TeamPulse", description: "Dashboard za praćenje učinkovitosti zaposlenika s analitikom i izvještajima.", category: "Web aplikacija", gradient: "from-emerald-500/20 to-green-500/20", image: teamPulseImg },
  { title: "MiniCRM", description: "Jednostavan CRM sustav za mala poduzeća — upravljanje kontaktima, ponudama i zadacima.", category: "Web aplikacija", gradient: "from-blue-500/20 to-indigo-500/20", image: miniCrmImg },
];

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="glass-card-hover group overflow-hidden"
  >
    <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}>
      <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3">
        {item.category}
      </span>
      <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors">
          Pogledaj projekt <ExternalLink size={14} />
        </a>
      ) : (
        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors">
          Pogledaj projekt <ExternalLink size={14} />
        </button>
      )}
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

        <h3 className="font-heading text-xl font-semibold mb-6 text-muted-foreground">Web stranice</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {portfolioItems.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>

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
