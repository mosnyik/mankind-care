import { Phone, MessageSquare } from "lucide-react";
import Container from "@/components/container";
import Button from "@/components/button";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(91,142,242,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(182,137,58,0.25), transparent 45%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft">
          Let&apos;s talk about care
        </span>
        <h2 className="font-serif-display max-w-2xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Reach out today and let&apos;s find the right program together.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Whether you are exploring day habilitation, home care, or DDD
          support services, our team is ready to answer your questions and
          help you take the next step.
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button href={site.phoneHref} variant="gold">
            <Phone className="h-4 w-4" strokeWidth={2} />
            Call {site.phone}
          </Button>
          <Button href="/contact" variant="outline-light">
            <MessageSquare className="h-4 w-4" strokeWidth={2} />
            Send a Message
          </Button>
        </div>
      </Container>
    </section>
  );
}
