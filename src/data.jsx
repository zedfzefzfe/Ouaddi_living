// Shared data: imagery, copy, contact info.

const WA_NUMBER = "212687578457";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Bonjour Ouaddi Living, j'aimerais discuter d'un projet.")}`;
const INSTAGRAM_URL = "https://instagram.com/ouaddi_living";

// Unsplash — dark, editorial, warm interior photography
const IMG = {
  hero:        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=80",
  intro:       "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
  introA:      "https://images.unsplash.com/photo-1611004619928-e30143feaa3e?auto=format&fit=crop&w=1200&q=80",
  introB:      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
  introC:      "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80",

  collSalon:   "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
  collChambre: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
  collSAM:     "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=80",
  collMesure:  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",

  folio: [
    { id: "anfa",      title: "Villa Anfa",                 neighborhood: "Anfa Supérieur",    span: "portrait",
      img: "uploads/1.jpg" },
    { id: "bourgogne", title: "Appartement Bourgogne",      neighborhood: "Bourgogne",         span: "landscape",
      img: "uploads/2.jpg" },
    { id: "ain-diab",  title: "Résidence Aïn Diab",         neighborhood: "Aïn Diab",          span: "landscape",
      img: "uploads/3.jpg" },
    { id: "gauthier",  title: "Penthouse Gauthier",         neighborhood: "Gauthier",          span: "portrait",
      img: "uploads/4.jpg" },
    { id: "palmier",   title: "Duplex Palmier",             neighborhood: "Palmier",           span: "landscape",
      img: "uploads/5.jpg" },
    { id: "californie",title: "Villa Californie",           neighborhood: "Californie",        span: "portrait",
      img: "uploads/6.jpg" },
    { id: "racine",    title: "Atelier Racine",             neighborhood: "Racine",            span: "landscape",
      img: "uploads/71.jpg" },
    { id: "bouskoura", title: "Résidence Bouskoura Golf",   neighborhood: "Bouskoura",         span: "landscape",
      img: "uploads/8.jpg" },
  ],
};

const COLLECTIONS = [
  { id: "salons",      title: "Salons",          caption: "Canapés, fauteuils, tables basses" },
  { id: "chambres",    title: "Chambres",        caption: "Lits, têtes de lit, dressings" },
  { id: "sam",         title: "Salle à manger",  caption: "Tables, buffets, assises" },
  { id: "sur-mesure",  title: "Sur-mesure",      caption: "Pièces uniques dessinées pour vous" },
];

const STEPS = [
  { n: "01", t: "Consultation",
    d: "Rencontre à votre domicile ou au showroom. Nous prenons les mesures, comprenons l'usage et l'atmosphère recherchée." },
  { n: "02", t: "Conception",
    d: "Planches de style, croquis et rendus 3D. Choix des essences, textiles et finitions avant validation définitive." },
  { n: "03", t: "Fabrication",
    d: "Exécution dans notre atelier à Casablanca par des artisans qualifiés. Chaque assemblage est vérifié à la main." },
  { n: "04", t: "Livraison",
    d: "Installation chez vous avec soin, mise en place et ajustements. Garantie et suivi à vie de vos pièces." },
];

const TESTIMONIALS = [
  { q: "Nous cherchions un canapé à la hauteur de notre salon : Ouaddi Living a compris l'esprit de la maison mieux que nous-mêmes. Le résultat dépasse ce que nous imaginions.",
    name: "Leïla B.", hood: "Anfa Supérieur, Casablanca" },
  { q: "De la première esquisse à la livraison, tout a été mené avec une précision remarquable. Le travail du bois et des finitions est d'une qualité rare au Maroc.",
    name: "Mehdi K.",  hood: "Gauthier, Casablanca" },
  { q: "Une équipe qui écoute, propose, raffine. Ils ont dessiné pour nous une table en noyer massif qui deviendra, je l'espère, une pièce de famille.",
    name: "Sophia & Karim A.", hood: "Aïn Diab, Casablanca" },
];

const CONTACT = {
  address: "Boulevard Almaz, Casablanca 20232, Maroc",
  phones: ["+212 687 578 457", "+212 610 245 056"],
  hours: [
    { d: "Lundi – Vendredi", h: "10h00 – 19h30" },
    { d: "Samedi",           h: "10h00 – 18h00" },
    { d: "Dimanche",         h: "Sur rendez-vous" },
  ],
  instagram: "@ouaddi_living",
};

Object.assign(window, {
  WA_NUMBER, WA_URL, INSTAGRAM_URL,
  IMG, COLLECTIONS, STEPS, TESTIMONIALS, CONTACT,
});
