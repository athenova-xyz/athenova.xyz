import React from "react";
import { Rocket, Users, GraduationCap } from "lucide-react";
import { HOW_IT_WORKS_CARDS } from "./text";

type Card = {
  id: string;
  title: string;
  description: string;
  metric: string;
  icon: React.ReactNode;
};

const cards: Card[] = HOW_IT_WORKS_CARDS.map((card) => ({
  ...card,
  icon: (
    card.id === "hw-1" ? (
      <Rocket className="w-8 h-8" />
    ) : card.id === "hw-2" ? (
      <Users className="w-8 h-8 text-primary" />
    ) : (
      <GraduationCap className="w-8 h-8" />
    )
  ),
}));

export default function HowItWorksCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {cards.map((c, i) => (
        <article
          key={c.id}
          className={
            `relative group bg-white/70 backdrop-blur-lg border border-slate-200 shadow-xl rounded-3xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl` +
            (i === 1 ? ' ring-2 ring-brand-cyan/30' : '')
          }
        >
          <div
            className={
              `flex items-center justify-center mb-6 rounded-full transition-all duration-300` +
              (i === 1
                ? ' bg-brand-cyan/10 border-2 border-brand-cyan/30 w-16 h-16'
                : ' bg-primary/10 border-2 border-primary/20 w-16 h-16')
            }
          >
            {c.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary text-center">
            {c.title}
          </h3>
          <p className="text-base text-muted-foreground text-center leading-relaxed mb-4">
            {c.description}
          </p>
          <div className="mt-auto text-sm font-semibold text-brand-cyan bg-brand-cyan/10 px-4 py-1 rounded-full">
            {c.metric}
          </div>
        </article>
      ))}
    </div>
  );
}
