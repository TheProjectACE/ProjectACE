"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".section-head",
  ".department-card",
  ".frontier-image-card",
  ".project-card",
  ".info-card",
  ".panel",
  ".tool-card",
  ".work-row",
  ".dataset-row",
  ".workbench",
].join(", ");

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      root.classList.remove("motion-ready");
      return;
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("motion-visible");
          activeObserver.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.06,
      },
    );

    for (const target of targets) {
      target.classList.add("motion-reveal");

      const siblings = target.parentElement
        ? Array.from(target.parentElement.children).filter((child) =>
            child.matches(revealSelector),
          )
        : [];
      const siblingIndex = siblings.indexOf(target);
      const delay = Math.min(Math.max(siblingIndex, 0), 4) * 55;
      target.style.setProperty("--motion-stagger", `${delay}ms`);
      observer.observe(target);
    }

    // Add this class only after targets are observed. Without JavaScript,
    // IntersectionObserver, or with reduced motion, content stays visible.
    root.classList.add("motion-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
