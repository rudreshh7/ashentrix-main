import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutHistory from "@/components/about/AboutHistory";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata: Metadata = {
  title: "About Us - Leading BPO Company | Ashentrix Solutions",
  description: "Learn about Ashentrix Solutions - a premier outsourcing company in Delhi NCR. Our mission, values, leadership team, and commitment to delivering exceptional BPO services across multiple industries.",
  keywords: "about ashentrix, BPO company history, outsourcing company India, business process outsourcing team, Delhi NCR BPO services, company mission values",
  openGraph: {
    title: "About Us - Leading BPO Company | Ashentrix Solutions",
    description: "Discover Ashentrix Solutions - premier outsourcing company delivering exceptional BPO services. Learn about our mission, values & expert team.",
    url: "https://www.ashentrix.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ashentrix.com/about"
  }
};

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
