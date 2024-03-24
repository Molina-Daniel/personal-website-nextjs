"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "react js",
    image: "/work/3.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
  {
    name: "Solstice Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "react js",
    image: "/work/4.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
  {
    name: "Lumina Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "next js",
    image: "/work/2.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
  {
    name: "Evolve Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "next js",
    image: "/work/1.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
  {
    name: "Ignite Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "next js",
    image: "/work/3.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
  {
    name: "Envision Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "next js",
    image: "/work/4.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
  {
    name: "Serenity Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "fullstack",
    image: "/work/2.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
  {
    name: "Nova Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "fullstack",
    image: "/work/1.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
  {
    name: "Zenith Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    category: "fullstack",
    image: "/work/2.png",
    link: "/",
    github: "https://github.com/molina-daniel",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...Array.from(new Set(projectData.map((project) => project.category))),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
