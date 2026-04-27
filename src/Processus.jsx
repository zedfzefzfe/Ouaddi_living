function Processus() {
  const refSection = React.useRef(null);
  const [py, setPy] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const el = refSection.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // -1 below → +1 above
      const p = (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2);
      // 0.9x parallax — slower than scroll => translate +10% of scroll delta
      setPy(p * 80); // gentle range
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const heroSrc =
    "https://images.unsplash.com/photo-1616137148650-4aa14651e02d?auto=format&fit=crop&w=2000&q=80";

  return (
    <section
      id="processus"
      data-screen-label="processus"
      ref={refSection}
      className="relative bg-ink overflow-hidden"
      style={{ height: "85vh", minHeight: 520 }}
    >
      {M ? (
        <M.div
          className="absolute inset-0 will-change-transform"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, ease: [0.2, 0.7, 0.2, 1] }}
          style={{ transform: `translateY(${py}px)` }}
        >
          <SmoothImg
            src={heroSrc}
            alt="Salon signature Ouaddi Living — velours et laiton"
            className="scale-[1.06]"
          />
        </M.div>
      ) : (
        <div className="absolute inset-0">
          <SmoothImg src={heroSrc} alt="Salon signature Ouaddi Living" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
    </section>
  );
}
window.Processus = Processus;
