/* ===== CAMEL Lab — shared behaviour & renderers ===== */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---- header / footer ---- */
  const page = document.body.dataset.page || "";
  const links = [
    ["index.html", "Home", "home"],
    ["people.html", "People", "people"],
    ["research.html", "Research", "research"],
    ["projects.html", "Projects", "projects"],
    ["publications.html", "Publications", "publications"],
    ["gallery.html", "Gallery", "gallery"],
    ["contact.html", "Contact", "contact"],
  ];
  const header = $("#site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="wrap">
        <a class="brand" href="index.html">CAMEL Lab <small>Pusan National University</small></a>
        <button class="nav-toggle" aria-label="메뉴 열기" aria-expanded="false">Menu</button>
        <nav class="nav" aria-label="Main">
          ${links.map(([href, label, key]) => `<a href="${href}" ${key === page ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
      </div>`;
    const btn = $(".nav-toggle", header), nav = $(".nav", header);
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }
  const footer = $("#site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="wrap">
        <span>© ${new Date().getFullYear()} Computer and Machine Engaged Lab, Pusan National University</span>
        <span><a href="https://github.com/PNUxCAMEL" target="_blank" rel="noopener">GitHub</a> &nbsp;·&nbsp; <a href="https://www.youtube.com/@camelxpnu5348" target="_blank" rel="noopener">YouTube</a></span>
      </div>`;
  }

  /* ---- slider (home) ---- */
  const slider = $(".slider");
  if (slider) {
    const track = $(".track", slider), slides = [...slider.querySelectorAll(".slide")], dots = $(".dots", slider);
    let i = 0, timer;
    const go = (n) => { i = (n + slides.length) % slides.length; track.style.transform = `translateX(${-100 * i}%)`; dots.querySelectorAll(".dot").forEach((d, k) => d.setAttribute("aria-current", k === i)); };
    slides.forEach((_, k) => { const d = document.createElement("button"); d.className = "dot"; d.setAttribute("aria-label", `Slide ${k + 1}`); d.onclick = () => go(k); dots.appendChild(d); });
    $(".prev", slider).onclick = () => go(i - 1);
    $(".next", slider).onclick = () => go(i + 1);
    const start = () => { if (matchMedia("(prefers-reduced-motion: reduce)").matches) return; timer = setInterval(() => go(i + 1), 5000); };
    slider.addEventListener("mouseenter", () => clearInterval(timer));
    slider.addEventListener("mouseleave", start);
    go(0); start();
  }

  /* ---- news (home) ---- */
  const newsEl = $("#news-list");
  if (newsEl && window.NEWS) {
    const LIMIT = 8;
    const render = (all) => {
      const rows = all ? NEWS : NEWS.slice(0, LIMIT);
      newsEl.innerHTML = rows.map(n => `<li><span class="date">${esc(n.date)}</span><span class="tag" data-kind="${esc(n.kind)}">${esc(n.kind)}</span><span class="text">${esc(n.text)}</span></li>`).join("");
      const more = $("#news-more");
      if (more) more.style.display = all || NEWS.length <= LIMIT ? "none" : "";
    };
    render(false);
    $("#news-more button")?.addEventListener("click", () => render(true));
  }

  /* ---- people ---- */
  const profEl = $("#professor");
  if (profEl && window.PROFESSOR) {
    const P = PROFESSOR;
    const list = (arr) => arr.map(([a, b]) => `<li><span>${esc(a)}</span><span>${esc(b)}</span></li>`).join("");
    profEl.innerHTML = `
      <img src="${P.photo}" alt="${esc(P.name)}">
      <div>
        <h3>${esc(P.name)}</h3>
        <p class="role">${esc(P.role)}</p>
        <p class="contact"><a href="mailto:${P.email}">${P.email}</a><br>${esc(P.address)}</p>
        <div class="cv">
          <div><h4>Career</h4><ul>${list(P.career)}</ul></div>
          <div><h4>Honors</h4><ul>${list(P.honors)}</ul></div>
          <div><h4>Grants</h4><ul>${list(P.grants)}</ul></div>
        </div>
      </div>`;
  }
  const personCard = (s) => `
    <div class="person">
      <img src="${s.photo}" alt="${esc(s.name)}" loading="lazy">
      <div class="name">${esc(s.name)}</div>
      <div class="deg">${esc(s.degree)}</div>
      <div class="topics">${s.topics.map(esc).join(" · ")}</div>
      <a class="mail" href="mailto:${s.email}">${esc(s.email)}</a>
    </div>`;
  const fillGroup = (id, pred) => {
    const el = $(id); if (!el || !window.STUDENTS) return;
    const rows = STUDENTS.filter(pred);
    el.innerHTML = rows.map(personCard).join("");
    const c = $(id + "-count"); if (c) c.textContent = rows.length;
  };
  fillGroup("#grad", s => /Ph\.D|M\.S/i.test(s.degree));
  fillGroup("#undergrad", s => /B\.S/i.test(s.degree));
  const alEl = $("#alumni");
  if (alEl && window.ALUMNI) {
    alEl.innerHTML = ALUMNI.map(a => `
      <div class="person">
        <img src="${a.photo || PLACEHOLDER}" alt="${esc(a.name)}" loading="lazy">
        <div class="name">${esc(a.name)}</div>
        <div class="deg">${esc(a.degree)}${a.year ? (/Candidate/.test(a.degree) ? "" : " Graduate") + " · " + esc(a.year) : ""}</div>
        ${a.employment ? `<div class="topics">${esc(a.employment)}</div>` : ""}
      </div>`).join("");
    const c = $("#alumni-count"); if (c) c.textContent = ALUMNI.length;
  }

  /* ---- projects ---- */
  const projCard = (p) => `
    <article class="project">
      <img src="${p.image}" alt="" loading="lazy">
      <div class="body">
        <h3>${esc(p.title)}</h3>
        <dl><dt>주관 기관</dt><dd>${esc(p.agency)}</dd><dt>수행 기간</dt><dd>${esc(p.period)}</dd><dt>수행 내용</dt><dd>${esc(p.summary)}</dd></dl>
        <ul>${p.tasks.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      </div>
    </article>`;
  ["ongoing", "past"].forEach(st => {
    const el = $("#" + st); if (!el || !window.PROJECTS) return;
    const rows = PROJECTS.filter(p => p.status === st);
    el.innerHTML = rows.map(projCard).join("");
    const c = $(`#${st}-count`); if (c) c.textContent = rows.length;
  });

  /* ---- publications ---- */
  const pubEl = $("#pubs");
  if (pubEl && window.PUBLICATIONS) {
    const LABEL = { IC: "International Conferences", IJ: "International Journals", DJ: "Domestic Journals" };
    const tabs = $("#pub-tabs");
    const renderPubs = (type) => {
      const rows = PUBLICATIONS.filter(p => type === "ALL" || p.type === type).sort((a, b) => b.year - a.year);
      let html = "", lastYear = null;
      rows.forEach(p => {
        if (p.year !== lastYear) { html += `<h3 class="pub-year">${p.year}</h3>`; lastYear = p.year; }
        html += `<div class="pub"><span class="id">${esc(p.id)}</span><div><div class="title">${esc(p.title)}</div><div class="venue">${esc(p.venue)}${type === "ALL" ? "" : ""}</div><div class="authors">${esc(p.authors)}</div></div></div>`;
      });
      pubEl.innerHTML = html || "<p>No publications.</p>";
      tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-selected", b.dataset.type === type));
    };
    tabs.innerHTML = [["ALL", "All"], ["IC", LABEL.IC], ["IJ", LABEL.IJ], ["DJ", LABEL.DJ]]
      .map(([t, l]) => `<button role="tab" data-type="${t}">${l} <span style="opacity:.6">(${t === "ALL" ? PUBLICATIONS.length : PUBLICATIONS.filter(p => p.type === t).length})</span></button>`).join("");
    tabs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) renderPubs(b.dataset.type); });
    renderPubs("ALL");
  }

  /* ---- gallery: album cards -> album view -> lightbox ---- */
  const galEl = $("#gallery");
  if (galEl && window.GALLERY) {
    const url = (a, f) => GALLERY_BASE + encodeURIComponent(a.folder) + "/" + encodeURIComponent(f);
    // 화면용 축소본: 무료 이미지 리사이즈 서비스(wsrv.nl)로 작게 불러오고, 실패하면 원본으로 대체
    const thumb = (u, w, h) => `https://wsrv.nl/?url=${encodeURIComponent(u)}&w=${w}${h ? `&h=${h}&fit=cover` : ""}&output=jpg&q=80`;
    const withFallback = (root) => root.querySelectorAll("img[data-raw]").forEach(img =>
      img.addEventListener("error", () => { img.src = img.dataset.raw; }, { once: true }));
    const count = (a) => a.sections.reduce((n, s) => n + s.images.length, 0);
    const allAlbums = GALLERY.flatMap(g => g.albums);
    const lead = $("#gallery-lead"), title = $("#gallery-title");

    const renderIndex = () => {
      title.textContent = "Gallery"; if (lead) lead.style.display = "";
      galEl.innerHTML = GALLERY.map(g => `
        <section class="gallery-group">
          <h2>${esc(g.group)}</h2>
          <div class="album-grid">
            ${g.albums.map(a => `
              <a class="album" href="#${a.id}">
                <img src="${thumb(url(a, a.cover), 640, 480)}" data-raw="${url(a, a.cover)}" alt="" loading="lazy">
                <div class="album-title">${esc(a.title)}</div>
                <div class="album-count">${count(a)} photos</div>
              </a>`).join("")}
          </div>
        </section>`).join("");
      withFallback(galEl);
    };

    let photos = [];
    const renderAlbum = (a) => {
      title.textContent = a.title; if (lead) lead.style.display = "none";
      photos = a.sections.flatMap(s => s.images.map(f => ({ big: thumb(url(a, f), 1800), raw: url(a, f) })));
      let i = 0;
      galEl.innerHTML = `
        <p class="back"><a href="#">← All albums</a></p>
        ${a.sections.map(s => `
          ${s.heading ? `<h2 class="album-section">${esc(s.heading)}</h2>` : ""}
          <div class="photo-grid">
            ${s.images.map(f => `<button class="photo" data-i="${i++}" type="button"><img src="${thumb(url(a, f), 480, 360)}" data-raw="${url(a, f)}" alt="" loading="lazy"></button>`).join("")}
          </div>`).join("")}`;
      withFallback(galEl);
      galEl.querySelectorAll(".photo").forEach(b => b.addEventListener("click", () => openLightbox(+b.dataset.i)));
      window.scrollTo(0, 0);
    };

    /* lightbox */
    const lb = document.createElement("div");
    lb.className = "lightbox"; lb.hidden = true;
    lb.innerHTML = `<button class="lb-close" aria-label="Close">×</button><button class="lb-prev" aria-label="Previous">‹</button><img alt=""><button class="lb-next" aria-label="Next">›</button><div class="lb-count"></div>`;
    document.body.appendChild(lb);
    let cur = 0;
    const lbImg = $("img", lb);
    lbImg.addEventListener("error", () => { if (photos[cur] && lbImg.src !== photos[cur].raw) lbImg.src = photos[cur].raw; });
    const show = (n) => { cur = (n + photos.length) % photos.length; lbImg.src = photos[cur].big; $(".lb-count", lb).textContent = `${cur + 1} / ${photos.length}`; };
    const openLightbox = (n) => { show(n); lb.hidden = false; document.body.style.overflow = "hidden"; };
    const closeLightbox = () => { lb.hidden = true; document.body.style.overflow = ""; };
    $(".lb-close", lb).onclick = closeLightbox;
    $(".lb-prev", lb).onclick = () => show(cur - 1);
    $(".lb-next", lb).onclick = () => show(cur + 1);
    lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", e => {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") show(cur - 1);
      else if (e.key === "ArrowRight") show(cur + 1);
    });

    const route = () => {
      const id = location.hash.slice(1);
      const a = allAlbums.find(x => x.id === id);
      a ? renderAlbum(a) : renderIndex();
    };
    window.addEventListener("hashchange", route);
    route();
  }
})();
