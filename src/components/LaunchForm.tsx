
import React, { useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

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
      onSubmit({ 
        projectUrl: email, 
        description: ''
      });
      
      setIsSubmitting(false);
      setHasSubmitted(true);
      
      toast.success('You\'re on the list!', {
        description: 'We\'ll notify you when we launch.',
      });
      
      setEmail('');
    }, 800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'bg-space/80 backdrop-blur-lg max-w-2xl mx-auto px-6 py-8 border border-slate-700/50 rounded-xl shadow-lg', 
        className
      )}
    >
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(10,255,255,0.1),transparent_70%)]"></div>
        
        {!hasSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Join Our Waitlist</h2>
            <p className="text-slate-300 mb-6">Be the first to know when we launch</p>
            
            <form id="email-form" onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative flex items-center">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-space-light/70 h-12 pl-4 pr-32 py-3 rounded-lg border border-slate-700/70 focus:outline-none input-glow text-white placeholder:text-slate-500"
                  required
                />
                <div className="absolute right-1">
                  <Button
                    type="submit"
                    glow
                    isLoading={isSubmitting}
                    className="h-10 px-5 bg-gradient-to-br from-neon via-neon/90 to-neon/70 rounded-md text-space font-medium shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      Join <Send className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>
              <p className="text-xs text-center text-slate-400 mt-4">
                By joining, you agree to our <a href="#" className="text-neon hover:underline">Terms</a> and <a href="#" className="text-neon hover:underline">Privacy Policy</a>
              </p>
            </form>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-6 text-center"
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
            >
              Join with another email
            </Button>
          </motion.div>
        )}
        
        <div className="mt-8 pt-6 border-t border-slate-700/30">
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-neon/10 flex items-center justify-center">
                <svg className="h-3 w-3 text-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="text-xs text-slate-300">Early Access</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-neon/10 flex items-center justify-center">
                <svg className="h-3 w-3 text-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M5 5l2.5 2.5M16.5 16.5 19 19M2 12h4M18 12h4M5 19l2.5-2.5M16.5 7.5 19 5"></path>
                </svg>
              </div>
              <span className="text-xs text-slate-300">Priority Support</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LaunchForm;
