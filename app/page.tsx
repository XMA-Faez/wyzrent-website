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
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <PropertyShowcase />
        <HowItWorks />
        <WhyChooseUs />
        <RevenueCalculator />
        <RentalComparison />
        <OwnerTestimonials />
        <OwnerPortal />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
