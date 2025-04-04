
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import LaunchForm from '@/components/LaunchForm';
import StrategySteps from '@/components/StrategySteps';
import SignUpForm from '@/components/SignUpForm';
import Particles from '@/components/Particles';
import SuccessStories from '@/components/SuccessStories';
import FeatureHighlights from '@/components/FeatureHighlights';
import StatsSection from '@/components/StatsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
            
            <div className="mt-0 px-4">
              <LaunchForm className="animate-fade-in" onSubmit={handleFormSubmit} />
            </div>
            
            <FeatureHighlights className="mt-16 md:mt-20" />
            
            <StatsSection />
            
            <SuccessStories />
            
            
          </>}
        
        {appState === AppState.STRATEGY && projectData && <div className="pt-16">
            <StrategySteps projectUrl={projectData.projectUrl} onComplete={handleStrategyComplete} />
          </div>}
        
        {appState === AppState.SIGNUP && <div className="pt-20">
            <div className="text-center mb-10 animate-fade-in">
              <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
                FINAL STEP
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Account</h2>
              <p className="text-slate-300 max-w-md mx-auto">
                Sign up to save your progress and continue your journey to 1000 users.
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
