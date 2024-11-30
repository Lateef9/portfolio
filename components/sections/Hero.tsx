"use client";

import { Github, Linkedin, Mail, ChevronDown, Download, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-center relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[ping_3s_ease-in-out_infinite]" />
          <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-[ping_3s_ease-in-out_infinite_500ms]" />
          
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/80 to-primary/20 animate-gradient">
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 className="w-12 h-12 text-white" />
            </div>
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          LATEEF SHAIK
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Developer
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <div className="flex justify-center gap-4">
            <SocialLink href="https://github.com/yourusername" icon={Github} />
            <SocialLink href="https://linkedin.com/in/yourusername" icon={Linkedin} />
            <SocialLink href="mailto:shaiklateef7761@gmail.com" icon={Mail} />
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          Scroll Down <ChevronDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, onClick }: { href: string; icon: any; onClick?: () => void }) {
  return (
    <motion.a 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      onClick={onClick}
      className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );
}