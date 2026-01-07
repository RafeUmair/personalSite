import { useState } from "react";

const skills = [

    //Frontend skills
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },
    { name: "TypeScript", level: 70, category: "Frontend" },

    //Tools and Platforms
    { name: "Git/GitHub", level: 90, category: "Tools & Platforms" },
    { name: "VS Code", level: 95, category: "Tools & Platforms" },
    { name: "Figma", level: 75, category: "Tools & Platforms" },
    { name: "Docker", level: 85, category: "Tools & Platforms" },
    { name: "Jira", level: 85, category: "Tools & Platforms" },

    //Backend skills
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "Django", level: 65, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "GraphQL", level: 50, category: "Backend" },
    { name:"Mobile Application Development", level: 90, category: "Backend"},

    //Soft skills
    { name: "Customer Service", level: 95, category: "Soft Skills" },
    { name: "Communication", level: 85, category: "Soft Skills" },
    { name: "Problem Solving", level: 90, category: "Soft Skills" },
    { name: "Teamwork", level: 90, category: "Soft Skills" },
    { name: "Adaptability", level: 85, category: "Soft Skills" },
    { name: "Time Management", level: 90, category: "Soft Skills" },

    //Computer Science Fundamentals
    { name: "Data Structures & Algorithms", level: 75, category: "Computer Science Fundamentals" },
    { name: "Database Systems", level: 75, category: "Computer Science Fundamentals" },
    { name: "Operating Systems", level: 70, category: "Computer Science Fundamentals" },
    { name: "Distributed Systems", level: 85, category: "Computer Science Fundamentals" },
    { name: "Networking", level: 85, category: "Computer Science Fundamentals" },
    { name: "Software Engineering Testing", level: 80, category: "Computer Science Fundamentals" },

];

const skillsByCategory = {
  "Frontend": skills.filter(skill => skill.category === "Frontend"),
  "Backend": skills.filter(skill => skill.category === "Backend"),
  "Tools & Platforms": skills.filter(skill => skill.category === "Tools & Platforms"),
  "Soft Skills": skills.filter(skill => skill.category === "Soft Skills"),
  "Computer Science Fundamentals": skills.filter(skill => skill.category === "Computer Science Fundamentals"),
};

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-5">
        <h2 className="text-4xl font-bold md:text-5xl mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Frontend", "Backend", "Tools & Platforms", "Soft Skills", "Computer Science Fundamentals"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary/40 text-secondary-foreground hover:bg-secondary/60"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(activeCategory === "All" ? skills : skillsByCategory[activeCategory]).map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-secondary/40 h-3 overflow-hidden rounded-full">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};