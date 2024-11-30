"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

const skills = [
  { title: "Frontend", skills: "React, Next.js, JavaScript" },
  { title: "UI/UX", skills: "Tailwind, Figma, Framer" },
  { title: "Backend", skills: "Node.js, Express, MongoDB, Supabase" },
  { title: "LowCode", skills: "Wordpress,Appian " },
];

export function About() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <User className="w-6 h-6" /> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Developer with 3 years of experience building modern web applications. 
                I specialize in React, Next.js, and Javascript, with a strong focus on creating performant and 
                accessible user interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I’m not coding, you’ll usually find me exploring new ideas, learning something creative, or just enjoying some downtime.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-card rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.skills}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}