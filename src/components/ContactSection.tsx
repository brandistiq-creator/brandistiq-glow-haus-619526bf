import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 relative">
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Kontaktirajte</span> nas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Spremni ste za digitalni korak naprijed? Javite nam se i dogovorimo besplatne konzultacije.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold mb-1">Adresa</h4>
                <p className="text-muted-foreground text-sm">Martićeva 67, Zagreb 10000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold mb-1">Telefon</h4>
                <p className="text-muted-foreground text-sm">+385 (95) 8280-800</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">brandistiq@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card overflow-hidden rounded-xl h-64 md:h-auto"
          >
            <iframe
              title="BrandistiQ lokacija"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.1!2d15.9819!3d45.8150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6f0c1f8b0c1%3A0x0!2sMartićeva+67%2C+Zagreb!5e0!3m2!1shr!2shr!4v1700000000000!5m2!1shr!2shr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "256px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
