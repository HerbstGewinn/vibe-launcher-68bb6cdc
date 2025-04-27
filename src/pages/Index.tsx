import React, { useState } from 'react';
import Hero from '@/components/Hero';
import VideoDemo from '@/components/VideoDemo';
import StrategySteps from '@/components/StrategySteps';
import SignUpForm from '@/components/SignUpForm';
import Particles from '@/components/Particles';
import SuccessStories from '@/components/SuccessStories';
import FeatureHighlights from '@/components/FeatureHighlights';
import AuditSection from '@/components/AuditSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IntegrationCircles from '@/components/IntegrationCircles';
import FAQ from '@/components/FAQ';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Award, Lightbulb, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import PricingSection from '@/components/PricingSection';

enum AppState {
  INITIAL,
  STRATEGY,
  SIGNUP,
}

const Index = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INITIAL);
  const [projectData, setProjectData] = useState<{
    projectUrl: string;
    description: string;
  } | null>(null);
  const navigate = useNavigate();

  const handleFormSubmit = (data: {
    projectUrl: string;
    description: string;
  }) => {
    setProjectData(data);
    setAppState(AppState.STRATEGY);

    // Show toast notification
    toast.success('Thanks for joining our waitlist!', {
      description: 'We\'ll notify you when we launch.'
    });

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleStrategyComplete = () => {
    // Option 1: Go to signup form
    setAppState(AppState.SIGNUP);

    // Show toast notification
    toast.success('All steps completed!', {
      description: 'Create an account to save your progress.'
    });

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Option 2: Could also redirect to dashboard
    // navigate('/dashboard');
  };

  return <div className="relative min-h-screen">
      {/* Background particles */}
      <Particles quantity={40} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative pb-20 pt-16 md:pt-20">
        {appState === AppState.INITIAL && <>
            <Hero />
            <VideoDemo />
            <IntegrationCircles className="mt-12 md:mt-16 mb-16 md:mb-24" />
            <FeatureHighlights className="mt-0 pt-0" />
            <AuditSection className="mb-16 md:mb-24" />
            
            {/* About Us Section */}
            <section className="py-16 relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(10,255,255,0.08),transparent_70%)]"></div>
              <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                  <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
                    OUR STORY
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">From Code to Community</h2>
                  <p className="text-slate-300 max-w-2xl mx-auto">
                    How helping fellow coders sparked a mission to bridge the gap between building and belonging.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <motion.div 
                    className="frost-container p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-slate-300 mb-4">
                      At Vibelaunch, we empower vibe coders with the clarity and strategy needed to find your first users and build lasting momentum.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-neon" />
                        <span className="text-sm">Community</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-neon" />
                        <span className="text-sm">Clarity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-neon" />
                        <span className="text-sm">Strategy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-neon" />
                        <span className="text-sm">Reach</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="frost-container p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Our Journey</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-space border border-neon flex items-center justify-center flex-shrink-0">
                          <span className="text-neon font-semibold">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Stack Overflow Days</h4>
                          <p className="text-sm text-slate-300">
                            Building required sheer persistence piecing together solutions from scattered forums.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-space border border-neon flex items-center justify-center flex-shrink-0">
                          <span className="text-neon font-semibold">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Vibelaunch</h4>
                          <p className="text-sm text-slate-300">
                            The missing playbook to get your creation in front of users.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Button 
                        variant="outline" 
                        className="text-neon border-neon/50 hover:bg-neon/10"
                        onClick={() => navigate('/about')}
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
            
            <SuccessStories />
            
            {/* Add PricingSection here, right before FAQ */}
            <PricingSection className="mb-16 md:mb-24" />
            
            {/* FAQ Section */}
            <FAQ className="mt-16 md:mt-24 mb-16" />
          </>}
        
        {appState === AppState.STRATEGY && projectData && <div className="pt-16">
            <StrategySteps projectUrl={projectData.projectUrl} onComplete={handleStrategyComplete} />
          </div>}
        
        {appState === AppState.SIGNUP && <div className="pt-20">
            <div className="text-center mb-10 animate-fade-in">
              <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
                ALMOST THERE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Account</h2>
              <p className="text-slate-300 max-w-md mx-auto">
                Save your launch playbook and join the community of vibe coders building their audience.
              </p>
            </div>
            
            <SignUpForm className="animate-fade-in" />
          </div>}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>;
};

export default Index;
