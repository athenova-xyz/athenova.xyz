import Image from "next/image";
import { Twitter, MessageCircle, Github, Mail } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Roadmap", href: "#" },
];

const communityLinks = [
  { label: "Discord", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Blog", href: "#" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const socialIcons = [
  { ariaLabel: "Twitter", icon: <Twitter size={28} strokeWidth={2} /> },
  { ariaLabel: "Chat", icon: <MessageCircle size={28} strokeWidth={2} /> },
  { ariaLabel: "GitHub", icon: <Github size={28} strokeWidth={2} /> },
  { ariaLabel: "Email", icon: <Mail size={28} strokeWidth={2} /> },
];

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground pt-16 pb-12">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-6 gap-8">
        <div className="basis-full md:basis-1/3 mb-8 md:mb-0">
          <Image
            src="/Logo.png"
            alt="Athenova Logo"
            width={32}
            height={32}
            className="w-18 h-18"
            priority
          />
          <p className="mb-8 leading-relaxed">
            Athenova is revolutionizing education through <br /> decentralized crowdfunding, tokenized ownership, and <br /> community governance. Join us in building the future of <br /> learning.
          </p>
          <div className="flex gap-6 text-2xl mt-2">
            {socialIcons.map((icon) => (
              <span key={icon.ariaLabel} title={icon.ariaLabel} role="img" className="hover:text-secondary transition-colors">
                {icon.icon}
              </span>
            ))}
          </div>
        </div>
        <div className="basis-full sm:basis-1/4 mb-8 md:mb-0">
          <h4 className="text-primary font-semibold text-lg mb-6 mt-2">Product</h4>
          <ul>
            {productLinks.map((link) => (
              <li key={link.label} className="mb-5">
                <a href={link.href} className="text-muted-foreground text-base hover:text-secondary hover:underline transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-full sm:basis-1/4 mb-8 md:mb-0">
          <h4 className="text-primary font-semibold text-lg mb-6 mt-2">Community</h4>
          <ul>
            {communityLinks.map((link) => (
              <li key={link.label} className="mb-5">
                <a href={link.href} className="text-muted-foreground text-base hover:text-secondary hover:underline transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between items-center border-t mt-14 pt-8 px-6">
        <span className="py-2">© 2024 Athenova. All rights reserved.</span>
        <ul className="flex gap-10 list-none p-0 m-0">
          {policyLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-muted-foreground hover:text-secondary hover:underline py-2 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
