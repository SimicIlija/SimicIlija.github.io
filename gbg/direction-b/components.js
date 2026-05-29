/* Reusable web components for Gracie Barra Graz - Direction A.
   Exposes: <gb-logo>, <gb-lang-toggle>, <gb-icon>, <gb-placeholder>,
            <gb-kicker>, <gb-reveal>, <gb-accordion>, <gb-marquee> */

const GB_LOGO_URL =
  "https://graciebarragraz.com/wp-content/uploads/2019/02/grb-grace-barra-crveni-slova-bijela-fin-tr-256x250.png";

/* ── App-wide language store ─────────────────────────────────────── */
window.gbLang = localStorage.getItem("gbLang") || "en";
const gbBus = new EventTarget();
window.gbSetLang = (v) => {
  if (v !== "en" && v !== "de") return;
  window.gbLang = v;
  localStorage.setItem("gbLang", v);
  gbBus.dispatchEvent(new CustomEvent("lang", { detail: v }));
};
window.gbOnLang = (cb) => gbBus.addEventListener("lang", (e) => cb(e.detail));

/* ── Logo: wordmark fallback, upgrades to real logo on load ─────── */
class GBLogo extends HTMLElement {
  static get observedAttributes() { return ["size", "white"]; }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.isConnected && this.render(); }
  render() {
    const size = parseInt(this.getAttribute("size") || "36", 10);
    const white = this.hasAttribute("white");
    const ws = size * 0.42;
    this.innerHTML = `
      <span class="gb-logo" style="--s:${size}px">
        <span class="gb-logo-wm" style="font-size:${ws}px">
          <span class="gb-logo-wm-top"${white ? ' style="color:rgba(255,255,255,0.92)"' : ''}>Gracie</span>
          <span class="gb-logo-wm-bot"${white ? ' style="color:rgba(255,255,255,0.92)"' : ''}>Barra</span>
        </span>
        <img class="gb-logo-img" alt="Gracie Barra Graz" src="${GB_LOGO_URL}"
             style="height:${size}px;${white ? 'filter:brightness(0) invert(1);' : ''}" />
      </span>`;
    const img = this.querySelector(".gb-logo-img");
    const wm = this.querySelector(".gb-logo-wm");
    img.addEventListener("load", () => { wm.style.display = "none"; img.style.display = "block"; });
    img.addEventListener("error", () => { img.style.display = "none"; });
  }
}
customElements.define("gb-logo", GBLogo);

/* ── EN / DE segmented toggle ────────────────────────────────────── */
class GBLangToggle extends HTMLElement {
  connectedCallback() {
    this.render();
    this._off = () => this.render();
    window.gbOnLang(this._off);
  }
  render() {
    const cur = window.gbLang;
    this.innerHTML = `
      <div class="gb-lang">
        ${["en", "de"].map(o => `
          <button data-lang="${o}" class="${cur === o ? "is-active" : ""}">${o}</button>
        `).join("")}
      </div>`;
    this.querySelectorAll("button").forEach(b =>
      b.addEventListener("click", () => window.gbSetLang(b.dataset.lang))
    );
  }
}
customElements.define("gb-lang-toggle", GBLangToggle);

/* ── Line-icon set ───────────────────────────────────────────────── */
const ICON_PATHS = {
  arrow:    `<path d="M5 12h14M13 6l6 6-6 6"/>`,
  chevron:  `<path d="M9 6l6 6-6 6"/>`,
  play:     `<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>`,
  pin:      `<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/>`,
  phone:    `<path d="M5 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>`,
  mail:     `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/>`,
  clock:    `<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`,
  check:    `<path d="M5 12.5l4.5 4.5L19 7"/>`,
  menu:     `<path d="M4 7h16M4 12h16M4 17h16"/>`,
  star:     `<path d="M12 3l2.5 6 6.5.5-5 4.2 1.6 6.3L12 16.8 6.4 20l1.6-6.3-5-4.2 6.5-.5z"/>`,
  whatsapp: `<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3zm0 2a7 7 0 0 1 5.9 10.8.9.9 0 0 0-.1.8l.4 1.4-1.5-.4a.9.9 0 0 0-.7.1A7 7 0 1 1 12 5zm-2.4 3.2c-.2 0-.5 0-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.4 3.9 2.2.8 2.6.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.7-.4c-.3-.2-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1l-.6.8c-.1.1-.3.2-.5.1-.7-.3-1.4-.6-2.2-1.6-.2-.3 0-.4.1-.6l.4-.5c.1-.2.1-.3 0-.5l-.6-1.5c-.2-.4-.3-.4-.5-.4z" fill="currentColor" stroke="none"/>`,
  instagram:`<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>`,
  facebook: `<path d="M14 8h2V5h-2c-2 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.5-3H14v-1.5c0-.4.2-.5.6-.5z" fill="currentColor" stroke="none"/>`,
  youtube:  `<rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 9.5v5l4-2.5z" fill="currentColor" stroke="none"/>`,
};
class GBIcon extends HTMLElement {
  static get observedAttributes() { return ["name", "size"]; }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.isConnected && this.render(); }
  render() {
    const name = this.getAttribute("name");
    const size = parseInt(this.getAttribute("size") || "20", 10);
    const path = ICON_PATHS[name] || "";
    this.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
      stroke-linejoin="round" style="display:block">${path}</svg>`;
  }
}
customElements.define("gb-icon", GBIcon);

/* ── Striped placeholder with monospace caption ──────────────────── */
class GBPlaceholder extends HTMLElement {
  static get observedAttributes() { return ["label", "caption-pos"]; }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.isConnected && this.render(); }
  render() {
    const label = this.getAttribute("label") || "image";
    const pos = this.getAttribute("caption-pos") || "center";
    this.innerHTML = `
      <div class="gb-ph gb-ph-${pos}">
        <span class="gb-ph-cap"><span class="gb-ph-dot">▦</span>${label}</span>
      </div>`;
  }
}
customElements.define("gb-placeholder", GBPlaceholder);

/* ── Kicker line: small accent label with a dash ─────────────────── */
class GBKicker extends HTMLElement {
  connectedCallback() {
    const t = this.textContent.trim();
    this.dataset.key = this.getAttribute("key") || "";
    this._render = () => {
      const txt = this.dataset.key ? gbResolve(this.dataset.key) : t;
      this.innerHTML = `<div class="gb-kicker"><span class="gb-kicker-bar"></span><span class="gb-kicker-text">${txt}</span></div>`;
    };
    this._render();
    window.gbOnLang(this._render);
  }
}
customElements.define("gb-kicker", GBKicker);

/* ── Scroll-reveal wrapper ───────────────────────────────────────── */
class GBReveal extends HTMLElement {
  connectedCallback() {
    this.classList.add("gb-reveal");
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { this.classList.add("is-in"); io.disconnect(); }
    }), { threshold: 0.08 });
    io.observe(this);
    setTimeout(() => this.classList.add("is-in"), 1200);
  }
}
customElements.define("gb-reveal", GBReveal);

/* ── Marquee (CSS animation, requires data duplication in markup) ─ */
class GBMarquee extends HTMLElement {
  connectedCallback() {
    this.classList.add("gb-marquee");
  }
}
customElements.define("gb-marquee", GBMarquee);

/* ── Accordion (FAQ): expects <gb-accordion key="faq.items"> ─────── */
class GBAccordion extends HTMLElement {
  static get observedAttributes() { return ["numbered"]; }
  connectedCallback() {
    this._open = 0;
    this._key = this.getAttribute("key");
    this._render = () => this.render();
    this._render();
    window.gbOnLang(this._render);
  }
  render() {
    const { T, tr } = window.GB;
    const items = gbResolve(this._key) || [];
    const numbered = this.hasAttribute("numbered");
    const lang = window.gbLang;
    this.innerHTML = `
      <div class="gb-acc ${numbered ? 'is-numbered' : ''}">
        ${items.map((it, i) => `
          <div class="gb-acc-row ${i === this._open ? 'is-open' : ''}" data-i="${i}">
            <button class="gb-acc-q">
              ${numbered ? `<span class="gb-acc-n">${String(i + 1).padStart(2, "0")}</span>` : ""}
              <span class="gb-acc-qt">${tr(it.q, lang)}</span>
              <span class="gb-acc-plus">+</span>
            </button>
            <div class="gb-acc-a-wrap"><p class="gb-acc-a">${tr(it.a, lang)}</p></div>
          </div>`).join("")}
      </div>`;
    this.querySelectorAll(".gb-acc-q").forEach(b =>
      b.addEventListener("click", () => {
        const i = +b.parentElement.dataset.i;
        this._open = this._open === i ? -1 : i;
        this.render();
      })
    );
  }
}
customElements.define("gb-accordion", GBAccordion);

/* ── Helper: resolve dot-path on GB.T and translate to current lang ─ */
function gbResolve(path) {
  if (!path) return null;
  const parts = path.split(".");
  let node = window.GB.T;
  for (const p of parts) { if (node == null) return null; node = node[p]; }
  if (node == null) return null;
  if (typeof node === "string") return node;
  if (typeof node === "object" && (node.en != null || node.de != null))
    return window.GB.tr(node, window.gbLang);
  return node;
}
window.gbResolve = gbResolve;

/* ── Helper: bind a single element's text/HTML to a translation key ─ */
window.gbBind = function (el, key, attr) {
  const update = () => {
    const v = gbResolve(key) || "";
    if (attr) el.setAttribute(attr, v);
    else el.textContent = v;
  };
  update();
  window.gbOnLang(update);
};

/* ── Auto-bind elements with [data-i18n] / [data-i18n-attr] ───────── */
window.gbAutoBind = function (root) {
  (root || document).querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const update = () => { el.textContent = gbResolve(key) || ""; };
    update();
    window.gbOnLang(update);
  });
  (root || document).querySelectorAll("[data-i18n-attr]").forEach(el => {
    const spec = el.getAttribute("data-i18n-attr"); // "attr:key"
    const [attr, key] = spec.split(":");
    const update = () => { el.setAttribute(attr, gbResolve(key) || ""); };
    update();
    window.gbOnLang(update);
  });
};
