import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorksSection } from "@/components/WorksSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink-primary flex flex-col justify-between selection:bg-accent selection:text-white">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
        <WorksSection />
        <ProcessSection />
        <ExperienceSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
