"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/useLanguage";
import { translations, LANGUAGES, type Language } from "@/lib/translations";

const ICON_SERVICES = ["🏠", "🏭", "🔌", "💡", "☀️", "🚨"];
const FOOTER_SOCIALS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "WhatsApp", href: "https://whatsapp.com" }
];

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M15 8h-2c-1 0-1 1-1 1v2h3l-.5 3H12v6h-2v-6H8v-3h2V9c0-1.7.8-3 3-3h2v2z" fill="currentColor" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <circle cx="12" cy="11.8" r="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </svg>
      );
    case 'TikTok':
      return (
        <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <path d="M15 3v9.2a4.2 4.2 0 1 1-2-3.6V3h2z" fill="currentColor" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <rect x="2.5" y="5" width="19" height="14" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <polygon points="10,9 16,12 10,15" fill="currentColor" />
        </svg>
      );
    case 'WhatsApp':
      return (
        <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <path d="M20 13.5A7.5 7.5 0 1 1 12.5 5c-.2 0-.4 0-.6.02L8 3l1.1 3.8A7.5 7.5 0 0 1 20 13.5z" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M10.5 11.5c.3.2 1 .6 1.7.7.3 0 .5 0 .7-.1.2-.1.6-.2.9-.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

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
          <div className="hero-badges reveal" style={{ transitionDelay: `0.06s` }}>
            <div className="hero-badge">
              <span className="hb-icon">💳</span>
              <span className="hb-text">{t.hero.badges.payment}</span>
            </div>
            <div className="hero-badge">
              <span className="hb-icon">🔧</span>
              <span className="hb-text">{t.hero.badges.homeProgram}</span>
            </div>
            <div className="hero-badge">
              <span className="hb-icon">🌍</span>
              <span className="hb-text">{t.hero.badges.europe}</span>
            </div>
          </div>
          <a href="tel:+36309401184" className="btn-call reveal">
            <span className="call-icon">📞</span>
            <div>
              <strong>+36 30 940 1184</strong>
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
            <a href="tel:+36309401184" className="ccard ccard-main">
              <div className="ccard-icon">📞</div>
              <div className="ccard-text">
                <strong>{t.contact.phone}</strong>
                <span>+36 30 940 1184</span>
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

      {/* FOOTER (replaced from provided template) */}
      <footer>
        <div className="container footer-inner">
          <p className="footer-name">Balogh Krisztián — Villanyszerelő mester</p>
          <p>Budapest és vonzáskörzete · <a href="tel:+36309401184">+36 30 940 1184</a></p>
          <div className="footer-socials">
            <a href="#" className="fsoc" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="fsoc" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="fsoc" aria-label="TikTok">
              <svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a href="#" className="fsoc" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </a>
            <a href="#" className="fsoc" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            </a>
          </div>
          <p className="copy">© 2026 · Minden jog fenntartva</p>
        </div>
      </footer>
    </>
  );
}
