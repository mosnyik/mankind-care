import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-ink shadow-[0_10px_30px_-12px_rgba(18,41,79,0.55)]",
  gold: "bg-gold text-white hover:bg-[#a37a30] shadow-[0_10px_30px_-12px_rgba(182,137,58,0.55)]",
  outline:
    "border border-line text-navy bg-white hover:bg-sky hover:border-navy/20",
  "outline-light":
    "border border-white/25 text-white bg-transparent hover:bg-white/10 hover:border-white/40",
  ghost: "text-navy hover:bg-sky",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className = "", icon } = props;
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={classes}
      >
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={classes}
    >
      {children}
      {icon}
    </button>
  );
}
