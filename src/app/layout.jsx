import Header from "@/components/Header";
import "../styles/globals.css";
import ThemeProvider from "@/context/ThemeProvider";

export const metadata = {
  title: {
    template: "%s | Dashboard App",
    default: "Dashboard App - Mini Project",
  },
  description:
    "Next.js 14 mini project with form validation, dashboard, and dark mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
