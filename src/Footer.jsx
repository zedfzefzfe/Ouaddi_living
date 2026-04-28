function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 border-t border-bone/10">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {/* Brand */}
          <div>
            <div>
              <img src="uploads/logo.png" alt="Ouaddi Living" className="h-36 md:h-40 w-auto object-contain" />
            </div>
            <p className="mt-5 text-mist text-[14.5px] leading-[1.7] max-w-sm">
              L'élégance pour votre intérieur. Design. Luxe. Confort. Mobilier sur mesure,
              conçu et fabriqué à Casablanca.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank" rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-bone/15 hover:border-bronze hover:text-bronze text-bone/80 transition-colors duration-500"
              >
                <IconInstagram size={16} />
              </a>
              <a
                href={WA_URL}
                target="_blank" rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center border border-bone/15 hover:border-bronze hover:text-bronze text-bone/80 transition-colors duration-500"
              >
                <IconWhatsApp size={16} />
              </a>
              <a
                href={`tel:${CONTACT.phones[0].replace(/\s+/g,"")}`}
                aria-label="Téléphone"
                className="w-10 h-10 flex items-center justify-center border border-bone/15 hover:border-bronze hover:text-bronze text-bone/80 transition-colors duration-500"
              >
                <IconPhone size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <span className="kicker">Navigation</span>
            <ul className="mt-5 space-y-3">
              {[
                ["Accueil", "#accueil"],
                ["Collections", "#collections"],
                ["Atelier", "#collection-signature"],
                ["Réalisations", "#realisations"],
                ["Showroom", "#showroom"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="gold-underline text-bone/85 hover:text-bone text-[14.5px]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="kicker">Contact</span>
            <ul className="mt-5 space-y-3 text-[14.5px]">
              <li className="text-mist">{CONTACT.address}</li>
              {CONTACT.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s+/g,"")}`} className="gold-underline text-bone/90">{p}</a>
                </li>
              ))}
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="gold-underline text-bone/90">
                  {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px bg-bronze/30" />

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-mist text-[12.5px] tracking-[0.06em]">
          <span>© 2026 Ouaddi Living · Fait avec soin à Casablanca</span>
          <span className="text-mist/70">
            Boulevard Zerktouni · 20250 · Maroc
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
