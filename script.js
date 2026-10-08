/* ---------- DATA (hardcoded) ---------- */
const HOUSES = [
  {
    id: "luna",
    col: "#8fb0ff",
    em: "🌙",
    suf: "A",
    s: [5, 6, 7, 2, 8, 1, 7, 9, 9, 2, 6],
  },
  {
    id: "solis",
    col: "#ffb52e",
    em: "☀️",
    suf: "B",
    s: [2, 5, 6, 7, 8, 9, 4, 3, 7, 0, 1],
  },
  {
    id: "terra",
    col: "#3fd68a",
    em: "🌍",
    suf: "V",
    s: [9, 8, 7, 4, 5, 6, 3, 2, 1, 4, 20],
  },
];
const POINTS = [
  ["🏆", "p1"],
  ["📚", "p2"],
  ["🎯", "p3"],
  ["💡", "p4"],
  ["🎤", "p5"],
  ["🌟", "p6"],
];

/* ---------- TRANSLATIONS ---------- */
const T = {
  en: {
    nav_about: "About",
    nav_houses: "Houses",
    nav_points: "Points",
    nav_scores: "Scoreboard",
    nav_year: "House of the Year",
    hero_tag: "School team competition",
    hero_t: "House System",
    hero_p: "Three Houses, one school, friendly competition all year long.",
    hero_cta: "See the scoreboard",
    hero_cta2: "How it works",
    about_t: "What is the House System?",
    about_p:
      "House System is a school system that brings students together in three Houses and creates friendly team competition during the school year.",
    houses_t: "Three Houses",
    houses_p: "Each class belongs to one House. All Houses are equal.",
    luna: "Calm minds, sharp ideas.",
    solis: "Bright energy, bold moves.",
    terra: "Solid ground, steady teamwork.",
    leaders: "House leaders",
    pres: "President",
    asst: "President's Assistant",
    tba: "To be announced",
    leaders_p: "They represent their House and help the team work together.",
    points_t: "How Houses earn points",
    p1: "Competitions",
    p2: "Olympiads",
    p3: "Contests",
    p4: "Student ideas",
    p5: "School events",
    p6: "Other school achievements",
    score_t: "House Scoreboard",
    score_p:
      "Every month, the results are announced and the scoreboard is updated. Students can see how many points each House has.",
    pts: "points",
    cls: "Class",
    lead: "Leading",
    year_t: "House of the Year",
    year_p:
      "At the end of the school year, all points are counted. The House with the most points becomes House of the Year.",
    motto: "One for all. All for one.",
    contact: "Contact",
  },
  ru: {
    nav_about: "О системе",
    nav_houses: "Дома",
    nav_points: "Баллы",
    nav_scores: "Таблица",
    nav_year: "Дом года",
    hero_tag: "Командное соревнование школы",
    hero_t: "House System",
    hero_p:
      "Три Дома, одна школа и дружеское соревнование на протяжении всего года.",
    hero_cta: "Смотреть таблицу",
    hero_cta2: "Как это работает",
    about_t: "Что такое House System?",
    about_p:
      "House System — это школьная система, которая объединяет учеников в три Дома и создаёт дружеское командное соревнование в течение учебного года.",
    houses_t: "Три Дома",
    houses_p: "Каждый класс входит в один Дом. Все Дома равны.",
    luna: "Спокойный разум, острые идеи.",
    solis: "Яркая энергия, смелые шаги.",
    terra: "Твёрдая опора, сильная команда.",
    leaders: "Лидеры Дома",
    pres: "Президент",
    asst: "Помощник президента",
    tba: "Будет объявлено",
    leaders_p: "Они представляют свой Дом и помогают команде работать вместе.",
    points_t: "Как Дома получают баллы",
    p1: "Соревнования",
    p2: "Олимпиады",
    p3: "Конкурсы",
    p4: "Идеи учеников",
    p5: "Школьные мероприятия",
    p6: "Другие школьные достижения",
    score_t: "Таблица Домов",
    score_p:
      "Каждый месяц объявляются результаты и обновляется таблица. Ученики видят, сколько баллов у каждого Дома.",
    pts: "баллов",
    cls: "Класс",
    lead: "Лидирует",
    year_t: "Дом года",
    year_p:
      "В конце учебного года подсчитываются все баллы. Дом с наибольшим количеством баллов становится Домом года.",
    motto: "Один за всех. Все за одного.",
    contact: "Контакты",
  },
  uz: {
    nav_about: "Haqida",
    nav_houses: "Uylar",
    nav_points: "Ballar",
    nav_scores: "Jadval",
    nav_year: "Yil uyi",
    hero_tag: "Maktab jamoaviy musobaqasi",
    hero_t: "House System",
    hero_p: "Uchta uy, bitta maktab va butun yil davomida do‘stona musobaqa.",
    hero_cta: "Jadvalni ko‘rish",
    hero_cta2: "Bu qanday ishlaydi",
    about_t: "House System nima?",
    about_p:
      "House System — o‘quvchilarni uchta uyga birlashtiradigan va o‘quv yili davomida do‘stona jamoaviy musobaqa yaratadigan maktab tizimi.",
    houses_t: "Uchta uy",
    houses_p: "Har bir sinf bitta uyga tegishli. Barcha uylar teng.",
    luna: "Xotirjam aql, o‘tkir g‘oyalar.",
    solis: "Yorqin energiya, dadil qadamlar.",
    terra: "Mustahkam zamin, kuchli jamoa.",
    leaders: "Uy rahbarlari",
    pres: "Prezident",
    asst: "Prezident yordamchisi",
    tba: "Tez orada e’lon qilinadi",
    leaders_p:
      "Ular o‘z uyini vakillik qiladi va jamoaga birgalikda ishlashda yordam beradi.",
    points_t: "Uylar ballarni qanday to‘playdi",
    p1: "Musobaqalar",
    p2: "Olimpiadalar",
    p3: "Tanlovlar",
    p4: "O‘quvchilar g‘oyalari",
    p5: "Maktab tadbirlari",
    p6: "Boshqa maktab yutuqlari",
    score_t: "Uylar jadvali",
    score_p:
      "Har oy natijalar e’lon qilinadi va jadval yangilanadi. O‘quvchilar har bir uyning nechta bali borligini ko‘ra oladi.",
    pts: "ball",
    cls: "Sinf",
    lead: "Yetakchi",
    year_t: "Yil uyi",
    year_p:
      "O‘quv yili oxirida barcha ballar hisoblanadi. Eng ko‘p ball to‘plagan uy Yil uyi bo‘ladi.",
    motto: "Bitta hamma uchun. Hamma bitta uchun.",
    contact: "Aloqa",
  },
};
const X = {
  en: {
    n_home: "Home",
    nav_dash: "Dashboards",
    dash_t: "House dashboards",
    dash_p:
      "Pick a House to see its points, ranking and how each class contributes.",
    d_total: "Total points",
    d_rank: "Place",
    d_avg: "Average per class",
    d_best: "Top class",
    d_share: "Share of all points",
    d_cat: "Points by activity",
    d_cls: "Classes",
    set_t: "Settings",
    set_theme: "Theme",
    th_d: "Dark",
    th_l: "Light",
    th_a: "System",
    set_lang: "Language",
    set_3d: "3D background",
    set_motion: "Animations",
    set_cursor: "Custom cursor",
    set_reset: "Reset settings",
  },
  ru: {
    n_home: "Главная",
    nav_dash: "Дашборды",
    dash_t: "Дашборды Домов",
    dash_p:
      "Выбери Дом, чтобы увидеть его баллы, место и вклад каждого класса.",
    d_total: "Всего баллов",
    d_rank: "Место",
    d_avg: "В среднем на класс",
    d_best: "Лучший класс",
    d_share: "Доля всех баллов",
    d_cat: "Баллы по направлениям",
    d_cls: "Классы",
    set_t: "Настройки",
    set_theme: "Тема",
    th_d: "Тёмная",
    th_l: "Светлая",
    th_a: "Как в системе",
    set_lang: "Язык",
    set_3d: "3D-фон",
    set_motion: "Анимации",
    set_cursor: "Свой курсор",
    set_reset: "Сбросить настройки",
  },
  uz: {
    n_home: "Bosh sahifa",
    nav_dash: "Dashboardlar",
    dash_t: "Uylar dashboardi",
    dash_p:
      "Uyni tanlang: uning ballari, o‘rni va har bir sinf hissasini ko‘ring.",
    d_total: "Jami ball",
    d_rank: "O‘rin",
    d_avg: "Sinfga o‘rtacha",
    d_best: "Eng yaxshi sinf",
    d_share: "Barcha ballardagi ulush",
    d_cat: "Yo‘nalishlar bo‘yicha ballar",
    d_cls: "Sinflar",
    set_t: "Sozlamalar",
    set_theme: "Mavzu",
    th_d: "Qorong‘i",
    th_l: "Yorug‘",
    th_a: "Tizim",
    set_lang: "Til",
    set_3d: "3D fon",
    set_motion: "Animatsiyalar",
    set_cursor: "Maxsus kursor",
    set_reset: "Sozlamalarni tiklash",
  },
};
for (const l in X) Object.assign(T[l], X[l]);
HOUSES.forEach((h) => (h.col = `var(--${h.id})`));
/* sample breakdown by activity (sums equal house totals) */
const CAT = {
  luna: [14, 12, 9, 11, 10, 6],
  solis: [10, 15, 8, 6, 7, 6],
  terra: [18, 11, 14, 9, 10, 7],
};
const $ = (q) => document.querySelector(q),
  $$ = (q) => [...document.querySelectorAll(q)],
  nm = (h) => h.id[0].toUpperCase() + h.id.slice(1);
const DEF = {
  theme: "auto",
  lang: (navigator.language || "en").slice(0, 2),
  fx: (navigator.hardwareConcurrency || 4) > 2,
  motion: true,
  cursor: true,
};
let ST = { ...DEF };
try {
  Object.assign(ST, JSON.parse(localStorage.getItem("hs-set") || "{}"));
} catch (e) {}
let lang = T[ST.lang] ? ST.lang : "en";
ST.lang = lang;
let cur = 0;
function dash() {
  const h = HOUSES[cur],
    tot = total(h),
    all = HOUSES.reduce((a, x) => a + total(x), 0),
    sh = tot / all;
  const rk = [...HOUSES].sort((a, b) => total(b) - total(a)).indexOf(h) + 1,
    bi = h.s.indexOf(Math.max(...h.s)),
    cat = CAT[h.id],
    cm = Math.max(...cat);
  const st = (k, v) =>
    `<div class="glass hov p-5"><p class="text-sm" style="color:var(--mute)">${tr(k)}</p><p class="disp text-3xl font-bold mt-2" style="color:var(--acc)">${v}</p></div>`;
  $("#tabs").innerHTML = HOUSES.map(
    (x, i) =>
      `<button role="tab" aria-selected="${i === cur}" data-i="${i}" class="tab px-4 py-2 rounded-full text-sm font-semibold" style="--acc:${x.col}">${x.em} ${nm(x)}</button>`,
  ).join("");
  const d = $("#dashBody");
  d.style.setProperty("--acc", h.col);
  d.innerHTML = `<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">${st("d_total", tot)}${st("d_rank", "#" + rk)}${st("d_avg", (tot / h.s.length).toFixed(1))}${st("d_best", bi + 1 + h.suf)}</div>
  <div class="grid lg:grid-cols-5 gap-4 mt-4">
    <div class="glass tilt p-6 lg:col-span-2 flex items-center gap-6">
      <svg viewBox="0 0 100 100" class="w-32 h-32 -rotate-90 flex-none" aria-hidden="true"><circle cx="50" cy="50" r="42" fill="none" stroke="var(--line)" stroke-width="10"/><circle cx="50" cy="50" r="42" fill="none" stroke="var(--acc)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(sh * 263.9).toFixed(1)} 264"/></svg>
      <div><p class="disp text-4xl font-bold" style="color:var(--acc)">${Math.round(sh * 100)}%</p><p class="mt-1 text-sm" style="color:var(--mute)">${tr("d_share")}</p></div>
    </div>
    <div class="glass p-6 lg:col-span-3"><h3 class="font-bold mb-4">${tr("d_cat")}</h3><ul class="space-y-3">${cat.map((v, i) => `<li class="flex items-center gap-3 text-sm"><span class="w-6">${POINTS[i][0]}</span><span class="w-28 sm:w-44 truncate text-xs sm:text-sm" style="color:var(--mute)">${tr(POINTS[i][1])}</span><div class="bar flex-1"><i data-w="${(v / cm) * 100}" style="background:var(--acc)"></i></div><span class="w-6 text-right font-semibold">${v}</span></li>`).join("")}</ul></div>
  </div>
  <div class="glass p-6 mt-4"><h3 class="font-bold mb-4">${tr("d_cls")}</h3><div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-2">${h.s.map((v, i) => `<div class="hov rounded-xl p-3 text-center" title="${tr("cls")} ${i + 1}${h.suf}: ${v}" style="background:color-mix(in srgb,var(--acc) ${Math.round((v / MAX) * 45 + 8)}%,transparent);border:1px solid var(--line)"><p class="text-xs" style="color:var(--mute)">${i + 1}${h.suf}</p><p class="disp font-bold">${v}</p></div>`).join("")}</div></div>`;
  $$("#rail a").forEach((a) =>
    a.setAttribute("aria-label", a.querySelector("span").textContent),
  );
  requestAnimationFrame(() =>
    requestAnimationFrame(() =>
      $$("#dashBody .bar i").forEach(
        (b) => (b.style.width = b.dataset.w + "%"),
      ),
    ),
  );
}
const tr = (k) => T[lang][k] || T.en[k] || k;
const total = (h) => h.s.reduce((a, b) => a + b, 0);
const MAX = Math.max(...HOUSES.flatMap((h) => h.s));

/* ---------- RENDER ---------- */
function render() {
  document.documentElement.lang = lang;
  document
    .querySelectorAll("[data-i18n]")
    .forEach((e) => (e.textContent = tr(e.dataset.i18n)));
  document
    .querySelectorAll(".lang button")
    .forEach((b) => b.setAttribute("aria-pressed", b.dataset.l === lang));
  const name = (h) => h.id[0].toUpperCase() + h.id.slice(1);

  document.getElementById("houseCards").innerHTML = HOUSES.map(
    (h) => `
   <article class="glass tilt p-6" data-i="${HOUSES.indexOf(h)}" style="--acc:${h.col};border-top:3px solid ${h.col}">
     <p class="text-4xl">${h.em}</p>
     <h3 class="mt-3 text-2xl font-bold" style="color:${h.col}">${name(h)}</h3>
     <p class="mt-2" style="color:var(--mute)">${tr(h.id)}</p>
     <p class="mt-5 text-sm font-semibold">${tr("leaders")}</p>
     <dl class="mt-2 text-sm space-y-1" style="color:var(--mute)">
       <div class="flex justify-between"><dt>${tr("pres")}</dt><dd>${tr("tba")}</dd></div>
       <div class="flex justify-between"><dt>${tr("asst")}</dt><dd>${tr("tba")}</dd></div>
     </dl>
   </article>`,
  ).join("");

  document.getElementById("pointList").innerHTML = POINTS.map(
    (p) => `
   <div class="glass hov p-5 flex items-center gap-3"><span class="text-2xl">${p[0]}</span><span class="font-medium">${tr(p[1])}</span></div>`,
  ).join("");

  const sorted = [...HOUSES].sort((a, b) => total(b) - total(a));
  const top = total(sorted[0]);
  document.getElementById("rank").innerHTML = sorted
    .map(
      (h, i) => `
   <div>
     <div class="flex justify-between items-baseline mb-2">
       <span class="font-semibold" style="color:${h.col}">${h.em} ${name(h)}${i === 0 ? ` <span class="text-xs ml-2 px-2 py-0.5 rounded-full" style="background:${h.col};color:var(--bg)">${tr("lead")}</span>` : ""}</span>
       <span class="disp font-bold text-xl">${total(h)} <span class="text-xs font-normal" style="color:var(--mute)">${tr("pts")}</span></span>
     </div>
     <div class="bar"><i data-w="${(total(h) / top) * 100}" style="background:${h.col}"></i></div>
   </div>`,
    )
    .join("");

  dash();
  requestAnimationFrame(() =>
    requestAnimationFrame(() =>
      document
        .querySelectorAll(".bar i")
        .forEach((b) => (b.style.width = b.dataset.w + "%")),
    ),
  );
}
document
  .querySelectorAll(".lang button")
  .forEach((b) => (b.onclick = () => set("lang", b.dataset.l)));
render();

/* ---------- THREE.JS BACKGROUND ---------- */
try {
  const cv = document.getElementById("bg");
  const R = new THREE.WebGLRenderer({
    canvas: cv,
    antialias: true,
    alpha: true,
  });
  R.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 768 ? 1.25 : 1.75));
  const S = new THREE.Scene(),
    C = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  S.add(new THREE.AmbientLight(0x8890c0, 0.55));
  const pl = new THREE.PointLight(0xffffff, 1.6, 60);
  pl.position.set(0, 2, 6);
  S.add(pl);

  const sp = [];
  for (let i = 0; i < 1200; i++) {
    const r = 20 + Math.random() * 30,
      a = Math.random() * 6.283,
      b = Math.acos(2 * Math.random() - 1);
    sp.push(
      r * Math.sin(b) * Math.cos(a),
      r * Math.sin(b) * Math.sin(a),
      r * Math.cos(b),
    );
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3));
  const stars = new THREE.Points(
    sg,
    new THREE.PointsMaterial({
      color: 0xcfd6ff,
      size: 0.12,
      transparent: true,
      opacity: 0.8,
    }),
  );
  S.add(stars);

  const g = new THREE.Group();
  S.add(g);
  const defs = [
    [0x8fb0ff, 0.75, 0x1a2a5a, 0],
    [0xffb52e, 1.05, 0xff9d00, 1],
    [0x3fd68a, 0.85, 0x0b3d24, 2],
  ];
  const meshes = defs.map(([c, r, e, i]) => {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(r, 48, 48),
      new THREE.MeshStandardMaterial({
        color: c,
        emissive: e,
        emissiveIntensity: i === 1 ? 0.9 : 0.35,
        roughness: 0.7,
        metalness: 0.1,
      }),
    );
    m.userData.a = (i * Math.PI * 2) / 3;
    g.add(m);
    return m;
  });
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.4, 0.012, 8, 160),
    new THREE.MeshBasicMaterial({
      color: 0x6b74b8,
      transparent: true,
      opacity: 0.5,
    }),
  );
  ring.rotation.x = Math.PI / 2;
  g.add(ring);
  g.rotation.x = 0.45;

  let mx = 0,
    my = 0,
    base = 10,
    gx = 3.2;
  addEventListener("pointermove", (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  });
  function size() {
    const w = innerWidth,
      h = innerHeight;
    R.setSize(w, h, false);
    C.aspect = w / h;
    base = w / h < 1 ? 15 : 10;
    C.updateProjectionMatrix();
    gx = w / h < 1 ? 0 : 3.2;
  }
  size();
  addEventListener("resize", size);
  const RM = matchMedia("(prefers-reduced-motion:reduce)");
  let t = 0,
    sp0 = 0,
    raf = 0,
    on = true,
    hv = -1;
  const fz = [1, 1, 1];
  const tint = () => {
    const l = document.documentElement.dataset.theme === "light";
    stars.material.color.set(l ? 0x2a3170 : 0xcfd6ff);
    stars.material.opacity = l ? 0.45 : 0.8;
  };
  function loop() {
    raf = 0;
    if (!on || document.hidden) return;
    raf = requestAnimationFrame(loop);
    const mo = ST.motion && !RM.matches;
    t += mo ? 0.004 : 0.0005;
    sp0 +=
      (scrollY /
        Math.max(1, document.documentElement.scrollHeight - innerHeight) -
        sp0) *
      0.06;
    meshes.forEach((m, i) => {
      const a = m.userData.a + t;
      m.position.set(Math.cos(a) * 3.4, 0, Math.sin(a) * 3.4);
      m.rotation.y += 0.006;
      fz[i] += ((hv === i ? 1.5 : 1) - fz[i]) * 0.1;
      m.scale.setScalar(fz[i]);
    });
    stars.rotation.y = t * 0.08;
    const z = mo
      ? sp0
      : 0; /* z-scroll: stars fly toward camera, planets recede */
    stars.position.z = z * 40;
    g.position.set(gx * (1 - z * 1.2) + Math.sin(z * 6) * 1.5, z * 3, -z * 14);
    g.rotation.y = z * 2;
    C.position.x += (mx * 1.2 - C.position.x) * 0.04;
    C.position.y += (-my * 0.8 - C.position.y) * 0.04;
    C.position.z = base;
    C.lookAt(0, 0, 0);
    R.render(S, C);
  }
  const wake = () => {
    if (!raf && on && !document.hidden) loop();
  };
  document.addEventListener("visibilitychange", wake);
  window.__fx = {
    tint,
    focus: (i) => (hv = i),
    on: (v) => {
      on = v;
      cv.style.display = v ? "block" : "none";
      wake();
    },
  };
  tint();
  loop();
} catch (e) {
  console.warn("WebGL unavailable", e);
}
/* ---------- SETTINGS / UI ---------- */
const root = document.documentElement,
  dm = matchMedia("(prefers-color-scheme:dark)");
function apply() {
  root.dataset.theme =
    ST.theme === "auto" ? (dm.matches ? "dark" : "light") : ST.theme;
  root.classList.toggle("nomo", !ST.motion);
  root.classList.toggle(
    "has-cur",
    ST.cursor && matchMedia("(pointer:fine)").matches,
  );
  $$("[data-k]").forEach((e) => {
    const k = e.dataset.k;
    e.classList.contains("seg")
      ? e
          .querySelectorAll("button")
          .forEach((b) =>
            b.setAttribute("aria-pressed", String(ST[k] === b.dataset.v)),
          )
      : e.setAttribute("aria-checked", String(!!ST[k]));
  });
  $("#thBtn").textContent = root.dataset.theme === "dark" ? "🌙" : "☀️";
  if (window.__fx) {
    __fx.tint();
    __fx.on(ST.fx);
  }
}
function set(k, v) {
  ST[k] = v;
  try {
    localStorage.setItem("hs-set", JSON.stringify(ST));
  } catch (e) {}
  if (k === "lang") {
    lang = v;
    render();
  }
  apply();
}
dm.addEventListener("change", apply);
$$(".seg button").forEach(
  (b) => (b.onclick = () => set(b.parentNode.dataset.k, b.dataset.v)),
);
$$(".sw").forEach(
  (b) => (b.onclick = () => set(b.dataset.k, !ST[b.dataset.k])),
);
$("#thBtn").onclick = () =>
  set("theme", root.dataset.theme === "dark" ? "light" : "dark");
const drw = $("#set"),
  tog = (o) => {
    drw.classList.toggle("open", o);
    drw.inert = !o;
  };
$("#setBtn").onclick = () => tog(true);
$("#setX").onclick = () => tog(false);
tog(false);
addEventListener("keydown", (e) => e.key === "Escape" && tog(false));
$("#reset").onclick = () => {
  ST = { ...DEF };
  ST.lang = T[ST.lang] ? ST.lang : "en";
  lang = ST.lang;
  try {
    localStorage.removeItem("hs-set");
  } catch (e) {}
  render();
  apply();
};
$("#tabs").onclick = (e) => {
  const b = e.target.closest("button");
  if (b) {
    cur = +b.dataset.i;
    dash();
  }
};
/* side nav active state */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        $$("#rail a").forEach((a) =>
          a.classList.toggle("on", a.dataset.s === e.target.id),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
$$("main section").forEach((x) => io.observe(x));
/* tilt + planet focus */
const hoverOK = matchMedia("(hover:hover)").matches;
document.addEventListener(
  "pointermove",
  (e) => {
    const c = e.target.closest(".tilt");
    if (!c || !hoverOK || !ST.motion) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty(
      "--ry",
      ((e.clientX - r.left) / r.width - 0.5) * 10 + "deg",
    );
    c.style.setProperty(
      "--rx",
      -((e.clientY - r.top) / r.height - 0.5) * 10 + "deg",
    );
  },
  { passive: true },
);
document.addEventListener("pointerout", (e) => {
  const c = e.target.closest(".tilt");
  if (c) {
    c.style.setProperty("--rx", "0deg");
    c.style.setProperty("--ry", "0deg");
  }
});
document.addEventListener("pointerover", (e) => {
  if (window.__fx) {
    const t = e.target.closest("[data-i]");
    __fx.focus(t ? +t.dataset.i : -1);
  }
});
/* custom cursor */
const cd = $("#cd"),
  cr = $("#cr");
let cx = 0,
  cy = 0,
  rx = 0,
  ry = 0,
  cf = 0;
function cl() {
  rx += (cx - rx) * 0.18;
  ry += (cy - ry) * 0.18;
  cr.style.transform = `translate(${rx}px,${ry}px)`;
  cf =
    Math.abs(cx - rx) + Math.abs(cy - ry) > 0.5 ? requestAnimationFrame(cl) : 0;
}
addEventListener(
  "pointermove",
  (e) => {
    if (!root.classList.contains("has-cur")) return;
    cx = e.clientX;
    cy = e.clientY;
    cd.style.transform = `translate(${cx}px,${cy}px)`;
    if (!cf) cf = requestAnimationFrame(cl);
    cr.classList.toggle("big", !!e.target.closest("a,button,.hov,.tilt"));
  },
  { passive: true },
);
apply();
