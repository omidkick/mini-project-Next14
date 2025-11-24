"use client";

import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}