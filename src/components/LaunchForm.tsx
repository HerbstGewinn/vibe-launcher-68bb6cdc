
import React, { useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

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
    <div className={cn('frost-container max-w-2xl mx-auto p-6 md:p-8', className)}>
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Launch Your Project</h2>
        <p className="text-slate-300">Enter your project details to get started</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="projectUrl" className="block text-sm font-medium">
            Project URL <span className="text-neon">*</span>
          </label>
          <input
            id="projectUrl"
            type="text"
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            placeholder="https://yourproject.com"
            className="w-full bg-space-light px-4 py-3 rounded-lg border border-slate-700 focus:outline-none input-glow"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium">
            Brief Description <span className="text-slate-400">(optional)</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us a bit about your project..."
            rows={3}
            className="w-full bg-space-light px-4 py-3 rounded-lg border border-slate-700 focus:outline-none input-glow resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          fullWidth 
          glow 
          isLoading={isSubmitting}
          className="mt-4 group"
        >
          <span>Start Your Journey</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
      </form>
    </div>
  );
};

export default LaunchForm;
