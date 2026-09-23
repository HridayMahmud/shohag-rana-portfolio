import type { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-5 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0" />
        <div className="absolute left-1/2 top-0 size-[28rem] -translate-x-1/2 rounded-full bg-accent-soft blur-[120px]" />
      </div>

      <div className="text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="display mt-6 text-[clamp(3.5rem,14vw,8rem)] leading-none">
          Page not
          <br />
          <span className="italic text-accent">found.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-sm text-sm leading-relaxed text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary mt-9">
          Back to home
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </main>
  );
}
