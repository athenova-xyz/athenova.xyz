import React from "react";

type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  footerText?: string;
  onClick?: () => void;
};

export default function FeatureCard({
  Icon,
  title,
  description,
  footerText,
}: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:border-cyan-500 shadow-sm p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-md group">
      {/* Icon at top */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Footer with Learn More button */}
      <div className="flex items-center justify-between">
        <span className="text-cyan-500 font-medium text-sm">{footerText}</span>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 text-cyan-500 hover:text-cyan-600 border border-cyan-500 hover:border-cyan-600 px-3 py-1.5 rounded-md text-sm">
          Learn More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
