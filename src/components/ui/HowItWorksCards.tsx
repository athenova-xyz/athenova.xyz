import React from "react";
import { Rocket, Users } from "lucide-react";

type Card = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
};

const cards: Card[] = [
  {
    id: "hw-1",
    icon: <Rocket className="hw-icon-svg" />,
    title: "Creators Launch",
    description:
      "Educators create compelling course proposals and launch crowdfunding campaigns.",
    metric: "500+ Courses Launched",
  },
  {
    id: "hw-2",
    icon: <Users className="hw-icon" />,
    title: "Community Backs",
    description:
      "Supporters fund projects they believe in, receiving Investor Share NFTs.",
    metric: "$2.5M+ Funds Raised",
  },
  {
    id: "hw-3",
    icon: (
      <svg
        className="hw-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l8 4-8 4-8-4 8-4z" />
      </svg>
    ),
    title: "Everyone Learns & Earns",
    description:
      "Courses are built collaboratively with shared success for all participants.",
    metric: "150+ Active Courses",
  },
];

export default function HowItWorksCards() {
  return (
    <div className="how-it-works-cards container mx-auto px-6 mt-16 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((c, i) => {
          const extraClass = i === 0 ? "hw-card--featured" : "hw-card--alt";
          // second card needs a rounded square icon background like the screenshot
          const iconWrapClass =
            i === 1
              ? "hw-icon-wrap hw-icon-wrap--square"
              : "hw-icon-wrap hw-icon-wrap--alt";
          return (
            <article key={c.id} className={`hw-card group ${extraClass}`}>
              <div className="hw-card-inner p-8 mt-12 text-center">
                <div className={`${iconWrapClass} mx-auto mb-6`}>{c.icon}</div>
                <h3 className="hw-card-title text-2xl font-semibold mb-4">
                  {c.title}
                </h3>
                <p className="hw-card-desc text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
                <div className="mt-4 text-xs text-brand-cyan font-medium">
                  {c.metric}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
