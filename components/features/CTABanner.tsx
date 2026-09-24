import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

export function CTABanner() {
  return (
    <section className="container-site py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 px-6 py-14 text-white sm:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 size-72 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 size-72 rounded-full bg-brand-500/30 blur-3xl" />
        </div>
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-300">
              <Icon name="phone" className="size-3.5" />
              Talk to us
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Have a question or a business need?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Track down a station, plan fleet fuel or ask about partnerships — our
              team will get back to you within one working day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="accent" size="lg" icon="mail">
              Contact us
            </Button>
            <Button
              href="/partnerships"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-accent-400 hover:text-accent-300"
            >
              Partner with us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}