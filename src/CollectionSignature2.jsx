function CollectionSignature2() {
  const sectionRef = React.useRef(null);
  const imgRef     = React.useRef(null);

  // Subtle parallax on the image
  React.useEffect(() => {
    const section = sectionRef.current;
    const img     = imgRef.current;
    if (!section || !img) return;

    const onScroll = () => {
      if (window.innerWidth < 1024) {
        img.style.transform = "none";
        return;
      }
      const rect   = section.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * 0.04;
      const clamped = Math.min(Math.max(offset, -18), 18);
      img.style.transform = "translateY(" + clamped + "px)";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textCol = (
    <div className="colsig-text-col">
      <Reveal delay={0.3} y={25}>
        <span className="colsig-kicker">Notre Atelier</span>
      </Reveal>

      <Reveal delay={0.5} y={25}>
        <h2 className="colsig-headline">
          Fabriqué à Casablanca,{" "}
          <em>pensé pour durer.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.7} y={25}>
        <div className="colsig-body">
          <p>Notre atelier de Casablanca réunit une équipe d'ébénistes, de tapissiers et de finisseurs formés aux gestes traditionnels du métier. Chaque meuble est conçu, prototypé et assemblé à la main, dans un même lieu&nbsp;— du premier croquis jusqu'à l'installation chez vous.</p>
          <p>Nous ne produisons qu'une dizaine de pièces par mois. C'est une cadence lente, choisie&nbsp;— celle qui permet à un siège de tenir trente ans, à une table d'absorber les marques d'une vie de famille sans jamais se fatiguer. Du sur-mesure pensé pour durer, dans tous les sens du terme.</p>
        </div>
      </Reveal>

      <Reveal delay={0.9} y={25}>
        <div style={{ marginTop: "2rem" }}>
          <a href="#contact" className="colsig-btn">
            Démarrer un projet
          </a>
        </div>
      </Reveal>
    </div>
  );

  const imageCol = (
    <div className="colsig-video-col">
      <div className="colsig-video-wrap">
        <img
          ref={imgRef}
          src="uploads/lux.jpg"
          alt="Atelier Ouaddi Living — fabrication sur mesure"
          className="colsig-video"
          style={{ objectFit: "cover" }}
        />
        <div className="colsig-video-overlay" />
      </div>
    </div>
  );

  const animatedImageCol = M ? (
    <M.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {imageCol}
    </M.div>
  ) : imageCol;

  return (
    <section
      id="notre-atelier"
      ref={sectionRef}
      className="colsig-section"
      style={{
        background:   "#C8B59E",
        borderTop:    "1px solid rgba(139,111,78,0.15)",
        borderBottom: "1px solid rgba(139,111,78,0.15)",
      }}
    >
      {/* Columns reversed: text left, image right */}
      <div className="colsig-container">
        {textCol}
        {animatedImageCol}
      </div>
    </section>
  );
}

window.CollectionSignature2 = CollectionSignature2;
