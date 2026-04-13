import HeroSlider from '@/components/sections/HeroSlider/HeroSlider';
import InspirationSection from '@/components/sections/InspirationSection/InspirationSection';
import AboutSection from '@/components/sections/AboutSection/AboutSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection/HowItWorksSection';
import GettingStartedSection from '@/components/sections/GettingStartedSection/GettingStartedSection';
import ProjectsSection from '@/components/sections/ProjectsSection/ProjectsSection';
import LetsBeginSection from '@/components/sections/LetsBeginSection/LetsBeginSection';
import ProofBar from '@/components/sections/ProofBar/ProofBar';
import { heroSlides } from '@/data/slides';

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={heroSlides} />
      <InspirationSection />
      <AboutSection />
      <HowItWorksSection />
      <ProjectsSection />
      <GettingStartedSection />
      <LetsBeginSection />
      <ProofBar />
    </>
  );
}
