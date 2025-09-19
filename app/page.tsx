import { Header, Footer, FooterBgImage } from "./components/layout";
import {
  Hero,
  Services,
  WhyChooseUs,
  RentalComparison,
  PropertyShowcase,
  OwnerPortal,
  OwnerTestimonials,
  FAQ,
} from "./components/sections";
import HowItWorks from "./components/sections/HowItWorks";
import { TrustBadges, RevenueCalculator, ImageSection } from "./components/ui";
import WhatsAppWidget from "./components/ui/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-stone-50">
        <Hero />
        <TrustBadges />
        <PropertyShowcase />
        <Services />
        <ImageSection />
        <HowItWorks />
        <WhyChooseUs />
        <RevenueCalculator />
        <OwnerPortal />
        <RentalComparison />
        <OwnerTestimonials />
        <FAQ />
      </main>
      <FooterBgImage />
      {/* <Footer /> */}
      <WhatsAppWidget />
    </>
  );
}
