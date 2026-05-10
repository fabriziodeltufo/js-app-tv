document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    "Inception",
    "Interstellar",
    "Blade Runner",
    "Dune",
    "The Matrix",
    "Avatar",
    "Tenet",
    "Gladiator",
    "The Batman",
    "John Wick",
    "Oppenheimer",
    "Arrival",
    "The Revenant",
    "Mad Max",
    "Parasite",
  ];

  // tutte le row (generi)
  const rows = document.querySelectorAll(".row");

  rows.forEach((row, index) => {
    const track = row.querySelector(".row-track");
    const template = row.querySelector(".movie-card.template");

    // pulisce template iniziale
    track.innerHTML = "";

    // genera 10 film per ogni genere
    Array.from({ length: 10 }).forEach(() => {
      const card = template.cloneNode(true);
      card.classList.remove("template");

      card.querySelector("img").src = `https://picsum.photos/400/225?random=${
        Math.random() * 10000
      }`;

      card.querySelector("h3").textContent =
        titles[Math.floor(Math.random() * titles.length)];

      track.appendChild(card);
    });

    // scroll frecce SOLO per questa row
    const left = row.querySelector(".arrow.left");
    const right = row.querySelector(".arrow.right");

    left.addEventListener("click", () => {
      track.scrollBy({ left: -300, behavior: "smooth" });
    });

    right.addEventListener("click", () => {
      track.scrollBy({ left: 300, behavior: "smooth" });
    });
  });
});
