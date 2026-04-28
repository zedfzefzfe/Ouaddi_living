function Contact() {
  const [form, setForm] = React.useState({ name: "", phone: "", type: "", message: "" });
  const [sent, setSent]   = React.useState(false);
  const [touched, setTouched] = React.useState({});

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const valid =
    form.name.trim().length > 1 &&
    form.phone.trim().length > 5 &&
    form.type.length > 0 &&
    form.message.trim().length > 4;

  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, type: true, message: true });
    if (!valid) return;

    const text =
      `Nouvelle demande — Ouaddi Living\n\n` +
      `Nom : ${form.name}\n` +
      `Téléphone : ${form.phone}\n` +
      `Projet : ${form.type}\n\n` +
      `Message :\n${form.message}`;

    window.open(
      `https://wa.me/212687578457?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setSent(true);
  };

  const types = ["Salon", "Chambre", "Salle à manger", "Sur-mesure", "Autre"];

  return (
    <section
      id="contact"
      data-screen-label="contact"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <SmoothImg
          src="uploads/contact-bg.jpg"
          alt=""
          className="scale-[1.03]"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#0B0B0B]/75" />
        {/* Subtle noise */}
        <div className="absolute inset-0 noise" />
      </div>

      {/* All existing content sits above the image */}
      <div className="relative z-10 mx-auto max-w-container px-6 md:px-10">

      <div className="max-w-3xl mx-auto text-center">
        <Reveal><Kicker>Contact</Kicker></Reveal>
        <Reveal delay={0.08}>
          <h2 className="display text-bone mt-5" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Parlons de <span className="italic text-bronze">votre projet.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-mist text-[16px] md:text-[17px] leading-[1.7]">
            Nous répondons sous 24 heures. Plus vous nous racontez, mieux nous pouvons
            imaginer.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-16 md:mt-20 max-w-2xl mx-auto">
        {sent ? (
          <div className="text-center py-16">
            <div className="mx-auto w-14 h-14 rounded-full border border-bronze text-bronze flex items-center justify-center mb-6">
              <IconCheck size={22} stroke={1.8} />
            </div>
            <h3 className="font-serif text-bone text-[32px] leading-tight">
              Merci, <span className="italic text-bronze">{form.name.split(" ")[0] || "à très vite"}</span>.
            </h3>
            <p className="mt-4 text-mist text-[15.5px] leading-[1.7] max-w-md mx-auto">
              Votre demande a bien été reçue. Un membre de l'atelier vous contactera dans
              les prochaines vingt-quatre heures.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name:"", phone:"", type:"", message:"" }); setTouched({}); }}
              className="mt-10 text-bronze border-b border-bronze/40 hover:border-bronze pb-1 text-[12px] tracking-[0.22em] uppercase"
            >
              Envoyer une autre demande
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-8">
            <div>
              <label className="oll-label" htmlFor="cf-name">Nom complet</label>
              <input id="cf-name" className="oll-input" value={form.name} onChange={update("name")}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                placeholder="Votre nom" />
            </div>
            <div>
              <label className="oll-label" htmlFor="cf-phone">Téléphone</label>
              <input id="cf-phone" type="tel" className="oll-input" value={form.phone} onChange={update("phone")}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                placeholder="+212 ..." />
            </div>
            <div>
              <label className="oll-label block mb-3">Type de projet</label>
              <div className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, type: t }))}
                    className={`px-4 py-2 text-[12.5px] tracking-[0.12em] uppercase border transition-colors duration-500 ${
                      form.type === t
                        ? "border-bronze text-ink bg-bronze"
                        : "border-bone/20 text-bone/85 hover:border-bronze hover:text-bronze"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="oll-label" htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" rows={4} className="oll-input resize-none" value={form.message}
                onChange={update("message")}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                placeholder="Pièce, dimensions, matières, atmosphère..." />
            </div>

            <div className="pt-4 flex flex-col items-center gap-4">
              <BronzeButton type="submit" onClick={submit} className="w-full md:w-auto justify-center">
                Envoyer ma demande
                <IconArrowRight size={16} stroke={1.8} />
              </BronzeButton>
              {!valid && (touched.name || touched.phone || touched.message) && (
                <span className="text-mist text-[12.5px]">Merci de renseigner tous les champs.</span>
              )}
            </div>
          </form>
        )}
      </Reveal>

      {/* Divider + WhatsApp direct */}
      <div className="mt-16 md:mt-24 flex flex-col items-center gap-6">
        <div className="flex items-center gap-5 w-full max-w-md">
          <span className="flex-1 h-px bg-bone/15" />
          <span className="text-mist text-[12px] tracking-[0.28em] uppercase">ou</span>
          <span className="flex-1 h-px bg-bone/15" />
        </div>
        <a
          href={WA_URL}
          target="_blank" rel="noreferrer"
          className="gold-underline inline-flex items-center gap-3 text-bone text-[15.5px]"
        >
          <IconWhatsApp size={17} stroke={1.7} className="text-bronze" />
          Contactez-nous directement sur WhatsApp
        </a>
      </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
