import React from "react";
import { Sparkles } from "lucide-react";

export default function CoreFeatures() {
  return (
    <section className="py-20 bg-[var(--core-features-bg)]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Core Features Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--core-features-badge-bg)] text-[var(--core-features-badge-text)] font-medium text-sm mb-8">
          <Sparkles className="w-4 h-4 text-[var(--core-features-badge-text)]" />
          <span>Core Features</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-core-gradient">
          Built for the Future
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[var(--core-features-subtitle)] max-w-4xl mx-auto leading-relaxed">
          Powered by blockchain technology, designed for the next generation of
          decentralized education
        </p>
      </div>
    </section>
  );
}
