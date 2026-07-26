import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { serviceIconMap } from "@/components/icons";
import { services } from "@/lib/site";

export default function RelatedServices({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const others = services.filter((service) => service.slug !== currentSlug).slice(0, 3);

  return (
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Keep Exploring"
        title="Other services that might help."
        align="center"
        className="mx-auto"
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {others.map((service) => {
          const Icon = serviceIconMap[service.icon];
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col gap-4 rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_24px_60px_-28px_rgba(18,41,79,0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky text-navy">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-serif-display text-lg text-ink">{service.name}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.short}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                Learn more
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
