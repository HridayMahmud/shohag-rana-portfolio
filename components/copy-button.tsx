"use client";

import { useEffect, useState } from "react";

import { Check, Copy } from "./icons";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  /** Falls back to a hidden textarea when the async clipboard API is blocked. */
  function copyFallback(text: string) {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(field);
    return ok;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      if (copyFallback(value)) setCopied(true);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label} to clipboard`}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-subtle transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
      <span aria-live="polite" className="sr-only">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </button>
  );
}
