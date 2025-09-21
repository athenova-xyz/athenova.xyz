import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white backdrop-blur border-b border-gray-200 fixed top-0 left-0 z-50">
      <Link href="/">
        <span className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="Athenova Logo"
            width={32}
            height={32}
            className="w-12 h-12 mx-auto"
            priority
          />
        </span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</Link>
        <Link href="#how" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</Link>
        <Link href="#roadmap" className="text-gray-700 hover:text-blue-600 font-medium">Roadmap</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button
            variant="outline"
            className="text-gray-900 font-semibold bg-transparent border-none px-3 py-3 rounded-m shadow-none transition-colors duration-200 hover:bg-[var(--secondary)] hover:text-white"
          >
            Log In
          </Button>
        </Link>
        <Link href="/get-started">
          <Button
            className="font-semibold px-3 py-3 rounded-m bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-none border-none transition-transform duration-200 hover:scale-105"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
