const skillCards = document.querySelectorAll("[data-skill]");

skillCards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});