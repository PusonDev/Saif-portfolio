import type { Metadata } from "next";
import "./globals.css";
import { LaserCursor } from "@/components/LaserCursor";
import { TorchlightOverlay } from "@/components/TorchlightOverlay";

export const metadata: Metadata = {
  metadataBase: new URL("https://saif.zenvq.com"),
  title: "MD Saifuddin — Motion Designer | UI Motion, SaaS Animation and Kinetic Typography",
  description: "Portfolio of MD Saifuddin, Motion Designer crafting high-retention motion graphics, kinetic typography and digital product sequences in After Effects for SaaS products, gaming brands and content creators.",
  keywords: [
    "MD Saifuddin",
    "Motion Designer",
    "UI Motion Design",
    "SaaS Animation",
    "Kinetic Typography",
    "Logo Animation",
    "After Effects",
    "Media Encoder",
    "Social Reels",
    "Visual Storytelling",
    "Dhaka Bangladesh",
    "Motion Graphics",
  ],
  authors: [{ name: "MD Saifuddin", url: "https://saif.zenvq.com" }],
  creator: "MD Saifuddin",
  alternates: {
    canonical: "https://saif.zenvq.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saif.zenvq.com",
    title: "MD Saifuddin — Motion Designer | Kinetic Typography and Reels",
    description: "Portfolio of MD Saifuddin, Motion Designer crafting kinetic typography, short-form reels and visual storytelling in Adobe Creative Suite.",
    siteName: "MD Saifuddin Motion Portfolio",
    images: [
      {
        url: "/images/saif-portrait.webp",
        width: 1024,
        height: 768,
        alt: "MD Saifuddin — Motion Designer at Studio Workstation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Saifuddin — Motion Designer",
    description: "Motion Designer crafting kinetic typography, short-form social reels and visual storytelling.",
    images: ["/images/saif-portrait.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://saif.zenvq.com/#person",
        name: "MD Saifuddin",
        givenName: "Saifuddin",
        familyName: "MD",
        jobTitle: "Motion Designer",
        url: "https://saif.zenvq.com",
        image: "https://saif.zenvq.com/images/saif-portrait.webp",
        email: "mailto:madas3709@gmail.com",
        telephone: "+8801876422288",
        sameAs: [
          "https://www.instagram.com/motion.bysaif/",
          "https://zenvq.com",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Uttara",
          addressRegion: "Dhaka",
          addressCountry: "Bangladesh",
        },
        knowsLanguage: ["Bengali", "English", "Hindi", "Urdu"],
        knowsAbout: [
          "UI Motion Design",
          "SaaS Animation",
          "Kinetic Typography",
          "Logo Animation",
          "Adobe After Effects",
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Adobe Media Encoder",
          "Short-Form Video Editing",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://saif.zenvq.com/#service",
        name: "Motion Design and Kinetic Typography Production",
        provider: {
          "@id": "https://saif.zenvq.com/#person",
        },
        serviceType: "Motion Graphics Design",
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Motion Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kinetic Typography and Titles",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "9:16 High-Retention Social Reels",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Vector Staging and Visual Transitions",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://saif.zenvq.com/#website",
        url: "https://saif.zenvq.com",
        name: "MD Saifuddin — Motion Designer",
        description: "Official portfolio of MD Saifuddin, Motion Designer based in Dhaka, Bangladesh.",
        publisher: {
          "@id": "https://saif.zenvq.com/#person",
        },
      },
    ],
  };

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
        {/* Preload High-Priority Studio Portrait WebP Asset */}
        <link rel="preload" as="image" href="/images/saif-portrait.webp" type="image/webp" />
        {/* Instant Hash Sanitizer: Strips #overview or any stale anchor so the URL is always cleanly https://saif.zenvq.com/ */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  function sanitizeUrl() {
                    if (window.location.hash) {
                      var h = window.location.hash.toLowerCase();
                      if (h.indexOf('overview') !== -1 || h === '#') {
                        window.history.replaceState(null, '', window.location.pathname + window.location.search);
                      }
                    }
                  }
                  sanitizeUrl();
                  window.addEventListener('hashchange', sanitizeUrl);
                  window.addEventListener('DOMContentLoaded', sanitizeUrl);
                  window.addEventListener('load', sanitizeUrl);
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Advanced JSON-LD Structured Data for AI Search Engines and Google Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        {/* ZenVQ Precision Laser Cursor Engine */}
        <script src="/lib/zenvq-laser.js" data-auto-laser="true" data-theme="motion" defer></script>
        {/* ZenVQ Universal Live Translation Engine */}
        <script src="/lib/zenvq-translate.js" defer></script>
      </head>
      <body className="font-sans antialiased bg-canvas text-ink-primary min-h-screen flex flex-col">
        <LaserCursor theme="motion" />
        <TorchlightOverlay />
        {children}
      </body>
    </html>
  );
}
