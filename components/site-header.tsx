"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { navItems, profile } from "@/lib/content";
import { ArrowUpRight, Close, Menu } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* Condensed header + top progress bar, both driven by one rAF-throttled listener. */
  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        setScrolled(y > 12);

        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(y / max, 1) : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${ratio})`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  /* Highlight the section currently occupying the middle of the viewport. */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 1] },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* Lock the page behind the mobile sheet and close it on Escape. */
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || menuOpen
            ? "border-b border-line bg-bg/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
          <a
            href="#top"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label={`${profile.name} — back to top`}
          >
            <span className="display grid size-9 place-items-center rounded-lg border border-line-strong text-[0.9375rem] transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">
              {profile.name}
            </span>
          </a>

          <nav aria-label="Section navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary hidden !py-2.5 !text-[0.8125rem] md:inline-flex">
              Get in touch
              <ArrowUpRight className="size-3.5" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-line-strong lg:hidden"
            >
              {menuOpen ? <Close className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>
        </div>

        <div
          aria-hidden="true"
          data-scroll-progress=""
          ref={progressRef}
          className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent"
        />
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Mobile section navigation" className="shell py-8">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={item.id} className="border-b border-line last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="flex items-baseline gap-4 py-4 transition-colors duration-300 hover:text-accent"
                >
                  <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                  <span className="display text-3xl">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className="btn btn-primary mt-8 w-full"
          >
            Get in touch
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
