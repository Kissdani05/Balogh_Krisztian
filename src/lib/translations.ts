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
      location: "Budapest és vonzáskörzete",
      title: "Megbízható",
      subtitle: "villanyszerelő",
      master: "mester",
      description: "12 éve végzek lakóépületi és ipari villamossági munkákat. Engedéllyel, garanciával, pontosan.",
      callableHours: "Hívható hétköznapokon 7–18 óráig",
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
      title: "villanyszerelő mester",
      description1:
        "1994 óta foglalkozom villanyszerelő munkával. Budapesten és a város 40 km-es körzetében dolgozom — lakásoktól, házaktól egészen irodákig és ipari létesítményekig.",
      description2:
        "Minden munkát személyesen végzek, dokumentálok és megvizsgálok. Az ügyfeleimnek fontos, hogy biztonsággal beköltözhessenek vagy beköthessék az üzemet — nekem ez az elsődleges szempont.",
      badges: {
        authorized: {
          title: "MVM-engedéllyel rendelkező mester",
          desc: "Hálózati csatlakozási munkák elvégzésére jogosult"
        },
        standard: {
          title: "MSZ EN 60439 szabvány szerint",
          desc: "Teljeskörű dokumentáció és felülvizsgálati jegy"
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
          title: "Napelem és töltőállomás",
          desc: "Fotovoltaikus rendszerek hálózatra kötése, inverteres telepítés, elektromos autó töltők beszerelése."
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
        { title: "Elosztótábla felújítás" },
        { title: "Irodai hálózat kiépítés" },
        { title: "LED világítás telepítés" },
        { title: "Napelem rendszer bekötés" }
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
      phoneTime: "Hétfő–Szombat, 7–18 óra",
      areaDesc: "és 40 km-es körzeten belül",
      workHours: "Hétfő – Szombat",
      workHoursDetail: "7:00 – 18:00 · Sürgős esetben hétvégén is",
      callOrSms: "Hívjon, írjon SMS-t",
      callBack: "Visszahívom, ha nem érek rá"
    },
    footer: {
      name: "Balogh Krisztián — Villanyszerelő mester",
      location: "Budapest és vonzáskörzete",
      copyright: "© 2024 · Minden jog fenntartva"
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
      location: "Budapest and surroundings",
      title: "Reliable",
      subtitle: "electrician",
      master: "master",
      description: "For 12 years I have been doing residential and industrial electrical work. Licensed, guaranteed, precise.",
      callableHours: "Available weekdays 7–18",
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
      title: "electrician master",
      description1:
        "I have been working as an electrician since 1994. I work in Budapest and the surrounding 40 km area — from apartments and houses to offices and industrial facilities.",
      description2:
        "I do every job personally, document and inspect it. It is important to my clients that they can move in safely or connect the operation — that is my primary concern.",
      badges: {
        authorized: {
          title: "Licensed MVM master",
          desc: "Authorized to perform network connection work"
        },
        standard: {
          title: "According to MSZ EN 60439 standard",
          desc: "Complete documentation and inspection certificate"
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
          title: "Solar panels and charging station",
          desc: "Grid connection of photovoltaic systems, inverter installation, installation of electric car chargers."
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
        { title: "Circuit breaker renovation" },
        { title: "Office network installation" },
        { title: "LED lighting installation" },
        { title: "Solar system connection" }
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
      phoneTime: "Monday–Saturday, 7–18",
      areaDesc: "and within 40 km radius",
      workHours: "Monday – Saturday",
      workHoursDetail: "7:00 – 18:00 · Available on weekends in urgent cases",
      callOrSms: "Call or send SMS",
      callBack: "I'll call back if I'm not available"
    },
    footer: {
      name: "Balogh Krisztián — Electrician master",
      location: "Budapest and surroundings",
      copyright: "© 2024 · All rights reserved"
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
      location: "Budapest und Umgebung",
      title: "Zuverlässiger",
      subtitle: "Elektriker",
      master: "Meister",
      description: "Seit 12 Jahren führe ich Wohn- und Industrieelektrikerarbeiten durch. Lizenziert, garantiert, präzise.",
      callableHours: "Erreichbar werktags 7–18 Uhr",
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
      title: "Elektrikermeister",
      description1:
        "Seit 1994 arbeite ich als Elektriker. Ich arbeite in Budapest und der umliegenden 40 km-Zone — von Wohnungen und Häusern bis zu Büros und Industrieanlangen.",
      description2:
        "Ich führe jede Arbeit persönlich durch, dokumentiere und prüfe sie. Meinen Kunden ist es wichtig, dass sie sicher einziehen oder den Betrieb anschließen können — das ist meine oberste Priorität.",
      badges: {
        authorized: {
          title: "MVM-lizenzierter Meister",
          desc: "Berechtigt, Netzanschlussarbeiten durchzuführen"
        },
        standard: {
          title: "Nach MSZ EN 60439 Standard",
          desc: "Vollständige Dokumentation und Inspektionszertifikat"
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
          title: "Solaranlage und Ladestation",
          desc: "Netzanbindung von Photovoltaikanlagen, Wechselrichterinstallation, Installation von Elektroautobatterien."
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
        { title: "Schalter renovierung" },
        { title: "Büronetzwerk-Installation" },
        { title: "LED-Beleuchtungsinstallation" },
        { title: "Solaranlage-Verbindung" }
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
      phoneTime: "Montag–Samstag, 7–18 Uhr",
      areaDesc: "und im Umkreis von 40 km",
      workHours: "Montag – Samstag",
      workHoursDetail: "7:00 – 18:00 · In dringenden Fällen auch am Wochenende erreichbar",
      callOrSms: "Rufen Sie an oder senden Sie SMS",
      callBack: "Ich rufe zurück, wenn ich nicht verfügbar bin"
    },
    footer: {
      name: "Balogh Krisztián — Elektrikermeister",
      location: "Budapest und Umgebung",
      copyright: "© 2024 · Alle Rechte vorbehalten"
    }
  }
} as const;

export type Translations = typeof translations.hu;
