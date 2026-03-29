import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ ime: "", email: "", usluga: "", poruka: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would integrate with backend
    alert("Hvala na poruci! Javit ćemo vam se uskoro.");
    setFormData({ ime: "", email: "", usluga: "", poruka: "" });
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Ime i prezime</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.ime}
                onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                placeholder="Vaše ime"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email adresa</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                placeholder="vas@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Interes za uslugu</label>
              <select
                value={formData.usluga}
                onChange={(e) => setFormData({ ...formData, usluga: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
              >
                <option value="">Odaberite uslugu</option>
                <option value="web-stranica">Izrada web stranice</option>
                <option value="web-aplikacija">Izrada web aplikacije</option>
                <option value="branding">Dizajn logotipa i brending</option>
                <option value="ai">AI rješenja</option>
                <option value="ostalo">Ostalo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Poruka</label>
              <textarea
                rows={4}
                required
                maxLength={1000}
                value={formData.poruka}
                onChange={(e) => setFormData({ ...formData, poruka: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground resize-none"
                placeholder="Opišite svoj projekt..."
              />
            </div>
            <button type="submit" className="btn-primary-gradient w-full flex items-center justify-center gap-2">
              Pošalji poruku <Send size={18} />
            </button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 space-y-6">
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
            </div>

            {/* Map */}
            <div className="glass-card overflow-hidden rounded-xl h-64">
              <iframe
                title="BrandistiQ lokacija"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.1!2d15.9819!3d45.8150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6f0c1f8b0c1%3A0x0!2sMartićeva+67%2C+Zagreb!5e0!3m2!1shr!2shr!4v1700000000000!5m2!1shr!2shr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
