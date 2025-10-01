import LandingHeroCard from "@/components/ui/LandingHeroCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-background flex flex-col items-center justify-center min-h-screen pt-20">
      {/* Centered Hero Content */}
      <div className="flex flex-col items-center justify-center w-full h-full flex-1">
        <h1 className="font-extrabold text-center leading-tight">
          <span className="block text-7xl md:text-8xl">
            Decentralize
          </span>
          <span className="block text-6xl md:text-7xl">
            Knowledge
          </span>
          <span className="block text-5xl md:text-6xl">
            Empower Creators
          </span>
        </h1>
        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-[var(--landing-text-main)] mt-8 font-semibold text-center">
          The first <span className="">DeFi-native</span> launchpad for
          educational courses
        </p>
        {/* Description */}
        <p className="text-base md:text-lg text-[var(--landing-accent-2)] mt-6 text-center max-w-2xl mx-auto">
          Where educators fund their vision, backers become co-owners, and
          learners access premium content through Web3
        </p>
        <div className="mt-16 flex justify-center gap-6">
          <Button>
            <span className="w-5 h-5 rounded-full bg-[var(--card-cyan)]/20 flex items-center justify-center">
              <Sparkles />
            </span>
            <span>Launch Your Course</span>
            <ArrowRight/>
          </Button>
          <Button>
            <span className="w-5 h-5 rounded-full bg-[var(--card-blue)]/10 flex items-center justify-center text-current">
              <svg
                className="w-4 h-4 opacity-70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path d="M2.05 6.05a10 10 0 0019.9 0" />
              </svg>
            </span>
            Explore Courses
          </Button>
        </div>
      </div>
      {/* ...existing code for dots and cards... */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[40%] left-[10%] w-4 h-4 rounded-full bg-[var(--landing-dot)]" />
        <div className="absolute bottom-[15%] right-[15%] w-4 h-4 rounded-full bg-[var(--landing-dot)]" />
      </div>
      <div className="my-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <LandingHeroCard
            variant="creators"
            value="500+"
            title="Active Creators"
          />
          <LandingHeroCard variant="funds" value="$2.5M" title="Funds Raised" />
          <LandingHeroCard
            variant="courses"
            value="150+"
            title="Live Courses"
          />
        </div>
      </div>
    </section>
  );
}
