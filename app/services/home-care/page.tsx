import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, Home as HomeIcon, Phone } from "lucide-react";
import Container from "@/components/container";
import Button from "@/components/button";
import CtaBanner from "@/components/cta-banner";
import GetStartedSteps from "@/components/get-started-steps";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import HeroPhotoBanner from "@/components/hero-photo-banner";
import { homeCare, services, site } from "@/lib/site";
import { serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Home Care Agency in Newark, NJ",
  description:
    "Mankind Care LLC provides trusted home care, support, and companionship for individuals and families in Newark, New Jersey.",
  alternates: {
    canonical: "/services/home-care",
  },
};

export default function HomeCarePage() {
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
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-accent"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            All Services
          </Link>

          <div className="flex flex-col items-start gap-6">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-[0_16px_40px_-20px_rgba(26,67,191,0.3)]">
              <HomeIcon className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h1 className="font-serif-display max-w-2xl text-4xl leading-[1.1] text-primary-dark sm:text-5xl">
              {homeCare.title}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              {homeCare.short}
            </p>
            <p className="text-sm font-medium text-primary">
              Serving individuals and families in Newark, New Jersey.
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

          <HeroPhotoBanner
            src={serviceImages["home-care"].src}
            alt={serviceImages["home-care"].alt}
            className="h-64 sm:h-80"
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-10">
            <p className="text-lg leading-relaxed text-slate-600">
              {homeCare.description}
            </p>

            <div className="flex flex-col gap-5 rounded-4xl border border-line bg-white p-8">
              <h2 className="font-serif-display text-xl text-primary-dark">
                What this includes
              </h2>
              <ul className="flex flex-col gap-3">
                {homeCare.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-base leading-relaxed text-slate-600"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-accent"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-5 rounded-4xl border border-line bg-primary-surface p-8 lg:sticky lg:top-28">
            <h2 className="font-serif-display text-xl text-primary-dark">
              Ready to talk?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Call us directly and we will walk you through how our home
              care agency can support your family.
            </p>
            <div className="flex flex-col gap-3 border-t border-primary/10 pt-5">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-sm font-medium text-primary hover:text-primary-accent"
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
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Also Available"
            title="Explore our day habilitation services."
            align="center"
            className="mx-auto"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
