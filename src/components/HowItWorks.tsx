import React from "react";
import HowItWorksCards from "./ui/HowItWorksCards";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-bg">
        <div className="how-it-works-blob how-it-works-blob-1" />
        <div className="how-it-works-blob how-it-works-blob-2" />
        <div className="how-it-works-blob how-it-works-blob-3" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="how-it-works-inner transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0 scale-100 text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent font-space leading-tight">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A simple, transparent process that puts creators and communities at
            the center of education
          </p>
        </div>
      </div>
      <HowItWorksCards />
    </section>
  );
}
