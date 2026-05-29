/* Direction A - app bootstrap: renders dynamic lists & wires interactions. */
(function () {
  const { T, tr } = window.GB;
  const L = (node) => tr(node, window.gbLang);

  /* ── Values marquee: duplicate the items so the loop is seamless ─── */
  function renderMarquee() {
    const el = document.getElementById("a-marquee-values");
    const values = [T.values.integrity, T.values.development, T.values.brotherhood];
    const item = (v) => `
      <span class="a-values-item">${L(v)}<span class="a-values-dot"></span></span>`;
    let html = "";
    for (let i = 0; i < 4; i++) html += values.map(item).join("");
    el.innerHTML = html;
  }

  /* ── Classes list ─────────────────────────────────────────────────── */
  function renderClasses() {
    const el = document.getElementById("a-classes-list");
    el.innerHTML = T.classes.items.map(c => `
      <div class="a-class-card">
        <div class="a-class-img"><gb-placeholder label="${c.code}"></gb-placeholder></div>
        <div class="a-class-body">
          <div class="a-class-meta">
            <span class="a-class-code">${c.code}</span>
            <span class="a-class-meta-txt">· ${L(c.meta)}</span>
          </div>
          <div class="a-class-name">${L(c.name)}</div>
          <p class="a-class-desc">${L(c.desc)}</p>
        </div>
      </div>`).join("");
  }

  /* ── Schedule (day tabs + sessions for current day) ─────────────── */
  let currentDay = 0;
  function renderDayTabs() {
    const el = document.getElementById("a-day-tabs");
    el.innerHTML = T.schedule.days.map((d, i) => `
      <button class="a-day-tab ${i === currentDay ? 'is-active' : ''}" data-i="${i}">${L(d.day)}</button>
    `).join("");
    el.querySelectorAll(".a-day-tab").forEach(b => b.addEventListener("click", () => {
      currentDay = +b.dataset.i; renderDayTabs(); renderSessions();
    }));
  }
  function renderSessions() {
    document.getElementById("a-sess-day").textContent = L(T.schedule.days[currentDay].full);
    const list = document.getElementById("a-sess-list");
    const d = T.schedule.days[currentDay];
    if (d.sessions.length === 0) {
      list.innerHTML = `<div class="a-sess-rest">${L(T.schedule.rest)}</div>`;
    } else {
      list.innerHTML = d.sessions.map(s => `
        <div class="a-sess">
          <div class="a-sess-time">${s.time}</div>
          <div class="a-sess-type">${L(s.type)}</div>
          <span class="a-sess-tag">${s.tag}</span>
        </div>`).join("");
    }
  }

  /* ── Location card ───────────────────────────────────────────────── */
  function renderLocation() {
    const card = document.getElementById("a-loc-card");
    card.href = T.schedule.mapUrl;
    card.querySelector(".a-loc-addr").textContent = T.schedule.address;
    card.querySelector(".a-loc-nav").textContent = L(T.schedule.navigate);
  }

  /* ── Coach lineage pills ────────────────────────────────────────── */
  function renderLineage() {
    const el = document.getElementById("a-lineage");
    el.innerHTML = T.coach.lineage.map((n, i) => `
      ${i > 0 ? `<span class="a-lineage-arrow"><gb-icon name="chevron" size="14"></gb-icon></span>` : ""}
      <span class="a-lineage-pill ${i === T.coach.lineage.length - 1 ? 'is-current' : ''}">${n}</span>
    `).join("");
  }

  /* ── Sponsors ────────────────────────────────────────────────────── */
  function renderSponsors() {
    document.getElementById("a-sponsors").innerHTML =
      T.sponsors.items.map(s => `<span class="a-sponsor-pill">${s}</span>`).join("");
  }

  /* ── Contact info rows ──────────────────────────────────────────── */
  function renderContact() {
    const list = document.getElementById("a-info-list");
    const rows = [
      { icon: "pin",   val: T.contact.address },
      { icon: "phone", val: T.contact.phone },
      { icon: "mail",  val: T.contact.email },
    ];
    list.innerHTML = rows.map(r => `
      <div class="a-info-row">
        <span class="a-info-icon"><gb-icon name="${r.icon}" size="19"></gb-icon></span>
        <span class="a-info-val">${r.val}</span>
      </div>`).join("") + `
      <div class="a-info-row">
        <span class="a-info-iban-sym">€</span>
        <div>
          <div class="a-info-lbl">${L(T.contact.ibanLabel)}</div>
          <span class="a-info-iban-val">${T.contact.iban}</span>
        </div>
      </div>`;

    document.getElementById("a-map").href = T.schedule.mapUrl;
    document.getElementById("a-whatsapp").href =
      "https://api.whatsapp.com/send?phone=" + T.contact.phoneRaw;
    document.getElementById("a-viber").href = "viber://add?number=" + T.contact.phoneRaw;
  }

  /* ── Initial render + re-render on lang change ──────────────────── */
  function renderAll() {
    renderMarquee();
    renderClasses();
    renderDayTabs(); renderSessions();
    renderLocation();
    renderLineage();
    renderSponsors();
    renderContact();
    window.gbAutoBind(document);
  }
  renderAll();
  window.gbOnLang(renderAll);
})();
