import Image from "next/image";

export default function PhotoQuoteCard({
  src,
  alt,
  quote,
  skills,
  badgeLabel,
}: {
  src: string;
  alt: string;
  quote: string;
  skills?: readonly string[];
  badgeLabel?: string;
}) {
  return (
    <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl shadow-[0_40px_90px_-30px_rgba(10,24,48,0.45)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary-dark via-primary-dark/25 to-transparent" />
      {badgeLabel && (
        <span className="absolute right-6 top-6 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-primary shadow-lg">
          {badgeLabel}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-8 sm:p-9">
        <p className="font-serif-display text-xl italic leading-snug text-white sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        {skills && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
