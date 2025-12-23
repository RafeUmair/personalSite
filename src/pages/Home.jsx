import { DarkModeToggle } from "../components/DarkModeToggle";
import { GalaxyBackground } from "../components/GalaxyBackground";
import { NavBar } from "../components/NavBar";

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

      {/* Footer */}
    </div>
  );
};
