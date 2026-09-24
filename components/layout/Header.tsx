"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SUPPORT_PHONE } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Brand } from "@/components/layout/Brand";
import { Icon } from "@/components/ui/icons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when the route changes — adjusted during render
  // (the React-recommended alternative to a setState-in-effect).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all",
        scrolled
          ? "border-border bg-white/90 shadow-sm backdrop-blur"
          : "border-transparent bg-white"
      )}
    >
      {/* Top utility bar */}
      <div className="hidden border-b border-slate-100 bg-slate-50 lg:block">
        <div className="container-site flex items-center justify-between py-1.5 text-xs text-slate-600">
          <p>Fuel • EV • CNG • Doorstep Diesel • Fleet • Cafés</p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-700"
            >
              <Icon name="phone" className="size-3.5" />
              {SUPPORT_PHONE}
            </a>
            <a
              href="/careers"
              className="font-semibold transition-colors hover:text-brand-700"
            >
              Careers
            </a>
            <a
              href="/admin/login"
              className="font-semibold transition-colors hover:text-brand-700"
            >
              Partner Login
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-site grid h-16 grid-cols-[1fr_auto] items-center gap-4 xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Brand />

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-2 py-2 whitespace-nowrap text-[0.8125rem] font-semibold leading-none transition-colors",
                    isActive(link.href)
                      ? "text-brand-700"
                      : "text-slate-700 hover:bg-slate-50/70 hover:text-brand-700"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 xl:hidden"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

        {/* Spacer keeps the nav centered on desktop now that the header CTAs are removed */}
        <div aria-hidden="true" className="hidden xl:block" />
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-border bg-white xl:hidden">
          <nav aria-label="Mobile" className="container-site py-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-semibold transition-colors",
                      isActive(link.href)
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <a
                href="/careers"
                className="text-center text-sm font-semibold text-slate-600 hover:text-brand-700"
              >
                Careers
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}