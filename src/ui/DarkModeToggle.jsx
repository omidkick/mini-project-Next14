"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className="relative w-14 h-7 rounded-full transition-all duration-300 ease-in-out overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #262e3a 0%, #6183cd 100%)"
          : "linear-gradient(135deg, #7dd3fc 0%, #bae6fd 100%)",
      }}
    >
      {/* Background Scene - SVG */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {/* Light Mode Scene */}
        <svg
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          viewBox="0 0 64 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sun - moved to right side */}
          <circle cx="52" cy="16" r="6" fill="#fbbf24" />
          <g stroke="#fbbf24" strokeWidth="1" strokeLinecap="round">
            <line x1="52" y1="4" x2="52" y2="6" />
            <line x1="52" y1="26" x2="52" y2="28" />
            <line x1="40" y1="16" x2="42" y2="16" />
            <line x1="62" y1="16" x2="64" y2="16" />
            <line x1="44.22" y1="6.22" x2="45.64" y2="7.64" />
            <line x1="58.36" y1="24.36" x2="59.78" y2="25.78" />
            <line x1="44.22" y1="25.78" x2="45.64" y2="24.36" />
            <line x1="58.36" y1="7.64" x2="59.78" y2="6.22" />
          </g>
          {/* Clouds */}
          <ellipse cx="18" cy="12" rx="4" ry="2" fill="rgba(255,255,255,0.7)" />
          <ellipse
            cx="20"
            cy="11"
            rx="3"
            ry="1.5"
            fill="rgba(255,255,255,0.7)"
          />
          <ellipse
            cx="30"
            cy="20"
            rx="3"
            ry="1.5"
            fill="rgba(255,255,255,0.6)"
          />
        </svg>

        {/* Dark Mode Scene */}
        <svg
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          viewBox="0 0 64 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Moon - moved to left side */}
          <circle cx="12" cy="16" r="6" fill="#f1f5f9" />
          <circle cx="14" cy="14" r="4.5" fill="#414d5f" />
          {/* Stars */}
          <circle cx="32" cy="8" r="0.8" fill="#f1f5f9" />
          <circle cx="44" cy="12" r="0.6" fill="#f1f5f9" />
          <circle cx="36" cy="20" r="0.7" fill="#f1f5f9" />
          <circle cx="48" cy="24" r="0.5" fill="#f1f5f9" />
          <circle cx="52" cy="6" r="0.6" fill="#f1f5f9" />
        </svg>
      </div>

      {/* Toggle Knob */}
      <div
        className={`absolute top-1 w-5 h-5  rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${
          isDark
            ? "-translate-x-1 bg-secondary-50"
            : "-translate-x-8 bg-yellow-300 "
        }`}
      ></div>
    </button>
  );
}

export default DarkModeToggle;
