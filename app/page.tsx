import { Header, Footer } from "./components/layout";
import {
  Hero,
  Services,
  WhyChooseUs,
  RentalComparison,
  PropertyShowcase,
  OwnerPortal,
  OwnerTestimonials,
  FAQ,
  CTA,
} from "./components/sections";
import HowItWorks from "./components/sections/HowItWorks";
import { TrustBadges, RevenueCalculator } from "./components/ui";
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
        <HowItWorks />
        <WhyChooseUs />
        <RevenueCalculator />
        <RentalComparison />
        <OwnerPortal />
        <OwnerTestimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
