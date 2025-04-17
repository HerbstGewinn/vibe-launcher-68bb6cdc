
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Lightbulb, Palette, Code, Search, Rocket, CalendarCheck, Send, MessageSquare, Sparkles, Wand2, BarChart3, Brain, FolderOpen, GraduationCap, Instagram, Gamepad } from 'lucide-react';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const Mvp = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState('ai');
  
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
  
  const noCodeBenefits = [
    {
      icon: BarChart3,
      title: "10x the speed",
      description: "No-code solutions are fast. Build and launch your MVP product within weeks, not months."
    },
    {
      icon: Wand2,
      title: "Iterate and scale on your terms",
      description: "Pivot and adapt to your audience easily, without big back-end changes that slow you down."
    },
    {
      icon: Sparkles,
      title: "Pixel-perfect design, customized to your ideal users",
      description: "We believe products need to look and feel beautiful - with user experience always first."
    }
  ];

  const categoryTabs = [
    { id: 'ai', label: 'AI', icon: Brain, 
      content: {
        title: 'AI and machine learning apps',
        description: 'We design and develop intelligent applications with AI capabilities and machine learning models within weeks.',
        features: [
          'Natural language processing',
          'Predictive analytics',
          'Smart automation',
          'Computer vision integration',
          'Personalized recommendations'
        ],
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
      }
    },
    { id: 'directory', label: 'Directory', icon: FolderOpen,
      content: {
        title: 'Directory and listing apps',
        description: 'Build powerful directories and listing platforms for any industry with advanced search and filtering capabilities.',
        features: [
          'Custom taxonomies',
          'Advanced filtering',
          'Location-based search',
          'Vendor dashboards',
          'Membership levels'
        ],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
      }
    },
    { id: 'education', label: 'Education', icon: GraduationCap,
      content: {
        title: 'Education and e-learning apps',
        description: 'Create engaging educational platforms for online courses, student management, and interactive learning experiences.',
        features: [
          'Course management',
          'Progress tracking',
          'Interactive assignments',
          'Live virtual classrooms',
          'Student assessments'
        ],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
      }
    },
    { id: 'social', label: 'Social Media', icon: Instagram,
      content: {
        title: 'Social media and community apps',
        description: 'Develop engaging social platforms that connect users and create vibrant online communities with powerful features.',
        features: [
          'User profiles',
          'Activity feeds',
          'Direct messaging',
          'Content sharing',
          'Moderation tools'
        ],
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868'
      }
    },
    { id: 'games', label: 'Web Games', icon: Gamepad,
      content: {
        title: 'Web games and interactive apps',
        description: 'Build engaging browser-based games and interactive applications that captivate and entertain users.',
        features: [
          'Multi-player support',
          'Real-time interactions',
          'Leaderboards',
          'Achievement systems',
          'In-game economies'
        ],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
      }
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent!', {
      description: "We'll get back to you within 24 hours",
    });
  };

  // Memoize the calendar URL to prevent unnecessary re-renders
  const calendlyUrl = "https://calendly.com/herbst-laurin/30min";

  // Optimized button click handler
  const handleCalendlyClick = useCallback(() => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  }, [calendlyUrl]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-space overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.1),transparent_70%)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Turn Your Idea Into an MVP in <span className="text-neon">3 Weeks</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-300 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                From concept to market-ready product – including Authentication, 
                <br className="hidden md:block" /> Payments, SEO, and Security. Launch with confidence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  as="a"
                  href={calendlyUrl}
                  variant="primary" 
                  size="lg" 
                  glow={true}
                  className="font-semibold text-base shadow-neon-lg px-10 py-7 hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book a Meeting
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why No-Code Section */}
        <section className="py-16 px-4 relative">
          <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Why choose us for your <span className="text-neon">MVP?</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {noCodeBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-space-light/50 backdrop-blur-sm border border-white/10 rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section with Tabs */}
        <section className="py-20 md:py-28 px-4 relative">
          <div className="absolute top-1/3 right-1/4 w-1/4 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.07),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Build your MVP <span className="text-neon">faster than ever</span>
              </motion.h2>
              <motion.p
                className="text-lg text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Coding from scratch is slow, clunky, and costly. We use the power of no-code to 
                develop product MVPs in a fraction of time, no limits.
              </motion.p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="ai" className="w-full" onValueChange={setActiveCategory}>
                <TabsList className="flex justify-center border-b border-white/10 bg-transparent h-auto mb-12 w-full overflow-x-auto">
                  {categoryTabs.map((tab) => (
                    <TabsTrigger 
                      key={tab.id} 
                      value={tab.id}
                      className={cn(
                        "pb-4 rounded-none border-b-2 border-transparent data-[state=active]:border-neon data-[state=active]:text-neon text-lg font-medium px-6",
                        "bg-transparent hover:text-neon transition-colors duration-200"
                      )}
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categoryTabs.map((tab) => (
                  <TabsContent 
                    key={tab.id} 
                    value={tab.id}
                    className="mt-0 animate-fade-in"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-3xl font-bold mb-4">{tab.content.title}</h3>
                        <p className="text-slate-300 mb-8">{tab.content.description}</p>
                        
                        <h4 className="text-xl font-semibold mb-4 text-neon">Common features</h4>
                        <ul className="space-y-3">
                          {tab.content.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-3 mt-1 text-neon">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-12">
                          <Button 
                            as="a"
                            href={calendlyUrl}
                            variant="primary"
                            size="md"
                            glow={true}
                            className="font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CalendarCheck className="mr-2 h-4 w-4" />
                            Schedule a consultation
                          </Button>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-full min-h-[300px] lg:min-h-[400px]"
                      >
                        <div className="rounded-lg overflow-hidden h-full w-full border border-white/10">
                          <img 
                            src={tab.content.image} 
                            alt={tab.content.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-lg"></div>
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                          <tab.icon className="h-6 w-6 text-neon" />
                        </div>
                      </motion.div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* 5-Step MVP Process */}
        <section className="py-20 md:py-28 px-4 relative">
          <div className="absolute top-1/3 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
                OUR PROCESS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The 5-Step MVP Development Process
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Our proven system to take your idea from concept to launched product in just 3 weeks
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <Card
                  key={step.number}
                  className="bg-space-light/50 border-white/10 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-6">
                    <motion.div
                      className="h-full flex flex-col items-center text-center"
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 md:py-28 px-4 relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-space-light/30 p-8 md:p-10 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-neon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                  </svg>
                </div>
                <blockquote className="mb-8">
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
        <section className="py-20 md:py-28 px-4 relative">
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.1),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-10"
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
                className="inline-block"
              >
                <Button 
                  as="a"
                  href={calendlyUrl}
                  variant="primary" 
                  size="lg" 
                  glow={true}
                  className="font-semibold text-base shadow-neon-lg px-12 py-7 hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
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
