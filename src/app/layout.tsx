import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Saifuddin — Motion Designer",
  description: "Portfolio of MD Saifuddin, Motion Designer specializing in visual storytelling, dynamic kinetic typography and short-form video content.",
  keywords: ["Motion Designer", "Kinetic Typography", "After Effects", "Visual Storytelling", "Video Editing", "Dhaka Bangladesh"],
  authors: [{ name: "MD Saifuddin" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
        {/* Preload High-Priority Studio Portrait */}
        <link rel="preload" as="image" href="/images/saif-studio-motion.jpg" />
        {/* ZenVQ Universal Live Translation Engine */}
        <script src="/lib/zenvq-translate.js" defer></script>
      </head>
      <body className="font-sans antialiased bg-canvas text-ink-primary min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
