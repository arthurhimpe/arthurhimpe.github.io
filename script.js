document.addEventListener("DOMContentLoaded", function () {
  // On sélectionne toutes les sections à animer
  const sections = document.querySelectorAll("section");

  const options = {
    root: null, // utilise le viewport du navigateur
    threshold: 0.1, // déclenche l'animation quand 10% de la section est visible
    rootMargin: "0px 0px -50px 0px", // déclenche un peu avant que l'élément soit trop haut
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Ajoute la classe CSS pour lancer l'animation
        entry.target.classList.add("reveal-visible");
        // On arrête de surveiller cette section une fois qu'elle est apparue
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const boutonsOuvrir = document.querySelectorAll(".btn-ouvrir");

  // Fonction d'ouverture
  boutonsOuvrir.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Fermeture par le bouton X ou par le clic sur le fond
  window.addEventListener("click", (e) => {
    // Si l'élément cliqué possède la classe 'modal-overlay'
    if (e.target.classList.contains("modal-overlay")) {
      e.target.style.display = "none";
      document.body.style.overflow = "auto";
    }

    // Si l'élément cliqué est le bouton de fermeture X
    if (e.target.classList.contains("btn-fermer")) {
      e.target.closest(".modal-overlay").style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
