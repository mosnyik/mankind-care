"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type HeroSlide = {
  src: string;
  alt: string;
  quote: string;
  badgeLabel?: string;
};

const AUTOPLAY_MS = 5000;

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  // Autoplay. Restarts whenever `active` changes, whether from the timer
  // itself or a manual swipe/dot click, so user interaction naturally
  // resets the countdown instead of fighting it.
  useEffect(() => {
    if (slides.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % slides.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [active, slides.length]);

  // Keep the active dot in sync while the user swipes the track by hand.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!track) return;
        const index = Math.round(track.scrollLeft / track.clientWidth);
        setActive((current) => (current === index ? current : index));
      });
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-4xl scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className="relative aspect-4/5 w-full shrink-0 snap-start overflow-hidden"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-dark via-primary-dark/25 to-transparent" />
            {slide.badgeLabel && (
              <span className="absolute right-6 top-6 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-primary shadow-lg">
                {slide.badgeLabel}
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-serif-display text-xl italic leading-snug text-white">
                &ldquo;{slide.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "w-6 bg-primary"
                : "w-2 bg-line hover:bg-primary-accent-light"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
