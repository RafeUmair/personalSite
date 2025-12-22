import { DarkModeToggle } from "../components/DarkModeToggle";
import { GalaxyBackground } from "../components/GalaxyBackground";

export const Home = () => {
  return( 
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Background Animation */}
      <GalaxyBackground />

      {/* Menu Bar */}

      {/* Main Content */}
      <h1 className="text-4xl font-bold">Home Page</h1>

      {/* Footer */}
    </div>
  );
};
