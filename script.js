document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       FADE-IN (SAFE)
    ========================= */
    const fadeEls = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    fadeEls.forEach(el => observer.observe(el));

    /* =========================
       ABOUT SLIDESHOW (FIXED)
    ========================= */
    const slides = document.querySelectorAll(".about-slideshow .slide");

    if (!slides.length) return;

    let current = 0;

    // ensure exactly one active slide
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === 0);
    });

    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 4000);
});
