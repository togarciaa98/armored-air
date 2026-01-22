import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { FleetShowcase } from "@/components/sections/FleetShowcase";
import { WorldCupBanner } from "@/components/sections/WorldCupBanner";
import { CitySelector } from "@/components/sections/CitySelector";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <FleetShowcase />
      <WorldCupBanner />
      <CitySelector />
    </>
  );
}
