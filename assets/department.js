/* Small progressive enhancements: mobile-safe navigation and accessible scroll reveals. */
(() => {
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".section-head,.focus-card,.work-card,.process-item,.next-panel");
  if (!reduceMotion && "IntersectionObserver" in window) {
    revealItems.forEach((el, index) => {
      el.classList.add("js-reveal");
      el.style.setProperty("--delay", (index % 3) * 70 + "ms");
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    revealItems.forEach((el) => observer.observe(el));
  }
})();
