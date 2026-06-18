/* =========================
   MODALES PROJETS
   ========================= */

function openProjectModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeProjectModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove("show");
    document.body.style.overflow = "auto";
}

/* fermeture au clic sur le fond */
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("project-modal-overlay")) {
        e.target.classList.remove("show");
        document.body.style.overflow = "auto";
    }
});

/* fermeture avec Échap */
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        document.querySelectorAll(".project-modal-overlay.show").forEach((modal) => {
            modal.classList.remove("show");
        });
        document.body.style.overflow = "auto";
    }
});



/* =========================
   EXPERTISES
   ========================= */

document.addEventListener("DOMContentLoaded", function () {
    const groups = document.querySelectorAll(".expertise-group");

    groups.forEach((group) => {
        const boxes = group.querySelectorAll(".expertise-box");

        function closeGroup() {
            boxes.forEach((box) => {
                const back = box.querySelector(".expertise-box-back");
                box.classList.remove("active");
                if (back) {
                    back.style.maxHeight = null;
                }
            });
        }

        function openGroup(activeBox) {
            boxes.forEach((box) => {
                const back = box.querySelector(".expertise-box-back");
                if (!back) return;

                if (box === activeBox) {
                    box.classList.add("active");
                    back.style.maxHeight = back.scrollHeight + "px";
                } else {
                    box.classList.remove("active");
                    back.style.maxHeight = null;
                }
            });
        }

        boxes.forEach((box) => {
            const button = box.querySelector(".expertise-plus");
            if (!button) return;

            button.addEventListener("click", function (e) {
                e.stopPropagation();

                const alreadyActive = box.classList.contains("active");

                if (alreadyActive) {
                    closeGroup();
                } else {
                    openGroup(box);
                }
            });
        });
    });
});

/* =========================
   ANIMATION APPARITION CARDS PROJETS
   ========================= */

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-reveal");
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("is-visible");
                }, index * 90);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18
    });

    cards.forEach((card) => observer.observe(card));
});


/* =========================
   HERO BACKGROUND SLIDESHOW
   ========================= */

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-slide");
    if (!slides.length) return;

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 1000);
});