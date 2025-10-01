import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur border-b border-gray-200 fixed top-0 left-0 z-50 fixed">
      <Link href="/">
        <span
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-pacifico), cursive' }}
        >
          Athenova
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
          >
            Log In
          </Button>
        </Link>
        <Link href="/get-started">
          <Button
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
