
import React from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import { cn } from '@/lib/utils';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight - 50,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={cn('relative min-h-[90vh] overflow-hidden', className)}>
      <LampContainer className="w-full min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="relative z-10 text-center px-4 animate-fade-in"
        >
          <motion.span 
            className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            VIBELAUNCH.IO
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            From <span className="text-neon">Vibe Coding</span> to <span className="text-neon">1000 Users</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Launch your project and transform it into a product people love. Our strategic approach helps you build traction and grow your user base.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" glow>Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
          
          <motion.button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-neon transition-colors flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            onClick={scrollToContent}
          >
            <span className="text-sm">Scroll to discover</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </LampContainer>
      <div id="content-section"></div>
    </section>
  );
};

export default Hero;
