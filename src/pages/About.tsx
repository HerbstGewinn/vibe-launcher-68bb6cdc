
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">About Us</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We're on a mission to help businesses launch and scale with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Our Story</h2>
              <p className="text-slate-400 mb-4">
                Founded in 2022, Vibelaunch began with a simple idea: make product launches less stressful and more successful. Our founders, having experienced the challenges of bringing products to market firsthand, set out to create a platform that would streamline the entire process.
              </p>
              <p className="text-slate-400">
                Today, we've helped over 500 companies successfully launch products that resonate with their audiences. Our team of experts brings decades of combined experience in marketing, development, and business strategy to every project.
              </p>
            </div>
            <div className="bg-space-light/20 border border-slate-800 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Team working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-space-light/20 border border-slate-800 rounded-xl hover:border-neon/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-slate-200 mb-2">Innovation</h3>
                <p className="text-slate-400">
                  We constantly push boundaries and explore new ideas to stay ahead of the curve.
                </p>
              </div>
              <div className="p-6 bg-space-light/20 border border-slate-800 rounded-xl hover:border-neon/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-slate-200 mb-2">Collaboration</h3>
                <p className="text-slate-400">
                  We believe the best results come from working together with our clients as one team.
                </p>
              </div>
              <div className="p-6 bg-space-light/20 border border-slate-800 rounded-xl hover:border-neon/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-slate-200 mb-2">Trust</h3>
                <p className="text-slate-400">
                  We build lasting relationships based on transparency, reliability, and integrity.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full border-2 border-neon">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-slate-200">Sarah Johnson</h3>
                <p className="text-neon">CEO & Co-Founder</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full border-2 border-slate-700">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-slate-200">David Chen</h3>
                <p className="text-neon">CTO & Co-Founder</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full border-2 border-slate-700">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                    alt="Elena Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-slate-200">Elena Rodriguez</h3>
                <p className="text-neon">Head of Marketing</p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full border-2 border-slate-700">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                    alt="Marcus Taylor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-slate-200">Marcus Taylor</h3>
                <p className="text-neon">Product Director</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
