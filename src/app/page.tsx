import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import SelectedWorks from "@/components/SelectedWorks";
import RoiCalculator from "@/components/RoiCalculator";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-900 selection:bg-lime-300 selection:text-neutral-950 font-sans">
      {/* 1. Sleek Navigation */}
      <Navbar />

      {/* 2. Main Hero with Centered Photo Cutout and Soft Lime Aura */}
      <Hero />

      {/* 3. Hello Statement with Strategy Pills */}
      <PhilosophySection />

      {/* 4. "Here's How It Works" 3-Step Process & Social Proof */}
      <ProcessSection />

      {/* 5. Selected Works & Case Studies 2x2 Showcase */}
      <SelectedWorks />

      {/* 6. Clean Campaign ROI Estimator */}
      <RoiCalculator />

      {/* 7. Experience & Background Timeline */}
      <ExperienceTimeline />

      {/* 8. Direct Collaboration & Contact */}
      <ContactSection />

      {/* 9. Minimal Footer */}
      <Footer />
    </div>
  );
}
