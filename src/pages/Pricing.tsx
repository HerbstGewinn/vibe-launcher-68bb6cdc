
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import Particles from '@/components/Particles';
import { Slider } from '@/components/ui/slider';
import { CheckCircle2, HelpCircle, X } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

type PlanFeature = {
  name: string;
  included: boolean | 'partial';
  description?: string;
};

type PricingPlan = {
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  primaryCTA: string;
  secondaryCTA?: string;
  popular?: boolean;
};

const Pricing = () => {
  const [userCount, setUserCount] = useState(1);
  
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: 29,
      description: 'Everything you need to launch your first product',
      features: [
        { name: 'Launch Strategy Generator', included: true, description: 'Generate a customized launch strategy for your product' },
        { name: 'Interactive Progress Tracking', included: true, description: 'Track your progress with interactive checklists' },
        { name: 'Basic Analytics', included: true, description: 'Track page views and basic user metrics' },
        { name: 'Social Media Integration', included: 'partial', description: 'Connect to major platforms for sharing' },
        { name: 'Email Marketing Tools', included: false, description: 'Build and manage email campaigns' },
        { name: 'Team Collaboration', included: false, description: 'Work together with your team' },
        { name: 'Priority Support', included: false, description: '24/7 priority support from our team' },
      ],
      primaryCTA: 'Get Started',
      secondaryCTA: 'Learn More'
    },
    {
      name: 'Pro',
      price: 79,
      description: 'Advanced tools for serious product launches',
      features: [
        { name: 'Launch Strategy Generator', included: true, description: 'Generate a customized launch strategy for your product' },
        { name: 'Interactive Progress Tracking', included: true, description: 'Track your progress with interactive checklists' },
        { name: 'Advanced Analytics', included: true, description: 'Detailed user behavior and conversion tracking' },
        { name: 'Social Media Integration', included: true, description: 'Full integration with all major platforms' },
        { name: 'Email Marketing Tools', included: true, description: 'Build and manage sophisticated email campaigns' },
        { name: 'Team Collaboration', included: true, description: 'Work together with your team' },
        { name: 'Priority Support', included: false, description: '24/7 priority support from our team' },
      ],
      primaryCTA: 'Get Started',
      secondaryCTA: 'Learn More',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'Custom solutions for large-scale launches',
      features: [
        { name: 'Launch Strategy Generator', included: true, description: 'Generate a customized launch strategy for your product' },
        { name: 'Interactive Progress Tracking', included: true, description: 'Track your progress with interactive checklists' },
        { name: 'Advanced Analytics', included: true, description: 'Detailed user behavior and conversion tracking' },
        { name: 'Social Media Integration', included: true, description: 'Full integration with all major platforms' },
        { name: 'Email Marketing Tools', included: true, description: 'Build and manage sophisticated email campaigns' },
        { name: 'Team Collaboration', included: true, description: 'Work together with your team' },
        { name: 'Priority Support', included: true, description: '24/7 priority support from our team' },
      ],
      primaryCTA: 'Contact Us',
      secondaryCTA: 'Book a Demo'
    }
  ];
  
  const calculatePrice = (basePrice: number) => {
    if (userCount <= 1) return basePrice;
    if (userCount <= 5) return basePrice * userCount * 0.9;
    if (userCount <= 10) return basePrice * userCount * 0.85;
    return basePrice * userCount * 0.8;
  };
  
  const handleSliderChange = (value: number[]) => {
    setUserCount(value[0]);
  };
  
  return (
    <div className="relative min-h-screen pb-20">
      {/* Background particles */}
      <Particles quantity={30} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      {/* Hero section */}
      <div className="pt-20 pb-16 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Pricing Plans
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Choose the perfect plan to launch your product and grow your user base
        </motion.p>
      </div>
      
      {/* User count slider */}
      <div className="container mx-auto px-4 mb-12">
        <div className="frost-container p-6 md:p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">How many team members?</h3>
          <div className="mb-6">
            <Slider 
              defaultValue={[1]} 
              max={20} 
              min={1} 
              step={1} 
              onValueChange={handleSliderChange}
              className="neon-border"
            />
          </div>
          <div className="text-center text-2xl font-bold text-neon">
            {userCount} {userCount === 1 ? 'User' : 'Users'}
          </div>
        </div>
      </div>
      
      {/* Pricing cards */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={cn(
                'frost-container p-6 relative overflow-hidden group transition-all duration-300',
                plan.popular ? 'border-neon/60 shadow-neon' : 'hover:border-neon/40 hover:shadow-neon-sm'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-neon text-space text-xs font-semibold px-3 py-1 transform translate-x-8 translate-y-4 rotate-45">
                  Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">${Math.round(calculatePrice(plan.price))}</span>
                <span className="text-slate-400 ml-1 mb-1">/month</span>
              </div>
              <p className="text-slate-300 mb-6">{plan.description}</p>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    {feature.included === true && (
                      <CheckCircle2 className="h-5 w-5 text-neon flex-shrink-0 mt-0.5" />
                    )}
                    {feature.included === 'partial' && (
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    )}
                    {feature.included === false && (
                      <X className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="flex items-center">
                        <span className={cn(
                          'font-medium',
                          feature.included === false ? 'text-slate-500' : 'text-slate-300'
                        )}>
                          {feature.name}
                        </span>
                        
                        {feature.description && (
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <button className="ml-1.5">
                                <HelpCircle className="h-3.5 w-3.5 text-slate-500" />
                              </button>
                            </HoverCardTrigger>
                            <HoverCardContent className="frost-container border border-neon/30 bg-space-light/90 backdrop-blur-lg w-60">
                              <p className="text-xs text-slate-300">{feature.description}</p>
                            </HoverCardContent>
                          </HoverCard>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mt-auto">
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  fullWidth 
                  glow={plan.popular}
                >
                  {plan.primaryCTA}
                </Button>
                
                {plan.secondaryCTA && (
                  <Button 
                    variant="ghost" 
                    fullWidth
                  >
                    {plan.secondaryCTA}
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about our pricing and plans
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="frost-container p-6 hover:border-neon/30 hover:shadow-neon-sm transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
            <p className="text-slate-300">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
            </p>
          </div>
          
          <div className="frost-container p-6 hover:border-neon/30 hover:shadow-neon-sm transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
            <p className="text-slate-300">
              We offer a 14-day money-back guarantee for all of our plans. If you're not satisfied, just let us know.
            </p>
          </div>
          
          <div className="frost-container p-6 hover:border-neon/30 hover:shadow-neon-sm transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-slate-300">
              We accept all major credit cards, PayPal, and invoice payments for annual Enterprise plans.
            </p>
          </div>
          
          <div className="frost-container p-6 hover:border-neon/30 hover:shadow-neon-sm transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-slate-300">
              We offer a 7-day free trial for our Starter and Pro plans so you can experience the full platform before committing.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="frost-container p-8 md:p-12 text-center bg-gradient-to-br from-space-light/50 to-space/50">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Launch Your Product?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Join thousands of successful founders who have launched with Vibelaunch.io
          </p>
          <Button size="lg" glow>
            Get Started Today
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-neon font-semibold">Vibelaunch.io</p>
              <p className="text-slate-500 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-neon transition-colors">Terms</a>
              <a href="#" className="text-slate-300 hover:text-neon transition-colors">Privacy</a>
              <a href="#" className="text-slate-300 hover:text-neon transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
