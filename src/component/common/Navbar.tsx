import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur border-b border-gray-200 fixed top-0 left-0 z-50">
      <Link href="/">
        <span className="flex items-center gap-2">
          <Image src="/file.svg" alt="Athenova Logo" width={40} height={40} />
        </span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</Link>
        <Link href="#how" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</Link>
        <Link href="#roadmap" className="text-gray-700 hover:text-blue-600 font-medium">Roadmap</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100 font-medium">Log In</Link>
        <Link href="/get-started" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Get Started</Link>
      </div>
    </nav>
  );
}
