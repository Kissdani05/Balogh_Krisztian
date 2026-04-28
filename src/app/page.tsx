"use client";

import { useState, useEffect, useRef } from "react";

const SERVICES = [
  {
    icon: "🏠",
    title: "Lakóépületi villanyszerelés",
    desc: "Teljes körű elektromos rendszerek tervezése, kivitelezése és felújítása új vagy meglévő lakásokban, házakban."
  },
  {
    icon: "🏭",
    title: "Ipari és kereskedelmi",
    desc: "Irodák, üzemek, üzlethelyiségek elektromos hálózatának kiépítése és karbantartása."
  },
  {
    icon: "🔌",
    title: "Elosztótábla csere",
    desc: "Főelosztók, alelosztók cseréje és bővítése, hibaáram-védők, túlfeszültség-védelmi rendszerek telepítése."
  },
  {
    icon: "💡",
    title: "Világítástechnika",
    desc: "Beltéri és kültéri világítás tervezése és szerelése, energiatakarékos LED rendszerek kialakítása."
  },
  {
    icon: "☀️",
    title: "Napelem és töltőállomás",
    desc: "Fotovoltaikus rendszerek hálózatra kötése, inverteres telepítés, elektromos autó töltők beszerelése."
  },
  {
    icon: "🚨",
    title: "Sürgősségi hibaelhárítás",
    desc: "Áramkimaradás, rövidzárlat, égett elosztó esetén gyors kiszállás — szükség esetén hétvégén is."
  }
];

const TICKER_ITEMS = [
  "Lakóépületek", "Ipari létesítmények", "Okosotthon rendszerek",
  "Biztosítéktábla csere", "Napelem rendszerek", "Hibaelhárítás", "LED világítás"
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stats, setStats] = useState([0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);
  const countedRef = useRef(false);

  // Scroll handler for nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu & body overflow
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const countObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countedRef.current) {
          countedRef.current = true;
          const data = [350, 12, 98];

          data.forEach((target, i) => {
            setTimeout(() => {
              const t0 = performance.now();
              const dur = 1600;

              const tick = (now: number) => {
                const p = Math.min((now - t0) / dur, 1);
                const e = 1 - Math.pow(1 - p, 3);
                setStats((prev) => {
                  const newStats = [...prev];
                  newStats[i] = Math.floor(e * target);
                  return newStats;
                });

                if (p < 1) requestAnimationFrame(tick);
                else {
                  setStats((prev) => {
                    const newStats = [...prev];
                    newStats[i] = target;
                    return newStats;
                  });
                }
              };

              requestAnimationFrame(tick);
            }, i * 120);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      countObserver.observe(statsRef.current);
    }

    return () => countObserver.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            Kovács Péter <span>villanyszerelő</span>
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#rolam" onClick={() => setMobileMenuOpen(false)}>
                Rólam
              </a>
            </li>
            <li>
              <a href="#szolgaltatasok" onClick={() => setMobileMenuOpen(false)}>
                Szolgáltatások
              </a>
            </li>
            <li>
              <a href="#munkak" onClick={() => setMobileMenuOpen(false)}>
                Munkáim
              </a>
            </li>
            <li>
              <a href="#kapcsolat" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>
                📞 Hívjon most
              </a>
            </li>
          </ul>
          <button
            className="burger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-label reveal">Debrecen és vonzáskörzete</p>
          <h1 className="reveal">
            Megbízható<br />
            <em>villanyszerelő</em>
            <br />
            mester
          </h1>
          <p className="hero-sub reveal">
            12 éve végzek lakóépületi és ipari villamossági munkákat. Engedéllyel, garanciával, pontosan.
          </p>
          <a href="tel:+36301234567" className="btn-call reveal">
            <span className="call-icon">📞</span>
            <div>
              <strong>+36 30 123 4567</strong>
              <span>Hívható hétköznapokon 7–18 óráig</span>
            </div>
          </a>
        </div>
        <div className="hero-img reveal-right">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=85&auto=format&fit=crop"
            alt="Kovács Péter villanyszerelő munkában"
          />
          <div className="hero-stats" ref={statsRef}>
            <div className="hstat">
              <strong>{stats[0]}</strong>
              <span>+</span>
              <p>elvégzett munka</p>
            </div>
            <div className="hstat-div"></div>
            <div className="hstat">
              <strong>{stats[1]}</strong>
              <span>+</span>
              <p>év tapasztalat</p>
            </div>
            <div className="hstat-div"></div>
            <div className="hstat">
              <strong>{stats[2]}</strong>
              <span>%</span>
              <p>elégedett ügyfél</p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, i) => (
            <span key={i} className={i % 2 === 0 ? "ta" : ""}>
              {i % 2 === 0 ? `⚡ ${item}` : "·"}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="rolam">
        <div className="container about-inner">
          <div className="about-img-wrap reveal-left">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85&auto=format&fit=crop"
              alt="Elektromos panel"
            />
          </div>
          <div className="about-content">
            <p className="section-label reveal">Rólam</p>
            <h2 className="reveal">
              Kovács Péter<br />
              <em>villanyszerelő mester</em>
            </h2>
            <p className="about-p reveal">
              1994 óta foglalkozom villanyszerelő munkával. Debrecenben és a város 40 km-es körzetében
              dolgozom — lakásoktól, házaktól egészen irodákig és ipari létesítményekig.
            </p>
            <p className="about-p reveal">
              Minden munkát személyesen végzek, dokumentálok és megvizsgálok. Az ügyfeleimnek fontos,
              hogy biztonsággal beköltözhessenek vagy beköthessék az üzemet — nekem ez az elsődleges
              szempont.
            </p>

            <div className="badges reveal">
              <div className="badge">
                <span className="badge-icon">✅</span>
                <div>
                  <strong>MVM-engedéllyel rendelkező mester</strong>
                  <span>Hálózati csatlakozási munkák elvégzésére jogosult</span>
                </div>
              </div>
              <div className="badge">
                <span className="badge-icon">📋</span>
                <div>
                  <strong>MSZ EN 60439 szabvány szerint</strong>
                  <span>Teljeskörű dokumentáció és felülvizsgálati jegy</span>
                </div>
              </div>
              <div className="badge">
                <span className="badge-icon">🛡️</span>
                <div>
                  <strong>Garancia minden munkára</strong>
                  <span>Visszatérek és megoldom, ha bármi probléma adódik</span>
                </div>
              </div>
              <div className="badge">
                <span className="badge-icon">📞</span>
                <div>
                  <strong>Sürgős esetben is elérhető</strong>
                  <span>Hétvégén és ünnepnapokon is felhívható</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="szolgaltatasok">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Amit elvállalok</p>
            <h2>Szolgáltatások</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((service, i) => (
              <div key={i} className="scard reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="scard-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="munkak">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Referenciák</p>
            <h2>Korábbi munkáim</h2>
          </div>
          <div className="gallery-grid">
            <div className="gitem g-tall reveal">
              <img
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&q=85&auto=format&fit=crop"
                alt="Elosztótábla"
              />
              <div className="gcap">Elosztótábla felújítás</div>
            </div>
            <div className="gitem reveal">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=85&auto=format&fit=crop"
                alt="Irodai munka"
              />
              <div className="gcap">Irodai hálózat kiépítés</div>
            </div>
            <div className="gitem reveal">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=85&auto=format&fit=crop"
                alt="LED világítás"
              />
              <div className="gcap">LED világítás telepítés</div>
            </div>
            <div className="gitem g-wide reveal">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85&auto=format&fit=crop"
                alt="Napelem"
              />
              <div className="gcap">Napelem rendszer bekötés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="kapcsolat">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Elérhetőség</p>
            <h2>Keressen bizalommal</h2>
            <p className="section-sub reveal">Hívjon, és megbeszéljük a részleteket. Ingyenes helyszíni felmérést vállalok.</p>
          </div>
          <div className="contact-cards reveal">
            <a href="tel:+36301234567" className="ccard ccard-main">
              <div className="ccard-icon">📞</div>
              <div className="ccard-text">
                <strong>Telefon</strong>
                <span>+36 30 123 4567</span>
                <small>Hétfő–Szombat, 7–18 óra</small>
              </div>
            </a>
            <div className="ccard">
              <div className="ccard-icon">📍</div>
              <div className="ccard-text">
                <strong>Munkaterület</strong>
                <span>Debrecen</span>
                <small>és 40 km-es körzeten belül</small>
              </div>
            </div>
            <div className="ccard">
              <div className="ccard-icon">🕐</div>
              <div className="ccard-text">
                <strong>Munkaidő</strong>
                <span>Hétfő – Szombat</span>
                <small>7:00 – 18:00 · Sürgős esetben hétvégén is</small>
              </div>
            </div>
            <div className="ccard">
              <div className="ccard-icon">💬</div>
              <div className="ccard-text">
                <strong>Egyeztetés</strong>
                <span>Hívjon, írjon SMS-t</span>
                <small>Visszahívom, ha nem érek rá</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <p className="footer-name">Kovács Péter — Villanyszerelő mester</p>
          <p>
            Debrecen és vonzáskörzete · <a href="tel:+36301234567">+36 30 123 4567</a>
          </p>
          <p className="copy">© 2024 · Minden jog fenntartva</p>
        </div>
      </footer>
    </>
  );
}
