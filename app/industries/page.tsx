import IndustryHero from "@/components/industries/IndustryHero";
import IndustryOverview from "@/components/industries/IndustryOverview";
import IndustryExpertise from "@/components/industries/IndustryExpertise";
import BankingFinance from "@/components/industries/BankingFinance";
import TechSaaS from "@/components/industries/TechSaaS";
import RetailEcommerce from "@/components/industries/RetailEcommerce";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <IndustryHero />
      <IndustryOverview />
      <IndustryExpertise />
      <BankingFinance />
      <TechSaaS />
      <RetailEcommerce />
    </div>
  );
}
