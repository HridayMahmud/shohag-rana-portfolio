"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for every `.reveal` element on the page.
 * Cheaper than a client component per animated block, and it keeps the
 * content itself server-rendered.
 */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const showAll = () => {
      for (const node of nodes) node.dataset.visible = "true";
    };

    if (typeof IntersectionObserver === "undefined") {
      showAll();
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return null;
}
