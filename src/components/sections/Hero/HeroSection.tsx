import React from "react";
import { Sparkles, Globe } from "lucide-react";
import Card from "@/components/ui/Card";

export default function HeroSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[var(--hero-gradient-from)] via-[var(--hero-gradient-via)] to-[var(--hero-gradient-to)] relative overflow-hidden font-inter">
      {/* Layered animated/floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-1/4 w-64 h-64 bg-[var(--card-cyan)]/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-[var(--card-blue)]/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6.5s" }}
        />

        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-[var(--color-blur-border)] rounded-lg rotate-45 animate-border-spin" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-[var(--card-cyan)]/30 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.5) 1px, transparent 0px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0 scale-100 text-center max-w-5xl mx-auto">
          {/* Icon and glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--card-cyan)]/30 rounded-2xl blur-xl animate-pulse-glow" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-[var(--card-cyan)] via-[var(--card-blue)] to-[var(--card-blue)] rounded-2xl flex items-center justify-center">
                <Sparkles className="text-white animate-pulse" size={40} />
              </div>
            </div>
          </div>
          {/* Title with colored span */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[var(--background)] font-space leading-tight">
            Ready to Transform
            <br />
            <span className="block bg-gradient-to-r from-[var(--card-cyan)] to-[var(--card-blue)] bg-clip-text text-transparent">
              Education?
            </span>
          </h2>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[var(--background)]/90 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Join the revolution in decentralized learning
          </p>
          <p className="text-lg text-[var(--card-cyan)]/80 mb-6 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re a creator with knowledge to share or a learner
            seeking premium content, Athenova is your gateway to the future of
            education
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-2 ring-[var(--card-cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[var(--background)] text-[var(--card-blue)] hover:bg-gradient-to-r hover:from-[var(--hero-gradient-from)] hover:to-[var(--card-cyan)] hover:text-[var(--background)] transition-transform shadow-2xl text-lg px-10 py-6 rounded-md font-semibold relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[var(--card-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Sparkles className="w-6 h-6" />
                <span className="ml-2">Launch Your Course &rarr;</span>
              </div>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-2 ring-[var(--card-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[var(--color-blur-bg)] backdrop-blur-md shadow-sm text-[var(--background)] rounded-md border border-[var(--color-blur-border)] hover:bg-[var(--color-blur-bg-hover)] hover:border-[var(--color-blur-border-hover)] transition-all duration-300 text-lg px-10 py-6 relative overflow-hidden"
            >
              <div className="relative flex items-center">
                <Globe className="mr-3 h-5 w-5" />
                Explore Ecosystem
              </div>
            </button>
          </div>
          {/* Card Component */}
          <Card />
        </div>
      </div>
    </section>
  );
}
