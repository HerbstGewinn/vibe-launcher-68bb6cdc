
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

const Pricing = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background particles */}
      <Particles quantity={30} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Transparent Pricing</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="border border-slate-800 rounded-xl bg-space-light/30 backdrop-blur-sm p-8 flex flex-col transition-transform hover:scale-105 hover:border-neon/30">
              <h3 className="text-xl font-medium text-slate-200 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <p className="text-slate-400 mb-6">Perfect for small businesses and startups.</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Up to 5 team members
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  20GB storage
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic analytics
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 support
                </li>
              </ul>
              <button className="w-full py-3 bg-neon/10 border border-neon/30 text-neon rounded-md hover:bg-neon/20 transition-colors font-medium">
                Get Started
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="border border-neon rounded-xl bg-space-light/40 backdrop-blur-sm p-8 flex flex-col transition-transform hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon text-space px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-medium text-slate-200 mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$79</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <p className="text-slate-400 mb-6">For growing businesses that need more.</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Up to 20 team members
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  100GB storage
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  API access
                </li>
              </ul>
              <button className="w-full py-3 bg-neon text-space rounded-md hover:bg-neon/90 transition-colors font-medium">
                Get Started
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="border border-slate-800 rounded-xl bg-space-light/30 backdrop-blur-sm p-8 flex flex-col transition-transform hover:scale-105 hover:border-neon/30">
              <h3 className="text-xl font-medium text-slate-200 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <p className="text-slate-400 mb-6">For large organizations with advanced needs.</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited team members
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited storage
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom analytics
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dedicated account manager
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-neon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom integrations
                </li>
              </ul>
              <button className="w-full py-3 bg-neon/10 border border-neon/30 text-neon rounded-md hover:bg-neon/20 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
