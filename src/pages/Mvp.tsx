
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Lightbulb, Palette, Code, Search, Rocket, ArrowRight, CalendarCheck } from 'lucide-react';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Mvp = () => {
  const isMobile = useIsMobile();
  
  const steps = [
    {
      number: 1,
      title: "Concept & Scoping",
      description: "Define features, user flows & MVP scope",
      icon: Lightbulb,
    },
    {
      number: 2,
      title: "UI/UX Design",
      description: "Build sleek, responsive UI that fits the market",
      icon: Palette,
    },
    {
      number: 3,
      title: "MVP Development",
      description: "Full dev with Auth, Payments, RLS, secure APIs",
      icon: Code,
    },
    {
      number: 4,
      title: "SEO & Launch Prep",
      description: "Ensure visibility, fast performance & SEO meta setup",
      icon: Search,
    },
    {
      number: 5,
      title: "Go Live!",
      description: "Deploy to production + guide you to first users",
      icon: Rocket,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-space overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.1),transparent_70%)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Got an Idea? We'll Build Your MVP in <span className="text-neon">3 Weeks</span> 🚀
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                From concept to product – including Auth, Payments, SEO, and Security. 
                <br className="hidden md:block" /> Launch confidently.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  glow={true}
                  className="font-medium"
                >
                  Book a Meeting
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-16 px-4 relative">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                We don't just code. <span className="text-neon">We build launch-ready products.</span>
              </h2>
            </div>
          </div>
        </section>
        
        {/* 5-Step MVP Process */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="absolute top-1/3 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
                OUR PROCESS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🛠️ 5-Step MVP Process
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Our proven system to take your idea from concept to launched product in just 3 weeks
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="frost-container p-6 border border-white/10 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                      <step.icon className="h-8 w-8 text-neon" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">Step {step.number}</div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto frost-container p-8 md:p-10 rounded-xl border border-white/10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-neon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                  </svg>
                </div>
                <blockquote className="mb-6">
                  <p className="text-xl md:text-2xl font-medium mb-4">
                    "VIBELAUNCH turned our concept into a working MVP in just 3 weeks. The product was not only functional but beautifully designed and ready to show investors."
                  </p>
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-space-light"></div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Sarah Johnson</div>
                    <div className="text-slate-400 text-sm">Founder, TechStartup</div>
                  </div>
                </div>
                <div className="mt-8 text-neon font-medium">
                  Join 100+ founders building with us
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Bottom Section */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.1),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                3 Weeks. One Meeting. <span className="text-neon">Infinite Possibilities.</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 flex-wrap"
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  glow={true}
                  className="font-medium"
                >
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book a Meeting
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Mvp;
