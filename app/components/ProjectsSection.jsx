import React from "react";
import styles from "./ProjectsSection.module.css";
import skill1 from "../../public/skills (1).jpg";
import skill2 from "../../public/skills (2).jpg";
import skill3 from "../../public/skills (3).jpg";
import skill4 from "../../public/skills (4).jpg";
import Image from "next/image";
export default function ProjectsSection() {
  const projects = [
    {
      id: "01",
      category: "UI/UX DESIGN",
      title: "Fintech App Redesign",
      subtitle: "UI/UX, Mobile App",
      description:
        "Complete overhaul of a financial services app, improving user flow and visual language. Achieved 40% increase in user engagement.",
      image: skill1,
    },
    {
      id: "02",
      category: "BRANDING",
      title: "Apex Architects Identity",
      subtitle: "Branding, Identity",
      description:
        "Developed a strong, modern visual identity for a leading architecture firm. Includes logo, stationery, and brand guidelines.",
      image: skill2,
    },
    {
      id: "03",
      category: "WEB DESIGN",
      title: "E-commerce Platform for 'Aura'",
      subtitle: "Web Design, E-commerce",
      description:
        "Designed a clean and engaging online store for a sustainable fashion brand. Focus on product showcase and checkout.",
      image: skill3,
    },
    {
      id: "04",
      category: "WEB DESIGN",
      title: "E-commerce Platform",
      subtitle: "Web Design, E-commerce",
      description:
        "Designed a clean and engaging online store for a sustainable fashion brand. Focus on product showcase and checkout.",
      image: skill4,
    },
    {
      id: "05",
      category: "WEB DESIGN",
      title: "E-commerce Platform",
      subtitle: "Web Design, E-commerce",
      description:
        "Designed a clean and engaging online store for a sustainable fashion brand. Focus on product showcase and checkout.",
      image: skill4,
    },
  ];

  return (
    <section className="py-4 px-8 min-h-screen" id="projects">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16 -tracking-tight">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} bg-[rgba(20,20,20,0.8)] rounded-3xl border border-white/10 flex flex-col h-full`}
            >
              <div className="flex justify-between items-start p-8 pb-4">
                <span className="text-7xl lg:text-8xl font-black text-[var(--green)] leading-none -tracking-wider">
                  {project.id}
                </span>
                <span className="text-[0.7rem] font-bold tracking-widest text-[var(--green)] uppercase mt-2">
                  {project.category}
                </span>
              </div>

              <div className="px-8 mb-6 flex-grow flex items-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                />
              </div>

              <div className="px-8 pb-8">
                <h3 className="text-2xl lg:text-3xl font-extrabold mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-[rgba(237,237,237,0.7)] mb-3 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-[rgba(237,237,237,0.8)] mb-6 min-h-[4.5rem]">
                  {project.description}
                </p>

                <button className={styles.viewButton}>VIEW PROJECT</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
