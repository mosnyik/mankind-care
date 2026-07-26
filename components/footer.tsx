import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/container";
import Logo from "@/components/logo";
import { navLinks, services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white/70">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {site.tagline} A DDD and home care provider based in Newark, New
            Jersey, offering quality care and a full range of life skills
            programs.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Explore
          </h3>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-gold-soft"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Services
          </h3>
          {services.slice(0, 5).map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="text-sm text-white/60 transition-colors hover:text-gold-soft"
            >
              {service.name}
            </Link>
          ))}
          <Link
            href="/services"
            className="text-sm font-medium text-gold-soft transition-colors hover:text-white"
          >
            View all services
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Contact
          </h3>
          <a
            href={site.mapLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-gold-soft"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} />
            <span>{site.address.full}</span>
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-soft"
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-soft"
          >
            <Mail className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {site.email}
          </a>
          <span className="flex items-center gap-3 text-sm text-white/60">
            <Clock className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {site.hours}
          </span>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>Newark, New Jersey</span>
            <span aria-hidden="true">&middot;</span>
            <span>
              Developed by{" "}
              <a
                href="https://wa.me/2349076407315"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/60 transition-colors hover:text-gold-soft"
              >
                Zorex Tech
              </a>
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>WhatsApp: +234 907 640 7315 &middot; +234 806 368 6295</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
