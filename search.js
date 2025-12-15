const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const title = (card.dataset.title || "").toLowerCase();
      card.style.display = title.includes(value) ? "" : "none";
    });
  });
}
