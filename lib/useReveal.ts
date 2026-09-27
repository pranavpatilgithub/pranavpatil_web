"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 4) * 60}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.in = "true";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8%" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
