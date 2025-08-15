import { Header, Footer } from "./components/layout";
import {
  Hero,
  Services,
  WhyChooseUs,
  PropertyShowcase,
  OwnerTestimonials,
  FAQ,
  CTA,
} from "./components/sections";
import { TrustBadges, RevenueCalculator } from "./components/ui";

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
        <OwnerTestimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
