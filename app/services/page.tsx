import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Home as HomeIcon,
} from "lucide-react";
import Container from "@/components/container";
import Button from "@/components/button";
import SectionHeading from "@/components/section-heading";
import CtaBanner from "@/components/cta-banner";
import CommitmentsGrid from "@/components/commitments-grid";
import HeroPhotoBanner from "@/components/hero-photo-banner";
import { serviceIconMap } from "@/components/icons";
import { homeCare, services } from "@/lib/site";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all Mankind Care LLC services in Newark, NJ: Adult Day Habilitation, Respite Care, Individual Support, Community Inclusion, Prevocational Training, Supported Employment, Behavior Management, Career Planning, Natural Supports Training, and Home Care.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
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
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Our Services"
            title="Ten ways we help people live with more independence."
            description="Every program is designed around a simple idea: quality care should build real skills, real confidence, and real connection. Explore the full range of services offered by Mankind Care LLC."
            align="center"
            className="mx-auto"
          />
          <HeroPhotoBanner
            src={heroImages.services.src}
            alt={heroImages.services.alt}
            className="h-72 sm:h-96"
          />
        </Container>
      </section>

      {/* Services grid */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`flex scroll-mt-32 flex-col gap-5 rounded-4xl border p-7 ${
                    service.featured
                      ? "border-gold/30 bg-linear-to-br from-primary to-primary-dark text-white lg:col-span-2"
                      : "border-line bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        service.featured
                          ? "bg-white/10 text-gold-soft"
                          : "bg-primary-surface text-primary"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    {service.featured && (
                      <span className="rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                        Flagship Program
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2
                      className={`font-serif-display text-xl ${
                        service.featured ? "text-white" : "text-primary-dark"
                      }`}
                    >
                      {service.name}
                    </h2>
                    <p
                      className={`text-sm leading-relaxed ${
                        service.featured ? "text-white/70" : "text-slate-600"
                      }`}
                    >
                      {service.short}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                          service.featured ? "text-white/80" : "text-slate-600"
                        }`}
                      >
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            service.featured ? "text-gold-soft" : "text-primary-accent"
                          }`}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className={`group mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold ${
                      service.featured ? "text-gold-soft" : "text-primary"
                    }`}
                  >
                    Learn more
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              );
            })}

            {/* Home care */}
            <div className="flex flex-col gap-5 rounded-4xl border border-line bg-primary-surface p-7 sm:col-span-2 lg:col-span-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
                <HomeIcon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-serif-display text-xl text-primary-dark">
                  {homeCare.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  {homeCare.short}
                </p>
              </div>
              <Link
                href="/services/home-care"
                className="group mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Learn more
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-mist py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why Choose Mankind Care"
            title="What you can count on, every time."
            align="center"
            className="mx-auto"
          />
          <CommitmentsGrid />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-6 rounded-4xl bg-mist p-10 text-center sm:p-14">
          <h2 className="font-serif-display max-w-xl text-2xl text-primary-dark sm:text-3xl">
            Not sure which service is the right fit?
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-slate-600">
            Call us and tell us a little about your situation. We will help
            you figure out the right program, no pressure and no guesswork.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
