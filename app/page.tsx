import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/sections/Experience"), {
  loading: () => <div className="py-20 animate-pulse bg-accent/5" />,
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <div className="py-20 animate-pulse" />,
});

const Education = dynamic(() => import("@/components/sections/Education"), {
  loading: () => <div className="py-20 animate-pulse bg-accent/5" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="py-20 animate-pulse" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="py-2 border-t">
      </footer>
    </main>
  );
}