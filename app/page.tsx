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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
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
