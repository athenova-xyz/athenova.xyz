import LandingHero from "@/components/LandingHero";
import CoreFeatures from "@/components/CoreFeatures";
import HeroSection from "../components/hero/HeroSection";
import HowItWorks from "@/components/HowItWorks";

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
