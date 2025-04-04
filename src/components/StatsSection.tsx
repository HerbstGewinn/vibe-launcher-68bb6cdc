import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Award, Users, BarChart3, Target } from 'lucide-react';
interface StatsSectionProps {
  className?: string;
}
const StatsSection = ({
  className
}: StatsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    users: 0,
    projects: 0,
    countries: 0,
    success: 0
  });
  const stats = {
    users: 10000,
    projects: 5000,
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
    const incrementUsers = Math.ceil(stats.users / steps);
    const incrementProjects = Math.ceil(stats.projects / steps);
    const incrementCountries = Math.ceil(stats.countries / steps);
    const incrementSuccess = Math.ceil(stats.success / steps);
    const timer = setInterval(() => {
      setCounts(prev => {
        const newUsers = Math.min(prev.users + incrementUsers, stats.users);
        const newProjects = Math.min(prev.projects + incrementProjects, stats.projects);
        const newCountries = Math.min(prev.countries + incrementCountries, stats.countries);
        const newSuccess = Math.min(prev.success + incrementSuccess, stats.success);
        const isComplete = newUsers === stats.users && newProjects === stats.projects && newCountries === stats.countries && newSuccess === stats.success;
        if (isComplete) {
          clearInterval(timer);
        }
        return {
          users: newUsers,
          projects: newProjects,
          countries: newCountries,
          success: newSuccess
        };
      });
    }, interval);
    return () => clearInterval(timer);
  }, [isVisible, stats]);
  return <div className={cn('py-20', className)} ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
            BY THE NUMBERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact So Far</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Vibelaunch helps you achieve your launch goals and build successful products. Years of Experience from Founders &amp; Software Devs have gone into Vibelaunch !</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <motion.div className="frost-container p-6 text-center backdrop-blur-sm hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1,
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <div className="h-16 w-16 rounded-full mx-auto mb-4 bg-neon/10 border border-neon/30 flex items-center justify-center">
              <Users className="h-8 w-8 text-neon" />
            </div>
            <h3 className="text-4xl font-bold text-neon mb-2">{counts.users.toLocaleString()}+</h3>
            <p className="text-slate-300">Users Reached</p>
            <div className="mt-4">
              <Progress value={isVisible ? 100 : 0} className="h-1.5 bg-slate-700" />
            </div>
          </motion.div>

          <motion.div className="frost-container p-6 text-center backdrop-blur-sm hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <div className="h-16 w-16 rounded-full mx-auto mb-4 bg-neon/10 border border-neon/30 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-neon" />
            </div>
            <h3 className="text-4xl font-bold text-neon mb-2">{counts.projects.toLocaleString()}+</h3>
            <p className="text-slate-300">Projects Launched</p>
            <div className="mt-4">
              <Progress value={isVisible ? 100 : 0} className="h-1.5 bg-slate-700" />
            </div>
          </motion.div>

          <motion.div className="frost-container p-6 text-center backdrop-blur-sm hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <div className="h-16 w-16 rounded-full mx-auto mb-4 bg-neon/10 border border-neon/30 flex items-center justify-center">
              <Target className="h-8 w-8 text-neon" />
            </div>
            <h3 className="text-4xl font-bold text-neon mb-2">{counts.countries}+</h3>
            <p className="text-slate-300">Countries Worldwide</p>
            <div className="mt-4">
              <Progress value={isVisible ? 100 : 0} className="h-1.5 bg-slate-700" />
            </div>
          </motion.div>

          <motion.div className="frost-container p-6 text-center backdrop-blur-sm hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }} viewport={{
          once: true
        }}>
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
    </div>;
};
export default StatsSection;