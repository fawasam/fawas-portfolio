import Header from "@/components/Header";
import Metrics from "@/components/Metrics";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsScroller from "@/components/SkillsScroller";
import Connect from "@/components/Connect";
import OffScreenGallery from "@/components/OffScreenGallery";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="w-full max-w-[620px] mx-auto px-5 sm:px-6 py-16 sm:py-24 space-y-12">
      <Header />
      <Metrics />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsScroller />
      <Connect />
      <OffScreenGallery />
      <SiteFooter />
    </main>
  );
}
