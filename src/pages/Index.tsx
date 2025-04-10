
import React, { useState } from 'react';
import Hero from '@/components/Hero';
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
            
            {/* Reduced spacing between Hero and Integration Circles */}
            <IntegrationCircles className="mt-12 md:mt-16 mb-16 md:mb-24" />
            
            <FeatureHighlights className="mt-0 pt-0" />
            
            <AuditSection className="mb-16 md:mb-24" />
            
            <SuccessStories />

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
