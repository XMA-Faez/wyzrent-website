import { Header, Footer } from "@/app/components/layout";
import { 
  AboutHero, 
  WhoWeAre, 
  MissionVision, 
  CEOMessage 
} from "@/app/components/sections/about";
import { CTA } from "@/app/components/sections";
import WhatsAppWidget from "@/app/components/ui/WhatsAppWidget";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <WhoWeAre />
        <MissionVision />
        <CEOMessage />
        <CTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}