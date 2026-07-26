import type { Metadata } from "next";
import { Car, ShieldCheck, Activity, MapPin, Users, Home as HomeIcon } from "lucide-react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import CtaBanner from "@/components/cta-banner";
import { coreSkills, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mankind Care LLC is an adult day habilitation and home care provider in Newark, New Jersey, serving DDD clients and home care clients with quality, comfortable, and skill building care.",
  alternates: {
    canonical: "/about",
  },
};

const commitments = [
  {
    icon: Car,
    title: "Reliable transportation",
    description:
      "Getting to and from our program is arranged and coordinated, so families never have to worry about the logistics of a visit.",
  },
  {
    icon: ShieldCheck,
    title: "Qualified, caring staff",
    description:
      "Every caregiver on our team is trained and genuinely invested in the comfort and wellbeing of the people they support.",
  },
  {
    icon: Activity,
    title: "A real variety of activities",
    description:
      "No two days look the same. Programming blends skill building with recreation, so every visit feels worthwhile.",
  },
];

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
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
              About Mankind Care
            </span>
            <h1 className="font-serif-display text-4xl leading-[1.1] text-ink sm:text-5xl">
              Care is not just what we do. It is who we are.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Mankind Care LLC is an adult day habilitation and home care
              provider based in Newark, New Jersey. We were built around a
              simple belief: people deserve care that makes them feel
              comfortable, respected, and capable of more.
            </p>
          </div>
          <div className="rounded-4xl border border-line bg-white p-9 shadow-[0_30px_80px_-40px_rgba(18,41,79,0.2)]">
            <p className="font-serif-display text-xl italic leading-relaxed text-ink">
              &ldquo;Our service sets us apart. We render quality care to our
              clients that makes them comfortable, and we help build the
              skills they need for everyday life.&rdquo;
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-sky px-3.5 py-1.5 text-xs font-medium text-navy"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
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
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy">
                <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-serif-display text-xl text-ink">
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
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy">
                <HomeIcon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-serif-display text-xl text-ink">
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
          <div className="grid gap-10 sm:grid-cols-3">
            {commitments.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy shadow-[0_16px_40px_-20px_rgba(18,41,79,0.3)]">
                  <item.icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="font-serif-display text-lg text-ink">
                  {item.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service area */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy">
            <MapPin className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h2 className="font-serif-display max-w-xl text-2xl text-ink sm:text-3xl">
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
