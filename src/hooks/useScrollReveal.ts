import { useEffect } from "react";

// Fügt allen [data-reveal] Elementen "is-visible" hinzu, sobald sie in den
// Viewport scrollen. Ein einziger Observer für die ganze Seite.
export function useScrollReveal(key?: unknown) {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    els.forEach((el) => el.classList.add("reveal"));

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
