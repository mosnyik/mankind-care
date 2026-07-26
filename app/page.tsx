import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  Home as HomeIcon,
} from "lucide-react";
import Container from "@/components/container";
import Button from "@/components/button";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import ValueCard from "@/components/value-card";
import CtaBanner from "@/components/cta-banner";
import {
  coreSkills,
  homeCare,
  services,
  site,
  topQuestions,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mist">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 15%, rgba(36,84,199,0.14), transparent 42%), radial-gradient(circle at 82% 0%, rgba(182,137,58,0.16), transparent 40%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="flex flex-col items-start gap-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
              <Sparkles className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
              DDD &amp; Home Care Provider, Newark NJ
            </span>
            <h1 className="font-serif-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Care that helps people{" "}
              <span className="text-blue">thrive</span>, every single day.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              Mankind Care LLC delivers quality adult day habilitation and
              home care that makes people feel comfortable, supported, and
              genuinely seen. Real skills, real connection, real progress.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={site.phoneHref} variant="gold">
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call {site.phone}
              </Button>
              <Button href="/services" variant="outline">
                Explore Our Services
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Button>
            </div>

            <div className="mt-4 grid w-full max-w-lg grid-cols-1 gap-3 border-t border-line pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-navy" strokeWidth={1.8} />
                <span className="text-sm text-slate-600">{site.hoursShort}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-navy" strokeWidth={1.8} />
                <span className="text-sm text-slate-600">Newark, NJ</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-navy" strokeWidth={1.8} />
                <span className="text-sm text-slate-600">10 Support Services</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-navy via-navy to-ink p-9 shadow-[0_40px_90px_-30px_rgba(10,24,48,0.45)] sm:p-11">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-light/20 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-8">
                <p className="font-serif-display text-2xl italic leading-snug text-white sm:text-3xl">
                  &ldquo;Our service sets us apart. We render quality care
                  that makes our clients comfortable.&rdquo;
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {coreSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-7">
                  <div>
                    <p className="font-serif-display text-3xl text-white">10</p>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      Support Services
                    </p>
                  </div>
                  <div>
                    <p className="font-serif-display text-3xl text-white">1:1</p>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      Personalized Care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Top questions */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why families choose us"
            title="The questions every family asks, answered up front."
            description="Before choosing a provider, you deserve clear answers. Here is what matters most to the families and individuals we serve."
            align="center"
            className="mx-auto"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topQuestions.map((item) => (
              <ValueCard key={item.question} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services overview */}
      <section className="bg-mist py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our Services"
              title="A full range of care, built around real life."
              description="From daily habilitation to career planning, every program is designed to build independence, confidence, and connection."
              className="max-w-xl"
            />
            <Button href="/services" variant="primary" className="shrink-0">
              View All Services
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Home care callout */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 rounded-[2rem] border border-line bg-white p-9 shadow-[0_30px_80px_-40px_rgba(18,41,79,0.2)] sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-14">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky text-navy">
              <HomeIcon className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
            </span>
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
              Ask About Home Care
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
