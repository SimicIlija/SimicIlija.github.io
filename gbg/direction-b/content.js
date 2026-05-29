/* Gracie Barra Graz - bilingual content (EN/DE) + schedule data. */
window.GB = (function () {
  const T = {
    nav: {
      schedule: { en: "Schedule", de: "Stundenplan" },
      classes:  { en: "Classes",  de: "Kurse" },
      coach:    { en: "Coach",    de: "Trainer" },
      bjj:      { en: "Jiu-Jitsu", de: "Jiu-Jitsu" },
      contact:  { en: "Contact",  de: "Kontakt" },
      book:     { en: "Free Class", de: "Probetraining" },
    },
    hero: {
      kicker: { en: "Brazilian Jiu-Jitsu · Graz", de: "Brazilian Jiu-Jitsu · Graz" },
      title1: { en: "JIU-JITSU", de: "JIU-JITSU" },
      title2: { en: "FOR EVERYONE", de: "FÜR ALLE" },
      sub: {
        en: "The gentle art for every body, every age, every level — on the mats at Gracie Barra Graz.",
        de: "Die sanfte Kunst für jeden Körper, jedes Alter, jedes Level — auf der Matte bei Gracie Barra Graz.",
      },
      ctaPrimary: { en: "Book your free class", de: "Gratis-Probetraining buchen" },
      ctaSecondary: { en: "See the schedule", de: "Zum Stundenplan" },
    },
    values: {
      integrity:   { en: "Integrity",   de: "Integrität" },
      development: { en: "Development", de: "Entwicklung" },
      brotherhood: { en: "Brotherhood", de: "Brüderlichkeit" },
    },
    about: {
      label: { en: "The Team", de: "Das Team" },
      heading: { en: "We are Gracie Barra", de: "Wir sind Gracie Barra" },
      body: {
        en: "Part of the largest Jiu-Jitsu team on earth — over 1,000 schools across six continents, united by one red shield. In Graz, that family trains together at Kastellfeldgasse.",
        de: "Teil des größten Jiu-Jitsu-Teams der Welt — über 1.000 Schulen auf sechs Kontinenten, vereint unter einem roten Schild. In Graz trainiert diese Familie gemeinsam in der Kastellfeldgasse.",
      },
      stat1: { en: "Schools worldwide", de: "Schulen weltweit" },
      stat2: { en: "Years in Graz",     de: "Jahre in Graz" },
      stat3: { en: "Classes a week",    de: "Stunden pro Woche" },
    },
    classes: {
      label: { en: "Programs", de: "Programme" },
      heading: { en: "A class for everyone", de: "Ein Kurs für alle" },
      items: [
        { code: "GBK", name: { en: "Kids", de: "Kinder" }, meta: { en: "Ages 4–15", de: "4–15 Jahre" },
          desc: { en: "Confidence, focus and respect through play-based Jiu-Jitsu.", de: "Selbstvertrauen, Fokus und Respekt durch spielerisches Jiu-Jitsu." } },
        { code: "GBF", name: { en: "Women", de: "Frauen" }, meta: { en: "Women only", de: "Nur Frauen" },
          desc: { en: "A welcoming, women-only space to learn real self-defence.", de: "Ein einladender Raum nur für Frauen, um echte Selbstverteidigung zu lernen." } },
        { code: "GB1", name: { en: "Fundamentals", de: "Grundlagen" }, meta: { en: "Beginners", de: "Anfänger" },
          desc: { en: "The core techniques every student starts with. No experience needed.", de: "Die Kerntechniken für jeden Anfang. Keine Erfahrung nötig." } },
        { code: "GB2", name: { en: "Advanced", de: "Fortgeschritten" }, meta: { en: "GB2 · GB3", de: "GB2 · GB3" },
          desc: { en: "Live training and refinement for experienced grapplers.", de: "Sparring und Feinschliff für erfahrene Grappler." } },
      ],
    },
    schedule: {
      label: { en: "Train with us", de: "Trainiere mit uns" },
      heading: { en: "Weekly schedule", de: "Wochenplan" },
      note: { en: "Drop in to any class — your first session is free.", de: "Komm zu jeder Stunde — deine erste Einheit ist gratis." },
      address: "Kastellfeldgasse 31, 8010 Graz",
      navigate: { en: "Tap to navigate", de: "Zur Navigation" },
      mapUrl: "https://goo.gl/maps/KbgmVxdARJRWKQ7k8",
      days: [
        { day: { en: "Mon", de: "Mo" }, full: { en: "Monday", de: "Montag" }, sessions: [
          { time: "18:00", type: { en: "Fundamentals", de: "Grundlagen" }, tag: "GB1" },
          { time: "19:30", type: { en: "Advanced", de: "Fortgeschritten" }, tag: "GB2" },
        ]},
        { day: { en: "Tue", de: "Di" }, full: { en: "Tuesday", de: "Dienstag" }, sessions: [
          { time: "17:00", type: { en: "Kids", de: "Kinder" }, tag: "GBK" },
          { time: "18:00", type: { en: "All Levels", de: "Alle Level" }, tag: "GB" },
          { time: "19:30", type: { en: "No-Gi", de: "No-Gi" }, tag: "NG" },
        ]},
        { day: { en: "Wed", de: "Mi" }, full: { en: "Wednesday", de: "Mittwoch" }, sessions: [
          { time: "18:00", type: { en: "Fundamentals", de: "Grundlagen" }, tag: "GB1" },
          { time: "19:30", type: { en: "Women", de: "Frauen" }, tag: "GBF" },
        ]},
        { day: { en: "Thu", de: "Do" }, full: { en: "Thursday", de: "Donnerstag" }, sessions: [
          { time: "17:00", type: { en: "Kids", de: "Kinder" }, tag: "GBK" },
          { time: "18:00", type: { en: "All Levels", de: "Alle Level" }, tag: "GB" },
          { time: "19:30", type: { en: "No-Gi", de: "No-Gi" }, tag: "NG" },
        ]},
        { day: { en: "Fri", de: "Fr" }, full: { en: "Friday", de: "Freitag" }, sessions: [
          { time: "18:00", type: { en: "Open Mat", de: "Open Mat" }, tag: "OM" },
        ]},
        { day: { en: "Sat", de: "Sa" }, full: { en: "Saturday", de: "Samstag" }, sessions: [
          { time: "10:00", type: { en: "All Levels", de: "Alle Level" }, tag: "GB" },
        ]},
        { day: { en: "Sun", de: "So" }, full: { en: "Sunday", de: "Sonntag" }, sessions: [] },
      ],
      rest: { en: "Rest day — see you tomorrow.", de: "Ruhetag — bis morgen!" },
      restShort: { en: "Rest", de: "Ruhetag" },
    },
    coach: {
      label: { en: "Your Coach", de: "Dein Trainer" },
      name: "Alen Ramic",
      role: { en: "Head Coach · Black Belt", de: "Cheftrainer · Schwarzgurt" },
      bio: {
        en: "Black belt under Master Carlos Maia, Alen has spent over a decade on the mats and leads every class personally. His mission is simple: make world-class Jiu-Jitsu welcoming to absolute beginners.",
        de: "Schwarzgurt unter Meister Carlos Maia: Alen steht seit über einem Jahrzehnt auf der Matte und leitet jede Stunde persönlich. Sein Ziel ist einfach — Weltklasse-Jiu-Jitsu auch für absolute Anfänger zugänglich zu machen.",
      },
      cta: { en: "About the coach", de: "Über den Trainer" },
      lineage: ["Carlos Gracie Jr.", "Carlos Maia", "Alen Ramic"],
    },
    bjj: {
      label: { en: "The Art", de: "Die Kunst" },
      heading: { en: "What is Brazilian Jiu-Jitsu?", de: "Was ist Brazilian Jiu-Jitsu?" },
      body: {
        en: "Often called “the gentle art”, BJJ is built on leverage and technique rather than strength — letting a smaller person control and defeat a larger opponent. On the mat it becomes a lifelong study of problem-solving, calm and resilience.",
        de: "Oft „die sanfte Kunst“ genannt, baut BJJ auf Hebel und Technik statt auf Kraft — so kann eine kleinere Person eine größere kontrollieren und besiegen. Auf der Matte wird es zur lebenslangen Schule für Problemlösung, Ruhe und Widerstandskraft.",
      },
    },
    trial: {
      heading: { en: "Your first class is on us", de: "Deine erste Stunde geht auf uns" },
      text: { en: "No gi, no experience, no pressure. Just show up.", de: "Kein Gi, keine Erfahrung, kein Druck. Komm einfach vorbei." },
      cta: { en: "Book free trial", de: "Probetraining buchen" },
      tag: { en: "Free trial", de: "Probetraining" },
    },
    sponsors: {
      label: { en: "Sponsors & Friends", de: "Sponsoren & Freunde" },
      items: ["ALBOS", "MERAN", "FIGHT CLUB GRAZ", "BODY", "FITNESS-SHOP"],
    },
    contact: {
      label: { en: "Visit", de: "Besuch uns" },
      heading: { en: "Find us on the mats", de: "Besuch uns auf der Matte" },
      address: "Kastellfeldgasse 31, 8010 Graz, Austria",
      phone: "+43 650 4416688",
      phoneRaw: "436504416688",
      email: "alen.ramic1998@yahoo.co.uk",
      iban: "AT08 2081 5000 4298 0110",
      ibanLabel: { en: "Bank account (IBAN)", de: "Bankverbindung (IBAN)" },
      addressLabel: { en: "Address", de: "Adresse" },
      phoneLabel:   { en: "Phone",   de: "Telefon" },
      whatsapp: "WhatsApp",
      viber: "Viber",
      firstFree: { en: "First class free", de: "Erste Stunde gratis" },
    },
    faq: {
      label: { en: "Good to know", de: "Gut zu wissen" },
      heading: { en: "Frequently asked", de: "Häufige Fragen" },
      items: [
        { q: { en: "Do I need any experience?", de: "Brauche ich Erfahrung?" },
          a: { en: "None at all. Most people walk in as complete beginners — every class has a place for first-timers, and the coaches guide you step by step.", de: "Überhaupt keine. Die meisten starten als absolute Anfänger — jede Stunde hat Platz für Neulinge, und die Trainer begleiten dich Schritt für Schritt." } },
        { q: { en: "What should I bring to my first class?", de: "Was bringe ich zur ersten Stunde mit?" },
          a: { en: "Comfortable sportswear and a bottle of water. No gi (kimono) needed for your trial — we’ll lend you one if you want to try it.", de: "Bequeme Sportkleidung und eine Flasche Wasser. Für das Probetraining brauchst du keinen Gi (Kimono) — wir leihen dir einen, wenn du möchtest." } },
        { q: { en: "Is the first class really free?", de: "Ist die erste Stunde wirklich gratis?" },
          a: { en: "Yes. Your first session is on us, with no commitment. Just book a slot or message us on WhatsApp and show up.", de: "Ja. Deine erste Einheit geht auf uns, völlig unverbindlich. Buche einfach einen Termin oder schreib uns auf WhatsApp und komm vorbei." } },
        { q: { en: "Can my kids train?", de: "Können meine Kinder trainieren?" },
          a: { en: "Absolutely. Our GBK Kids program is built for ages 4–15, focusing on confidence, focus and respect through play-based Jiu-Jitsu.", de: "Auf jeden Fall. Unser GBK-Kinderprogramm ist für 4–15 Jahre und fördert Selbstvertrauen, Fokus und Respekt durch spielerisches Jiu-Jitsu." } },
        { q: { en: "I’m not fit or flexible — is that a problem?", de: "Ich bin unsportlich oder unbeweglich — ein Problem?" },
          a: { en: "Not at all. Jiu-Jitsu builds your fitness and mobility over time. People of every age, size and shape train with us.", de: "Gar nicht. Jiu-Jitsu baut Fitness und Beweglichkeit mit der Zeit auf. Menschen jeden Alters und jeder Statur trainieren bei uns." } },
        { q: { en: "How do I get started?", de: "Wie fange ich an?" },
          a: { en: "Pick any class from the schedule and come 10 minutes early, or message us first. We’ll take care of the rest.", de: "Such dir eine Stunde aus dem Stundenplan aus und komm 10 Minuten früher, oder schreib uns vorher. Um den Rest kümmern wir uns." } },
      ],
    },
    team: {
      label: { en: "The Team", de: "Das Team" },
      heading: { en: "Meet the coaches", de: "Das Trainerteam" },
      intro: {
        en: "Every class at Gracie Barra Graz is led by experienced, certified instructors who train as a family.",
        de: "Jede Stunde bei Gracie Barra Graz wird von erfahrenen, zertifizierten Trainern geleitet, die als Familie trainieren.",
      },
      cta: { en: "Meet the team", de: "Das Team kennenlernen" },
      back: { en: "Back to home", de: "Zurück zur Startseite" },
      bioTBC: { en: "Short bio coming soon — send us the details to add here.", de: "Kurzbiografie folgt — schick uns die Details für hier." },
      groupLabel: { en: "The coaching team", de: "Trainerteam" },
      lead: {
        name: "Alen Ramic", belt: { en: "Black Belt", de: "Schwarzgurt" },
        role: { en: "Head Coach", de: "Cheftrainer" },
      },
      members: [
        { name: "Miki",  role: { en: "Coach", de: "Trainer" } },
        { name: "Lucas", role: { en: "Coach", de: "Trainer" } },
        { name: "Emi",   role: { en: "Coach", de: "Trainerin" } },
        { name: "Maxi",  role: { en: "Coach", de: "Trainer" } },
        { name: "Alen",  role: { en: "Coach", de: "Trainer" } },
      ],
    },
    footer: {
      tagline: { en: "It’s a poetry of fight.", de: "Es ist die Poesie des Kampfes." },
      rights: { en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
    },
  };
  function tr(node, lang) {
    if (node == null) return "";
    if (typeof node === "string") return node;
    return node[lang] != null ? node[lang] : (node.en != null ? node.en : "");
  }
  return { T, tr };
})();
