import { Header, Footer } from "./components/layout";
import {
  Hero,
  Services,
  WhyChooseUs,
  RentalComparison,
  PropertyShowcase,
  OwnerTestimonials,
  FAQ,
  CTA,
} from "./components/sections";
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
        <WhyChooseUs />
        <RevenueCalculator />
        <RentalComparison />
        <OwnerTestimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
