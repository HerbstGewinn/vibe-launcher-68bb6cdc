
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import LaunchForm from '@/components/LaunchForm';
import StrategySteps from '@/components/StrategySteps';
import SignUpForm from '@/components/SignUpForm';
import Particles from '@/components/Particles';
import SuccessStories from '@/components/SuccessStories';
import FeatureHighlights from '@/components/FeatureHighlights';
import StatsSection from '@/components/StatsSection';
import { toast } from 'sonner';

enum AppState {
  INITIAL,
  STRATEGY,
  SIGNUP
}

const Index = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INITIAL);
  const [projectData, setProjectData] = useState<{ projectUrl: string; description: string } | null>(null);

  const handleFormSubmit = (data: { projectUrl: string; description: string }) => {
    setProjectData(data);
    setAppState(AppState.STRATEGY);
    
    // Show toast notification
    toast.success('Strategy generated successfully!', {
      description: 'Follow these steps to launch your project.',
    });
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStrategyComplete = () => {
    setAppState(AppState.SIGNUP);
    
    // Show toast notification
    toast.success('All steps completed!', {
      description: 'Create an account to save your progress.',
    });
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background particles */}
      <Particles quantity={40} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      {/* Navigation links */}
      <nav className="absolute top-0 right-0 z-50 px-6 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-slate-300 hover:text-neon transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-slate-300 hover:text-neon transition-colors">About</Link>
          </li>
          <li>
            <Link to="/pricing" className="text-slate-300 hover:text-neon transition-colors">Pricing</Link>
          </li>
          <li>
            <Link to="/integrations" className="text-slate-300 hover:text-neon transition-colors">Integrations</Link>
          </li>
        </ul>
      </nav>
      
      {/* Main content */}
      <main className="relative pb-20">
        {appState === AppState.INITIAL && (
          <>
            <Hero />
            
            <div className="mt-8 px-4">
              <LaunchForm 
                className="animate-fade-in" 
                onSubmit={handleFormSubmit} 
              />
            </div>
            
            <FeatureHighlights className="mt-20" />
            
            <StatsSection />
            
            <SuccessStories />
            
            <div className="mt-20 text-center">
              <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">How Vibelaunch Works</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="frost-container p-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neon/10 border border-neon/30 mb-4 mx-auto">
                      <span className="text-neon font-medium">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Enter Your Project</h3>
                    <p className="text-slate-300 text-sm">Add your project URL and brief description to get started.</p>
                  </div>
                  
                  <div className="frost-container p-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neon/10 border border-neon/30 mb-4 mx-auto">
                      <span className="text-neon font-medium">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Follow Your Strategy</h3>
                    <p className="text-slate-300 text-sm">Complete personalized steps to optimize your launch process.</p>
                  </div>
                  
                  <div className="frost-container p-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neon/10 border border-neon/30 mb-4 mx-auto">
                      <span className="text-neon font-medium">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Grow Your Users</h3>
                    <p className="text-slate-300 text-sm">Implement effective tactics to attract and retain your first 1000 users.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {appState === AppState.STRATEGY && projectData && (
          <div className="pt-16">
            <StrategySteps 
              projectUrl={projectData.projectUrl} 
              onComplete={handleStrategyComplete} 
            />
          </div>
        )}
        
        {appState === AppState.SIGNUP && (
          <div className="pt-20">
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
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-neon font-semibold">Vibelaunch.io</p>
              <p className="text-slate-500 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <Link to="/" className="text-slate-300 hover:text-neon transition-colors">Home</Link>
              <Link to="/about" className="text-slate-300 hover:text-neon transition-colors">About</Link>
              <Link to="/pricing" className="text-slate-300 hover:text-neon transition-colors">Pricing</Link>
              <Link to="/integrations" className="text-slate-300 hover:text-neon transition-colors">Integrations</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
