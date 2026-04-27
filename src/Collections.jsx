const CAROUSEL_CARDS = [
  {
    id: "salons-1",
    title: "Salons",
    desc: "Canapés · Fauteuils · Tables basses",
    img: "uploads/1.jpg",
  },
  {
    id: "chambres-1",
    title: "Chambres",
    desc: "Lits · Têtes de lit · Dressings",
    img: "uploads/2.jpg",
  },
  {
    id: "sam-1",
    title: "Salle à manger",
    desc: "Tables · Buffets · Assises",
    img: "uploads/3.jpg",
  },
  {
    id: "sur-mesure-1",
    title: "Sur-mesure",
    desc: "Pièces uniques dessinées pour vous",
    img: "uploads/4.jpg",
  },
  {
    id: "salons-2",
    title: "Salons",
    desc: "Canapés · Fauteuils · Tables basses",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "chambres-2",
    title: "Chambres",
    desc: "Lits · Têtes de lit · Dressings",
    img: "https://images.unsplash.com/photo-1611004619928-e30143feaa3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sam-2",
    title: "Salle à manger",
    desc: "Tables · Buffets · Assises",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sur-mesure-2",
    title: "Sur-mesure",
    desc: "Pièces uniques dessinées pour vous",
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
  },
];

function Collections() {
  const trackRef = React.useRef(null);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const injectKeyframe = () => {
      // halfWidth = width of the original 8 cards (the first half of the doubled track)
      const halfWidth = track.scrollWidth / 2;
      let styleEl = document.getElementById("coll-carousel-kf");
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = "coll-carousel-kf";
        document.head.appendChild(styleEl);
      }
      styleEl.textContent = [
        "@keyframes scroll-carousel {",
        "  from { transform: translateX(0); }",
        "  to   { transform: translateX(-" + halfWidth + "px); }",
        "}",
      ].join("\n");
    };

    // Wait one tick so the flex layout has painted and scrollWidth is accurate
    const raf = requestAnimationFrame(injectKeyframe);
    window.addEventListener("resize", injectKeyframe, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", injectKeyframe);
    };
  }, []);

  // Duplicate for seamless infinite loop
  const allCards = [...CAROUSEL_CARDS, ...CAROUSEL_CARDS];

  return (
    <section id="collections" className="collections-section">

      {/* ── Section header ───────────────────────────────────────── */}
      <div className="collections-header">
        <span className="collections-kicker-warm">Nos univers</span>
        <h2 className="collections-headline">
          Des créations pour <em>chaque espace.</em>
        </h2>
      </div>

      {/* ── Carousel ─────────────────────────────────────────────── */}
      <div className="collections-carousel-wrapper">
        <div ref={trackRef} className="collections-carousel-track">
          {allCards.map((card, i) => (
            <a
              key={card.id + "-" + i}
              href="#realisations"
              className="coll-car-card"
              aria-label={card.title}
            >
              <img src={card.img} alt={card.title} loading="lazy" />
              <div className="coll-car-overlay" />
              <div className="coll-car-tint" />
              <div className="coll-car-info">
                <span className="coll-car-title">{card.title}</span>
                <span className="coll-car-desc">{card.desc}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Hint ─────────────────────────────────────────────────── */}
      <p className="collections-hint">
        <span>Survolez pour explorer · Glissez pour parcourir</span>
      </p>

    </section>
  );
}

window.Collections = Collections;
