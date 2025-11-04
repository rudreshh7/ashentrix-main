import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import InsightsSection from "@/components/InsightsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import LocalBusinessSchema from "@/components/SEO/LocalBusinessSchema";
import FAQSchema from "@/components/SEO/FAQSchema";
import SEOAudit from "@/components/SEO/SEOAudit";

export const metadata: Metadata = {
  title: "Professional Outsourcing Services | BPO Company Delhi NCR India",
  description: "Ashentrix Solutions - Leading BPO company in Delhi NCR offering customer support, technical support, back office operations, data processing services for Insurance, Banking, Healthcare, Telecom industries. 24/7 multilingual support.",
  keywords: "outsourcing services Delhi, BPO company India, customer support outsourcing, technical support services, business process outsourcing, call center services NCR, multilingual support services",
  openGraph: {
    title: "Professional Outsourcing Services | BPO Company Delhi NCR India",
    description: "Leading BPO company offering comprehensive outsourcing solutions. Customer support, technical support, back office operations for multiple industries.",
    url: "https://www.ashentrix.com",
    type: "website",
    images: [
      {
        url: "/images/ashentrix-homepage-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ashentrix Solutions - Professional Outsourcing Services"
      }
    ]
  },
  alternates: {
    canonical: "https://www.ashentrix.com"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <LocalBusinessSchema />
      <FAQSchema />
      <SEOAudit page="homepage" />
      <HeroSection />
      <ClientLogosSection />
      <WhoWeAre />
      <ValueProposition />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <ResultsSection />
      <TestimonialsSection />
      <LeadershipSection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
}
