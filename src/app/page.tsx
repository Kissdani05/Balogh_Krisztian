"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/useLanguage";
import { translations, LANGUAGES, type Language } from "@/lib/translations";

const ICON_SERVICES = ["🏠", "🏭", "🔌", "💡", "☀️", "🚨"];
const FOOTER_SOCIALS = [
  { label: "Facebook", icon: "f", href: "https://facebook.com" },
  { label: "Instagram", icon: "◎", href: "https://instagram.com" },
  { label: "TikTok", icon: "♪", href: "https://tiktok.com" },
  { label: "YouTube", icon: "▶", href: "https://youtube.com" },
  { label: "WhatsApp", icon: "✆", href: "https://whatsapp.com" }
];

type SectionId = "kezdolap" | "rolam" | "szolgaltatasok" | "munkak" | "kapcsolat";

export default function Home() {
  const { language, setLanguage, isHydrated } = useLanguage();
  const t = translations[language];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stats, setStats] = useState([0, 0, 0]);
  const [currentSection, setCurrentSection] = useState<SectionId>("kezdolap");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
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

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (langDropdownOpen && !target.closest(".lang-switcher-dropdown")) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [langDropdownOpen]);

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

  // Current section tracking for nav highlights
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

    const updateCurrentSection = () => {
      const offset = window.scrollY + window.innerHeight * 0.35;
      let current: HTMLElement | undefined;

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        if (sections[index].offsetTop <= offset) {
          current = sections[index];
          break;
        }
      }

      if (current?.id) {
        setCurrentSection(current.id as SectionId);
      }
    };

    updateCurrentSection();
    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);

    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
      window.removeEventListener("resize", updateCurrentSection);
    };
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
            Balogh Krisztián <span>villanyszerelő</span>
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <li>
              <a 
                href="#kezdolap" 
                className={currentSection === "kezdolap" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.home}
              </a>
            </li>
            <li>
              <a 
                href="#rolam" 
                className={currentSection === "rolam" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.about}
              </a>
            </li>
            <li>
              <a 
                href="#szolgaltatasok"
                className={currentSection === "szolgaltatasok" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.services}
              </a>
            </li>
            <li>
              <a 
                href="#munkak"
                className={currentSection === "munkak" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.myWork}
              </a>
            </li>
            <li>
              <a 
                href="#kapcsolat" 
                className={currentSection === "kapcsolat" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
            </li>
            <li>
              <a 
                href="#kapcsolat" 
                className={`nav-cta ${currentSection === "kapcsolat" ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.callNow}
              </a>
            </li>
          </ul>

          {/* Language Switcher - Dropdown Menu */}
          <div className="lang-switcher-dropdown">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="lang-dropdown-toggle"
              title={LANGUAGES[language].name}
              aria-label={`Current language: ${LANGUAGES[language].name}`}
              aria-expanded={langDropdownOpen}
            >
              {LANGUAGES[language].flag}
            </button>
            {langDropdownOpen && (
              <div className="lang-dropdown-menu">
                {(Object.keys(LANGUAGES) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangDropdownOpen(false);
                    }}
                    className={`lang-option ${language === lang ? "active" : ""}`}
                    title={LANGUAGES[lang].name}
                  >
                    <span className="lang-flag">{LANGUAGES[lang].flag}</span>
                    <span className="lang-name">{LANGUAGES[lang].name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className={`burger ${mobileMenuOpen ? "open" : ""}`}
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
      <section className="hero" id="kezdolap">
        <div className="hero-text">
          <p className="hero-label reveal">{t.hero.location}</p>
          <h1 className="reveal">
            {t.hero.title}
            <br />
            <em>{t.hero.subtitle}</em>
            <br />
            {t.hero.master}
          </h1>
          <p className="hero-sub reveal">{t.hero.description}</p>
          <a href="tel:+36301234567" className="btn-call reveal">
            <span className="call-icon">📞</span>
            <div>
              <strong>+36 30 123 4567</strong>
              <span>{t.hero.callableHours}</span>
            </div>
          </a>
        </div>
        <div className="hero-img reveal-right">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=85&auto=format&fit=crop"
            alt="Balogh Krisztián villanyszerelő munkában"
          />
          <div className="hero-stats" ref={statsRef}>
            <div className="hstat">
              <strong>{stats[0]}</strong>
              <span>+</span>
              <p>{t.hero.completedWorks}</p>
            </div>
            <div className="hstat-div"></div>
            <div className="hstat">
              <strong>{stats[1]}</strong>
              <span>+</span>
              <p>{t.hero.yearsExperience}</p>
            </div>
            <div className="hstat-div"></div>
            <div className="hstat">
              <strong>{stats[2]}</strong>
              <span>%</span>
              <p>{t.hero.satisfiedClients}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {t.ticker.concat(t.ticker).map((item, i) => (
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
            <p className="section-label reveal">{t.about.label}</p>
            <h2 className="reveal">
              {t.about.name}
              <br />
              <em>{t.about.title}</em>
            </h2>
            <p className="about-p reveal">{t.about.description1}</p>
            <p className="about-p reveal">{t.about.description2}</p>

            <div className="badges reveal">
              <div className="badge">
                <span className="badge-icon">✅</span>
                <div>
                  <strong>{t.about.badges.authorized.title}</strong>
                  <span>{t.about.badges.authorized.desc}</span>
                </div>
              </div>
              <div className="badge">
                <span className="badge-icon">📋</span>
                <div>
                  <strong>{t.about.badges.standard.title}</strong>
                  <span>{t.about.badges.standard.desc}</span>
                </div>
              </div>
              <div className="badge">
                <span className="badge-icon">🛡️</span>
                <div>
                  <strong>{t.about.badges.warranty.title}</strong>
                  <span>{t.about.badges.warranty.desc}</span>
                </div>
              </div>
              <div className="badge">
                <span className="badge-icon">📞</span>
                <div>
                  <strong>{t.about.badges.available.title}</strong>
                  <span>{t.about.badges.available.desc}</span>
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
            <p className="section-label">{t.services.label}</p>
            <h2>{t.services.title}</h2>
          </div>
          <div className="services-grid">
            {t.services.items.map((service, i) => (
              <div key={i} className="scard reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="scard-icon">{ICON_SERVICES[i]}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="services-trust">
            <div className="services-grid trust-grid">
              <div className="scard reveal" style={{ transitionDelay: `0s` }}>
                <div className="scard-icon">💳</div>
                <h3>{t.trust.items.payment.title}</h3>
                <p>{t.trust.items.payment.desc}</p>
                <div className="payment-badges">
                  <span className="payment-badge">VISA</span>
                  <span className="payment-badge">Mastercard</span>
                </div>
              </div>
              <div className="scard reveal" style={{ transitionDelay: `0.07s` }}>
                <div className="scard-icon">📋</div>
                <h3>{t.trust.items.docs.title}</h3>
                <p>{t.trust.items.docs.desc}</p>
              </div>
              <div className="scard reveal" style={{ transitionDelay: `0.14s` }}>
                <div className="scard-icon">🛡️</div>
                <h3>{t.trust.items.warranty.title}</h3>
                <p>{t.trust.items.warranty.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="munkak">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">{t.gallery.label}</p>
            <h2>{t.gallery.title}</h2>
          </div>
          <div className="gallery-grid">
            <div className="gitem g-tall reveal">
              <img
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&q=85&auto=format&fit=crop"
                alt="Elosztótábla"
              />
              <div className="gcap">{t.gallery.items[0].title}</div>
            </div>
            <div className="gitem reveal">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=85&auto=format&fit=crop"
                alt="Irodai munka"
              />
              <div className="gcap">{t.gallery.items[1].title}</div>
            </div>
            <div className="gitem reveal">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=85&auto=format&fit=crop"
                alt="LED világítás"
              />
              <div className="gcap">{t.gallery.items[2].title}</div>
            </div>
            <div className="gitem g-wide reveal">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85&auto=format&fit=crop"
                alt="Napelem"
              />
              <div className="gcap">{t.gallery.items[3].title}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="kapcsolat">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">{t.contact.label}</p>
            <h2>{t.contact.title}</h2>
            <p className="section-sub reveal">{t.contact.subtitle}</p>
          </div>
          <div className="contact-cards reveal">
            <a href="tel:+36301234567" className="ccard ccard-main">
              <div className="ccard-icon">📞</div>
              <div className="ccard-text">
                <strong>{t.contact.phone}</strong>
                <span>+36 30 123 4567</span>
                <small>{t.contact.phoneTime}</small>
              </div>
            </a>
            <div className="ccard">
              <div className="ccard-icon">📍</div>
              <div className="ccard-text">
                <strong>{t.contact.area}</strong>
                <span>Budapest</span>
                <small>{t.contact.areaDesc}</small>
              </div>
            </div>
            <div className="ccard">
              <div className="ccard-icon">🕐</div>
              <div className="ccard-text">
                <strong>{t.contact.hours}</strong>
                <span>{t.contact.workHours}</span>
                <small>{t.contact.workHoursDetail}</small>
              </div>
            </div>
            <div className="ccard">
              <div className="ccard-icon">💬</div>
              <div className="ccard-text">
                <strong>{t.contact.communication}</strong>
                <span>{t.contact.callOrSms}</span>
                <small>{t.contact.callBack}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <p className="footer-name">{t.footer.name}</p>
          <div className="footer-top">
            <p className="footer-meta">
              {t.footer.location} · <a href="tel:+36301234567">+36 30 123 4567</a>
            </p>
            <div className="footer-socials">
              {FOOTER_SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <p className="copy">{t.footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}
