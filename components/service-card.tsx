import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceIconMap } from "@/components/icons";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIconMap[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex flex-col gap-5 rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(18,41,79,0.25)] ${
        service.featured
          ? "border-gold/30 bg-linear-to-br from-navy to-ink text-white"
          : "border-line bg-white hover:border-navy/20"
      }`}
    >
      {service.featured && (
        <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
          Flagship Program
        </span>
      )}
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
          service.featured ? "bg-white/10 text-gold-soft" : "bg-sky text-navy"
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-2">
        <h3
          className={`font-serif-display text-xl ${service.featured ? "text-white" : "text-ink"}`}
        >
          {service.name}
        </h3>
        <p
          className={`text-sm leading-relaxed ${service.featured ? "text-white/70" : "text-slate-600"}`}
        >
          {service.short}
        </p>
      </div>
      <span
        className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold ${
          service.featured ? "text-gold-soft" : "text-navy"
        }`}
      >
        Learn more
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </span>
    </Link>
  );
}
