
import React from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import { cn } from '@/lib/utils';
import Button from './Button';

interface HeroProps {
  className?: string;
}

const Hero = ({
  className
}: HeroProps) => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: window.innerHeight - 50,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={cn('relative min-h-[500px] md:min-h-[550px] overflow-hidden', className)}>
      <LampContainer className="w-full">
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut"
          }} 
          className="relative z-10 text-center px-4 animate-fade-in"
        >
          <motion.span 
            className="inline-block mb-2 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm" 
            initial={{
              opacity: 0,
              y: -20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              delay: 0.3,
              duration: 0.5
            }}
          >
            COMING SOON
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-3 tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent" 
            initial={{
              opacity: 0.5,
              y: 100
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            Vibecoding <span className="text-neon">from 0</span> to <span className="text-neon">1000</span> Users
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-4" 
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }} 
            transition={{
              delay: 0.8,
              duration: 0.5
            }}
          >
            Our platform helps solve all your struggles, payments, auth, security and scales your app to 1000 users.
          </motion.p>
          
          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              delay: 1,
              duration: 0.5
            }} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              glow 
              onClick={scrollToContent}
            >
              Join Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </LampContainer>
      <div id="content-section"></div>
    </section>
  );
};

export default Hero;
