import React from "react";
import HowItWorksCards from "@/components/sections/Workflow/HowItWorksCards";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-primary drop-shadow-sm tracking-tight">
            How It Works
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple, transparent process that puts creators and communities at the center of education.
          </p>
        </div>
        <HowItWorksCards />
      </div>
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0" />
    </section>
  );
}
