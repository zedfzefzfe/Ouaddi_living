function CollectionSignature() {
  const sectionRef = React.useRef(null);
  const videoRef   = React.useRef(null);

  // Subtle parallax: video scrolls at 0.96× page speed
  React.useEffect(() => {
    const section = sectionRef.current;
    const video   = videoRef.current;
    if (!section || !video) return;

    const onScroll = () => {
      const rect   = section.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * 0.04;
      const clamped = Math.min(Math.max(offset, -18), 18);
      video.style.transform = "translateY(" + clamped + "px)";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const videoCol = (
    <div className="colsig-video-col">
      <div className="colsig-video-wrap">
        <video
          ref={videoRef}
          className="colsig-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
        >
          <source
            src="uploads/video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="colsig-video-overlay" />
      </div>
    </div>
  );

  const textCol = (
    <div className="colsig-text-col">
      <Reveal delay={0.3} y={25}>
        <span className="colsig-kicker">Collection Signature</span>
      </Reveal>

      <Reveal delay={0.5} y={25}>
        <h2 className="colsig-headline">
          L'art du sur-mesure,{" "}
          <em>sans compromis.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.7} y={25}>
        <p className="colsig-body">
          Chaque projet Ouaddi Living naît d'une rencontre. Nous écoutons
          votre vision, étudions votre espace, et concevons des pièces
          uniques pensées pour traverser les années. Du croquis initial à
          l'installation finale, notre atelier veille à chaque détail.
        </p>
      </Reveal>

      <Reveal delay={0.9} y={25}>
        <a href="#processus" className="colsig-btn">
          En savoir plus
        </a>
      </Reveal>
    </div>
  );

  // Animate the video column from the left
  const animatedVideoCol = M ? (
    <M.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {videoCol}
    </M.div>
  ) : videoCol;

  return (
    <section
      id="collection-signature"
      ref={sectionRef}
      className="colsig-section"
      style={{
        background: "#C8B59E",
        borderTop:    "1px solid rgba(139,111,78,0.15)",
        borderBottom: "1px solid rgba(139,111,78,0.15)",
      }}
    >
      <div className="colsig-container">
        {animatedVideoCol}
        {textCol}
      </div>
    </section>
  );
}

window.CollectionSignature = CollectionSignature;
