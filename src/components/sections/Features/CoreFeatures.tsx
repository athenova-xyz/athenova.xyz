import React from "react";
import {
  Sparkles,
  Trophy,
  Laptop,
  Coins,
  ShoppingBag,
  Edit3,
  Shield,
} from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";

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
        {/* Feature cards grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon={Coins}
            title="Decentralized Crowdfunding"
            description="Creators launch campaigns to raise funds in crypto directly from their community. No middlemen, no opaque processes."
            footerText="500+ Campaigns"
          />
          <FeatureCard
            icon={Trophy}
            title="Tokenized Revenue Share"
            description="Backers receive unique Investor Share NFTs representing their stake and share of future revenue from course sales."
            footerText="15% Avg ROI"
          />
          <FeatureCard
            icon={Laptop}
            title="Community Governance"
            description="Backers use their NFT stake to vote on project milestones, ensuring creators are accountable to their community."
            footerText="95% Participation"
          />
        </div>

        {/* Second feature cards grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon={ShoppingBag}
            title="NFT Marketplace"
            description="A dedicated secondary market to trade Investor Share NFTs and Course Access NFTs, providing liquidity for backers."
            footerText="$2.1M Volume"
          />
          <FeatureCard
            icon={Edit3}
            title="Intuitive Course Editor"
            description="A clean, powerful, Notion-like editor allows creators to build rich, engaging course content with ease."
            footerText="98% Satisfaction"
          />
          <FeatureCard
            icon={Shield}
            title="Token-Gated Access"
            description="Course content is exclusively and verifiably accessible to wallets holding the correct Course Access NFT."
            footerText="100% Secure"
          />
        </div>
      </div>
    </section>
  );
}
