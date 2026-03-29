const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-16">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <span className="font-heading text-xl font-bold gradient-text">BrandistiQ</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Inteligentna web agencija za mala poduzeća. Moderne stranice, aplikacije i AI rješenja.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Brze poveznice</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Početna", "Usluge", "Portfolio", "O nama", "Kontakt"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l === "Početna" ? "hero" : l === "O nama" ? "o-nama" : l.toLowerCase()}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Usluge</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Web stranice", "Web aplikacije", "Logo i brending", "AI rješenja"].map((s) => (
                <li key={s}>
                  <a href="#usluge" className="hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Martićeva 67, Zagreb 10000</li>
              <li>+385 (95) 8280-800</li>
              <li>brandistiq@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {currentYear} BrandistiQ. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
