import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) 
      {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
         setIsDarkMode(false);
      } 
      else 
      {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
          setIsDarkMode(true);
      }
  
  };

  return (
    <button onClick={toggleDarkMode} 
    className={cn(
      "fixed maxsm:hidden top-5 right-5 p-2 rounded-full bg-secondary/50 hover:bg-secondary/70 transition-colors z-50",
      "focus:outline-hidden"


    )}>

      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
