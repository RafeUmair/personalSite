import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NextReads",
    description:
    "A full stack book discovery platform. Built with a Spring Boot REST API and a React frontend, it aggregates book data from the OpenLibrary API, curates a live literary news feed from multiple RSS sources, and delivers AI powered recommendations via Groq (LLaMA 3.1). This is backed by Firebase Auth and Firestore for user libraries and to support a community activity feed.",
    images: [
      { src: "/projects/NextReadsHomePage.png", caption: "NextReads Home Page" },
      { src: "/projects/NextReadsDiscovery.png", caption: "Book Discovery" },
      { src: "/projects/NextReadsMyBooks.png", caption: "My Books" },
      { src: "/projects/NextReadsCommunity.png", caption: "Community" },
      { src: "/projects/NextReadsAiChatbot.png", caption: "AI Chatbot" },
    ],
    tags: ["Spring Boot", "React", "Tailwind CSS", "Firebase Auth", "Docker", "Groq (LLaMA 3.1)"],
    demoLink: "https://next-read-phi.vercel.app/",
    repoLink: "https://github.com/RafeUmair/nextRead",
    apiLink: "https://nextread-6l8e.onrender.com/",
  },
  {
    id: 2,
    title: "EduResource",
    description:
     "A full stack educational resource lending system developed for Curtin University's School of Education. The platform includes separate web applications for administrators and students, as well as a dedicated iPad app for tablet based student access. Students can browse, reserve, and loan educational resources, while administrators can manage inventory, users, and loans across the system.",
    images: [
      { src: "/projects/EduResourceAdminHome.png", caption: "Admin-Web app (Home Page | React)" },
      { src: "/projects/EduResourceLoginPage.png", caption: "Student-Web app (Login Page | React)" },
      { src: "/projects/EduResourceMobileApp.png", caption: "Mobile-Ipad app (Home Page | Flutter)" },
    ],
    tags: ["React", "Node.js", "Express", "Flutter"],
    demoLink:
      "https://lending-library-admin-web-fe-capdk.ondigitalocean.app/",
    repoLink:
      "https://bitbucket.org/curtincomputingprojects/2024-22-eduresource/src/main/",
  },
  {
    id: 3,
    title: "Houser",
    description:
    "A Melbourne property price predictor powered by machine learning. Uses a Random Forest model trained on real housing data to estimate prices based on features such as suburb, land size and number of bedrooms.",
    images: [
      { src: "/projects/HousePriceHome.png", caption: "Houser Home Page" },
      { src: "/projects/HousePriceValuation.png", caption: "House Valuation Results" },
      { src: "/projects/HousePriceMap.png", caption: "Price map visualization" },
    ],
    tags: ["React", "FastAPI", "Python", "scikit-learn", "Tailwind CSS", "Leaflet"],
    demoLink: "https://house-market-predictor.vercel.app/",
    repoLink: "https://github.com/RafeUmair/houseMarketPredictor",
    apiLink: "https://housemarketpredictor.onrender.com"
  }
];

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
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

      {images[index].caption && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-md text-sm">
          {images[index].caption}
        </div>
      )}

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
              className="bg-card rounded-xl overflow-hidden flex flex-col md:flex-row border border-border 
                        hover:border-primary/60 transition-colors"
            >

              <div className="md:w-2/3 w-full h-80 md:h-auto bg-black/5">
                {project.images.length > 0 ? (
                  <ImageCarousel images={project.images} />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>

              <div className="md:w-1/3 w-full p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-3xl font-semibold">{project.title}</h3>
                  {project.inDevelopment && (
                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 border border-yellow-500/40 rounded-full text-xs font-medium whitespace-nowrap">
                      In Development
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/40 text-secondary-foreground rounded-full text-xs font-medium text-center border border-border whitespace-nowrap"
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

                  {project.apiLink && (
                    <a
                      href={project.apiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="themed-button flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      API (Backend)
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
