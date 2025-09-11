import React from "react";
import { Users2, DollarSign, BookOpen } from "lucide-react";

type Props = {
  variant: "creators" | "funds" | "courses";
  value: string;
  title: string;
};

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  creators: Users2,
  funds: DollarSign,
  courses: BookOpen,
};

export default function LandingHeroCard({ variant, value, title }: Props) {
  const Icon = ICON_MAP[variant];

  return (
    <div
      role="button"
      tabIndex={0}
      className="cursor-pointer w-full max-w-sm mx-auto bg-[var(--color-blur-bg)] backdrop-blur-md rounded-2xl p-8 border border-[var(--color-blur-border)] transition-all duration-200 transform hover:scale-105 active:-translate-y-3 shadow-card relative flex flex-col items-center min-h-[220px]"
    >
      <div className="mb-6 flex items-center justify-center">
        <div className="rounded-full w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[var(--card-cyan)] to-[var(--card-blue)]">
          <Icon className="text-[var(--background)]" size={28} />
        </div>
      </div>

      <div className="text-3xl md:text-4xl font-bold text-[var(--background)] mb-2 text-center">
        {value}
      </div>
      <div className="text-[var(--card-cyan)] font-medium mb-2 text-center">
        {title}
      </div>
    </div>
  );
}
