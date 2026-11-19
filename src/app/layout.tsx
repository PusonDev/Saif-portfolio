import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.profile.name} | ${portfolioData.profile.role}`,
  description: `${portfolioData.profile.name} - ${portfolioData.profile.headline}. Engineering portfolio showcasing production systems, architectures and technical capabilities.`,
  keywords: ["Engineering", "Portfolio", "Full-Stack Developer", "Next.js", "TypeScript", "System Architecture"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-canvas text-zinc-100 antialiased selection:bg-mint-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
