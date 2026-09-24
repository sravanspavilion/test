import { Hero } from "@/components/features/Hero";
import { ServiceGrid } from "@/components/features/ServiceGrid";
import { FutureMobility } from "@/components/features/FutureMobility";
import { BusinessSection } from "@/components/features/BusinessSection";
import { NewsSection } from "@/components/features/NewsSection";
import { FAQSection } from "@/components/features/FAQSection";
import { CTABanner } from "@/components/features/CTABanner";
import { PriceStrip } from "@/components/features/PriceStrip";
import { getNews, getFAQs, getFAQCategories } from "@/services/content";
import { getStations } from "@/services/stations";

export default async function HomePage() {
  const [news, faqs, faqCategories, stations] = await Promise.all([
    getNews(),
    getFAQs(),
    getFAQCategories(),
    getStations(),
  ]);

  return (
    <>
      <Hero />
      <ServiceGrid />
      <div className="container-site pt-16">
        <PriceStrip stations={stations.slice(0, 6)} />
      </div>
      <FutureMobility />
      <BusinessSection />
      <NewsSection articles={news.slice(0, 5)} />
      <FAQSection faqs={faqs} categories={faqCategories} limit={6} />
      <CTABanner />
    </>
  );
}