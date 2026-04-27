// Defined outside Intro to prevent remount on every scroll re-render
function IntroTile({ src, alt, vh, mt, ty, delay }) {
  const inner = (
    <a
      href="#realisations"
      className="folio-tile intro-img-tile group block relative overflow-hidden border hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
      style={{ height: vh, marginTop: mt }}
    >
      <div className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${ty}px)` }}>
        <SmoothImg src={src} alt={alt} className="folio-img scale-[1.06]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent pointer-events-none" />
    </a>
  );
  if (!M) return inner;
  return (
    <M.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {inner}
    </M.div>
  );
}

function IntroLeftReveal({ children, delay = 0, className = "" }) {
  if (!M) return <div className={className}>{children}</div>;
  return (
    <M.div
      className={className}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </M.div>
  );
}

function IntroMobileGallery() {
  return (
    <div className="md:hidden -mx-6">
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-3 scroll-smooth">
        {[
          { src: IMG.introA, alt: "Atelier — savoir-faire" },
          { src: IMG.introB, alt: "Salon réalisé" },
          { src: IMG.introC, alt: "Détail laiton et bois" },
        ].map((it, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[82%] aspect-[3/4] border border-bronze/15"
          >
            <SmoothImg src={it.src} alt={it.alt} />
          </div>
        ))}
      </div>
      <div className="px-6 mt-3 flex items-center gap-2 text-mist text-[11px] tracking-[0.22em] uppercase">
        <span className="w-6 h-px bg-bronze/60" />
        Glisser
        <IconArrowRight size={12} stroke={1.5} className="text-bronze" />
      </div>
    </div>
  );
}

function Intro() {
  const refSection = React.useRef(null);

  return (
    <section
      id="atelier"
      data-screen-label="atelier"
      className="relative py-20 md:py-32"
      style={{
        background: "#rgba(139,111,78,0.15)",
        borderTop:    "1px solid rgba(139,111,78,0.15)",
        borderBottom: "1px solid rgba(139,111,78,0.15)",
      }}
    >
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div ref={refSection} className="grid grid-cols-12 gap-0 md:gap-14 lg:gap-20 items-start">

          {/* LEFT — text 5/12 */}
          <div className="col-span-12 md:col-span-5">
            <IntroLeftReveal delay={0.08}>
              <h2
                className="display"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", lineHeight: 1.02, color: "#b09a83" }}
              >
                Chaque pièce <span className="italic" style={{ color: "#8B6F4E" }}>raconte</span>
                <br />
                une histoire.
              </h2>
            </IntroLeftReveal>

            <IntroLeftReveal delay={0.16} className="mt-9 space-y-6 max-w-[52ch] text-[16.5px] leading-[1.75]" >
              <p style={{ color: "#dfd4c9" }}>
                Ouaddi Living est un atelier casablancais fondé par une poignée d'architectes et
                d'ébénistes partageant la même conviction&nbsp;: un intérieur se compose comme
                une maison d'édition — ligne par ligne, matière par matière. Nous dessinons,
                fabriquons et livrons des meubles pensés pour votre espace, votre lumière, et
                les années qui viennent.
              </p>
              <p style={{ color: "#dfd4c9" }}>
                Noyer massif, laiton brossé, cuirs tannés à Fès, velours italiens&nbsp;: chaque
                matière est choisie à la main, assemblée dans notre atelier, puis livrée chez
                vous avec le même soin qu'une pièce d'édition limitée. L'élégance n'est pas un
                style — c'est une somme de détails que l'on ne voit pas, mais que l'on sent.
              </p>
            </IntroLeftReveal>

            {/* CTA */}
            <IntroLeftReveal delay={0.24} className="mt-10">
              <a href="#collections" className="intro-cta-btn group">
                Découvrir notre atelier
                <IconArrowRight className="arrow" size={13} stroke={1.7} />
              </a>
            </IntroLeftReveal>
          </div>

          {/* RIGHT — single full image (desktop only) */}
          <div className="hidden md:block md:col-span-7">
            <IntroTile
              src="uploads/lux.png"
              alt="Atelier Ouaddi Living — savoir-faire"
              vh="75vh"
              mt="0"
              ty={0}
              delay={0.2}
            />
          </div>

        </div>

        {/* Mobile image — same source as desktop, no carousel */}
        <div className="md:hidden mt-8 aspect-[3/4] overflow-hidden border border-bronze/25">
          <SmoothImg src="uploads/lux.png" alt="Atelier Ouaddi Living — savoir-faire" />
        </div>
      </div>
    </section>
  );
}
window.Intro = Intro;
