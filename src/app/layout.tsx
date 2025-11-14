import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { getTheme } from "@/actions/theme";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fonts Ninja",
  description: "Browse and discover fonts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme = await getTheme();

  return (
    <html lang="en" className={`${inter.className} ${initialTheme}`}>
      <body>
        <ThemeProvider initialTheme={initialTheme}>
          <div className="min-h-screen">
            <header className="px-14 py-8">
              <div className="flex items-center justify-between">
                <Logo />
                <ThemeToggle />
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
