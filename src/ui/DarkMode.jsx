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
      className="relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out overflow-hidden"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #1e293b 0%, #4f6db4 100%)' 
          : 'linear-gradient(135deg, #7dd3fc 0%, #bae6fd 100%)'
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
          {/* Sun */}
          <circle cx="12" cy="16" r="6" fill="#fbbf24" />
          <g stroke="#fbbf24" strokeWidth="1" strokeLinecap="round">
            <line x1="12" y1="4" x2="12" y2="6" />
            <line x1="12" y1="26" x2="12" y2="28" />
            <line x1="0" y1="16" x2="2" y2="16" />
            <line x1="22" y1="16" x2="24" y2="16" />
            <line x1="4.22" y1="6.22" x2="5.64" y2="7.64" />
            <line x1="18.36" y1="24.36" x2="19.78" y2="25.78" />
            <line x1="4.22" y1="25.78" x2="5.64" y2="24.36" />
            <line x1="18.36" y1="7.64" x2="19.78" y2="6.22" />
          </g>
          {/* Clouds */}
          <ellipse cx="32" cy="12" rx="4" ry="2" fill="rgba(255,255,255,0.7)" />
          <ellipse cx="34" cy="11" rx="3" ry="1.5" fill="rgba(255,255,255,0.7)" />
          <ellipse cx="48" cy="20" rx="3" ry="1.5" fill="rgba(255,255,255,0.6)" />
        </svg>

        {/* Dark Mode Scene */}
        <svg
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          viewBox="0 0 64 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Moon */}
          <circle cx="52" cy="16" r="6" fill="#f1f5f9" />
          <circle cx="54" cy="14" r="4.5" fill="#1e293b" />
          {/* Stars */}
          <circle cx="12" cy="8" r="0.8" fill="#f1f5f9" />
          <circle cx="20" cy="12" r="0.6" fill="#f1f5f9" />
          <circle cx="8" cy="20" r="0.7" fill="#f1f5f9" />
          <circle cx="24" cy="24" r="0.5" fill="#f1f5f9" />
          <circle cx="32" cy="6" r="0.6" fill="#f1f5f9" />
        </svg>
      </div>

      {/* Toggle Knob */}
      <div
        className={`absolute top-1 w-6 h-6  rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${
          isDark ? "-translate-x-1 bg-slate-900" : "-translate-x-9 bg-yellow-300 "
        }`}
      ></div>


    </button>
  );
}

export default DarkModeToggle;


//! old:
// "use client";

// import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// function DarkModeToggle() {
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null; 

//   const isDark = resolvedTheme === "dark";

//   return (
//     <button onClick={() => setTheme(isDark ? "light" : "dark")}>
//       {isDark ? (
//         <HiOutlineSun className="w-6 h-6 md:w-7 md:h-7 text-primary-900" />
//       ) : (
//         <HiOutlineMoon className="w-6 h-6 md:w-7 md:h-7 text-primary-900" />
//       )}
//     </button>
//   );
// }

// export default DarkModeToggle;

