import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How the Energy Mobility demo website handles the limited information you may enter in demo forms.",
  path: "/legal/privacy",
});

const sections: Array<{ title: string; body: string }> = [
  {
    title: "1. About this page",
    body: "This website is a development deliverable. No real user accounts are created and no payment or loyalty transactions occur. Any information entered into the demo contact, partnership or callback forms is processed in-browser and is not transmitted to a production service.",
  },
  {
    title: "2. Data we may collect",
    body: "If a form is submitted on this build, the fields you type (name, email, phone, message) may be sent to a local development API if one is configured, or discarded after the request. We never ask for sensitive financial information.",
  },
  {
    title: "3. Use of information",
    body: "Demo submissions are used only to exercise the contact workflow. In a production deployment, enquiries would be routed to the relevant internal team and retained in line with applicable data-protection law.",
  },
  {
    title: "4. Cookies and analytics",
    body: "This demo build does not set advertising cookies and does not run third-party analytics. Browser storage is used only for small interface preferences (for example, demo admin sign-in state).",
  },
  {
    title: "5. Third-party links",
    body: "Pages link out to directions providers (for example, OpenStreetMap) in a new tab. We are not responsible for the privacy practices of external services.",
  },
  {
    title: "6. Contact",
    body: "For privacy questions about this demo build, reach the project team through the contact page on this site.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        description="A concise policy for this demonstration build — production policies would be drafted with legal counsel before launch."
        breadcrumb={[{ label: "Privacy" }]}
      />
      <section className="container-site max-w-3xl py-14">
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-extrabold text-slate-900">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-500">
          Last updated: September 2026. This policy applies to the software demonstration
          only and is not a legal document for a live organisation.
        </p>
      </section>
    </>
  );
}