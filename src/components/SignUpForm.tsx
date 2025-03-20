
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface SignUpFormProps {
  className?: string;
}

const SignUpForm = ({ className }: SignUpFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className={cn('frost-container max-w-md mx-auto p-8 text-center', className)}>
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-neon/10 border border-neon mb-4">
          <svg className="h-8 w-8 text-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3">Success!</h2>
        <p className="text-slate-300 mb-6">
          Thank you for joining Vibelaunch. We've sent a confirmation email to your inbox. 
          Check your email to complete the sign-up process.
        </p>
        <Button variant="outline">
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className={cn('frost-container max-w-md mx-auto p-8', className)}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Join Vibelaunch</h2>
        <p className="text-slate-300">Create your account to continue your journey</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full bg-space-light px-4 py-3 rounded-lg border border-slate-700 focus:outline-none input-glow"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-space-light px-4 py-3 rounded-lg border border-slate-700 focus:outline-none input-glow"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          fullWidth 
          glow 
          isLoading={isSubmitting}
          className="mt-6"
        >
          Create Account
        </Button>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-space px-2 text-slate-500">Or continue with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="inline-flex items-center justify-center h-11 px-6 border border-slate-700 rounded-md bg-space-light hover:bg-slate-800 transition-colors"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.908 8.908 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" fill="#4285F4"></path>
              <path d="M4.17 14.273l3.536-2.76c-.968-2.059-3.641-2.059-4.81 0l1.274 2.76z" fill="#34A853"></path>
              <path d="M11.956 6.146c-3.33 0-6.156 2.647-6.156 5.88 0 .324.027.637.075.947l4.261-3.312c.569-1.117 1.714-1.88 3.059-1.88 1.148 0 2.146.479 2.825 1.326l3.518-3.47C17.87 3.87 15.982 3 13.698 3c-1.729 0-3.306.517-4.598 1.382L11.956 6.146z" fill="#FBBC05"></path>
              <path d="M13.698 21c4.045 0 7.543-3.417 7.543-8.934 0-2.565-.85-4.542-2.244-5.982l-3.566 3.515c1.258.809 1.889 1.947 1.889 3.376a5.27 5.27 0 0 1-5.279 5.279c-3.197 0-5.875-2.13-5.875-5.279 0-.356.037-.713.113-1.067L2.5 15.607h11.197z" fill="#EA4335"></path>
            </svg>
            Google
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center h-11 px-6 border border-slate-700 rounded-md bg-space-light hover:bg-slate-800 transition-colors"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
            </svg>
            GitHub
          </button>
        </div>
        
        <p className="mt-6 text-center text-xs text-slate-500">
          By clicking continue, you agree to our{' '}
          <a href="#" className="text-neon hover:underline">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="text-neon hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
