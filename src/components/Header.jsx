"use client";

import DarkModeToggle from "@/ui/DarkModeToggle";
import Logo from "@/ui/Logo";
import { useState } from "react";
import {
  HiHome,
  HiDocumentText,
  HiChartBar,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";
import NavLink from "./NavLink";

// Navigation Links
export const navLinks = [
  { id: 1, children: "Home", path: "/", icon: HiHome },
  { id: 2, children: "Form", path: "/form", icon: HiDocumentText },
  { id: 3, children: "Dashboard", path: "/dashboard", icon: HiChartBar },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary-0/95 backdrop-blur-sm border-b border-secondary-200 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Center: Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-x-2">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink path={navLink.path} icon={navLink.icon}>
                  {navLink.children}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: Dark Mode Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-x-4">
            <DarkModeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-secondary-600 hover:bg-secondary-100 transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-y-1 pt-2">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink
                  path={navLink.path}
                  icon={navLink.icon}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navLink.children}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
