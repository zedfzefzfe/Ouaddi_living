const NAV_LINKS = [
  { label: "Accueil",       href: "#accueil" },
  { label: "Collections",   href: "#collections" },
  { label: "Processus",     href: "#processus" },
  { label: "Réalisations",  href: "#realisations" },
  { label: "Contact",       href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden,   setHidden]   = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);

      if (y <= 80) {
        setHidden(false);          // always visible at the top
      } else if (y > lastY + 6) {
        setHidden(true);           // scrolling down  → slide up
      } else if (y < lastY - 6) {
        setHidden(false);          // scrolling up    → slide down
      }

      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 ${
          scrolled ? "nav-blur" : "bg-transparent"
        }`}
        style={{
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 400ms cubic-bezier(0.2,0.7,0.2,1), background-color 500ms, backdrop-filter 500ms",
        }}
      >
        <div className="mx-auto max-w-container px-6 md:px-10">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <a href="#accueil" className="select-none">
              <img src="uploads/logo.png" alt="Ouaddi Living" className="h-36 md:h-40 w-auto object-contain" />
            </a>

            {/* Center nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="gold-underline text-[12.5px] tracking-[0.22em] uppercase text-bone/85 hover:text-bone transition-colors duration-500"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Contactez nous (desktop) */}
            <div className="hidden lg:flex">
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[11.5px] tracking-[0.22em] uppercase font-medium overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #c9a96e 0%, #e8c97a 50%, #c9a96e 100%)",
                  color: "#1a1610",
                  boxShadow: "0 0 18px rgba(201,169,110,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, #e8c97a 0%, #f5dfa0 50%, #e8c97a 100%)" }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 flex-shrink-0">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span className="relative z-10">Contactez&#8202;nous</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-bone p-2 -mr-2"
              aria-label="Ouvrir le menu"
            >
              <IconMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {AP && (
        <AP>
          {open && (
            <M.div
              key="overlay"
              className="fixed inset-0 z-50 bg-ink flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2,0.7,0.2,1] }}
            >
              <div className="flex items-center justify-end h-28 px-6 md:px-10">
                <button onClick={close} aria-label="Fermer" className="text-bone p-2 -mr-2">
                  <IconX size={24} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center px-8">
                <M.ul
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
                  className="space-y-6"
                >
                  {NAV_LINKS.map((l) => (
                    <M.li
                      key={l.href}
                      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.6, ease: [0.2,0.7,0.2,1] }}
                    >
                      <a
                        href={l.href}
                        onClick={close}
                        className="block font-serif text-[44px] leading-[1.05] tracking-tight text-bone"
                      >
                        {l.label}
                      </a>
                    </M.li>
                  ))}
                </M.ul>

                <M.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="mt-12"
                >
                  <a
                    href="#contact"
                    onClick={close}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[12px] tracking-[0.22em] uppercase font-medium"
                    style={{
                      background: "linear-gradient(135deg, #c9a96e 0%, #e8c97a 50%, #c9a96e 100%)",
                      color: "#1a1610",
                      boxShadow: "0 0 22px rgba(201,169,110,0.4), inset 0 1px 0 rgba(255,255,255,0.18)",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Contactez&#8202;nous
                  </a>
                </M.div>
              </div>

              <div className="px-8 pb-10 pt-6 border-t border-bone/10 text-mist text-[13px]">
                Casablanca · Maroc
              </div>
            </M.div>
          )}
        </AP>
      )}
    </>
  );
}

window.Nav = Nav;
