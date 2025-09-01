const images = [
  { url: "deadpool1.png", caption: "Deadpool & Spidey",        favorite: true  },
  { url: "deadpool2.png", caption: "Wolverine Rage",           favorite: false },
  { url: "deadpool3.png", caption: "Classic Deadpool Pose",    favorite: true  },
  { url: "deadpool4.png", caption: "On the Bridge",            favorite: false },
  { url: "deadpool5.png", caption: "Scooter Pool",             favorite: false },
  { url: "deadpool6.png", caption: "Dual Pistols",             favorite: true  },
  { url: "deadpool7.png", caption: "Bullet Time",              favorite: false },
  { url: "deadpool8.png", caption: "Hero Shot",                favorite: true  }
];

const galleryEl = document.getElementById("gallery");
const modeBtn = document.getElementById("modeBtn");
const favBtn = document.getElementById("favBtn");

let showFavOnly = false;

const clean = s => s.normalize().trim();
const byCaption = (a, b) =>
  clean(a.caption).localeCompare(clean(b.caption), undefined, { sensitivity: "base" });

function visible() {
  const base = showFavOnly ? images.filter(i => i.favorite) : images;
  return base.slice().sort(byCaption);
}

function render() {
  galleryEl.innerHTML = "";
  const data = visible();

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    const card = document.createElement("article");
    card.className = "card";

    const img = document.createElement("img");
    img.src = item.url;
    img.alt = item.caption;

    const caption = document.createElement("div");
    caption.className = "caption";

    const text = document.createElement("span");
    text.textContent = item.caption;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = item.favorite ? "★ Favorite" : "Photo";

    caption.appendChild(text);
    caption.appendChild(badge);
    card.appendChild(img);
    card.appendChild(caption);
    galleryEl.appendChild(card);
  }

  favBtn.textContent = `Show Favorites Only: ${showFavOnly ? "On" : "Off"}`;
}

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

favBtn.addEventListener("click", () => {
  showFavOnly = !showFavOnly;
  render();
});

render();
