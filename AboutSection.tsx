import { motion } from "framer-motion";
import { Rocket, Target, Clock, Brain } from "lucide-react";

const values = [
  { icon: Rocket, title: "Moderni pristup", text: "Koristimo najnovije tehnologije i trendove u web razvoju." },
  { icon: Target, title: "Fokus na mala poduzeća", text: "Razumijemo izazove malih poduzeća i nudimo prilagođena rješenja." },
  { icon: Clock, title: "Brza isporuka", text: "Vaš projekt isporučujemo u dogovorenim rokovima, bez iznenađenja." },
  { icon: Brain, title: "Praktični AI", text: "Integriramo AI rješenja koja donose mjerljive rezultate." },
];

const AboutSection = () => {
  return (
    <section id="o-nama" className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              O <span className="gradient-text">nama</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              BrandistiQ je inteligentna web agencija posvećena malim i srednjim
              poduzećima. Vjerujemo da svaki poduzetnik zaslužuje pristup modernim
              digitalnim alatima — bez kompliciranih procesa i prenapuhanih cijena.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Kombiniramo ekspertizu u web razvoju s praktičnim AI rješenjima kako
              bismo vašem poslovanju pomogli rasti brže, raditi pametnije i
              ostaviti snažan dojam na tržištu.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <v.icon size={28} className="text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
