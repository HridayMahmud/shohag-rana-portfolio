"use client";

import { useEffect, useRef } from "react";

/** Guardrails — keep these in step with PLAN.md §4 before changing them. */
const NODE_COUNT = 42;
const LINK_DISTANCE = 140;
const SPEED = 12; // px per second
const MAX_DPR = 1.5;
const MIN_WIDTH_QUERY = "(min-width: 768px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type Node = { x: number; y: number; vx: number; vy: number };

/**
 * A faint constellation behind the hero text. It only runs while the hero is
 * on screen, the tab is visible, the viewport is at least 768px wide and the
 * visitor has not asked for reduced motion; otherwise nothing is drawn.
 */
export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const wide = window.matchMedia(MIN_WIDTH_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);

    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let color = "0, 0, 0";
    let frame = 0;
    let last = 0;
    let onScreen = false;

    const readColor = () => {
      // --accent is a hex colour; convert it once per theme for rgba() strokes.
      const hex = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
      const match = /^#?([0-9a-f]{6})$/i.exec(hex);
      if (!match) return;
      const value = parseInt(match[1], 16);
      color = `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = Array.from({ length: NODE_COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = SPEED * (0.4 + Math.random() * 0.6);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };
      });
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > LINK_DISTANCE) continue;
          context.strokeStyle = `rgba(${color}, ${(1 - distance / LINK_DISTANCE) * 0.35})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      context.fillStyle = `rgba(${color}, 0.7)`;
      for (const node of nodes) {
        context.beginPath();
        context.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        context.fill();
      }
    };

    const step = (time: number) => {
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 0;
      last = time;

      for (const node of nodes) {
        node.x += node.vx * dt;
        node.y += node.vy * dt;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.min(Math.max(node.x, 0), width);
        node.y = Math.min(Math.max(node.y, 0), height);
      }

      draw();
      frame = requestAnimationFrame(step);
    };

    const allowed = () => wide.matches && !reducedMotion.matches;

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
    };

    const sync = () => {
      const shouldRun = allowed() && onScreen && document.visibilityState === "visible";
      if (shouldRun && !frame) {
        frame = requestAnimationFrame(step);
      } else if (!shouldRun && frame) {
        stop();
      }
      if (!allowed()) context.clearRect(0, 0, width, height);
    };

    readColor();
    resize();

    const intersection = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    intersection.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (!frame && allowed()) draw();
    });
    resizeObserver.observe(canvas);

    // The theme toggle flips the `dark` class on <html>; pick up the new accent.
    const themeObserver = new MutationObserver(() => {
      readColor();
      if (!frame && allowed()) draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    document.addEventListener("visibilitychange", sync);
    wide.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);

    return () => {
      stop();
      intersection.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      wide.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="mask-fade-b absolute inset-0 hidden size-full opacity-60 motion-safe:md:block"
    />
  );
}
