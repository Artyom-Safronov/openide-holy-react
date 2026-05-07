import AISection from './sections/AISection';
import CTABanner from './sections/CTABanner';
import ExperimentalSection from './sections/ExperimentalSection';
import FAQSection from './sections/FAQSection';
import FeaturesSection from './sections/FeaturesSection';
import HomeHero from './sections/HomeHero';
import MarketplacePreview from './sections/MarketplacePreview';
import NewsSection from './sections/NewsSection';

export default function MainPage() {
  return (
    <>
      <HomeHero />
      <FeaturesSection />
      <AISection />
      <ExperimentalSection />
      <MarketplacePreview />
      <CTABanner />
      <NewsSection />
      <FAQSection />
    </>
  );
}
