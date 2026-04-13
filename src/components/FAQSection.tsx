import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Koliko vremena treba za izradu web stranice?",
    answer:
      "Ovisno o složenosti projekta, izrada traje od 5 do 15 radnih dana. Jednostavnije web stranice mogu biti gotove za tjedan dana, dok složenije aplikacije s prilagođenim funkcionalnostima zahtijevaju više vremena.",
  },
  {
    question: "Koliko košta izrada web stranice?",
    answer:
      "Cijena ovisi o opsegu projekta. Nudimo prilagođene pakete za male i srednje poduzetnike — od jednostavnih prezentacijskih stranica do složenih web aplikacija. Kontaktirajte nas za besplatnu procjenu.",
  },
  {
    question: "Što uključuje AI automatizacija?",
    answer:
      "AI automatizacija obuhvaća chatbotove, automatsko generiranje sadržaja, pametnu analizu podataka, automatizaciju poslovnih procesa i integracije s alatima poput ChatGPT-a. Prilagođavamo rješenja vašim specifičnim potrebama.",
  },
  {
    question: "Nudite li održavanje web stranica nakon izrade?",
    answer:
      "Da! Nudimo mjesečne pakete održavanja koji uključuju ažuriranja, sigurnosne zakrpe, backup, tehničku podršku i optimizaciju performansi. Vaša stranica je uvijek u sigurnim rukama.",
  },
  {
    question: "Mogu li dobiti web stranicu ako nemam nikakav sadržaj?",
    answer:
      "Apsolutno. Pomažemo s izradom tekstova, odabirom fotografija i kompletnim dizajnom. Možemo koristiti AI alate za generiranje početnog sadržaja koji zatim prilagođavamo vašem brendu.",
  },
  {
    question: "Hoće li moja web stranica raditi na mobitelima?",
    answer:
      "Sve naše web stranice su potpuno responzivne — savršeno izgledaju na svim uređajima, od mobitela i tableta do desktop računala. To je uključeno u svaki projekt bez dodatnog troška.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative" style={{ background: "var(--gradient-hero)" }}>
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Česta <span className="gradient-text">pitanja</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Odgovori na najčešća pitanja o našim uslugama
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-border/50 data-[state=open]:border-primary/40 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-heading text-base sm:text-lg font-medium hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
