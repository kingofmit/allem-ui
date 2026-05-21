import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Allem UI - Beautiful React Components",
  description:
    "A modern, accessible React component library built with React Aria and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
        {children}
      </body>
    </html>
  );
}
