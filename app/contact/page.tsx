import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mankind Care LLC in Newark, New Jersey. Call, email, or send a message to learn more about our adult day habilitation and home care services.",
  alternates: {
    canonical: "/contact",
  },
};

const infoCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: site.address.full,
    href: site.mapLinkHref,
  },
  {
    icon: Clock,
    label: "Hours",
    value: site.hours,
  },
];

export default function ContactPage() {
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
            eyebrow="Contact Us"
            title="Let's talk about the care you need."
            description="Call us directly for the fastest response, or send a message below and we will get back to you shortly."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-5">
            {infoCards.map((card) => {
              const content = (
                <div className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-colors hover:border-navy/20">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky text-navy">
                    <card.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {card.label}
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {card.value}
                    </span>
                  </div>
                </div>
              );

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </div>

          <ContactForm />
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="overflow-hidden rounded-4xl border border-line">
            <iframe
              title="Mankind Care LLC location map"
              src={site.mapEmbedSrc}
              className="h-96 w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
