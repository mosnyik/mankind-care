import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, Phone } from "lucide-react";
import Container from "@/components/container";
import Button from "@/components/button";
import CtaBanner from "@/components/cta-banner";
import GetStartedSteps from "@/components/get-started-steps";
import RelatedServices from "@/components/related-services";
import { serviceIconMap } from "@/components/icons";
import { getServiceBySlug, services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.name,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIconMap[service.icon];

  return (
    <>
      <section className="relative overflow-hidden bg-mist py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(36,84,199,0.14), transparent 45%)",
          }}
          aria-hidden="true"
        />
        <Container className="flex flex-col gap-8">
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-blue"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            All Services
          </Link>

          <div className="flex flex-col items-start gap-6">
            {service.featured && (
              <span className="rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                Flagship Program
              </span>
            )}
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-navy shadow-[0_16px_40px_-20px_rgba(18,41,79,0.3)]">
              <Icon className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h1 className="font-serif-display max-w-2xl text-4xl leading-[1.1] text-ink sm:text-5xl">
              {service.name}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              {service.short}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={site.phoneHref} variant="gold">
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call {site.phone}
              </Button>
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-10">
            <p className="text-lg leading-relaxed text-slate-600">
              {service.description}
            </p>

            <div className="flex flex-col gap-5 rounded-4xl border border-line bg-white p-8">
              <h2 className="font-serif-display text-xl text-ink">
                What this includes
              </h2>
              <ul className="flex flex-col gap-3">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-base leading-relaxed text-slate-600"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-blue"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-5 rounded-4xl border border-line bg-sky p-8 lg:sticky lg:top-28">
            <h2 className="font-serif-display text-xl text-ink">
              Ready to talk?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Call us directly or send a message and we will help you figure
              out if {service.name.toLowerCase()} is the right fit.
            </p>
            <div className="flex flex-col gap-3 border-t border-navy/10 pt-5">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-sm font-medium text-navy hover:text-blue"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                {site.phone}
              </a>
              <span className="flex items-center gap-3 text-sm text-slate-600">
                <Clock className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                {site.hours}
              </span>
            </div>
            <Button href={site.phoneHref} variant="primary" className="w-full">
              <Phone className="h-4 w-4" strokeWidth={2} />
              Call Now
            </Button>
          </aside>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <GetStartedSteps />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <RelatedServices currentSlug={service.slug} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
