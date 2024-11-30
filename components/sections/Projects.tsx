"use client";

import { Code2, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

const projects = [
  {
    title: "NetflixGPT",
    description: "A GPT-powered movie streaming app with TMDB API integration for real-time movie recommendations.",
    tech: ["React", "Redux Toolkit", "OpenAI API", "TMDB API", "Tailwind CSS"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "QuickEats",
    description: "Modern food ordering platform with real-time restaurant data, search, and seamless ordering experience.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "REST API"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-accent/5" id="projects">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code2 className="w-6 h-6" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}