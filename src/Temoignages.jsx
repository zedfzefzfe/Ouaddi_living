function Temoignages() {
  return (
    <Section id="temoignages" className="bg-ink">
      <div className="grid grid-cols-12 gap-y-6 md:gap-8 items-end mb-14 md:mb-20">
        <div className="col-span-12 md:col-span-8">
          <Reveal><Kicker>Témoignages</Kicker></Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-bone mt-5" style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}>
              La confiance de <span className="italic text-bronze">nos clients.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <Stagger stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <StaggerItem key={i}>
            <figure className="relative h-full bg-charcoal p-8 md:p-10 flex flex-col">
              <span
                aria-hidden="true"
                className="font-serif italic text-bronze text-[110px] leading-none absolute top-4 left-6 select-none"
              >
                “
              </span>
              <blockquote className="relative pt-10 font-serif italic text-bone text-[21px] leading-[1.45]">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-bone/10">
                <div className="text-bone text-[14.5px] tracking-[0.02em]">{t.name}</div>
                <div className="mt-1 text-mist text-[12.5px] tracking-[0.12em] uppercase">{t.hood}</div>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
window.Temoignages = Temoignages;
