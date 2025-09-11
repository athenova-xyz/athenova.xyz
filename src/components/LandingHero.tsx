import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import LandingHeroCard from "./ui/LandingHeroCard";

export default function LandingHero() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-[var(--hero-gradient-from)] via-[var(--hero-gradient-via)] to-[var(--hero-gradient-to)]">
      {/* Logo */}
      <div className="mb-10 flex justify-center">
        {/* Replace the src below with the path to your logo file */}
        <Image
          src="/Logo.png"
          alt="Athenova Logo"
          width={128}
          height={128}
          className="w-32 h-32 mx-auto"
          priority
        />
      </div>

      {/* Headline */}
      <h1 className="font-extrabold text-center leading-tight">
        <span className="block text-7xl md:text-8xl text-[var(--landing-text-main)]">
          Decentralize
        </span>
        <span className="block text-6xl md:text-7xl text-[var(--landing-accent)]">
          Knowledge
        </span>
        <span className="block text-5xl md:text-6xl text-[var(--landing-accent)]">
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

      {/* CTA Buttons (matches screenshot) */}
      <div className="mt-16 flex justify-center gap-6">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-lg shadow-lg bg-[var(--background)] text-[var(--card-blue)] font-semibold ring-2 ring-[var(--card-cyan)] hover:shadow-2xl active:translate-y-0.5 transition-all duration-200 hover:bg-[var(--landing-accent)] hover:text-[var(--landing-cta-hover-text-secondary)]"
        >
          <span className="w-5 h-5 rounded-full bg-[var(--card-cyan)]/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[var(--card-blue)]" />
          </span>
          <span>Launch Your Course</span>
          <ArrowRight className="w-4 h-4 text-[var(--card-blue)]" />
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-lg shadow-sm bg-[var(--color-blur-bg)] backdrop-blur-md text-[var(--background)] border border-[var(--color-blur-border)] font-medium transition-all duration-200 hover:bg-[var(--landing-cta-hover-deep)] hover:text-[var(--landing-cta-hover-text-secondary)]"
        >
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
        </button>
      </div>

      {/* Decorative dots (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[40%] left-[10%] w-4 h-4 rounded-full bg-[var(--landing-dot)]" />
        <div className="absolute bottom-[15%] right-[15%] w-4 h-4 rounded-full bg-[var(--landing-dot)]" />
      </div>

      {/* Card grid - matches screenshot */}
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
