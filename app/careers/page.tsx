import CareersHero from "@/components/careers/CareersHero";
import JobOpenings from "@/components/careers/JobOpenings";
import CultureSection from "@/components/careers/CultureSection";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <CareersHero />
      <JobOpenings />
      <CultureSection />
    </div>
  );
}
