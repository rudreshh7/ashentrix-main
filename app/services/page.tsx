import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <ServiceHero />
      <ServiceOverview />
      <ServiceDetails />
      <ServiceProcess />
      <ServiceBenefits />
      <Footer />
    </div>
  );
}
