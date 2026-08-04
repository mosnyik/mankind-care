import type { Metadata } from "next";
import { MapPin, Users, Home as HomeIcon } from "lucide-react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import CtaBanner from "@/components/cta-banner";
import CommitmentsGrid from "@/components/commitments-grid";
import PhotoQuoteCard from "@/components/photo-quote-card";
import { coreSkills, site } from "@/lib/site";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mankind Care LLC is an adult day habilitation and home care provider in Newark, New Jersey, serving DDD clients and home care clients with quality, comfortable, and skill building care.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 10%, rgba(182,137,58,0.14), transparent 45%)",
          }}
          aria-hidden="true"
        />
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              About Mankind Care
            </span>
            <h1 className="font-serif-display text-4xl leading-[1.1] text-primary-dark sm:text-5xl">
              Care is not just what we do. It is who we are.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Mankind Care LLC is an adult day habilitation and home care
              provider based in Newark, New Jersey. We were built around a
              simple belief: people deserve care that makes them feel
              comfortable, respected, and capable of more.
            </p>
          </div>
          <PhotoQuoteCard
            src={heroImages.about.src}
            alt={heroImages.about.alt}
            quote="Our service sets us apart. We render quality care to our clients that makes them comfortable, and we help build the skills they need for everyday life."
            skills={coreSkills}
          />
        </Container>
      </section>

      {/* Who we serve */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for two kinds of clients, one standard of care."
            align="center"
            className="mx-auto"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-surface text-primary">
                <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-serif-display text-xl text-primary-dark">
                DDD Clients
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Individuals connected through the Division of Developmental
                Disabilities who are looking for a day habilitation program
                that builds problem solving, social, and daily living skills
                in a supportive, structured setting.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-surface text-primary">
                <HomeIcon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-serif-display text-xl text-primary-dark">
                Home Care Clients
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Individuals and families who need trusted, compassionate
                support in the comfort of home, delivered through our home
                care agency alongside our day habilitation services.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Commitments */}
      <section className="bg-mist py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Our Commitment"
            title="What you can count on, every time."
            align="center"
            className="mx-auto"
          />
          <CommitmentsGrid />
        </Container>
      </section>

      {/* Service area */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-surface text-primary">
            <MapPin className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h2 className="font-serif-display max-w-xl text-2xl text-primary-dark sm:text-3xl">
            Proudly based in Newark, serving the surrounding community.
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-slate-600">
            Our program is located at {site.address.full}. Call us to talk
            through your location and needs, and we will let you know how we
            can help.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
