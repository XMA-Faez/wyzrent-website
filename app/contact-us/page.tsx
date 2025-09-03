import { Header, Footer } from "@/app/components/layout";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  LocationMap
} from "@/app/components/sections/contact";
import WhatsAppWidget from "@/app/components/ui/WhatsAppWidget";

export default function ContactUs() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
