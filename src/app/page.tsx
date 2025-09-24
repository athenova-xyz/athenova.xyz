import HeroSection from "@/components/sections/Hero/HeroSection";
import LandingHero from "@/components/sections/Footer/LandingHero";
import HowItWorks from "@/components/sections/Workflow/HowItWorks";
import CoreFeatures from "@/components/sections/Features/CoreFeatures";
export default function Home() {
  return (
    <>
      <LandingHero />
      <CoreFeatures />
      <HowItWorks />
      <HeroSection />
    </>
  );
}
