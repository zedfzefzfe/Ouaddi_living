// Motion primitives & utilities.
const { motion, AnimatePresence, useScroll, useTransform, useMotionValue } = window.Motion || window.FramerMotion || {};

// FramerMotion UMD exposes as `Motion` global. Fallback guard:
const M = (window.Motion || {}).motion || (window.FramerMotion || {}).motion;
const AP = (window.Motion || {}).AnimatePresence || (window.FramerMotion || {}).AnimatePresence;

// Scroll reveal — fade + y translate
const Reveal = ({ children, delay = 0, y = 24, className = "", as = "div", once = true, amount = 0.25 }) => {
  const Tag = M ? M[as] : as;
  if (!Tag) return <div className={className}>{children}</div>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </Tag>
  );
};

// Stagger container + item
const Stagger = ({ children, className = "", stagger = 0.1, delay = 0, amount = 0.25 }) => {
  if (!M) return <div className={className}>{children}</div>;
  return (
    <M.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </M.div>
  );
};

const StaggerItem = ({ children, className = "", y = 24, as = "div" }) => {
  const Tag = M ? M[as] : as;
  if (!Tag) return <div className={className}>{children}</div>;
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2,0.7,0.2,1] } },
      }}
    >
      {children}
    </Tag>
  );
};

// Lazy/fade image
const SmoothImg = ({ src, alt = "", className = "", aspect = null, ...rest }) => {
  const ref = React.useRef(null);
  const onLoad = (e) => e.currentTarget.classList.add("loaded");
  const style = aspect ? { aspectRatio: aspect } : undefined;
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={onLoad}
      className={`reveal w-full h-full object-cover ${className}`}
      style={style}
      {...rest}
    />
  );
};

// Kicker
const Kicker = ({ children, className = "" }) => (
  <span className={`kicker inline-block ${className}`}>{children}</span>
);

// Section wrapper — consistent padding + container
const Section = ({ id, children, className = "", container = true }) => (
  <section
    id={id}
    data-screen-label={id}
    className={`relative py-20 md:py-32 ${className}`}
  >
    {container ? (
      <div className="mx-auto max-w-container px-6 md:px-10">{children}</div>
    ) : children}
  </section>
);

// Buttons
const BronzeButton = ({ href, children, onClick, type = "button", className = "" }) => {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex items-center gap-3 bg-bronze hover:bg-[#C9A46E] text-ink px-7 py-4 text-[13px] tracking-[0.18em] uppercase transition-colors duration-500 ${className}`}
    >
      {children}
    </Tag>
  );
};

const GhostButton = ({ href, children, onClick, className = "" }) => {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noreferrer" : undefined}
      className={`btn-ghost group inline-flex items-center gap-3 text-bone/90 hover:text-bone border-b border-bone/25 hover:border-bronze pb-2 text-[13px] tracking-[0.18em] uppercase transition-colors duration-500 ${className}`}
    >
      {children}
    </Tag>
  );
};

Object.assign(window, { M, AP, Reveal, Stagger, StaggerItem, SmoothImg, Kicker, Section, BronzeButton, GhostButton });
