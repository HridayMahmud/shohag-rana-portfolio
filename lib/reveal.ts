import type { CSSProperties } from "react";

/**
 * Marks an element for the page-wide scroll-reveal observer.
 * The observer lives in <RevealObserver /> so server components can opt in
 * without becoming client components themselves.
 */
export function reveal(delay = 0, className = "") {
  return {
    className: className ? `reveal ${className}` : "reveal",
    style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
  };
}
