function Realisations() {
  const [active, setActive] = React.useState(null);
  const items = IMG.folio;

  React.useEffect(() => {
    document.body.classList.toggle("no-scroll", !!active);
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section id="realisations" className="bg-ink">
      <div className="grid grid-cols-12 gap-y-6 md:gap-8 items-end mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-8">
          <Reveal><Kicker>Portfolio</Kicker></Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-bone mt-5" style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}>
              Nos récentes <span className="italic text-bronze">réalisations.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="col-span-12 md:col-span-4">
          <p className="text-mist text-[15.5px] leading-[1.7]">
            Quelques intérieurs signés ces deux dernières années à Casablanca et
            dans ses environs immédiats.
          </p>
        </Reveal>
      </div>

      {/* Masonry — CSS Grid with auto-rows */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[220px]">
        {items.map((p, i) => {
          const portrait = p.span === "portrait";
          return (
            <Reveal
              key={p.id}
              delay={(i % 4) * 0.07}
              className={`folio-tile relative overflow-hidden bg-charcoal cursor-pointer ${
                portrait ? "row-span-2" : "row-span-1"
              }`}
            >
              <button
                onClick={() => setActive(p)}
                className="absolute inset-0 w-full h-full text-left"
                aria-label={`Voir ${p.title}`}
              >
                <SmoothImg src={p.img} alt={p.title} className="folio-img" />
                <div className="folio-overlay absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="folio-overlay absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                  <span className="kicker text-bronze">{p.neighborhood}</span>
                  <h3 className="mt-1 font-serif text-bone text-[22px] md:text-[26px] leading-tight">
                    {p.title}
                  </h3>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* Lightbox */}
      {AP && (
        <AP>
          {active && (
            <M.div
              key="lb"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <M.div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl w-full bg-charcoal"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5, ease: [0.2,0.7,0.2,1] }}
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-3 right-3 md:-top-12 md:right-0 z-10 text-bone/80 hover:text-bone inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase"
                  aria-label="Fermer"
                >
                  Fermer <IconX size={16} />
                </button>
                <div className="aspect-[16/10] bg-ink">
                  <SmoothImg src={active.img} alt={active.title} />
                </div>
                <div className="p-6 md:p-10 flex flex-wrap items-end justify-between gap-4 border-t border-bone/10">
                  <div>
                    <span className="kicker text-bronze">{active.neighborhood}</span>
                    <h3 className="mt-2 font-serif text-bone text-[32px] md:text-[40px] leading-none">
                      {active.title}
                    </h3>
                  </div>
                  <a
                    href={WA_URL}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-bronze border-b border-bronze/40 hover:border-bronze pb-1 text-[12.5px] tracking-[0.22em] uppercase"
                  >
                    Projet similaire ? <IconArrowUpRight size={14} />
                  </a>
                </div>
              </M.div>
            </M.div>
          )}
        </AP>
      )}
    </Section>
  );
}
window.Realisations = Realisations;
