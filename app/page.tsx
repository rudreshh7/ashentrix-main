import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import InsightsSection from "@/components/InsightsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <ValueProposition />
      <ServicesSection />
      <InsightsSection />
      <IndustriesSection />
      <ProcessSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
