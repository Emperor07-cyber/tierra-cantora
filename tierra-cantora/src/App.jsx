import React, { useState } from "react";

// ---------------------------------------------------------------------------
// BRAZOS VALLEY RANCH & CREAMERY — single-file React site
// A working beef-and-dairy ranch in the Guanajuato highlands near San Miguel de Allende, Mexico
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// YOUR OWN PHOTOS
// Drop your image files into a `public/images/` folder in your project
// (Vite, Next.js, and Create React App all serve `public/` at the site root),
// using these exact file names — or edit the paths below to match your own.
// Any photo not found simply shows a labeled placeholder (see the Photo
// component below) instead of breaking the build, so you can fill these in
// one at a time.
// ---------------------------------------------------------------------------
const IMG = {
  hero: "/images/hero.jpg",             // wide pasture/landscape shot for the top banner
  barn: "/images/barn.jpg",             // the main barn or farmhouse
  roundup: "/images/roundup.jpg",       // working cattle / horseback banner, "the ranch year"
  dustyDrive: "/images/dusty-drive.jpg",// the road/drive into the ranch
  beef1: "/images/beef-1.jpg",          // Angus cattle on pasture
  beef2: "/images/beef-2.jpg",          // breeding stock / bulls
  beef3: "/images/beef-3.jpg",          // a single cow, close up
  dairy1: "/images/dairy-1.jpg",        // Jerseys in the milking barn
  dairy2: "/images/dairy-2.jpg",        // dairy herd on pasture
  dairy3: "/images/dairy-3.jpg",        // a single dairy cow, close up
  steak: "/images/steak.jpg",           // beef product shot
  milk: "/images/milk.jpg",             // milk product shot
  logo: "/images/logo.jpg",             // ranch seal / emblem graphic
  stayBarn: "/images/stay-barn.jpg",    // Barn Room guest stay
  stayRiver: "/images/stay-river.jpg",  // River Cottage guest stay
  stayLoft: "/images/stay-loft.jpg",    // Hay Loft guest stay
};

const SEASONS = [
  {
    id: "spring",
    label: "Spring",
    range: "February — April",
    title: "Calving, twice over",
    copy:
      "The Angus herd calves first, out on the highland pasture. Three weeks later the Jerseys start in the barn lot, where we can keep a closer eye on first-calf heifers. Between the two, someone's up every night for about ten weeks straight.",
  },
  {
    id: "summer",
    label: "Summer",
    range: "May — August",
    title: "Haying and the milking rhythm",
    copy:
      "We cut and bale coastal bermuda off the bottomland for winter feed while the milk herd holds to its twice-daily schedule regardless of heat, harvest, or holidays. The creamery runs hardest this time of year, turning surplus spring milk into aged cheese.",
  },
  {
    id: "fall",
    label: "Fall",
    range: "September — November",
    title: "Weaning and shipping",
    copy:
      "Calves are weaned, preconditioned, and either sold at the regional livestock market in Querétaro or kept back to finish on grass. It's loud for about a month, then the pastures go quiet and the first cool fronts finally break the heat.",
  },
  {
    id: "winter",
    label: "Winter",
    range: "December — January",
    title: "Feeding and the aging room",
    copy:
      "Hay we put up in June gets fed back out most mornings. It's our slowest stretch in the pasture but our busiest in the creamery, turning and checking the wheels that will be ready to sell by spring.",
  },
];

const PRODUCTS = [
  {
    name: "Grass-finished beef",
    image: IMG.steak,
    copy:
      "Registered Black Angus, grazed on highland grass along the Río Laja and finished without a feedlot. Sold by the quarter, half, or whole, or by the cut through our farm store.",
  },
  {
    name: "Farmstead Jersey milk",
    image: IMG.milk,
    copy:
      "Cream-line, non-homogenized milk from a 40-head Jersey herd, bottled within a day of milking. Available at the farm store and at three farmers markets around San Miguel de Allende.",
  },
  {
    name: "Aged farmstead cheese",
    image: IMG.dairy3,
    copy:
      "A washed-rind and a clothbound cheddar, both made from our own herd's milk and aged in the room behind the milking barn for six to fourteen months.",
  },
];

const VOICES = [
  {
    quote:
      "We drive out from San Miguel every other Saturday just for the milk. Nothing from a store tastes like it.",
    name: "M. Delgado",
    context: "Farm store customer",
  },
  {
    quote:
      "Bought a quarter beef last fall and we're already back on the list for spring. Freezer's never been this good.",
    name: "T. Whitfield",
    context: "Beef customer",
  },
  {
    quote:
      "Our kids ask to go back every summer. Watching the milking happen, up close, changed how they think about food.",
    name: "R. Alvarez",
    context: "Farm-stay guest",
  },
];

const FAQS = [
  {
    q: "How does the beef share program work?",
    a: "Reserve a quarter, half, or whole animal ahead of our fall processing window. You'll get a cut sheet to customize your order, and the beef is cut, wrapped, and frozen by a licensed processor in Querétaro, about 40 minutes from the ranch.",
  },
  {
    q: "Is the milk pasteurized?",
    a: "Yes — vat-pasteurized at low heat to protect the flavor and cream line, then bottled on-site. It is not homogenized, so cream will rise to the top.",
  },
  {
    q: "Can we visit without buying anything?",
    a: "The farm store and viewing window into the milking barn are open Thursday through Saturday, 9am to 4pm, no purchase required. Guided pasture tours run on Saturday mornings by reservation.",
  },
  {
    q: "Do you ship beef or dairy products?",
    a: "Beef ships frozen anywhere in México. Dairy products are sold on-site and at farmers markets only, since we don't pasteurize for long-distance shipping.",
  },
];

function Photo({ src, alt, style }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2a2018",
          color: "#c9902f",
          fontFamily: "Work Sans, sans-serif",
          fontSize: 12,
          textAlign: "center",
          padding: 12,
          ...style,
        }}
      >
        Add photo: {alt}
      </div>
    );
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} style={style} />;
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SeasonWheel({ active, onSelect }) {
  return (
    <svg viewBox="0 0 360 360" className="season-wheel" role="img" aria-label="Seasonal cycle">
      <circle cx="180" cy="180" r="150" fill="none" stroke="#3a3226" strokeWidth="1" />
      {SEASONS.map((s, i) => {
        const angle = (i / SEASONS.length) * Math.PI * 2 - Math.PI / 2;
        const x = 180 + 150 * Math.cos(angle);
        const y = 180 + 150 * Math.sin(angle);
        const isActive = active === i;
        return (
          <g key={s.id} onClick={() => onSelect(i)} style={{ cursor: "pointer" }}>
            <line x1="180" y1="180" x2={x} y2={y} stroke={isActive ? "#c9902f" : "#3a3226"} strokeWidth={isActive ? 2 : 1} />
            <circle cx={x} cy={y} r={isActive ? 30 : 24} fill={isActive ? "#a1572f" : "#241d15"} stroke="#c9902f" strokeWidth={isActive ? 1.5 : 1} />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fill="#f1e8d6" fontFamily="Fraunces, serif">
              {s.label}
            </text>
          </g>
        );
      })}
      <circle cx="180" cy="180" r="46" fill="#181209" stroke="#c9902f" strokeWidth="1" />
      <text x="180" y="176" textAnchor="middle" fontSize="10" fill="#c9902f" letterSpacing="1">
        the ranch
      </text>
      <text x="180" y="192" textAnchor="middle" fontSize="10" fill="#c9902f" letterSpacing="1">
        year
      </text>
    </svg>
  );
}

export default function TierraCantoraSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [season, setSeason] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const navLinks = [
    { href: "#story", label: "our story" },
    { href: "#herds", label: "the herds" },
    { href: "#year", label: "the ranch year" },
    { href: "#products", label: "farm store" },
    { href: "#stay", label: "stay with us" },
    { href: "#visit", label: "visit" },
  ];

  return (
    <div className="ranch-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@400;500;600&display=swap');

        .ranch-root {
          --bg-dark: #181209;
          --bg-dark-2: #201808;
          --panel: #211a10;
          --parchment: #efe6d2;
          --parchment-2: #e4d8ba;
          --ink: #241d15;
          --ink-soft: #4c4230;
          --rust: #a1572f;
          --gold: #c9902f;
          --sage: #7c8768;
          --hair: #3a3226;
          font-family: 'Work Sans', sans-serif;
          background: var(--parchment);
          color: var(--ink);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
        .ranch-root * { box-sizing: border-box; }
        .ranch-root h1, .ranch-root h2, .ranch-root h3, .ranch-root .display {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .ranch-root a { color: inherit; text-decoration: none; }
        .ranch-root img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

        /* NAV */
        .nav { position: absolute; top: 0; left: 0; right: 0; z-index: 20; padding: 26px 0; }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .brand { display: flex; align-items: baseline; gap: 8px; color: var(--parchment); }
        .brand-mark { font-family: 'Fraunces', serif; font-size: 19px; font-weight: 600; letter-spacing: 0.01em; }
        .brand-sub { font-size: 11px; color: var(--gold); letter-spacing: 0.08em; }
        .nav-links { display: flex; gap: 28px; }
        .nav-links a { color: var(--parchment); font-size: 14px; opacity: 0.88; transition: opacity .15s; }
        .nav-links a:hover { opacity: 1; }
        .nav-toggle { display: none; background: none; border: none; color: var(--parchment); }
        .nav-cta { border: 1px solid var(--gold); color: var(--parchment); padding: 9px 18px; border-radius: 2px; font-size: 13.5px; white-space: nowrap; }
        @media (max-width: 960px) {
          .nav-links, .nav-cta.desktop-only { display: none; }
          .nav-toggle { display: block; }
        }

        .mobile-menu { position: fixed; inset: 0; background: var(--bg-dark); z-index: 40; display: flex; flex-direction: column; padding: 26px 28px; overflow-y: auto; }
        .mobile-menu a { color: var(--parchment); font-family: 'Fraunces', serif; font-size: 24px; padding: 12px 0; border-bottom: 1px solid var(--hair); }

        /* HERO */
        .hero { position: relative; min-height: 92vh; display: flex; align-items: flex-end; overflow: hidden; }
        .hero-photo { position: absolute; inset: 0; }
        .hero-photo::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(20,15,8,0.35) 0%, rgba(20,15,8,0.25) 40%, rgba(15,11,6,0.9) 100%);
        }
        .hero-content { position: relative; z-index: 5; padding: 0 28px 90px; width: 100%; }
        .hero-title { color: var(--parchment); font-size: clamp(42px, 7.4vw, 92px); line-height: 0.98; max-width: 900px; text-shadow: 0 2px 24px rgba(0,0,0,0.35); }
        .hero-tag { color: var(--parchment-2); font-size: 17px; max-width: 480px; margin-top: 22px; }
        .hero-row { display: flex; gap: 16px; margin-top: 34px; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 2px; font-size: 14.5px; cursor: pointer; border: 1px solid transparent; }
        .btn-primary { background: var(--rust); color: var(--parchment); }
        .btn-outline { border-color: rgba(239,230,210,0.5); color: var(--parchment); background: transparent; }
        .hero-meta { position: absolute; bottom: 26px; right: 28px; z-index: 5; color: var(--parchment-2); font-size: 12.5px; text-align: right; }
        @media (max-width: 640px) { .hero-meta { display: none; } }

        /* SECTIONS */
        section { padding: 104px 0; }
        .section-dark { background: var(--bg-dark); color: var(--parchment); }
        .kicker { color: var(--rust); font-size: 13px; letter-spacing: 0.02em; margin-bottom: 14px; }
        .section-dark .kicker { color: var(--gold); }
        h2.section-title { font-size: clamp(30px, 4vw, 44px); max-width: 640px; }

        /* STORY */
        .story-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: center; }
        .story-copy p { color: var(--ink-soft); font-size: 16px; max-width: 48ch; margin: 18px 0 0; }
        .story-photo { aspect-ratio: 4/5; overflow: hidden; border: 1px solid rgba(36,29,21,0.15); }
        @media (max-width: 820px) { .story-grid { grid-template-columns: 1fr; } .story-photo { aspect-ratio: 16/9; } }

        /* HERDS */
        .herd-block { margin-top: 56px; }
        .herd-block + .herd-block { margin-top: 72px; }
        .herd-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 20px; flex-wrap: wrap; margin-bottom: 26px; }
        .herd-head h3 { font-size: 26px; color: var(--parchment); }
        .herd-head p { color: #b9ad93; font-size: 14.5px; max-width: 44ch; margin-top: 8px; }
        .photo-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .photo-card { aspect-ratio: 4/5; overflow: hidden; position: relative; }
        .photo-card .cap { position: absolute; left: 0; right: 0; bottom: 0; padding: 14px 16px; background: linear-gradient(0deg, rgba(10,8,4,0.85), transparent); color: var(--parchment); font-size: 13px; }
        @media (max-width: 760px) { .photo-row { grid-template-columns: 1fr 1fr; } .photo-row > :last-child { grid-column: span 2; } }

        /* SEASON */
        .year-grid { display: grid; grid-template-columns: 340px 1fr; gap: 56px; align-items: center; margin-top: 50px; }
        .season-wheel { width: 100%; max-width: 320px; }
        .season-detail .range { color: var(--rust); font-size: 13px; letter-spacing: 0.03em; }
        .season-detail h3 { font-size: 28px; margin-top: 10px; }
        .season-detail p { color: var(--ink-soft); font-size: 16px; margin-top: 16px; max-width: 54ch; }
        .year-banner { margin-top: 56px; aspect-ratio: 21/8; overflow: hidden; }
        @media (max-width: 820px) { .year-grid { grid-template-columns: 1fr; } }

        /* PRODUCTS */
        .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 52px; }
        .product-card { border: 1px solid var(--hair); }
        .product-photo { aspect-ratio: 5/4; overflow: hidden; }
        .product-body { padding: 22px 24px 26px; background: var(--bg-dark-2); }
        .product-body h3 { color: var(--parchment); font-size: 19px; }
        .product-body p { color: #b9ad93; font-size: 14.5px; margin-top: 10px; }
        @media (max-width: 900px) { .product-grid { grid-template-columns: 1fr; } }

        /* STAY */
        .stay-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 52px; }
        .stay-card { border: 1px solid rgba(36,29,21,0.15); }
        .stay-image { aspect-ratio: 4/3; overflow: hidden; }
        .stay-body { padding: 22px 24px 26px; }
        .stay-body h3 { font-size: 19px; }
        .stay-detail { color: var(--rust); font-size: 12.5px; margin-top: 6px; }
        .stay-body p { color: var(--ink-soft); font-size: 14.5px; margin-top: 10px; }
        @media (max-width: 900px) { .stay-grid { grid-template-columns: 1fr; } }

        /* VOICES */
        .voice-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 44px; margin-top: 52px; }
        .voice blockquote { font-family: 'Fraunces', serif; font-size: 19px; line-height: 1.35; margin: 0; color: var(--ink); }
        .voice cite { display: block; margin-top: 18px; font-style: normal; font-size: 13.5px; color: var(--ink-soft); }
        @media (max-width: 820px) { .voice-grid { grid-template-columns: 1fr; } }

        /* FAQ */
        .faq-item { border-top: 1px solid var(--hair); padding: 22px 0; cursor: pointer; }
        .faq-item:last-child { border-bottom: 1px solid var(--hair); }
        .faq-q { display: flex; justify-content: space-between; align-items: center; font-family: 'Fraunces', serif; font-size: 18px; color: var(--parchment); }
        .faq-a { color: #b9ad93; font-size: 14.5px; margin-top: 12px; max-width: 60ch; }

        /* VISIT */
        .visit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; margin-top: 46px; align-items: stretch; }
        .visit-row { display: flex; justify-content: space-between; padding: 16px 0; border-top: 1px solid rgba(36,29,21,0.15); font-size: 14.5px; }
        .visit-row:last-child { border-bottom: 1px solid rgba(36,29,21,0.15); }
        .visit-label { color: var(--ink-soft); }
        .visit-photo { border: 1px solid rgba(36,29,21,0.2); overflow: hidden; min-height: 260px; }
        @media (max-width: 820px) { .visit-grid { grid-template-columns: 1fr; } }

        /* FOOTER */
        footer { background: var(--bg-dark); color: #a89b7d; padding: 56px 0 34px; }
        .footer-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; flex-wrap: wrap; }
        .footer-cols { display: flex; gap: 60px; flex-wrap: wrap; }
        .footer-cols h4 { color: var(--parchment); font-size: 12.5px; letter-spacing: 0.04em; margin-bottom: 14px; font-family: 'Work Sans', sans-serif; font-weight: 600; }
        .footer-cols a { display: block; font-size: 14px; padding: 5px 0; }
        .footer-bottom { margin-top: 60px; padding-top: 22px; border-top: 1px solid var(--hair); display: flex; justify-content: space-between; font-size: 12.5px; flex-wrap: wrap; gap: 10px; }
      `}</style>

      {/* NAV */}
      <div className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            <span className="brand-mark">Rancho y Lácteos Tierra Cantora</span>
          </div>
          <div className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <a href="#products" className="nav-cta desktop-only">shop the farm store</a>
          <button className="nav-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <IconMenu />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="nav-toggle" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <IconClose />
            </button>
          </div>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#products" onClick={() => setMenuOpen(false)} style={{ color: "#c9902f" }}>shop the farm store</a>
        </div>
      )}

      {/* HERO */}
      <div className="hero">
        <div className="hero-photo">
          <Photo src={IMG.hero} alt="Cattle grazing green pasture at Rancho Tierra Cantora" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Rancho y Lácteos Tierra Cantora</h1>
          <p className="hero-tag">
            Six hundred acres in the highlands outside San Miguel de Allende, Guanajuato — raising registered
            Black Angus for beef and a small Jersey herd for milk and farmstead cheese, since 1948.
          </p>
          <div className="hero-row">
            <a href="#products" className="btn btn-primary">Shop the farm store</a>
            <a href="#story" className="btn btn-outline">Read our story</a>
          </div>
        </div>
        <div className="hero-meta">
          20°54'N, 100°44'W<br />
          San Miguel de Allende, Guanajuato
        </div>
      </div>

      {/* STORY */}
      <section id="story">
        <div className="wrap story-grid">
          <div className="story-copy">
            <img
              src={IMG.logo}
              alt="Rancho y Lácteos Tierra Cantora seal"
              style={{ width: 120, height: "auto", marginBottom: 20, borderRadius: 4 }}
            />
            <div className="kicker">Our story</div>
            <h2 className="section-title">Three generations, two kinds of cattle</h2>
            <p>
              My grandfather bought this stretch of land along the Río Laja in 1948 to run beef cattle. My mother
              added a handful of Jersey cows in the seventies to keep the family in milk and butter, and
              never stopped — the small dairy operation is still running the same barn she built.
            </p>
            <p>
              Today we split our days between the two: an Angus herd finished entirely on highland
              grass, and a 40-cow Jersey dairy milked twice a day, every day, turned into raw-bottled milk
              and aged farmstead cheese in the room behind the parlor.
            </p>
            <p>
              We sell almost everything direct — through the farm store, three area farmers markets, and a
              beef share program most families join for years running.
            </p>
          </div>
          <div className="story-photo">
            <Photo src={IMG.barn} alt="The original dairy barn at Rancho Tierra Cantora" />
          </div>
        </div>
      </section>

      {/* HERDS */}
      <section id="herds" className="section-dark">
        <div className="wrap">
          <div className="kicker">The herds</div>
          <h2 className="section-title">A beef herd and a dairy herd, run side by side</h2>

          <div className="herd-block">
            <div className="herd-head">
              <div>
                <h3>Black Angus, for beef</h3>
                <p>About 180 head, grazed in rotation across the highland pastures along the Río Laja and finished on grass alone — no feedlot, no grain ration at the end.</p>
              </div>
            </div>
            <div className="photo-row">
              <div className="photo-card"><Photo src={IMG.beef1} alt="Angus cattle grazing on Rancho Tierra Cantora pasture" /><span className="cap">On the river pasture</span></div>
              <div className="photo-card"><Photo src={IMG.beef2} alt="Bulls in the Rancho Tierra Cantora breeding program" /><span className="cap">Breeding stock</span></div>
              <div className="photo-card"><Photo src={IMG.beef3} alt="A black Angus cow at Rancho Tierra Cantora" /><span className="cap">Spring calving</span></div>
            </div>
          </div>

          <div className="herd-block">
            <div className="herd-head">
              <div>
                <h3>Jerseys, for milk</h3>
                <p>Forty cows milked morning and evening in the barn my mother built, producing the cream-line milk behind everything the creamery makes.</p>
              </div>
            </div>
            <div className="photo-row">
              <div className="photo-card"><Photo src={IMG.dairy1} alt="Jersey cows in the milking barn at Rancho Tierra Cantora" /><span className="cap">The milking barn</span></div>
              <div className="photo-card"><Photo src={IMG.dairy2} alt="Dairy herd on green pasture at Rancho Tierra Cantora" /><span className="cap">Pasture rotation</span></div>
              <div className="photo-card"><Photo src={IMG.dairy3} alt="A dairy cow at Rancho Tierra Cantora" /><span className="cap">Close to the parlor</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* THE RANCH YEAR */}
      <section id="year">
        <div className="wrap">
          <div className="kicker">The ranch year</div>
          <h2 className="section-title">Two herds, one continuous calendar</h2>
          <div className="year-grid">
            <SeasonWheel active={season} onSelect={setSeason} />
            <div className="season-detail">
              <div className="range">{SEASONS[season].range}</div>
              <h3>{SEASONS[season].title}</h3>
              <p>{SEASONS[season].copy}</p>
            </div>
          </div>
          <div className="year-banner">
            <Photo src={IMG.roundup} alt="Working cattle on horseback at Rancho Tierra Cantora" />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section-dark">
        <div className="wrap">
          <div className="kicker">Farm store</div>
          <h2 className="section-title">From pasture and parlor to your table</h2>
          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <div className="product-card" key={p.name}>
                <div className="product-photo"><Photo src={p.image} alt={p.name} /></div>
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <p>{p.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAY */}
      <section id="stay">
        <div className="wrap">
          <div className="kicker">Stay with us</div>
          <h2 className="section-title">A working-farm stay, not a show</h2>
          <div className="stay-grid">
            <div className="stay-card">
              <div className="stay-image"><Photo src={IMG.stayBarn} alt="The farmhouse at Rancho Tierra Cantora" /></div>
              <div className="stay-body">
                <h3>The Barn Room</h3>
                <div className="stay-detail">Private room · main house · sleeps 2</div>
                <p>A guest room off the original farmhouse kitchen, a short walk from the milking barn's morning start.</p>
              </div>
            </div>
            <div className="stay-card">
              <div className="stay-image"><Photo src={IMG.stayRiver} alt="View across the ranch toward the pastures" /></div>
              <div className="stay-body">
                <h3>The River Cottage</h3>
                <div className="stay-detail">1 room · kitchenette · sleeps 2</div>
                <p>Set along the Río Laja with a view across the beef pastures — closest stay to the cattle, farthest from the road.</p>
              </div>
            </div>
            <div className="stay-card">
              <div className="stay-image"><Photo src={IMG.stayLoft} alt="The cozy loft interior above the equipment barn" /></div>
              <div className="stay-body">
                <h3>The Hay Loft</h3>
                <div className="stay-detail">Converted loft · sleeps 4</div>
                <p>Above the equipment barn, best for families who want to be first in line for morning milking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOICES */}
      <section className="section-dark">
        <div className="wrap">
          <div className="kicker">From our customers</div>
          <h2 className="section-title">People who buy direct from the farm</h2>
          <div className="voice-grid">
            {VOICES.map((v) => (
              <div className="voice" key={v.name} style={{ color: "var(--parchment)" }}>
                <blockquote style={{ color: "var(--parchment)" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <cite style={{ color: "#b9ad93" }}>{v.name} — {v.context}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="kicker">Good to know</div>
          <h2 className="section-title">Questions we hear most</h2>
          <div style={{ marginTop: 40, maxWidth: 760 }}>
            {FAQS.map((f, i) => (
              <div className="faq-item" key={f.q} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ borderColor: "rgba(36,29,21,0.15)" }}>
                <div className="faq-q" style={{ color: "var(--ink)" }}>
                  <span>{f.q}</span>
                  <span style={{ color: "#a1572f", fontSize: 20 }}>{openFaq === i ? "–" : "+"}</span>
                </div>
                {openFaq === i && <div className="faq-a" style={{ color: "var(--ink-soft)" }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="section-dark">
        <div className="wrap">
          <div className="kicker">Visit</div>
          <h2 className="section-title">Getting here, and getting in touch</h2>
          <div className="visit-grid">
            <div>
              <div className="visit-row"><span className="visit-label">Address</span><span>Camino a Los Rodríguez 2110, San Miguel de Allende, Gto., México</span></div>
              <div className="visit-row"><span className="visit-label">Farm store hours</span><span>Thu–Sat, 9am–4pm</span></div>
              <div className="visit-row"><span className="visit-label">Phone</span><span>+52 415 555 0132</span></div>
              <div className="visit-row"><span className="visit-label">Email</span><span>hola@tierracantora.example</span></div>
              <div className="visit-row"><span className="visit-label">Farmers markets</span><span>Mercado San Miguel · Querétaro · Dolores Hidalgo</span></div>
            </div>
            <div className="visit-photo">
              <Photo src={IMG.dustyDrive} alt="The road into Rancho Tierra Cantora" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div>
              <div className="brand-mark" style={{ color: "#efe6d2" }}>Rancho y Lácteos Tierra Cantora</div>
              <p style={{ maxWidth: 300, fontSize: 13.5, marginTop: 12 }}>
                A working beef-and-dairy ranch in the highlands of Guanajuato, run by the same family since 1948.
              </p>
            </div>
            <div className="footer-cols">
              <div>
                <h4>Explore</h4>
                <a href="#story">Our story</a>
                <a href="#herds">The herds</a>
                <a href="#year">The ranch year</a>
              </div>
              <div>
                <h4>Visiting</h4>
                <a href="#products">Farm store</a>
                <a href="#stay">Stay with us</a>
                <a href="#visit">Directions</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Rancho y Lácteos Tierra Cantora</span>
            <span>San Miguel de Allende, México</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
