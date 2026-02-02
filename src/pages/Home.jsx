import { DarkModeToggle } from "../components/DarkModeToggle";
import { GalaxyBackground } from "../components/GalaxyBackground";
import { NavBar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return( 
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Background Animation */}
      <GalaxyBackground />

      {/* Menu Bar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutMeSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        
      </main>

    
      {/* Footer */}
      <Footer/>
    </div>
  );
};
