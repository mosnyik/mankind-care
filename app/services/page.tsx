import type { Metadata } from "next";
import { Phone, ArrowRight, Home as HomeIcon } from "lucide-react";
import Container from "@/components/container";
import Button from "@/components/button";
import SectionHeading from "@/components/section-heading";
import CtaBanner from "@/components/cta-banner";
import { serviceIconMap } from "@/components/icons";
import { homeCare, services, site } from "@/lib/site";

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
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Ten ways we help people live with more independence."
            description="Every program is designed around a simple idea: quality care should build real skills, real confidence, and real connection. Explore the full range of services offered by Mankind Care LLC."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-6">
          {services.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            const reversed = index % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`scroll-mt-32 flex flex-col gap-8 rounded-4xl border p-8 sm:p-10 lg:flex-row lg:items-center ${
                  service.featured
                    ? "border-gold/30 bg-linear-to-br from-navy to-ink text-white"
                    : "border-line bg-white"
                } ${reversed ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex shrink-0 flex-col items-start gap-3 lg:w-56">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      service.featured
                        ? "bg-white/10 text-gold-soft"
                        : "bg-sky text-navy"
                    }`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  {service.featured && (
                    <span className="rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                      Flagship Program
                    </span>
                  )}
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                      service.featured ? "text-white/50" : "text-slate-400"
                    }`}
                  >
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2
                    className={`font-serif-display text-2xl sm:text-3xl ${
                      service.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {service.name}
                  </h2>
                  <p
                    className={`max-w-2xl text-base leading-relaxed ${
                      service.featured ? "text-white/75" : "text-slate-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Home care */}
          <div className="flex flex-col gap-8 rounded-4xl border border-line bg-sky p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="flex shrink-0 flex-col items-start gap-3 lg:w-56">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy">
                <HomeIcon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/60">
                Also Available
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-serif-display text-2xl text-ink sm:text-3xl">
                {homeCare.title}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                {homeCare.description}
              </p>
            </div>
            <Button href={site.phoneHref} variant="primary" className="shrink-0">
              <Phone className="h-4 w-4" strokeWidth={2} />
              Call to Learn More
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container className="flex flex-col items-center gap-6 rounded-4xl bg-mist p-10 text-center sm:p-14">
          <h2 className="font-serif-display max-w-xl text-2xl text-ink sm:text-3xl">
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
