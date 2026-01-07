import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EduResource",
    description:
  "A full stack project featuring two web apps; one for administrators and one for students. Plus a mobile Ipad app for student access on tablets. Students can loan educational resources, while administrators can manage resources, users and loans across the system.",
    images: [
      { src: "/projects/EduResourceAdminHome.png", caption: "Admin-Web app (Home Page)" },
      { src: "/projects/EduResourceLoginPage.png", caption: "Student-Web app (Login Page)" },
      { src: "/projects/EduResourceMobileApp.png", caption: "Mobile-Ipad app (Home Page)" },
    ],
    tags: ["React", "Node.js", "Express", "Flutter"],
    demoLink:
      "https://lending-library-admin-web-fe-capdk.ondigitalocean.app/",
    repoLink:
      "https://bitbucket.org/curtincomputingprojects/2024-22-eduresource/src/main/",
  },
];

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-full bg-black/5">
      <img
        src={images[index].src}
        alt={images[index].caption}
        className="w-full h-full object-contain"
        decoding="async"
        loading="lazy"
      />

      {/* Caption */}
      {images[index].caption && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-md text-sm">
          {images[index].caption}
        </div>
      )}

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="themed-button absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center p-2"
          >
            <ChevronLeft size={20} className="text-primary-foreground" />
          </button>

          <button
            onClick={next}
            className="themed-button absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center p-2"
          >
            <ChevronRight size={20} className="text-primary-foreground" />
          </button>
        </>
      )}
    </div>
  );
};

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="text-4xl font-bold md:text-5xl mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="flex flex-col gap-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden card-hover flex flex-col md:flex-row"
            >

              <div className="md:w-2/3 w-full h-80 md:h-auto bg-black/5">
                <ImageCarousel images={project.images} />
              </div>

              <div className="md:w-1/3 w-full p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold mb-6">{project.title}</h3>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="flex justify-center gap-3 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary/40 text-secondary-foreground rounded-full text-sm font-medium text-center"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 items-center">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="themed-button flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Live Site
                    </a>
                  )}

                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="themed-button flex items-center gap-2"
                    >
                      <Github size={16} />
                      View Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
