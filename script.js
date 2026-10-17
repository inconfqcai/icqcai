/* ==========================================================================
   QCAI 2027 — site script
   --------------------------------------------------------------------------
   EDIT THIS CONFIG BLOCK to update the site. Everything below it (dates,
   fees, committee, speakers, program, downloads, Google Form links) is
   rendered from this data, so you rarely need to touch the HTML.
   ========================================================================== */

const CONFIG = {
  shortName: "QCAI 2027",
  fullName: "1st International Conference on Quantum Computing and Artificial Intelligence",
  edition: "1st International Conference on",
  city: "New Delhi, India",
  datesLabel: "12–14 March 2027",
  format: "In person, with online presentation option",
  email: "inconfqcai@gmail.com",

  // Optional banner under the hero. Leave "" to hide.
  notice: "Jointly organized by IIT (ISM) Dhanbad and JNU New Delhi",

  // ---- GOOGLE FORM LINKS (paste your form URLs here) ----
  forms: {
    submission:   "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F",
    // registration: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F",
    visa:         "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
  },

  // ---- IMPORTANT DATES (YYYY-MM-DD) ----
  importantDates: [
    { label: "Call for papers", date: "2026-12-10" },
    { label: "Last date for paper submission", date: "2027-01-10" },
    { label: "Notification of acceptance", date: "2027-02-10" },
    { label: "Camera Ready", date: "2027-02-15" },
    { label: "Final registration deadline", date: "2027-02-20" },
    // { label: "Conference", date: "2027-03-21", end: "2027-03-22", event: true }
  ],
  earlyBirdLabel: "15 February 2027",

  // ---- TOPICS / TRACKS ----
  tracks: [
    {
      ket: "Track 1", title: "Quantum Computing & Algorithms",
      topics: [
        "Quantum algorithms and complexity",
        "Variational quantum algorithms (VQE, QAOA)",
        "Quantum error correction and fault tolerance",
        "Quantum control and calibration",
        "Quantum hardware: superconducting, trapped-ion, photonic, neutral-atom",
        "Quantum simulation of physical and chemical systems"
      ]
    },
    {
      ket: "Track 2", title: "Quantum Machine Learning & AI",
      topics: [
        "Quantum machine learning",
        "Quantum neural networks and their construction",
        "Quantum reinforcement learning",
        "Quantum data clustering and quantum PCA",
        "Quantum natural language processing",
        "Quantum–classical hybrid computing",
        "Machine learning for quantum error decoding and control"
      ]
    },
    {
      ket: "Track 3", title: "Quantum Communication, Measurement & Security",
      topics: [
        "Quantum key distribution and quantum networks",
        "Quantum sensing and metrology",
        "Quantum measurement and quantum interference",
        "Quantum nonlinear optics",
        "Post-quantum cryptography",
        "Quantum AI security",
        "Quantum intelligent signal processing"
      ]
    },
    {
      ket: "Track 4", title: "Quantum Computing & Algorithms",
      topics: [
        "Quantum algorithms and complexity",
        "Variational quantum algorithms (VQE, QAOA)",
        "Quantum error correction and fault tolerance",
        "Quantum control and calibration",
        "Quantum hardware: superconducting, trapped-ion, photonic, neutral-atom",
        "Quantum simulation of physical and chemical systems"
      ]
    },
    {
      ket: "Track 5", title: "Quantum Machine Learning & AI",
      topics: [
        "Quantum machine learning",
        "Quantum neural networks and their construction",
        "Quantum reinforcement learning",
        "Quantum data clustering and quantum PCA",
        "Quantum natural language processing",
        "Quantum–classical hybrid computing",
        "Machine learning for quantum error decoding and control"
      ]
    },
    {
      ket: "Track 6", title: "Quantum Communication, Measurement & Security",
      topics: [
        "Quantum key distribution and quantum networks",
        "Quantum sensing and metrology",
        "Quantum measurement and quantum interference",
        "Quantum nonlinear optics",
        "Post-quantum cryptography",
        "Quantum AI security",
        "Quantum intelligent signal processing"
      ]
    }
  ],

  // ---- SPONSORS / ORGANISERS (logo: path to an image, or leave "") ----
  sponsors: [
    { role: "Organised by", name: "IIT (ISM) Dhanbad", logo: "./assets/anrf.jpg" },
    { role: "Co-organised by", name: "JNU, New Delhi", logo: "./assets/anrf.jpg" },
    { role: "Venue partner", name: "SC&SS, JNU", logo: "./assets/anrf.jpg" },
    { role: "Academic collaboration", name: "Quantum Computing & AI research community", logo: "./assets/anrf.jpg" }
  ],

  // ---- COMMITTEE ----
  committee: [
    { group: "Conference Convener", people: [
      { name: "Prof. Abhaya Singh", aff: "IIT (ISM) Dhanbad" },
      { name: "Dr. Buddha Singh", aff: "JNU New Delhi" } ] },
    { group: "Co-Convener", people: [
      { name: "Dr. Anuj Sachan", aff: "JNU New Delhi" },
      ] },
    
    { group: "Conference Chairperson", people: [
      { name: "Prof. Satish Chand", aff: "JNU, New Delhi" } ] },
    { group: "Committee Members", people: [
      { name: "Dr. Pushpendra Singh", aff: "JNU, New Delhi" } ] },
    {
      group: "Student Coordinator", people: [
        {
          name: "Pranjuli Saxena", aff: "JNU New Delhi"
        },
        {
          name: "Raj Aryan", aff: "JNU New Delhi"
        },
        {
          name: "Birendra Behera", aff: "JNU New Delhi"
        }
      ]
    }
    // { group: "Invited Speakers", people: [
    //   { name: "Biswa Nath Datta", aff: "Research Professor, Northern Illinois University" },
    //   { name: "Bhupendra Singh", aff: "Scientist, DRDO Bengaluru" },
    //   { name: "Vaanathi Sundaresan", aff: "Assistant Professor, IISc Bangalore" },
    //   { name: "M. Tanveer", aff: "Professor, IIT Indore" },
    //   { name: "Apoorva D Patel", aff: "Emeritus Professor, IISc Bangalore" },
    //   { name: "Alok Mishra", aff: "Scientist, DRDO Bengaluru" },
    //   { name: "Shayan Srinivasa Garani", aff: "Professor, IISc Bangalore" },
    //   { name: "Navin Kashyap", aff: "Professor, IISc Bangalore" } ] }
  ],

  // InvitedSpeakers : [
  //    { group: "Invited Speakers", people: [
  //     { name: "Biswa Nath Datta", aff: "Research Professor, Northern Illinois University" },
  //     { name: "Bhupendra Singh", aff: "Scientist, DRDO Bengaluru" },
  //     { name: "Vaanathi Sundaresan", aff: "Assistant Professor, IISc Bangalore" },
  //     { name: "M. Tanveer", aff: "Professor, IIT Indore" },
  //     { name: "Apoorva D Patel", aff: "Emeritus Professor, IISc Bangalore" },
  //     { name: "Alok Mishra", aff: "Scientist, DRDO Bengaluru" },
  //     { name: "Shayan Srinivasa Garani", aff: "Professor, IISc Bangalore" },
  //     { name: "Navin Kashyap", aff: "Professor, IISc Bangalore" } ] }
  // ],

  // ---- SPEAKERS (photo: path to an image, or leave "" for initials) ----
  speakers: [
        {name: "Prof. Manjul Bhargava", aff: "Professor, Princeton University",  photo: "./assets/Manjul.jpeg" },
    {name: "Prof. Bhartendu K. Singh", aff: "Director, IIIT Jabalpur", photo: "./assets/Bhartendu.jpeg" },
    {name: "Prof. Ashutosh Kumar Singh", aff: "Director, IIIT Bhopal", photo: "./assets/Ashutosh.jpeg" },
    {name: "Prof. N. P. Padhy", aff: "Director, IIIT Kota",  photo: "./assets/NP.jpeg" },
    {name: "Prof. Rajeev Srivastava", aff: "Director, IIIT Ranchi",  photo: "./assets/Rajeev.jpeg" },
  ],

  // ---- REGISTRATION FEES (sample values — set your own) ----
  fees: [
    { cat: "BTech / MTech / MS / MSc / PhD", note: "INR XYZ + GST", inr: ["XYZ", "XYZ"], usd: ["XYZ", "XYZ"] },
    { cat: "Post Doc", note: "INR XYZ + GST", inr: ["XYZ", "XYZ"], usd: ["XYZ", "XYZ"] },
    { cat: "Faculty", note: "INR XYZ + GST", inr: ["XYZ", "XYZ"], usd: ["XYZ", "XYZ"] },
    { cat: "Industry", note: "INR XYZ + GST", inr: ["XYZ", "XYZ"], usd: ["XYZ", "XYZ"] },
    { cat: "Listener / attendee", note: "No paper presentation", inr: [3000, 4000], usd: [80, 120] },
    { cat: "Accommodation", note: "Not included", inr: ["—", "—"], usd: ["—", "—"] }
  ],

  // ---- PAYMENT DETAILS (shown on the registration page) ----
  bank: [
    ["Account name", "IIT (ISM) Dhanbad — QCAI 2027"],
    ["Bank", "State Bank of India, Dhanbad"],
    ["Account no.", "XXXXXXXXXXXX"],
    ["IFSC", "XXXX0000000"],
    ["SWIFT (international)", "XXXXINBBXXX"]
  ],

  // ---- PROGRAM ----
  program: [
    { day: "Day 1", date: "Fri, 12 Mar", items: [
      ["08:30 – 09:30", "Registration and welcome kit", "School of Computer and Systems Science", ""],
      ["09:30 – 10:15", "Inauguration and opening remarks", "Main auditorium", ""],
      ["10:15 – 11:00", "Keynote 1", "Main auditorium", "keynote"],
      ["11:00 – 11:20", "Tea break", "", "break"],
      ["11:20 – 13:00", "Technical paper session 1A · 1B", "Halls A & B", "session"],
      ["13:00 – 14:00", "Lunch", "", "break"],
      ["14:00 – 14:45", "Keynote 2", "Main auditorium", "keynote"],
      ["14:45 – 16:30", "Technical paper session 2A · 2B", "Halls A & B", "session"],
      ["16:30 – 17:30", "Poster session and networking tea", "Exhibition area", ""]
    ]},
    { day: "Day 2", date: "Sat, 13 Mar", items: [
      ["09:30 – 10:15", "Keynote 3", "Main auditorium", "keynote"],
      ["10:15 – 11:00", "Invited technical talk", "Main auditorium", "keynote"],
      ["11:00 – 11:20", "Tea break", "", "break"],
      ["11:20 – 13:00", "Quantum communication & security session", "Halls A & B", "session"],
      ["13:00 – 14:00", "Lunch", "", "break"],
      ["14:00 – 15:30", "Industry panel: Building useful quantum-AI systems", "Main auditorium", ""],
      ["15:30 – 17:00", "Online paper sessions", "Virtual rooms", "session"],
      ["19:00 – 21:00", "Conference dinner", "To be announced", ""]
    ]},
    { day: "Day 3", date: "Sun, 14 Mar", items: [
      ["09:30 – 11:00", "Paper session 3A · 3B", "Halls A & B", "session"],
      ["11:00 – 11:20", "Tea break", "", "break"],
      ["11:20 – 12:30", "Tutorial: Quantum computing fundamentals and applications", "Lab block", ""],
      ["12:30 – 13:15", "Best paper awards and valedictory", "Main auditorium", ""],
      ["13:15 – 14:15", "Lunch", "", "break"]
    ]}
  ],

  // ---- VENUE ----
  venueName: "SC&SS, Jawaharlal Nehru University (JNU)",
  venueAddress: "School of Computer and Systems Sciences, JNU, New Delhi, India",
  mapUrl: "https://maps.google.com/?q=Jawaharlal+Nehru+University+New+Delhi",

  // ---- DOWNLOADS (put files in a /downloads folder next to index.html) ----
  downloads: [
    { ext: "doc", name: "Paper template (Word)", desc: "Two-column conference format", href: "assets/qcai_format.doc" },
    { ext: "zip", name: "Paper template (LaTeX)", desc: "Class file and example .tex", href: "assets/qcai-latex.zip" },
    // { ext: "pdf", name: "Copyright transfer form", desc: "Sign and upload with camera-ready paper", href: "downloads/QCAI2027-copyright.pdf" },
    // { ext: "pptx", name: "Presentation template", desc: "16:9 slides for oral sessions", href: "downloads/QCAI2027-slides.pptx" },
    // { ext: "pdf", name: "Poster guidelines", desc: "A0 portrait, layout tips", href: "downloads/QCAI2027-poster.pdf" },
    // { ext: "pdf", name: "Conference brochure", desc: "Overview to share", href: "downloads/QCAI2027-brochure.pdf" }
  ],

  // ---- CONTACTS ----
  contacts: [
    { role: "Email", name: "All enquiries: papers, registration, visa and general", value: "inconfqcai@gmail.com" },
    { role: "Phone", name: "Conference office (Mon–Fri, 10:00–17:00 IST)", value: "+91 XXXXXXXXX" }
  ]
};

/* ==========================================================================
   Below this line: site logic. No edits needed for content changes.
   ========================================================================== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
};
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const parseDay = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const fmtDay = (s) => { const d = parseDay(s); return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; };

/* ---------- fill config text ---------- */
function fillConfig() {
  $$("[data-cfg]").forEach((el) => {
    const v = CONFIG[el.dataset.cfg];
    if (v != null) el.textContent = v;
  });
  $$("[data-cfg-href]").forEach((el) => { const v = CONFIG[el.dataset.cfgHref]; if (v) el.href = v; });
  $$("[data-cfg-mailto]").forEach((el) => { el.href = `mailto:${CONFIG.email}`; });
  $$("[data-form]").forEach((el) => {
    const url = CONFIG.forms[el.dataset.form];
    if (url) el.href = url;
    if (!url || url.includes("REPLACE-WITH")) el.title = "Form link not set yet — add it in script.js (CONFIG.forms)";
  });
  $("#year").textContent = new Date().getFullYear();
  document.title = `${CONFIG.shortName} · ${CONFIG.city.split(",")[0]}`;
  if (CONFIG.notice) { $("#noticeText").textContent = CONFIG.notice; $("#noticeBar").hidden = false; }
}

/* ---------- important dates ---------- */
function renderDates() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let nextFound = false;
  $("#datesList").innerHTML = CONFIG.importantDates.map((d) => {
    const endDay = parseDay(d.end || d.date);
    const past = endDay < today;
    let cls, state;
    if (past) { cls = "is-past"; state = d.event ? "Held" : "Closed"; }
    else if (!nextFound) { cls = "is-next"; state = d.event ? "Upcoming" : ""; nextFound = true; }
    else { cls = ""; state = ""; }
    if (d.event) cls += " is-event";
    const dateText = d.end
      ? (() => { const a = parseDay(d.date), b = parseDay(d.end); return a.getMonth() === b.getMonth()
          ? `${a.getDate()}–${b.getDate()} ${MONTHS[a.getMonth()]} ${a.getFullYear()}` : `${fmtDay(d.date)} – ${fmtDay(d.end)}`; })()
      : fmtDay(d.date);
    return `<li class="${cls.trim()}"><div class="t-label">${esc(d.label)}</div><div class="t-date">${esc(dateText)}</div>${state ? `<span class="t-state">${state}</span>` : ""}</li>`;
  }).join("");
}

/* ---------- tracks ---------- */
function renderTracks() {
  const card = (t, index, section, limit) => {
    const topicsId = `track-${section}-topics-${index}`;
    const topics = limit == null ? t.topics : t.topics.slice(0, limit);
    return `<article class="track"><div class="track-ket">${esc(t.ket)}</div>
      <h3><button class="track-header" type="button" aria-expanded="false" aria-controls="${topicsId}">
        <span>${esc(t.title)}</span><span class="track-chevron" aria-hidden="true"></span>
      </button></h3>
      <ul class="topics-list" id="${topicsId}" hidden>${topics.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></article>`;
  };
  $("#tracksFull").innerHTML = CONFIG.tracks.map((t, i) => card(t, i, "full")).join("");
}

/* ---------- sponsors ---------- */
function renderSponsors() {
  $("#sponsors").innerHTML = CONFIG.sponsors.map((s) => `<div class="sponsor"><span class="role">${esc(s.role)}</span>
    <div class="logo">${s.logo ? `<img src="${esc(s.logo)}" alt="${esc(s.name)} logo">` : `<span class="logo-ph">Logo</span>`}</div>
    <span class="name">${esc(s.name)}</span></div>`).join("");
}

/* ---------- committee ---------- */
function renderCommittee() {
  $("#committeeList").innerHTML = CONFIG.committee.map((g) => `<div class="committee-group"><h2>${esc(g.group)}</h2>
    <ul class="people">${g.people.map((p) => `<li><div class="p-name">${esc(p.name)}</div><div class="p-aff">${esc(p.aff)}</div></li>`).join("")}</ul></div>`).join("");
}

/* ---------- speakers ---------- */


function renderSpeakers() {
  const initials = (name) =>
    name
      .replace(/^(Prof\.|Dr\.|Mr\.|Ms\.|Mrs\.)\s*/i, "")
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  $("#speakersList").innerHTML = CONFIG.speakers
    .map(
      (s) => `
        <article class="speaker">
          <div class="photo">
            ${
              s.photo
                ? `<img src="${esc(s.photo)}"
                    alt="${esc(s.name)}"
                    loading="lazy">`
                : esc(initials(s.name))
            }
          </div>
          <div class="body">
            <h3 class="s-name">${esc(s.name)}</h3>
            <span class="s-aff">${esc(s.aff)}</span>
          </div>
        </article>
      `
    )
    .join("");
}
// function renderInviteSpeakers() {
//   $("#invitedSpeaker").innerHTML = CONFIG.InvitedSpeakers.map((g) => `<div class="committee-group"><h2>${esc(g.group)}</h2>
//     <ul class="people">${g.people.map((p) => `<li><div class="p-name">${esc(p.name)}</div><div class="p-aff">${esc(p.aff)}</div></li>`).join("")}</ul></div>`).join("");
// }


/* ---------- fees ---------- */
function renderFees(cur = "inr") {
  const fmt = (n) => {
    if (typeof n === "string") return n;
    if (n == null || Number.isNaN(Number(n))) return "—";
    const val = Number(n);
    return cur === "inr" ? "₹" + val.toLocaleString("en-IN") : "US$" + val.toLocaleString("en-US");
  };
  $("#feeBody").innerHTML = CONFIG.fees.map((f) => `<tr><td><strong>${esc(f.cat)}</strong>${f.note ? `<span class="note">${esc(f.note)}</span>` : ""}</td>
    <td class="amt">${fmt(f[cur][0])}</td><td class="amt">${fmt(f[cur][1])}</td></tr>`).join("");
  $$(".fee-switch .chip").forEach((b) => { const on = b.dataset.cur === cur; b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", on); });
  $("#bankDetails").innerHTML = CONFIG.bank.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
}

/* ---------- program ---------- */
function renderProgram(idx = 0) {
  $("#dayTabs").innerHTML = CONFIG.program.map((d, i) => `<button class="tab" role="tab" id="tab-${i}" aria-selected="${i === idx}" data-day="${i}">${esc(d.day)}<small>${esc(d.date)}</small></button>`).join("");
  const day = CONFIG.program[idx];
  const label = { keynote: "Keynote", session: "Papers" };
  $("#dayPanel").setAttribute("aria-labelledby", `tab-${idx}`);
  $("#dayPanel").innerHTML = `<ol class="schedule">${day.items.map(([t, w, where, kind]) => `<li class="${kind === "break" ? "break" : ""}">
    <span class="time">${esc(t)}</span><span class="what">${esc(w)}${where ? `<span class="where">${esc(where)}</span>` : ""}</span>
    ${label[kind] ? `<span class="tag ${kind}">${label[kind]}</span>` : "<span></span>"}</li>`).join("")}</ol>`;
}

/* ---------- downloads & contacts ---------- */
function renderDownloads() {
  $("#downloadList").innerHTML = CONFIG.downloads.map((d) => `<li><a href="${esc(d.href)}" download>
    <span class="ext">${esc(d.ext)}</span><span><span class="d-name">${esc(d.name)}</span><br><span class="d-desc">${esc(d.desc)}</span></span>
    <span class="arrow" aria-hidden="true">↓</span></a></li>`).join("");
}
function renderContacts() {
  $("#contactList").innerHTML = CONFIG.contacts.map((c, i) => `<div class="contact-card"><span class="c-role">${esc(c.role)}</span>
    <strong>${esc(c.name)}</strong><span class="c-val" id="contact-${i}">${esc(c.value)}</span>
    <button class="btn btn-small" type="button" data-copy="${esc(c.value)}">Copy</button></div>`).join("");
}

/* ---------- copy helper ---------- */
function copyText(text, btn) {
  const done = () => { const o = btn.textContent; btn.textContent = "Copied"; setTimeout(() => (btn.textContent = o), 1500); };
  const fallback = () => {
    const r = document.createRange(); const span = btn.previousElementSibling || btn;
    r.selectNodeContents(span); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
    btn.textContent = "Press Ctrl+C"; setTimeout(() => (btn.textContent = "Copy"), 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
  else fallback();
}

/* ---------- single-page scrolling ---------- */
// Content sections are always visible; anchors scroll to them natively.
// Legal pages (privacy, terms) stay hidden until their link is followed.
function setActive(name) {
  $$(".site-nav a[href^='#']").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + name));
}
function route() {
  const name = location.hash.slice(1);
  let showedLegal = false;
  $$(".page.legal").forEach((p) => { const on = p.id === name; p.hidden = !on; showedLegal ||= on; });
  if (showedLegal) $("#" + name).scrollIntoView();
  closeMenu();
}
function initScrollSpy() {
  const sections = $$(".page:not(.legal)");
  const io = new IntersectionObserver((entries) => {
    // sub-sections (e.g. Visa) highlight their parent link via data-nav
    entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.dataset.nav || e.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => io.observe(s));
}

/* ---------- navigation menu ---------- */
function closeMenu() {
  $("#siteNav").classList.remove("is-open");
  $("#navToggle").setAttribute("aria-expanded", "false");
}
function initNav() {
  $("#navToggle").addEventListener("click", () => {
    const open = !$("#siteNav").classList.contains("is-open");
    $("#siteNav").classList.toggle("is-open", open);
    $("#navToggle").setAttribute("aria-expanded", String(open));
  });
  // close the mobile menu after picking a section, even if the hash didn't change
  $$(".site-nav a[href^='#']").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("click", (e) => { if (!e.target.closest(".site-header")) closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
}

/* ---------- misc UI ---------- */
function initUI() {
  $("#tracksFull").addEventListener("click", (e) => {
    const button = e.target.closest(".track-header");
    if (!button) return;
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    button.closest(".track").querySelector(".topics-list").hidden = !open;
    button.closest(".track").classList.toggle("open", open);
  });
  const registrationFeeSwitch = $("#registrationFeeSwitch");
  registrationFeeSwitch.addEventListener("click", (e) => {
    const button = e.target.closest("[data-currency]");
    if (!button) return;
    const currency = button.dataset.currency;
    $$(".fee-switch [data-currency]", registrationFeeSwitch).forEach((option) => {
      const active = option === button;
      option.classList.toggle("is-on", active);
      option.setAttribute("aria-pressed", String(active));
    });
    $$("[data-fee-currency]", registrationFeeSwitch.parentElement).forEach((body) => {
      body.hidden = body.dataset.feeCurrency !== currency;
    });
  });
  $("#dayTabs").addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (b) { renderProgram(+b.dataset.day); $(`#tab-${b.dataset.day}`).focus(); } });
  $("#dayTabs").addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const cur = $$(".tab").findIndex((t) => t.getAttribute("aria-selected") === "true");
    const n = (cur + (e.key === "ArrowRight" ? 1 : -1) + CONFIG.program.length) % CONFIG.program.length;
    renderProgram(n); $(`#tab-${n}`).focus();
  });
  document.addEventListener("click", (e) => { const b = e.target.closest("[data-copy]"); if (b) copyText(b.dataset.copy, b); });
  const copyEmail = $("#copyEmail");
  if (copyEmail) copyEmail.addEventListener("click", (e) => copyText(CONFIG.email, e.currentTarget));

  if (!store.get("qcai-consent")) $("#consent").hidden = false;
  $("#consentOk").addEventListener("click", () => { store.set("qcai-consent", "1"); $("#consent").hidden = true; });

  const toTop = $("#toTop");
  addEventListener("scroll", () => { toTop.hidden = scrollY < 600 || !$("#consent").hidden; }, { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  fillConfig(); renderDates();renderTracks(); renderSponsors();
  renderCommittee(); renderSpeakers(); renderProgram(0);
  renderDownloads(); renderContacts(); initNav(); initUI(); initScrollSpy();
  addEventListener("hashchange", route); route();
  // content is rendered by JS, so re-apply the initial anchor once it exists
  const target = document.getElementById(location.hash.slice(1));
  if (target && !target.classList.contains("legal")) target.scrollIntoView();
});