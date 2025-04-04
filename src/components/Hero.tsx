
import React from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { cn } from '@/lib/utils';
import Button from './Button';

interface HeroProps {
  className?: string;
}

const Hero = ({
  className
}: HeroProps) => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: window.innerHeight - 50,
        behavior: 'smooth'
      });
    }
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
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-4">
            Our platform helps solve all your struggles, payments, auth, security and scales your app to 1000 users.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              glow 
              onClick={scrollToContent}
            >
              Join Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </LampContainer>
      <div id="content-section"></div>
    </section>
  );
};

export default Hero;
