
import React from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import Button from './Button';
import { Send } from 'lucide-react';

interface HeroProps {
  className?: string;
}

const Hero = ({
  className
}: HeroProps) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Any submission logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className={cn('relative min-h-[500px] md:min-h-[550px] overflow-hidden', className)}>
      <LampContainer className="w-full">
        <div className="relative z-10 text-center px-4">
          <span className="inline-block mb-2 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
            COMING SOON
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
            Vibecoding <span className="text-neon">from 0</span> to <span className="text-neon">1000</span> Users
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Our platform helps solve all your struggles, payments, auth, security and scales your app to 1000 users.
          </p>
          
          {/* New waitlist field based on the image */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="email"
                placeholder="Your email"
                className="h-12 pr-24 bg-space-light/30 border-slate-700/50 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                className="absolute right-1 top-1 h-10"
                type="submit"
              >
                Join The Waitlist
              </Button>
            </form>
            
            <div className="flex items-center justify-center mt-4 space-x-1">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-7 h-7 rounded-full border-2 border-background bg-slate-700 flex items-center justify-center overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-slate-500 to-slate-700"></div>
                  </div>
                ))}
              </div>
              <span className="text-xs text-slate-400 ml-2">
                Join the <span className="font-bold text-white">100+</span> founders who have already signed up
              </span>
            </div>
          </div>
        </div>
      </LampContainer>
      <div id="content-section"></div>
    </section>
  );
};

export default Hero;
