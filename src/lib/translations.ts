export type Language = "hu" | "en" | "de";

export const LANGUAGES: Record<Language, { name: string; flag: string }> = {
  hu: { name: "Magyar", flag: "🇭🇺" },
  en: { name: "English", flag: "🇬🇧" },
  de: { name: "Deutsch", flag: "🇩🇪" }
};

export const translations = {
  hu: {
    nav: {
      home: "Kezdőlap",
      about: "Rólam",
      services: "Szolgáltatások",
      myWork: "Munkáim",
      contact: "Kapcsolat",
      callNow: "📞 Hívjon most"
    },
    hero: {
      location: "Magyarország és vonzáskörzete",
      title: "Megbízható",
      badges: {
        payment: "Bankkártyás fizetés lehetséges",
        homeProgram: "Otthonfelújítási Program elfogadott",
        europe: "Szolgáltatás Európa-szerte"
      },
      subtitle: "villanyszerelő",
      master: "",
      description: "⚡ Több mint 5 év tapasztalat lakossági és ipari villanyszerelésben.\nPrecíz munkavégzés, garancia és gyors kiszállás.",
      callableHours: "Hívható a hét minden napján éjjel-nappal",
      completedWorks: "elvégzett munka",
      yearsExperience: "év tapasztalat",
      satisfiedClients: "elégedett ügyfél"
    },
    ticker: [
      "Lakóépületek",
      "Ipari létesítmények",
      "Okosotthon rendszerek",
      "Biztosítéktábla csere",
      "Napelem rendszerek",
      "Hibaelhárítás",
      "LED világítás"
    ],
    about: {
      label: "Rólam",
      name: "Balogh Krisztián",
      title: "villanyszerelő",
      description1:
        "2020 óta foglalkozom lakossági és ipari villanyszereléssel az ország egész területén.",
      description2:
        "Lakások, családi házak, irodák és ipari létesítmények teljes körű villamos kivitelezését vállalom. Minden munkát precízen és megbízhatóan végzek, kiemelt figyelmet fordítva a biztonságra és a minőségi kivitelezésre. Fontos számomra, hogy ügyfeleim hosszú távon is biztonságos és stabil elektromos rendszert használhassanak.",
      badges: {
        authorized: {
          title: "Pontos kivitelezés",
          desc: "Előre egyeztetett időpontban, rendezett munkaterülettel dolgozom"
        },
        standard: {
          title: "Helyszíni felmérés alapján",
          desc: "A munkát mindig egyeztetéssel és átnézett műszaki igényekkel kezdem"
        },
        warranty: {
          title: "Garancia minden munkára",
          desc: "Visszatérek és megoldom, ha bármi probléma adódik"
        },
        available: {
          title: "Sürgős esetben is elérhető",
          desc: "Hétvégén és ünnepnapokon is felhívható"
        }
      }
    },
    trust: {
      label: "Fontos tudnivalók",
      title: "Minden, amit érdemes tudni",
      items: {
        payment: {
          title: "Fizetési lehetőségek",
          desc: "Készpénz és bankkártya egyaránt elfogadva."
        },
        docs: {
          title: "Átlátható átadás",
          desc: "Minden munkát egyeztetéssel, számlával és igény szerint jegyzőkönyvvel adok át."
        },
        warranty: {
          title: "Garancia & felújítás",
          desc: "Garanciát vállalok minden munkára, saját szerszámokkal. Otthon felújítást az EU egész területén vállalok — bárhol számíthat rám."
        }
      }
    },
    services: {
      label: "Amit elvállalok",
      title: "Szolgáltatások",
      items: [
        {
          title: "Lakóépületi villanyszerelés",
          desc: "Teljes körű elektromos rendszerek tervezése, kivitelezése és felújítása új vagy meglévő lakásokban, házakban."
        },
        {
          title: "Ipari és kereskedelmi",
          desc: "Irodák, üzemek, üzlethelyiségek elektromos hálózatának kiépítése és karbantartása."
        },
        {
          title: "Elosztótábla csere",
          desc: "Főelosztók, alelosztók cseréje és bővítése, hibaáram-védők, túlfeszültség-védelmi rendszerek telepítése."
        },
        {
          title: "Világítástechnika",
          desc: "Beltéri és kültéri világítás tervezése és szerelése, energiatakarékos LED rendszerek kialakítása."
        },
        {
          title: "Állapotfelmérés és hibakeresés",
          desc: "Helyszíni felmérés, mérések és hibakeresés lakásokban, családi házakban és kisebb üzletekben."
        },
        {
          title: "Sürgősségi hibaelhárítás",
          desc: "Áramkimaradás, rövidzárlat, égett elosztó esetén gyors kiszállás — szükség esetén hétvégén is."
        }
      ]
    },
    gallery: {
      label: "Referenciák",
      title: "Korábbi munkáim",
      items: [
        { title: "Hálózati rack szekrény" },
        { title: "Ipari tűzjelző központ" },
        { title: "Elektromos elosztószekrény kismegszakítókkal" },
        { title: "Díszes mennyezeti világítás" }
      ]
    },
    contact: {
      label: "Elérhetőség",
      title: "Keressen bizalommal",
      subtitle: "Hívjon, és megbeszéljük a részleteket. Ingyenes helyszíni felmérést vállalok.",
      phone: "Telefon",
      area: "Munkaterület",
      hours: "Munkaidő",
      communication: "Egyeztetés",
      phoneTime: "Hívható a hét minden napján éjjel-nappal",
      areaDesc: "Magyarország területén, de Európa-szinten is",
      workHours: "Hívható a hét minden napján éjjel-nappal",
      workHoursDetail: "",
      callOrSms: "Hívjon, írjon SMS-t",
      callBack: "Visszahívom, ha nem érek rá"
    },
    footer: {
      name: "Balogh Krisztián — Villanyszerelő",
      location: "Magyarország és vonzáskörzete",
      copyright: "© 2026 · Minden jog fenntartva"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      myWork: "My Work",
      contact: "Contact",
      callNow: "📞 Call Now"
    },
    hero: {
      location: "Hungary and its surroundings",
      title: "Reliable",
      badges: {
        payment: "Card payments accepted",
        homeProgram: "Home Renovation Program accepted",
        europe: "Service across Europe"
      },
      subtitle: "electrician",
      master: "",
      description: "⚡ More than 5 years of experience in residential and industrial electrical work.\nPrecise workmanship, warranty and fast service.",
      callableHours: "Available 24/7",
      completedWorks: "completed works",
      yearsExperience: "years experience",
      satisfiedClients: "satisfied clients"
    },
    ticker: [
      "Residential buildings",
      "Industrial facilities",
      "Smart home systems",
      "Circuit breaker replacement",
      "Solar systems",
      "Error fixing",
      "LED lighting"
    ],
    about: {
      label: "About",
      name: "Balogh Krisztián",
      title: "electrician",
      description1:
        "Since 2020, I have been doing residential and industrial electrical work across the whole country.",
      description2:
        "I undertake complete electrical installations for apartments, family houses, offices and industrial facilities. I carry out every job precisely and reliably, with a strong focus on safety and quality workmanship. My goal is for clients to use a safe and stable electrical system in the long term.",
      badges: {
        authorized: {
          title: "Careful workmanship",
          desc: "I work by appointment and keep the work area tidy"
        },
        standard: {
          title: "Based on on-site survey",
          desc: "Every job starts with a review of the technical needs"
        },
        warranty: {
          title: "Warranty on all work",
          desc: "I return and fix it if any problems arise"
        },
        available: {
          title: "Also available in urgent cases",
          desc: "Can be called on weekends and holidays"
        }
      }
    },
    trust: {
      label: "Important information",
      title: "Everything worth knowing",
      items: {
        payment: {
          title: "Payment options",
          desc: "Cash and bank card are both accepted."
        },
        docs: {
          title: "Transparent handover",
          desc: "I hand over every job with clear agreement, invoice and, if needed, a report."
        },
        warranty: {
          title: "Warranty & renovation",
          desc: "I provide a warranty on every job and work with my own tools. I also take on home renovation across the EU — you can count on me anywhere."
        }
      }
    },
    services: {
      label: "What I undertake",
      title: "Services",
      items: [
        {
          title: "Residential electrical work",
          desc: "Complete design, implementation and renovation of electrical systems in new or existing apartments and houses."
        },
        {
          title: "Industrial and commercial",
          desc: "Installation and maintenance of electrical networks in offices, factories and retail spaces."
        },
        {
          title: "Circuit breaker replacement",
          desc: "Replacement and expansion of main and sub-distributors, residual current devices, overvoltage protection systems installation."
        },
        {
          title: "Lighting technology",
          desc: "Design and installation of indoor and outdoor lighting, development of energy-saving LED systems."
        },
        {
          title: "Inspection and troubleshooting",
          desc: "On-site surveys, measurements and troubleshooting for apartments, family houses and smaller shops."
        },
        {
          title: "Emergency troubleshooting",
          desc: "Power outages, short circuits, burnt distributors — fast service — even on weekends if needed."
        }
      ]
    },
    gallery: {
      label: "References",
      title: "Previous works",
      items: [
        { title: "Network rack cabinet" },
        { title: "Industrial fire alarm control panel" },
        { title: "Electrical distribution cabinet with circuit breakers" },
        { title: "Decorative ceiling lighting" }
      ]
    },
    contact: {
      label: "Contact",
      title: "Contact with confidence",
      subtitle: "Call and let's discuss the details. I offer free on-site surveys.",
      phone: "Phone",
      area: "Work area",
      hours: "Working hours",
      communication: "Communication",
      phoneTime: "Available 24/7",
      areaDesc: "Throughout Hungary, and across Europe as well",
      workHours: "Available 24/7",
      workHoursDetail: "",
      callOrSms: "Call or send SMS",
      callBack: "I'll call back if I'm not available"
    },
    footer: {
      name: "Balogh Krisztián — Electrician",
      location: "Hungary and its surroundings",
      copyright: "© 2026 · All rights reserved"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      services: "Dienstleistungen",
      myWork: "Meine Arbeiten",
      contact: "Kontakt",
      callNow: "📞 Jetzt Anrufen"
    },
    hero: {
      location: "Ungarn und Umgebung",
      title: "Zuverlässiger",
      badges: {
        payment: "Kartenzahlung möglich",
        homeProgram: "Renovierungsprogramm akzeptiert",
        europe: "Service in ganz Europa"
      },
      subtitle: "Elektriker",
      master: "",
      description: "⚡ Mehr als 5 Jahre Erfahrung in der Wohn- und Industrieelektrik.\nPräzise Arbeit, Garantie und schnelle Anfahrt.",
      callableHours: "Rund um die Uhr erreichbar",
      completedWorks: "abgeschlossene Arbeiten",
      yearsExperience: "Jahre Erfahrung",
      satisfiedClients: "zufriedene Kunden"
    },
    ticker: [
      "Wohngebäude",
      "Industrieanlagen",
      "Smart-Home-Systeme",
      "Schaltertausch",
      "Solaranlagen",
      "Fehlerbehebung",
      "LED-Beleuchtung"
    ],
    about: {
      label: "Über mich",
      name: "Balogh Krisztián",
      title: "Elektriker",
      description1:
        "Seit 2020 führe ich Wohn- und Industrieelektroarbeiten im ganzen Land durch.",
      description2:
        "Ich übernehme komplette Elektroinstallationen für Wohnungen, Einfamilienhäuser, Büros und Industrieanlagen. Jede Arbeit führe ich präzise und zuverlässig aus, mit besonderem Fokus auf Sicherheit und hochwertige Ausführung. Mein Ziel ist, dass meine Kunden langfristig ein sicheres und stabiles elektrisches System nutzen können.",
      badges: {
        authorized: {
          title: "Sorgfältige Ausführung",
          desc: "Ich arbeite nach Terminvereinbarung und halte die Baustelle ordentlich"
        },
        standard: {
          title: "Nach Vor-Ort-Besichtigung",
          desc: "Jeder Auftrag beginnt mit der Prüfung des technischen Bedarfs"
        },
        warranty: {
          title: "Garantie für alle Arbeiten",
          desc: "Ich komme zurück und behebe das Problem, wenn etwas schiefgeht"
        },
        available: {
          title: "Auch in dringenden Fällen erreichbar",
          desc: "Kann an Wochenenden und Feiertagen angerufen werden"
        }
      }
    },
    trust: {
      label: "Wichtige Informationen",
      title: "Alles, was Sie wissen sollten",
      items: {
        payment: {
          title: "Zahlungsmöglichkeiten",
          desc: "Barzahlung und Bankkarte werden akzeptiert."
        },
        docs: {
          title: "Transparente Übergabe",
          desc: "Ich übergebe jede Arbeit mit klarer Absprache, Rechnung und bei Bedarf Protokoll."
        },
        warranty: {
          title: "Garantie & Renovierung",
          desc: "Ich gebe Garantie auf alle Arbeiten und arbeite mit eigenen Werkzeugen. Ich übernehme auch Renovierungen im gesamten EU-Gebiet — Sie können überall auf mich zählen."
        }
      }
    },
    services: {
      label: "Was ich übernehme",
      title: "Dienstleistungen",
      items: [
        {
          title: "Wohnelektrikerarbeiten",
          desc: "Vollständige Planung, Umsetzung und Renovierung von Stromsystemen in neuen oder bestehenden Wohnungen und Häusern."
        },
        {
          title: "Industrie und Gewerbe",
          desc: "Installation und Wartung von Stromnetzen in Büros, Fabriken und Einzelhandelsflächen."
        },
        {
          title: "Schaltertausch",
          desc: "Austausch und Erweiterung von Haupt- und Unterverteilern, Fehlerstromschutzschalter, Installation von Überspannungsschutzanlagen."
        },
        {
          title: "Lichttechnik",
          desc: "Design und Installation von Innen- und Außenbeleuchtung, Entwicklung energiesparender LED-Systeme."
        },
        {
          title: "Bestandsaufnahme und Fehlersuche",
          desc: "Vor-Ort-Besichtigung, Messungen und Fehlersuche in Wohnungen, Einfamilienhäusern und kleineren Geschäften."
        },
        {
          title: "Notfall-Fehlerbehebung",
          desc: "Stromausfälle, Kurzschlüsse, durchgebrannte Verteiler — schnelle Dienste — auch am Wochenende bei Bedarf."
        }
      ]
    },
    gallery: {
      label: "Referenzen",
      title: "Frühere Arbeiten",
      items: [
        { title: "Netzwerk-Rackschrank" },
        { title: "Industrielle Brandmeldezentrale" },
        { title: "Elektro-Verteilerkasten mit Leitungsschutzschaltern" },
        { title: "Dekorative Deckenbeleuchtung" }
      ]
    },
    contact: {
      label: "Kontakt",
      title: "Kontaktieren Sie mich mit Vertrauen",
      subtitle: "Rufen Sie an und lassen Sie uns die Details besprechen. Ich biete kostenlose Vor-Ort-Inspektionen an.",
      phone: "Telefon",
      area: "Arbeitsgebiet",
      hours: "Arbeitszeit",
      communication: "Kommunikation",
      phoneTime: "Rund um die Uhr erreichbar",
      areaDesc: "In ganz Ungarn, aber auch europaweit",
      workHours: "Rund um die Uhr erreichbar",
      workHoursDetail: "",
      callOrSms: "Rufen Sie an oder senden Sie SMS",
      callBack: "Ich rufe zurück, wenn ich nicht verfügbar bin"
    },
    footer: {
      name: "Balogh Krisztián — Elektriker",
      location: "Ungarn und Umgebung",
      copyright: "© 2026 · Alle Rechte vorbehalten"
    }
  }
} as const;

export type Translations = typeof translations.hu;
