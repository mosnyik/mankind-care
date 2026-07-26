import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Mankind Care, home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-gold-soft"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 21s-7.5-4.6-9.8-9.1C.6 8.4 2.3 5 5.8 5c1.9 0 3.4 1 4.2 2.4C10.8 6 12.3 5 14.2 5c3.5 0 5.2 3.4 3.6 6.9C15.5 16.4 12 21 12 21Z" />
        </svg>
      </span>
      <span
        className={`font-serif-display text-lg leading-tight ${light ? "text-white" : "text-ink"}`}
      >
        Mankind Care
        <span
          className={`block text-[0.65rem] font-sans font-medium uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-slate-400"}`}
        >
          LLC
        </span>
      </span>
    </Link>
  );
}
