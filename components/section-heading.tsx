type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: Props) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
            isLight
              ? "border-white/20 text-gold-soft"
              : "border-line bg-sky text-navy"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif-display text-3xl leading-[1.15] sm:text-4xl lg:text-5xl ${
          isLight ? "text-white" : "text-ink"
        } ${isCenter ? "max-w-2xl" : "max-w-xl"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-xl text-base leading-relaxed sm:text-lg ${
            isLight ? "text-white/75" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
