function Hero() {
  return (
    <section id="accueil" data-screen-label="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Bg image */}
      <div className="absolute inset-0">
        <SmoothImg
          src={IMG.hero}
          alt="Intérieur raffiné Ouaddi Living Casablanca"
          className="scale-[1.02]"
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Vignette + gradient from bottom for text separation */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/40" />
        <div className="absolute inset-0 noise" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-container px-6 md:px-10 h-full flex flex-col">
          {/* Top kicker */}
          {M && (
            <M.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.35, ease: [0.2,0.7,0.2,1] }}
              className="pt-28 md:pt-32"
            >
              <span className="kicker text-bone/80">
                <span className="inline-block w-8 h-px bg-bronze align-middle mr-4 -translate-y-[2px]" />
                
              </span>
            </M.div>
          )}

          {/* Headline — pushed down, centered-left */}
          <div className="flex-1 flex items-end pb-12 md:pb-28">
            <div className="max-w-[1100px]">
              {M && (
                <>
                  <M.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.55, ease: [0.2,0.7,0.2,1] }}
                    className="display text-bone"
                    style={{ fontSize: "clamp(3.5rem, 9.5vw, 8rem)", letterSpacing: "-0.025em" }}
                  >
                    L'élégance,
                    <br />
                    <span className="italic text-bronze">sur mesure.</span>
                  </M.h1>

                  <M.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 0.95, ease: [0.2,0.7,0.2,1] }}
                    className="mt-10 max-w-[34ch] text-bone/80 text-[17px] md:text-[18px] leading-[1.6]"
                  >
                    Mobilier conçu, fabriqué et livré à Casablanca.
                    <br className="hidden md:block" />
                    <span className="block md:inline mt-2 md:mt-0 text-mist">Un atelier. Une signature. Des pièces pensées pour durer.</span>
                  </M.p>

                  <M.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 1.15, ease: [0.2,0.7,0.2,1] }}
                    className="mt-12 flex flex-wrap items-center gap-5 md:gap-8"
                  >
                    <BronzeButton href={WA_URL}>
                      <IconWhatsApp size={16} stroke={1.8} />
                      Discuter sur WhatsApp
                    </BronzeButton>
                    <GhostButton href="#collections">
                      Découvrir nos créations
                      <IconArrowRight className="arrow" size={16} stroke={1.6} />
                    </GhostButton>
                  </M.div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex md:flex-col absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-4 pointer-events-none">
          <span className="kicker text-bone/60">Découvrir</span>
          <div className="relative w-px h-16 overflow-hidden bg-bone/15">
            <div className="scroll-line-inner absolute left-0 top-0 w-full h-8 bg-bronze" />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
