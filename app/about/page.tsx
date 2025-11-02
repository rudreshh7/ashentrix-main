import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutHistory from "@/components/about/AboutHistory";
import AboutTeam from "@/components/about/AboutTeam";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutHistory />
      <AboutTeam />
      <Footer />
    </div>
  );
}
