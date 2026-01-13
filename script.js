document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    if (!fadeElements.length) {
        console.warn("No fade-in elements found");
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    fadeElements.forEach(el => observer.observe(el));
});
