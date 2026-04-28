function Realisations() {
  const [activeIdx, setActiveIdx] = React.useState(null);
  const items = IMG.folio;

  const prev = () => setActiveIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setActiveIdx((i) => (i + 1) % items.length);

  React.useEffect(() => {
    document.body.classList.toggle("no-scroll", activeIdx !== null);
    const onKey = (e) => {
      if (e.key === "Escape")      setActiveIdx(null);
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx]);

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
                onClick={() => setActiveIdx(i)}
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
          {activeIdx !== null && (
            <M.div
              key="lb"
              className="fixed inset-0 z-50 flex items-center justify-center lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIdx(null)}
            >
              {/* Image */}
              <M.div
                key={activeIdx}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={items[activeIdx].img}
                  alt={items[activeIdx].title}
                  style={{ maxHeight: "90vh", maxWidth: "90vw", objectFit: "contain", display: "block" }}
                />
              </M.div>

              {/* Close */}
              <button
                onClick={() => setActiveIdx(null)}
                className="absolute top-5 right-5 z-10 text-bone/70 hover:text-bone"
                aria-label="Fermer"
              >
                <IconX size={22} />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 md:left-8 z-10 text-bone/70 hover:text-bone p-3"
                aria-label="Précédent"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 md:right-8 z-10 text-bone/70 hover:text-bone p-3"
                aria-label="Suivant"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </M.div>
          )}
        </AP>
      )}
    </Section>
  );
}
window.Realisations = Realisations;
