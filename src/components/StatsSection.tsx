
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Award, Code, BarChart3, Globe, Users, Lightbulb, GraduationCap } from 'lucide-react';

interface StatsSectionProps {
  className?: string;
}

const StatsSection = ({
  className
}: StatsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    countries: 0,
    success: 0
  });
  
  const stats = {
    years: 10,
    projects: 20,
    countries: 20,
    success: 92
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    
    const incrementYears = Math.ceil(stats.years / steps);
    const incrementProjects = Math.ceil(stats.projects / steps);
    const incrementCountries = Math.ceil(stats.countries / steps);
    const incrementSuccess = Math.ceil(stats.success / steps);
    
    const timer = setInterval(() => {
      setCounts(prev => {
        const newYears = Math.min(prev.years + incrementYears, stats.years);
        const newProjects = Math.min(prev.projects + incrementProjects, stats.projects);
        const newCountries = Math.min(prev.countries + incrementCountries, stats.countries);
        const newSuccess = Math.min(prev.success + incrementSuccess, stats.success);
        
        const isComplete = 
          newYears === stats.years && 
          newProjects === stats.projects && 
          newCountries === stats.countries && 
          newSuccess === stats.success;
        
        if (isComplete) {
          clearInterval(timer);
        }
        
        return {
          years: newYears,
          projects: newProjects,
          countries: newCountries,
          success: newSuccess
        };
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible, stats]);

  return (
    <div className={cn('py-20 overflow-x-hidden', className)} ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
            BY THE NUMBERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact So Far</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Vibelaunch helps you achieve your launch goals and build successful products. Years of Experience from Founders &amp; Software Devs have gone into Vibelaunch!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <motion.div 
            className="frost-container p-6 text-center backdrop-blur-sm bg-space-light/50 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300" 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              delay: 0.1,
              duration: 0.5
            }} 
            viewport={{
              once: true
            }}
          >
            <div className="h-16 w-16 rounded-full mx-auto mb-4 bg-neon/10 border border-neon/30 flex items-center justify-center">
              <Code className="h-8 w-8 text-neon" />
            </div>
            <h3 className="text-4xl font-bold text-neon mb-2">{counts.years}+</h3>
            <p className="text-slate-300">Years Coding Experience</p>
            <div className="mt-4">
              <Progress value={isVisible ? 100 : 0} className="h-1.5 bg-slate-700" />
            </div>
          </motion.div>

          <motion.div 
            className="frost-container p-6 text-center backdrop-blur-sm bg-space-light/50 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300" 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              delay: 0.2,
              duration: 0.5
            }} 
            viewport={{
              once: true
            }}
          >
            <div className="h-16 w-16 rounded-full mx-auto mb-4 bg-neon/10 border border-neon/30 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-neon" />
            </div>
            <h3 className="text-4xl font-bold text-neon mb-2">{counts.projects}+</h3>
            <p className="text-slate-300">Projects Launched</p>
            <div className="mt-4">
              <Progress value={isVisible ? 100 : 0} className="h-1.5 bg-slate-700" />
            </div>
          </motion.div>

          <motion.div 
            className="frost-container p-6 text-center backdrop-blur-sm bg-space-light/50 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300" 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              delay: 0.3,
              duration: 0.5
            }} 
            viewport={{
              once: true
            }}
          >
            <div className="h-16 w-16 rounded-full mx-auto mb-4 bg-neon/10 border border-neon/30 flex items-center justify-center">
              <Globe className="h-8 w-8 text-neon" />
            </div>
            <h3 className="text-4xl font-bold text-neon mb-2">{counts.countries}+</h3>
            <p className="text-slate-300">Countries Worldwide</p>
            <div className="mt-4">
              <Progress value={isVisible ? 100 : 0} className="h-1.5 bg-slate-700" />
            </div>
          </motion.div>

          <motion.div 
            className="frost-container p-6 text-center backdrop-blur-sm bg-space-light/50 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300" 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              delay: 0.4,
              duration: 0.5
            }} 
            viewport={{
              once: true
            }}
          >
            <div className="h-16 w-16 rounded-full mx-auto mb-4 bg-neon/10 border border-neon/30 flex items-center justify-center">
              <Award className="h-8 w-8 text-neon" />
            </div>
            <h3 className="text-4xl font-bold text-neon mb-2">{counts.success}%</h3>
            <p className="text-slate-300">Success Rate</p>
            <div className="mt-4">
              <Progress value={isVisible ? counts.success : 0} className="h-1.5 bg-slate-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
