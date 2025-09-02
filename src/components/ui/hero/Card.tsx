import React from "react";
import { Users2, TrendingUp, Sparkles } from "lucide-react";

const CARD_DATA = [
	{
		icon: "users",
		gradientFrom: "var(--card-cyan)",
		gradientTo: "var(--card-blue)",
		topBarFrom: "var(--card-cyan)",
		topBarTo: "var(--card-blue)",
		value: "10K+",
		title: "Community Members",
		subtitle: "Growing daily",
	},
	{
		icon: "trending",
		gradientFrom: "var(--card-blue)",
		gradientTo: "var(--card-cyan)",
		topBarFrom: "var(--card-blue)",
		topBarTo: "var(--card-cyan)",
		value: "$5M+",
		title: "Total Value Locked",
		subtitle: "Secured on-chain",
	},
	{
		icon: "sparkles",
		gradientFrom: "var(--card-cyan)",
		gradientTo: "var(--card-cyan)",
		topBarFrom: "var(--card-cyan)",
		topBarTo: "var(--card-cyan)",
		value: "98%",
		title: "Success Rate",
		subtitle: "Funded courses",
	},
];

function getIcon(name: string) {
	const iconProps = { className: "text-[var(--background)]", size: 32 };
	if (name === "users") return <Users2 {...iconProps} />;
	if (name === "trending") return <TrendingUp {...iconProps} />;
	if (name === "sparkles") return <Sparkles {...iconProps} />;
	return null;
}

export default function Card() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10 px-2">
			{CARD_DATA.map((card, idx) => (
				<div className="group" key={idx}>
					<div className="bg-[var(--color-blur-bg)] backdrop-blur-md rounded-2xl p-6 border border-[var(--color-blur-border)] hover:bg-[var(--color-blur-bg-hover)] transition-all duration-300 transform hover:scale-105 relative overflow-hidden flex flex-col items-center">
						<div
							className="absolute top-0 left-0 w-full h-1"
							style={{
								background: `linear-gradient(90deg, ${card.topBarFrom}, ${card.topBarTo})`,
							}}
						/>
						<div className="flex items-center justify-center mb-6">
							<div
								className="rounded-full w-14 h-14 flex items-center justify-center"
								style={{
									background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`,
								}}
							>
								{getIcon(card.icon)}
							</div>
						</div>
						<div className="text-3xl md:text-4xl font-bold text-[var(--background)] mb-2 font-space text-center">
							{card.value}
						</div>
						<div className="text-[var(--card-cyan)] font-medium mb-2 text-center">
							{card.title}
						</div>
						<div className="text-[var(--background)]/60 text-sm text-center">
							{card.subtitle}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

