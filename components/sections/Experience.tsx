"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

const experiences = [
  {
    title: "Software Developer",
    company: "ITSS Pvt Ltd",
    period: "Mar 2023 - Present",
    location: "Bangalore, India",
    description: "Streamlined job application processes using React and Redux, improving efficiency by 20%. Developed a platform for Trade Finance operations, reducing processing times.",
  },
  {
    title: "Associate Product Engineer",
    company: "Temenos India Pvt Ltd",
    period: "Feb 2022 - Feb 2023",
    location: "Hyderabad, India",
    description: "Designed client-side components for financial software. Improved transaction handling and reduced error rates by 10% using MVC architecture and Redux.",
  }
];

export default function Experience() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="w-6 h-6" /> Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/20" />
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground mb-2">{exp.company} • {exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}