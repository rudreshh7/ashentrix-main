import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceDetails from "@/components/services/ServiceDetails";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";

export const metadata: Metadata = {
  title: "BPO Services - Customer Support, Technical Support & More | Ashentrix",
  description: "Comprehensive BPO services including 24/7 customer support, technical support, back office operations, data processing, analytics & reporting. Expert outsourcing solutions for global businesses.",
  keywords: "BPO services, customer support outsourcing, technical support services, back office operations, data processing services, call center services, business process outsourcing, multilingual support, 24/7 customer service",
  openGraph: {
    title: "BPO Services - Customer Support, Technical Support & More | Ashentrix",
    description: "Comprehensive BPO services including customer support, technical support, back office operations & data processing for global businesses.",
    url: "https://www.ashentrix.com/services",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ashentrix.com/services"
  }
};

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
