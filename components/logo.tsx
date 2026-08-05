import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2"
      aria-label="Mankind Care, home"
    >
      {light ? (
        <Image
          src="/small_logo_white.png"
          alt="Mankind Care"
          width={455}
          height={472}
          priority
          className="h-11 w-auto transition-transform duration-200 group-hover:scale-105"
        />
      ) : (
        <Image
          src="/mankind_care_transparent.png"
          alt="Mankind Care"
          width={671}
          height={607}
          priority
          className="h-11 w-auto transition-transform duration-200 group-hover:scale-105"
        />
      )}
    </Link>
  );
}
