import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CareerJourney from '@/components/CareerJourney';
import TechStack from '@/components/TechStack';
import FeaturedProjects from '@/components/FeaturedProjects';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <InteractiveBackground />
      <div className="layout-container flex h-full grow flex-col relative z-10">
        <Header />
        <main className="flex flex-col flex-1">
          <HeroSection />
          <AboutSection />
          <CareerJourney />
          <TechStack />
          <FeaturedProjects />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
