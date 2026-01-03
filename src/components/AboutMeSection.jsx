import { Briefcase, CodeIcon, User } from "lucide-react";

export const AboutMeSection = () => {
  return (
    <section id="about-me" className="py-25 px-5 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold md:text-5xl mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I’m a <strong>Graduate Software Engineer</strong> with a strong
              interest in building user focused and well built applications. I
              enjoy working across the full stack of development and take pride
              in writing clean, maintainable code while continuously improving
              my skills.
            </p>

            <p className="text-muted-foreground">
              I'm open to <strong>opportunities</strong> where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience, please don't hesitate to{" "}
              <strong>get in touch</strong>.
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="themed-button">
                Get In Touch
              </a>

              <a href="#downloadCV" className="themed-button">
                Download CV
              </a>
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 gap-7">
            <div className="gradient-border p-6 card-hover-effect">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <CodeIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    Full Stack Development
                  </h4>
                  <p>Building scalable, responsive, and user focused applications across the full stack.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover-effect">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    Project Management
                  </h4>
                  <p>
                    Leading and managing projects end to end, using agile practices to ensure timely and effective delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover-effect">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <User className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    Team Collaboration
                  </h4>
                  <p> Collaborating effectively with cross functional teams to deliver high quality solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
