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
import Pic1 from "@/public/pics/address/Balc--1-picked.jpg";
import Pic2 from "@/public/pics/jbr/LivingRoom.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-stone-50">
        <Hero />
        <TrustBadges />
        <PropertyShowcase />
        <Services />
        <ImageSection src={Pic1.src} alt="Luxury property in Dubai" />
        <HowItWorks />
        <WhyChooseUs />
        <RevenueCalculator />
        <OwnerPortal />
        <RentalComparison />
        <ImageSection src={Pic2.src} alt="Luxury property in Dubai" />
        <OwnerTestimonials />
        <FAQ />
      </main>
      <FooterBgImage />
      {/* <Footer /> */}
      <WhatsAppWidget />
    </>
  );
}
