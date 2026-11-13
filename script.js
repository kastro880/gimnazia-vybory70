const candidates = [

  {
    name: "Жован Даниил Петрович",
    className: "9-А",
    photo: "images/djovan.jpg",
    logo: "images/logo_djovan.png",
    slogan: "Сила, идеи, действия.",
    video: "",

    presentation: "files/ppt_djovan.pdf",
    documents: [
     { title: "Предвыборная кампания", url: "files/text_djovan.docx" },
    ],

    program:
      "Я выдвигаю свою кандидатуру на пост президента школы, потому что хочу сделать школьную жизнь более интересной, активной и насыщенной. " +
      "Для меня важно, чтобы каждый ученик мог проявить себя, найти занятие по душе, предложить собственную идею и почувствовать, что его мнение действительно имеет значение.\n\n" +
      "Моя программа — это пять конкретных шагов:\n\n" +
      "- Спортивная жизнь\n" +
      "- Творчество и таланты\n" +
      "- Праздники и школьные мероприятия\n" +
      "- Голос каждого ученика\n" +
      "- Комфорт и дружеская атмосфера\n\n" +
      "ГОЛОСУЙ ЗА АКТИВНУЮ ШКОЛЬНУЮ ЖИЗНЬ!. Вместе мы сможем сделать школу ярче!!"
  },

  {
    name: "Олексеенко Руслан Романович",
    className: "9-А",
    photo: "images/olekseenko.jpg",
    logo: "images/logo_olekseenko.jpg",
    slogan: "Через труд учеников, к величию Гимназии.",
    video: "videos/video_olekseenko.mp4",
    presentation: "files/programa_olekseenko.pdf",
    documents: [],
    program:
      "Вместе к лучшему будущему!.\n\n" +
      "Наши идеи для лучшей гимназии.\n\n" +
      "- Создать доску благодарности.\n" +
      "- Создать метопись событий гимназии.\n" +
      "- Музыка через колонку по переменам.\n" +
      "- Создать мероприятия кибер игр.\n" +
      "- Игры по футболу и бадминтому\n" +
      "Вместе мы можем больше!"
  },

  {
    name: "Абрамов Давид Дмитриевич",
    className: "9-А",
    photo: "images/abramov.jpg",
    logo: "images/logo_abramov.png",
    slogan: "Вместе к лучшему будущему!",
    video: "videos/video_abramov.mp4",
    presentation: "files/ppt_abramv.pdf",
    documents: [{ title: "Предвыборная кампания", url: "files/text_abramov.docx" }
  ],
    program:
      "Школьная партия «П». Вместе к лучшему будущему!.\n\n" +
      "Моя партия «П» выступает за реальные изменения, инициативность и единство школьного коллектива.\n\n" +
      "- Ученическое самоуправление\n" +
      "- Интересная школьная жизнь\n" +
      "- Комфортная школьная среда\n" +
      "- Поддержка каждого ученика\n\n" +
      "ПОЧЕМУ ИМЕННО Я?\n" +
      "Я не обещаю невозможного. Я предлагаю конкретные идеи, готовность работать и желание добиваться результатов."
  },

  {
    name: "Еременко Влада Михайловна",
    className: "8-Б",
    photo: "images/eremenko.jpg",
    logo: "images/logo_eremenko.jpg",
    slogan: "Тихий голос, громкие результаты.",
    video: "videos/videp_eremenko.mp4",
    presentation: "files/ppt_eremenko.pdf",
    documents: [{ title: "Предвыборная кампания", url: "files/text_eremenko.docx" }
  ],
    program:
      "Мы все - учащиеся одной школы, а значит, обязаны заботиться о ней и делать её лучше.\n\n" +
      "- Проведение развлекательных мероприятий: конкурсов, школьных концертов, спортивных соревнований и дискотек.\n" +
      "- Шефство старшеклассников над младшими классами. В определённый день договориться с учителями, чтобы организовать маленькие флешмобы, игры и мастер-классы\n" +
      "- Анонимный ящик. Каждый сможет написать свои идеи и предложения для улучшения школы\n\n" +
      "Быть президентом – не всегда про громкие речи, а про результативную и надёжную работу, поэтому мой слоган – «Тихий голос, громкие результаты»."
  },

  {
    name: "Сопова Каролина Дмитриевна",
    className: "9-А",
    photo: "images/sopova.jpg",
    logo: "images/logo_sopova.png",
    slogan: "Не почему не выйдет - а как сделать, чтобы вышло.",
    video: "videos/video_sopova.mp4",
    presentation: "files/ppt_sopova.pdf",
    documents: [{ title: "Предвыборная кампания", url: "files/text_sopova.pdf" }
  ],
    program:
      "Сделать гимназию местом, где каждого слышат, проблемы решаются, а не обсуждаются годами, а школьная жизнь — это не только уроки, но и атмосфера, в которой хочется находиться.\n\n" +
      " Что я сделаю в первые 30 дней:\n" +
      "- Запущу систему “Староста - связной”\n" +
      "- Создам совет учеников\n" +
      "- Аукцион идей\n"
  },

  {
    name: "Ахкозов Иван Владимирович",
    className: "10-А",
    photo: "images/ahkozov.jpg", 
    slogan: "Справедливость, открытость, выбор!",
    logo: "",
    video: "",
    presentation: "",
    documents: [],
    program: ""
  }

];


/* ============================================================
   ЛОГИКА
   ============================================================ */

const grid      = document.getElementById("candidatesGrid");
const modal     = document.getElementById("modal");
const modalGrid = document.getElementById("modalGrid");

function initials(name) {
  return name.split(" ").filter(Boolean).slice(0, 2)
    .map((w) => w[0].toUpperCase()).join("");
}

function formatProgram(text) {
  if (!text) return "<p><em>Программа пока не заполнена.</em></p>";
  return text.split(/\n\n+/).map((block) => {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length > 1 && lines.every((l) => /^[-•*]\s/.test(l))) {
      const items = lines.map((l) => l.replace(/^[-•*]\s*/, "")).map((l) => `<li>${l}</li>`).join("");
      return `<ul>${items}</ul>`;
    }
    return `<p>${block.replace(/\n/g, "<br>")}</p>`;
  }).join("");
}

function toEmbedUrl(url) {
  if (!url) return "";
  let m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  if (/youtube\.com\/embed\//.test(url)) return url;
  m = url.match(/rutube\.ru\/video\/([\w-]+)/);
  if (m) return `https://rutube.ru/play/embed/${m[1]}`;
  if (/rutube\.ru\/play\/embed\//.test(url)) return url;
  m = url.match(/vk\.com\/video(-?\d+)_(\d+)/);
  if (m) return `https://vk.com/video_ext.php?oid=${m[1]}&id=${m[2]}&hd=2`;
  if (/vk\.com\/video_ext\.php/.test(url)) return url;
  return url;
}

function renderVideo(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) {
    return `<iframe src="${toEmbedUrl(url)}" allowfullscreen frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
  }
  return `<video controls playsinline preload="metadata" src="${url}"></video>`;
}

function renderPresentation(url) {
  if (!url) return "";
  return `
    <iframe src="${url}" class="presentation-frame"></iframe>
    <a href="${url}" download class="modal__download">⬇ Скачать презентацию</a>
  `;
}

function docType(url) {
  if (!url) return "FILE";
  const clean = url.split("?")[0].split("#")[0];
  const ext = clean.split(".").pop().toLowerCase();
  if (ext === "pdf") return "PDF";
  if (ext === "doc" || ext === "docx") return "DOC";
  if (ext === "xls" || ext === "xlsx" || ext === "csv") return "XLS";
  if (ext === "ppt" || ext === "pptx") return "PPT";
  if (ext === "txt") return "TXT";
  return "FILE";
}

function renderDocuments(documents) {
  if (!documents || !documents.length) return "";
  const items = documents.map((d) => {
    const type = docType(d.url);
    return `
      <a href="${d.url}" download class="modal__doc" data-type="${type}">
        <span class="modal__doc-icon">${type}</span>
        <span class="modal__doc-body">
          <span class="modal__doc-title">${d.title}</span>
          <span class="modal__doc-meta">Нажмите, чтобы скачать · ${type}</span>
        </span>
        <span class="modal__doc-arrow">⬇</span>
      </a>
    `;
  }).join("");

  return `
    <div class="modal__media">
      <h3>Документы</h3>
      <div class="modal__docs">${items}</div>
    </div>
  `;
}

function renderCards() {
  grid.innerHTML = candidates.map((c, i) => `
    <article class="card" data-index="${i}" style="animation-delay:${i * 60}ms">
      <div class="card__photo">
        ${
          c.photo
            ? `<img src="${c.photo}" alt="${c.name}" onerror="this.parentElement.classList.add('card__photo--fallback');this.parentElement.innerHTML='${initials(c.name)}';" />`
            : `<div class="card__photo--fallback" style="width:100%;height:100%">${initials(c.name)}</div>`
        }
        <span class="card__number">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <div class="card__body">
        <div class="card__header">
          ${c.logo ? `<img src="${c.logo}" alt="" class="card__logo-mini" onerror="this.remove()">` : ""}
          <div class="card__header-text">
            <h3 class="card__name">${c.name}</h3>
            <p class="card__class">${c.className} класс</p>
          </div>
        </div>
        <p class="card__slogan">«${c.slogan}»</p>
        <span class="card__btn">Смотреть программу →</span>
      </div>
    </article>
  `).join("");
}

function openCandidate(index) {
  const c = candidates[index];

  const logoHTML = c.logo
    ? `<img src="${c.logo}" alt="Логотип" class="modal__logo" onerror="this.remove()">`
    : "";

  const photoHTML = c.photo
    ? `<img src="${c.photo}" alt="${c.name}" onerror="this.parentElement.classList.add('card__photo--fallback');this.parentElement.innerHTML='${initials(c.name)}';" />`
    : `<div class="card__photo--fallback" style="width:100%;height:100%">${initials(c.name)}</div>`;

  const videoHTML = c.video
    ? `<div class="modal__media"><h3>Видеообращение</h3>${renderVideo(c.video)}</div>`
    : "";

  const presentationHTML = c.presentation
    ? `<div class="modal__media"><h3>Презентация программы</h3>${renderPresentation(c.presentation)}</div>`
    : "";

  const documentsHTML = renderDocuments(c.documents);

  modalGrid.innerHTML = `
    <aside class="modal__sidebar">
      ${logoHTML}
      <div class="photo">${photoHTML}</div>
      <h2 class="modal__name">${c.name}</h2>
      <p class="modal__class">${c.className} класс</p>
      <blockquote class="modal__quote">«${c.slogan}»</blockquote>
    </aside>
    <div class="modal__main">
      ${videoHTML}
      ${presentationHTML}
      ${documentsHTML}
      <h3>Предвыборная программа</h3>
      <div class="modal__program-text">${formatProgram(c.program)}</div>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  modal.querySelector(".modal__content").scrollTop = 0;
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openCandidate(Number(card.dataset.index));
});
modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});


const track    = document.getElementById("candidatesGrid");
const prevBtn  = document.getElementById("prevBtn");
const nextBtn  = document.getElementById("nextBtn");
const dotsWrap = document.getElementById("carouselDots");

function getStep() {
  const card = track.querySelector(".card");
  if (!card) return 0;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  return card.offsetWidth + gap;
}

function visibleCount() {
  const step = getStep();
  if (!step) return 1;
  return Math.max(1, Math.round(track.clientWidth / step));
}

function buildDots() {
  const total = candidates.length;
  const visible = visibleCount();
  const positions = Math.max(1, total - visible + 1);

  dotsWrap.innerHTML = Array.from({ length: positions }, (_, i) =>
    `<button class="carousel__dot" role="tab" data-index="${i}" aria-label="Позиция ${i + 1}"></button>`
  ).join("");
}

function updateUI() {
  const step = getStep();
  if (!step) return;

  const maxScroll = track.scrollWidth - track.clientWidth;
  prevBtn.disabled = track.scrollLeft <= 4;
  nextBtn.disabled = track.scrollLeft >= maxScroll - 4;

  const activeIdx = Math.round(track.scrollLeft / step);
  dotsWrap.querySelectorAll(".carousel__dot").forEach((d, i) => {
    d.classList.toggle("is-active", i === activeIdx);
  });
}

function scrollByCard(dir) {
  track.scrollBy({ left: getStep() * dir, behavior: "smooth" });
}

dotsWrap.addEventListener("click", (e) => {
  const dot = e.target.closest(".carousel__dot");
  if (!dot) return;
  track.scrollTo({ left: getStep() * Number(dot.dataset.index), behavior: "smooth" });
});

prevBtn.addEventListener("click", () => scrollByCard(-1));
nextBtn.addEventListener("click", () => scrollByCard(1));

let scrollTimer;
track.addEventListener("scroll", () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(updateUI, 60);
});

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    buildDots();
    updateUI();
  }, 150);
});

renderCards();
requestAnimationFrame(() => {
  buildDots();
  updateUI();
});
