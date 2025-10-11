import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      className="w-full flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur border-b border-gray-200 fixed top-0 left-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link href="/">
        <span
          className="text-3xl font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{ fontFamily: 'var(--font-pacifico), cursive' }}
        >
          Athenova
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Features</Link>
        <Link href="#how" className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">How It Works</Link>
        <Link href="#roadmap" className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Roadmap</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link href="/login">
          <Button
            variant="outline"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Log In
          </Button>
        </Link>
        <Link href="/get-started">
          <Button
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          ref={mobileMenuButtonRef}
          onClick={toggleMobileMenu}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4"
          role="menu"
          aria-labelledby={mobileMenuButtonRef.current?.id}
        >
          <div className="flex flex-col items-center gap-4">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" role="menuitem" onClick={closeMobileMenu}>Features</Link>
            <Link href="#how" className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" role="menuitem" onClick={closeMobileMenu}>How It Works</Link>
            <Link href="#roadmap" className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" role="menuitem" onClick={closeMobileMenu}>Roadmap</Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="menuitem"
                onClick={closeMobileMenu}
              >
                Log In
              </Button>
            </Link>
            <Link href="/get-started">
              <Button
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="menuitem"
                onClick={closeMobileMenu}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
