function Showroom() {
  // Dark-mode-ish map: we use the standard Google Maps embed for Casablanca
  // and apply a CSS filter to give it a dark, tinted appearance.
  const mapSrc =
    "https://www.google.com/maps?q=Boulevard+Zerktouni,+Casablanca&output=embed";

  return (
    <Section id="showroom" className="bg-ink">
      <div className="grid grid-cols-12 gap-y-6 md:gap-8 items-end mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-8">
          <Reveal><Kicker>Nous rencontrer</Kicker></Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-bone mt-5" style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}>
              Visitez notre <span className="italic text-bronze">showroom.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="col-span-12 md:col-span-4">
          <p className="text-mist text-[15.5px] leading-[1.7]">
            Un espace de trois cents mètres carrés où matières, assises et textiles
            peuvent se vivre avant de se dessiner.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        {/* Map */}
        <Reveal className="col-span-12 md:col-span-7">
          <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden border border-bone/10 bg-charcoal">
            <iframe
              title="Showroom Ouaddi Living — Casablanca"
              src={mapSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full map-tint"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-bone/5" />
            <a
              href="https://maps.app.goo.gl/JJgCPFSGEjqSMjcU7"
              target="_blank" rel="noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Ouvrir dans Google Maps"
            />
          </div>
        </Reveal>

        {/* Info */}
        <Reveal delay={0.12} className="col-span-12 md:col-span-5">
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 text-bronze">
                <IconMapPin size={18} />
                <span className="kicker">Adresse</span>
              </div>
              <a
                href="https://maps.app.goo.gl/JJgCPFSGEjqSMjcU7"
                target="_blank" rel="noreferrer"
                className="mt-3 font-serif text-bone text-[24px] leading-[1.3] hover:text-bronze transition-colors duration-300 block"
              >
                {CONTACT.address}
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 text-bronze">
                <IconPhone size={18} />
                <span className="kicker">Téléphone</span>
              </div>
              <ul className="mt-3 space-y-1">
                {CONTACT.phones.map((p) => (
                  <li key={p}>
                    <a
                      href={`tel:${p.replace(/\s+/g, "")}`}
                      className="gold-underline font-serif text-bone text-[22px] tracking-wide"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 text-bronze">
                <IconClock size={18} />
                <span className="kicker">Horaires</span>
              </div>
              <ul className="mt-4 space-y-2">
                {CONTACT.hours.map((row) => (
                  <li key={row.d} className="flex items-baseline justify-between gap-4 text-[15px] border-b border-bone/5 pb-2">
                    <span className="text-mist">{row.d}</span>
                    <span className="text-bone tabular">{row.h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-bone/20 hover:border-bronze hover:text-bronze text-bone px-5 py-3 text-[12px] tracking-[0.22em] uppercase transition-colors duration-500"
              >
                <IconInstagram size={15} /> {CONTACT.instagram}
              </a>
              <a
                href={WA_URL}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-bronze text-ink hover:bg-[#C9A46E] px-5 py-3 text-[12px] tracking-[0.22em] uppercase transition-colors duration-500"
              >
                <IconWhatsApp size={15} stroke={1.8} /> Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
window.Showroom = Showroom;
