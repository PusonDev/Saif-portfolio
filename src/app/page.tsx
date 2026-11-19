import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorksSection } from "@/components/WorksSection";
import { MotionPlaygroundSection } from "@/components/MotionPlaygroundSection";
import { ServicesBentoSection } from "@/components/ServicesBentoSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectInquirySection } from "@/components/ProjectInquirySection";
import { Footer } from "@/components/Footer";
import { PrecisionCursor } from "@/components/PrecisionCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink-primary flex flex-col justify-between selection:bg-accent selection:text-zinc-950 overflow-x-hidden w-full">
      {/* Precision Cursor (Leaf Client Component) */}
      <PrecisionCursor />

      {/* Sticky Header Navigation with Universal Return Gateway */}
      <Navbar />

      <div className="flex-1">
        {/* [1] Executive Hero (Single <h1>, Workstation Frame, Monochrome Marquee) */}
        <HeroSection />

        {/* [2] 3D Multi-Device Motion Showcase (Widescreen 16:9, Mobile 9:16, Layered Comp) */}
        <WorksSection />

        {/* [3] Interactive Graph Editor Easing Lab (Real AE Curve Physics) */}
        <MotionPlaygroundSection />

        {/* [4] Consolidated Capabilities and Production Standards (4 Luxury Bento Cards) */}
        <ServicesBentoSection />

        {/* [5] Verified Credentials, 4-Step Cadence and Delivery Guarantees */}
        <ProcessSection />

        {/* [6] Secure Interactive Project Scoper and Concise 4-Item FAQ */}
        <ProjectInquirySection />
      </div>

      {/* [7] Clean Closing Gateway and Footer with Universal Return Gateway */}
      <Footer />
    </main>
  );
}
