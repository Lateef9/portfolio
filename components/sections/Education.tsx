"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

const education = [
  {
    degree: "B.Tech - ECE with Specialization in Internet of Things and Sensors",
    school: "Vellore Institute of Technology, Vellore, India",
    period: "Jul 2018 - May 2022",
    description: "Graduated with strong computer engineering skills, achieving a GPA of 8.27/10.0.",
  },
  {
    degree: "Intermediate",
    school: "Bhashyam Intermediate College, Guntur, India",
    period: "Jul 2016 - May 2018",
    description: "Excelled in academics with a score of 940/1000, laying a solid foundation in science and mathematics.",
  },
];


export default function Education() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" /> Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-primary mb-2">{edu.school}</p>
                <p className="text-muted-foreground text-sm mb-2">{edu.period}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}