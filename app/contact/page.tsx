import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
      <ContactInfo />
      <Footer />
    </div>
  );
}
