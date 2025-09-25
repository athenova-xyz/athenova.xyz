import ReadyToTransform from "@/components/sections/ReadyToTransform/ReadyToTransform";
import LandingHero from "@/components/sections/Hero/LandingHero";
import HowItWorks from "@/components/sections/Workflow/HowItWorks";
import CoreFeatures from "@/components/sections/Features/CoreFeatures";
export default function Home() {
  return (
    <>
      <LandingHero />
      <CoreFeatures />
      <HowItWorks />
      <ReadyToTransform />
    </>
  );
}
