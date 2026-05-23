import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dashboard — Allem UI Example",
  description: "An example dashboard built with Allem UI components.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
