function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank" rel="noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 rounded-full bg-bronze text-ink flex items-center justify-center shadow-[0_12px_30px_-8px_rgba(184,147,90,0.55)] hover:bg-[#C9A46E] transition-colors duration-500"
    >
      <span className="absolute inset-0 rounded-full bg-bronze/60 pulse-ring pointer-events-none" />
      <IconWhatsApp size={22} stroke={1.8} className="relative z-10" />
    </a>
  );
}
window.WhatsAppFloat = WhatsAppFloat;
