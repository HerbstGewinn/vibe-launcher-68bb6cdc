
import React, { useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface LaunchFormProps {
  className?: string;
  onSubmit: (data: { projectUrl: string; description: string }) => void;
}

const LaunchForm = ({ className, onSubmit }: LaunchFormProps) => {
  const [projectUrl, setProjectUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectUrl) return;
    
    setIsSubmitting(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      onSubmit({ projectUrl, description });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative overflow-hidden frost-container max-w-2xl mx-auto p-8 shadow-lg border border-slate-700/50', 
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
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-neon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/>
              <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/>
              <path d="M15 2v5h5"/>
            </svg>
          </div>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Launch Your Project</h2>
        <p className="text-slate-300">Enter your project details to begin your journey to 1000 users</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label 
            htmlFor="projectUrl" 
            className="flex items-center font-medium text-sm text-slate-200"
          >
            Project URL
            <span className="ml-1 text-neon">*</span>
          </Label>
          <div className="relative">
            <Input
              id="projectUrl"
              type="url"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              placeholder="https://yourproject.com"
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
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label 
            htmlFor="description" 
            className="flex items-center font-medium text-sm text-slate-200"
          >
            Brief Description
            <span className="ml-1 text-slate-400 font-normal">(optional)</span>
          </Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us a bit about your project..."
            rows={4}
            className="w-full bg-space-light/70 px-4 py-3 rounded-lg border border-slate-700/70 focus:outline-none input-glow resize-none text-white placeholder:text-slate-500"
          />
        </div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="pt-4"
        >
          <Button 
            type="submit" 
            fullWidth 
            glow 
            isLoading={isSubmitting}
            className="group relative overflow-hidden h-14 bg-gradient-to-r from-neon/90 to-neon/70 rounded-lg text-space shadow-lg shadow-neon/20 hover:shadow-neon/30 transition-all duration-300 flex items-center justify-center"
          >
            <span className="relative z-10 font-semibold mr-2">
              Start Your Journey
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default LaunchForm;
