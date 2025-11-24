import Header from "@/components/Header";
import "../styles/globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: " Mini Project |%s",
    default: "Home",
  },
  description:
    "Next.js 14 mini project with form validation, dashboard, and dark mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>
          <Toaster />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
