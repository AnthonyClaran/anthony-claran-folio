
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Anthony Claran | Développeur Full Stack & Graphic Designer";
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-gray-200 overflow-x-hidden luxury-pattern">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-gradient-radial from-amber-900/10 via-transparent to-transparent"></div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
