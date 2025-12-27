import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  return (
    <section id="home"
     className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-90 animate-fade-in">Hello, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Rafe Umair</span>
                </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 max-auto animate-fade-in-delay-4">
                " Welcome to my personal website! I'm a graduate software engineer who is passionate 
                about building reliable, well designed software solutions and continuously improving 
                my skills while learning new technologies. This website highlights my journey, the 
                projects I've built, and the skills I'm continuing to develop as I move forward in my career."
              </p>

              <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="themed-button">
                  View My Work
                </a>
              </div>
            </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center opacity-70 animate-bounce">
      <span className="text-small text-muted foreground mb-3"> Scroll </span>
      <ArrowDown className="w-6 h-6 mt-2 text-primary" />
      </div>
    </section>
  );
};
