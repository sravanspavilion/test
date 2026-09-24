import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQSection } from "@/components/features/FAQSection";
import { getFAQs, getFAQCategories } from "@/services/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description:
    "Answers about fuel, EV charging, CNG, doorstep diesel, rewards and the Energy Mobility network.",
  path: "/faqs",
});

export default async function FAQPage() {
  const [faqs, categories] = await Promise.all([getFAQs(), getFAQCategories()]);

  return (
    <>
      <PageHeader
        eyebrow="Help centre"
        title="Frequently asked questions"
        description="Browse answers by topic, or reach out and we will help directly."
        breadcrumb={[{ label: "FAQs" }]}
      />
      <div className="pt-10">
        <FAQSection faqs={faqs} categories={categories} />
      </div>
    </>
  );
}