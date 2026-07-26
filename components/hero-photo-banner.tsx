import Image from "next/image";

export default function HeroPhotoBanner({
  src,
  alt,
  className = "",
  priority = true,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-4xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        priority={priority}
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/45 via-ink/5 to-transparent" />
    </div>
  );
}
