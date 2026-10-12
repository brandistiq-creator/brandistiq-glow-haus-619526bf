import { motion } from "framer-motion";
import { FileText, Zap, BarChart3, Wrench } from "lucide-react";

const solutions = [
  {
    icon: FileText,
    title: "Obrada dokumenata",
    description: "Automatizirajte obradu faktura, ugovora i dokumenata pomoću AI-ja. Uštedite sate ručnog rada.",
  },
  {
    icon: Zap,
    title: "Automatizacija zadataka",
    description: "Povežite alate i automatizirajte ponavljajuće poslovne procese — od odgovora na upite do generiranja izvještaja.",
  },
  {
    icon: BarChart3,
    title: "Analitika poslovanja",
    description: "Dobijte jasne uvide u performanse vašeg poslovanja s pametnim dashboardima i AI analitikom.",
  },
  {
    icon: Wrench,
    title: "Pametni web alati",
    description: "Prilagođeni web alati koji koriste AI za rješavanje specifičnih izazova vašeg poslovanja.",
  },
];

const AISolutionsSection = () => {
  return (
    <section id="ai-rjesenja" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -translate-y-1/2" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            AI <span className="gradient-text">rješenja</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Praktična umjetna inteligencija prilagođena potrebama malih poduzeća
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-8 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-accent/10 border border-accent/20">
                <s.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#kontakt" className="btn-primary-gradient">
            Saznajte više o AI rješenjima
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
