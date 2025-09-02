import React from "react";
import { Sparkles, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#112650] via-[#1a3c6b] to-[#3ba4c6] relative overflow-hidden font-inter">
      {/* Layered animated/floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-1/4 w-64 h-64 bg-cyan-300/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6.5s" }}
        />
        
        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-white/10 rounded-lg rotate-45 animate-border-spin" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-cyan-400/30 rounded-full blur-3xl animate-pulse-glow" />
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
              <div className="absolute inset-0 bg-cyan-300/30 rounded-2xl blur-xl animate-pulse-glow" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-[#30b6de] via-blue-500 to-[#19458D] rounded-2xl flex items-center justify-center">
                <Sparkles className="text-white animate-pulse" size={40} />
              </div>
            </div>
          </div>
          {/* Title with colored span */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white font-space leading-tight">
            Ready to Transform<br />
            <span className="block bg-gradient-to-r from-[#32c1e3] to-[#239ec3] bg-clip-text text-transparent">
              Education?
            </span>
          </h2>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Join the revolution in decentralized learning
          </p>
          <p className="text-lg text-cyan-400/80 mb-6 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re a creator with knowledge to share or a learner seeking premium content, Athenova is your gateway to the future of education
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-2 ring-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-blue-800 hover:bg-gradient-to-r hover:from-[#112650] hover:to-[#30b6de] hover:text-white transition-transform shadow-2xl text-lg px-10 py-6 rounded-md font-semibold relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Sparkles className="w-6 h-6" />
                <span className="ml-2">Launch Your Course &rarr;</span>
              </div>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-2 ring-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white/5 backdrop-blur-md shadow-sm text-white rounded-md border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-lg px-10 py-6 relative overflow-hidden"
            >
              <div className="relative flex items-center">
                <Globe className="mr-3 h-5 w-5" />
                Explore Ecosystem
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


