function CollectionSignature() {
  const sectionRef = React.useRef(null);
  const videoRef   = React.useRef(null);

  const videoCol = (
    <div className="colsig-video-col">
      <div className="colsig-video-wrap">
        {/* Zoom-out wrapper — separate from the JS parallax on the video */}
        <div className="colsig-video-zoom">
          <video
            ref={videoRef}
            className="colsig-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="uploads/video4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="colsig-video-overlay" />
        {/* Subtle "live" indicator */}
        <div className="colsig-play-indicator">
          <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor" aria-hidden="true">
            <path d="M0 0l8 5-8 5V0z"/>
          </svg>
          <span>En mouvement</span>
        </div>
      </div>
      <p className="colsig-caption">— Atelier Ouaddi · Casablanca</p>
    </div>
  );

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

  const textCol = (
    <div className="colsig-text-col">
      <Reveal delay={0.3} y={25}>
        <span className="colsig-kicker">Collection Signature</span>
      </Reveal>

      <Reveal delay={0.5} y={25}>
        <h2 className="colsig-headline">
          L'art du sur-mesure,<br />
          <em>sans compromis.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.7} y={25}>
        <div className="colsig-body">
          <p>Tout commence par une visite chez vous. Nous mesurons l'espace, observons la lumière, écoutons vos habitudes de vie. De cette rencontre naissent les premières esquisses&nbsp;: trois propositions, dessinées à la main, pensées pour votre quotidien.</p>
          <p>Le bois est sélectionné planche par planche dans notre dépôt de Casablanca. Le cuir vient des tanneries de Fès, le velours de Côme, le laiton est brossé à la main dans notre atelier. Chaque matière est choisie, jamais imposée&nbsp;— vous validez chaque choix avant la mise en fabrication.</p>
          <p>En six à dix semaines, votre pièce prend forme. Notre équipe d'ébénistes, tapissiers et finisseurs assemble l'objet à la main, dans le silence concentré d'un atelier qui ne fabrique qu'une dizaine de pièces par mois. Puis nous l'installons chez vous&nbsp;— et nous y revenons, autant de fois qu'il le faut, pour que rien ne dépare.</p>
        </div>
      </Reveal>

      <Reveal delay={1.1} y={25}>
        <div className="colsig-hairline" />
        <a href="#realisations" className="colsig-btn">
          Découvrir la collection
          <svg className="colsig-btn-arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 5h12M8 1l4 4-4 4"/>
          </svg>
        </a>
      </Reveal>
    </div>
  );

  return (
    <section
      id="collection-signature"
      ref={sectionRef}
      className="colsig-section"
      style={{
        background:   "#C8B59E",
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
