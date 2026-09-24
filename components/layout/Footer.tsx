import Link from "next/link";
import { Brand } from "@/components/layout/Brand";
import { Icon, type IconName } from "@/components/ui/icons";
import { SUPPORT_EMAIL, SUPPORT_PHONE, SITE_TAGLINE } from "@/lib/config";

const columns: Array<{
  title: string;
  links: Array<{ label: string; href: string }>;
}> = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Products & Services", href: "/products-and-services" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/news" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Locate a station", href: "/locate" },
      { label: "EV Charging", href: "/products-and-services/ev-charging" },
      { label: "CNG", href: "/products-and-services/cng" },
      { label: "Doorstep Diesel", href: "/products-and-services/doorstep-diesel" },
      { label: "Fleet solutions", href: "/products-and-services/fleet-connect" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Contact us", href: "/contact" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Rewards", href: "/rewards" },
      { label: "Privacy policy", href: "/legal/privacy" },
    ],
  },
];

const socials: Array<{ label: string; href: string; icon: IconName }> = [
  { label: "X (Twitter)", href: "#", icon: "spark" },
  { label: "LinkedIn", href: "#", icon: "users" },
  { label: "Instagram", href: "#", icon: "camera" as IconName },
  { label: "YouTube", href: "#", icon: "play" as IconName },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-brand-950 text-slate-300">
      <div className="container-site grid gap-12 py-14 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Brand />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {SITE_TAGLINE}
          </p>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex items-center gap-2.5">
              <dt className="sr-only">Phone</dt>
              <Icon name="phone" className="size-4 text-accent-400" />
              <dd>
                <a
                  href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {SUPPORT_PHONE}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-2.5">
              <dt className="sr-only">Email</dt>
              <Icon name="mail" className="size-4 text-accent-400" />
              <dd>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="transition-colors hover:text-white"
                >
                  {SUPPORT_EMAIL}
                </a>
              </dd>
            </div>
          </dl>
          <ul className="mt-6 flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:border-accent-400 hover:text-accent-400"
                >
                  <Icon name={s.icon} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label + link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-accent-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Energy Mobility. All rights reserved.</p>
          <p className="text-slate-600">
            Demo deliverable — content is fictional placeholder data.
          </p>
        </div>
      </div>
    </footer>
  );
}