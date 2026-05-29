/* Direction B - app bootstrap: renders dynamic lists & wires interactions. */
(function () {
  const { T, tr } = window.GB;
  const L = (node) => tr(node, window.gbLang);

  const tagClass = {
    GBK: "t-accent", GBF: "t-accent", GB1: "t-white",
    GB2: "t-accent", GB:  "t-dim",    NG:  "t-accent", OM: "t-dim",
  };

  /* ── Hero title: render each word as its own block to control wrap ── */
  function renderHeroTitle() {
    const el = document.getElementById("b-hero-title");
    const t1 = L(T.hero.title1);
    const t2 = L(T.hero.title2);
    const words = t2.split(" ");
    let html = `<div>${t1}</div>`;
    words.forEach((w, i) => {
      const cls = (i === 0 && words.length > 1) ? "" : "b-accent";
      html += `<div${cls ? ` class="${cls}"` : ""}>${w}</div>`;
    });
    el.innerHTML = html;
  }

  /* ── Classes 2x2 tiles ──────────────────────────────────────────── */
  function renderClasses() {
    const el = document.getElementById("b-classes");
    el.innerHTML = T.classes.items.map((c, i) => {
      const hero = i === 0;
      const meta = hero ? L(c.desc) : L(c.meta);
      return `
        <gb-reveal>
          <div class="b-tile ${hero ? 'b-tile-hero' : 'b-tile-small'}">
            <gb-placeholder label="${c.code}"></gb-placeholder>
            <div class="b-tile-grad"></div>
            <div class="b-tile-code">${c.code}</div>
            <div class="b-tile-foot">
              <h3 class="b-tile-name">${L(c.name)}</h3>
              <div class="b-tile-meta">${meta}</div>
            </div>
          </div>
        </gb-reveal>`;
    }).join("");
  }

  /* ── Schedule: full week ────────────────────────────────────────── */
  function renderSchedule() {
    const el = document.getElementById("b-sched-list");
    el.innerHTML = T.schedule.days.map(d => {
      const rest = d.sessions.length === 0;
      const inner = rest
        ? `<div class="b-day-rest-txt">${L(T.schedule.restShort)}</div>`
        : `<div class="b-day-sessions">${d.sessions.map(s => `
            <div class="b-day-sess">
              <span class="b-day-sess-time">${s.time}</span>
              <span class="b-day-sess-type">${L(s.type)}</span>
              <span class="b-day-sess-tag ${tagClass[s.tag] || ''}">${s.tag}</span>
            </div>`).join("")}</div>`;
      return `
        <div class="b-day-row ${rest ? 'is-rest' : ''}">
          <div class="b-day-name">${L(d.day)}</div>
          ${inner}
        </div>`;
    }).join("");

    const map = document.getElementById("b-sched-map");
    map.href = T.schedule.mapUrl;
    map.querySelector(".b-sched-map-addr").textContent = T.schedule.address;
    map.querySelector(".b-sched-map-nav").textContent = L(T.schedule.navigate);
  }

  /* ── Coach lineage rows ─────────────────────────────────────────── */
  function renderLineage() {
    const el = document.getElementById("b-coach-lineage");
    el.innerHTML = T.coach.lineage.map((n, i) => {
      const current = i === T.coach.lineage.length - 1;
      return `<div class="b-lineage-row ${current ? 'is-current' : ''}">
        <span class="b-lineage-dot"></span>
        <span class="b-lineage-name">${n}</span>
      </div>`;
    }).join("");
  }

  /* ── Sponsors marquee ───────────────────────────────────────────── */
  function renderSponsors() {
    const el = document.getElementById("b-sponsors-marq");
    const item = (s) => `<span class="b-sponsor-item">${s}<span>/</span></span>`;
    let html = "";
    for (let i = 0; i < 3; i++) html += T.sponsors.items.map(item).join("");
    el.innerHTML = html;
  }

  /* ── Contact 2x2 grid ───────────────────────────────────────────── */
  function renderContact() {
    const cells = [
      { icon: "pin",   lbl: L(T.contact.addressLabel), val: T.contact.address, mono: false },
      { icon: "phone", lbl: L(T.contact.phoneLabel),   val: T.contact.phone,   mono: false },
      { icon: "mail",  lbl: "E-Mail",                  val: T.contact.email,   mono: true  },
      { icon: "star",  lbl: "IBAN",                    val: T.contact.iban,    mono: true  },
    ];
    document.getElementById("b-contact-grid").innerHTML = cells.map(c => `
      <div class="b-contact-cell">
        <div class="b-contact-head">
          <gb-icon name="${c.icon}" size="15"></gb-icon>
          <span class="b-contact-lbl">${c.lbl}</span>
        </div>
        <div class="b-contact-val ${c.mono ? 'is-mono' : ''}">${c.val}</div>
      </div>`).join("");

    document.getElementById("b-map").href = T.schedule.mapUrl;
    document.getElementById("b-whatsapp").href =
      "https://api.whatsapp.com/send?phone=" + T.contact.phoneRaw;
    document.getElementById("b-viber").href = "viber://add?number=" + T.contact.phoneRaw;
  }

  function renderAll() {
    renderHeroTitle();
    renderClasses();
    renderSchedule();
    renderLineage();
    renderSponsors();
    renderContact();
    window.gbAutoBind(document);
  }
  renderAll();
  window.gbOnLang(renderAll);
})();
