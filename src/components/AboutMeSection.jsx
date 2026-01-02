export const AboutMeSection = () => {
  return (
    <section id="about-me" className="py-25 px-5 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold md:text-5xl mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer
            </h3>

            <p className="text-muted-foreground">
               I’m a <strong>Graduate Software Engineer</strong> with a strong interest in building user focused and well built applications. 
               I enjoy working across the full stack of development and take pride in writing clean, maintainable code while continuously improving 
               my skills.
            </p>

            <p className="text-muted-foreground">
              I'm open to <strong>opportunities</strong> where I can contribute, learn and grow. If you have a good 
              opportunity that matches my skills and experience, please don't hesitate to <strong>get in touch</strong>.
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
        </div>
      </div>
    </section>
  );
};
