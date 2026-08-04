"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone, Clock } from "lucide-react";
import Container from "@/components/container";
import Logo from "@/components/logo";
import Button from "@/components/button";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="sticky top-0 z-50">
      <div className="hidden bg-primary-dark text-white/80 lg:block">
        <Container className="flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold-soft" strokeWidth={1.8} />
              {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={site.emailHref} className="hover:text-white transition-colors">
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-gold-soft transition-colors"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
              {site.phone}
            </a>
          </div>
        </Container>
      </div>

      <header
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-line bg-white/90 backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <Container className="flex items-center justify-between py-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary-surface text-primary"
                      : "text-slate-600 hover:text-primary hover:bg-primary-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href={site.phoneHref} variant="gold">
              <Phone className="h-4 w-4" strokeWidth={2} />
              Call Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-primary hover:bg-primary-surface lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.8} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.8} />
            )}
          </button>
        </Container>
      </header>

      {menuOpen && (
        <div className="border-b border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? "bg-primary-surface text-primary" : "text-slate-600 hover:bg-primary-surface hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
              <a
                href={site.emailHref}
                className="text-sm text-slate-600"
              >
                {site.email}
              </a>
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                <Clock className="h-4 w-4 text-primary" strokeWidth={1.8} />
                {site.hours}
              </span>
              <Button href={site.phoneHref} variant="gold" className="w-full">
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call {site.phone}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
