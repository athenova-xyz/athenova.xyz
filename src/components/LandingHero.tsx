import React from "react";
import Image from "next/image";

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

      {/* Decorative dots (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[40%] left-[10%] w-4 h-4 rounded-full bg-[var(--landing-dot)]" />
        <div className="absolute bottom-[15%] right-[15%] w-4 h-4 rounded-full bg-[var(--landing-dot)]" />
      </div>
    </section>
  );
}
