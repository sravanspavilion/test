import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LeadForm } from "@/components/features/LeadForm";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/icons";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Reach the Energy Mobility team — questions, feedback, callback requests and business enquiries.",
  path: "/contact",
});

const channels: Array<{ icon: IconName; title: string; value: string; href: string }> = [
  {
    icon: "phone",
    title: "Call support",
    value: SUPPORT_PHONE,
    href: `tel:${SUPPORT_PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: "mail",
    title: "Email us",
    value: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: "map-pin",
    title: "Head office",
    value: "Energy Mobility Corporate Centre, Bengaluru, India",
    href: "/about",
  },
  {
    icon: "clock",
    title: "Support hours",
    value: "Mon–Sat, 9 am – 8 pm IST",
    href: "/faqs",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Contact us"
        description="Questions, feedback or a request — we respond within one working day."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="container-site grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900">Get in touch</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition-colors hover:border-brand-300"
              >
                <span className="inline-grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-slate-900">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-600 group-hover:text-brand-700">
                  {c.value}
                </p>
              </a>
            ))}
          </div>

          <Card className="bg-brand-50/70">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Icon name="alert" className="size-4 text-accent-600" />
              Emergency & station issues
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              For immediate issues at a station, please call the station directly (shown
              on its page in the locator) — our support team can route urgent matters
              during business hours.
            </p>
          </Card>

          <Card className="bg-brand-950 text-white">
            <h3 className="flex items-center gap-2 text-sm font-bold text-white">
              <Icon name="leaf" className="size-4 text-accent-400" />
              Prefer an instant call back?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Request a call back and our team will reach you at a time that suits you.
            </p>
            <a
              href="#callback"
              className="mt-4 inline-flex h-10 items-center gap-2 rounded-lg bg-accent-500 px-4 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-400"
            >
              <Icon name="phone" className="size-4" />
              Request a callback
            </a>
          </Card>
        </div>

        <div>
          <Card className="p-6 sm:p-8">
            <LeadForm variant="contact" />
          </Card>

          <div id="callback" className="mt-6 scroll-mt-28">
            <Card className="p-6 sm:p-8">
              <LeadForm variant="callback" />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}