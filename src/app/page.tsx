import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MotionSuiteMarquee } from "@/components/MotionSuiteMarquee";
import { AboutCraftSection } from "@/components/AboutCraftSection";
import { ProjectInquirySection } from "@/components/ProjectInquirySection";
import { ServicesBentoSection } from "@/components/ServicesBentoSection";
import { MotionPlaygroundSection } from "@/components/MotionPlaygroundSection";
import { WorksSection } from "@/components/WorksSection";
import { ComparisonMatrixSection } from "@/components/ComparisonMatrixSection";
import { MidPageCTASection } from "@/components/MidPageCTASection";
import { ProcessSection } from "@/components/ProcessSection";
import { CreativeToolsSection } from "@/components/CreativeToolsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink-primary flex flex-col justify-between selection:bg-accent selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      <div className="flex-1">
        {/* [01] Hero Section */}
        <HeroSection />

        {/* [02] Logo Section / Motion Suite Marquee */}
        <MotionSuiteMarquee />

        {/* [03] About Section (Authority, Background & Verified Education) */}
        <AboutCraftSection />

        {/* [04] Form Section (Interactive Project Scoping Funnel) */}
        <ProjectInquirySection />

        {/* [05] Service Section (6 Motion Disciplines & Bento Grid) */}
        <ServicesBentoSection />

        {/* [06] Interactive Demo / Motion Easing Playground */}
        <MotionPlaygroundSection />

        {/* [07] Project / Portfolio Showcase Section */}
        <WorksSection />

        {/* [08] Comparison Matrix Section */}
        <ComparisonMatrixSection />

        {/* [09] Mid-Page CTA Section (Conversion Acceleration Bridge) */}
        <MidPageCTASection />

        {/* [10] Our Development / Production Process (5-Phase Roadmap) */}
        <ProcessSection />

        {/* [11] Technology We Work With (Adobe Creative Cloud Deep-Dive) */}
        <CreativeToolsSection />

        {/* [12] Industries We Serve (Specialized Vertical Markets) */}
        <IndustriesSection />

        {/* [13] Testimonial Section (Executive Reviews & Verified Trust) */}
        <TestimonialsSection />

        {/* [14] FAQ Section (High-Objection Dissolution with Schema.org JSON-LD) */}
        <FAQSection />

        {/* [15] Final CTA Section (Post-FAQ Closing Conversion Gateway) */}
        <FinalCTASection />
      </div>

      {/* Universal Footer with Return Gateway */}
      <Footer />
    </main>
  );
}
