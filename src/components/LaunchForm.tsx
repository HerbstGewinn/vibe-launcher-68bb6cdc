
import React, { useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { Sparkles, Send, ArrowRight, Rocket } from 'lucide-react';

interface LaunchFormProps {
  className?: string;
  onSubmit: (data: { projectUrl: string; description: string }) => void;
}

const LaunchForm = ({ className, onSubmit }: LaunchFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      // Convert to the expected format for onSubmit
      onSubmit({ 
        projectUrl: email, 
        description: '' // Empty description since we removed the name field
      });
      
      setIsSubmitting(false);
      setHasSubmitted(true);
      
      toast.success('You\'re on the list!', {
        description: 'We\'ll notify you when we launch.',
      });
      
      // Clear the form field
      setEmail('');
    }, 800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative overflow-hidden frost-container max-w-2xl mx-auto p-8 shadow-lg border border-slate-700/50 text-center', 
        className
      )}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(10,255,255,0.15),transparent_70%)]"></div>
      
      <div className="mb-8 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center justify-center mb-5"
        >
          <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-neon/10 border border-neon/30">
            <Sparkles className="h-6 w-6 text-neon" />
          </div>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Join Our Waitlist</h2>
        <p className="text-slate-300">Be the first to know when we launch and get exclusive early access</p>
      </div>

      {/* New JOIN button added here */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mb-8"
      >
        <Button 
          onClick={() => window.scrollTo({ top: document.getElementById('email-form')?.offsetTop || 0, behavior: 'smooth' })}
          className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 to-neon h-14 px-10 rounded-lg font-bold text-lg shadow-lg shadow-neon/20 hover:shadow-neon/40 transition-all duration-500"
          glow
        >
          <span className="flex items-center justify-center gap-2">
            JOIN
            <Rocket className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-neon/10 via-cyan-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Button>
      </motion.div>
      
      {!hasSubmitted ? (
        <form id="email-form" onSubmit={handleSubmit} className="space-y-6 mx-auto max-w-md">
          <div className="space-y-2">
            <Label 
              htmlFor="email" 
              className="flex items-center justify-center font-medium text-sm text-slate-200"
            >
              Email Address
              <span className="ml-1 text-neon">*</span>
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-space-light/70 h-12 pl-10 pr-4 py-3 rounded-lg border border-slate-700/70 focus:outline-none input-glow text-white placeholder:text-slate-500"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-slate-400" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center pt-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xs"
            >
              <Button 
                type="submit" 
                fullWidth 
                glow 
                isLoading={isSubmitting}
                className="group relative overflow-hidden h-14 bg-gradient-to-br from-neon via-neon/90 to-neon/70 rounded-lg text-space font-semibold shadow-lg shadow-neon/20 hover:shadow-neon/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2 w-full">
                  Join the Waitlist
                  <Send
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon/10 to-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
          </div>
          
          <p className="text-xs text-center text-slate-400 pt-4">
            By joining, you agree to our <a href="#" className="text-neon hover:underline">Terms</a> and <a href="#" className="text-neon hover:underline">Privacy Policy</a>
          </p>
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon/20 border border-neon mb-6">
            <svg 
              className="w-8 h-8 text-neon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
          <p className="text-slate-300 mb-6">We'll notify you when we launch. Thank you for your interest!</p>
          <Button 
            onClick={() => setHasSubmitted(false)}
            variant="outline"
            className="group"
          >
            <span className="flex items-center gap-2">
              Join with another email
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>
      )}
      
      <div className="mt-10 pt-6 border-t border-slate-700/30">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-neon/10 flex items-center justify-center">
              <svg className="h-4 w-4 text-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span className="text-sm text-slate-300">Early Access</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-neon/10 flex items-center justify-center">
              <svg className="h-4 w-4 text-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M5 5l2.5 2.5M16.5 16.5 19 19M2 12h4M18 12h4M5 19l2.5-2.5M16.5 7.5 19 5"></path>
              </svg>
            </div>
            <span className="text-sm text-slate-300">Exclusive Features</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-neon/10 flex items-center justify-center">
              <svg className="h-4 w-4 text-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <span className="text-sm text-slate-300">Priority Support</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LaunchForm;
