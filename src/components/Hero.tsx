
import React from 'react';
import Lamp from './Lamp';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn('relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden py-20', className)}>
      <Lamp size="lg" className="mb-8" />
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
          VIBELAUNCH.IO
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          From <span className="text-neon">Vibe Coding</span> to <span className="text-neon">1000 Users</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Launch your project and transform it into a product people love. Our strategic approach helps you build traction and grow your user base.
        </p>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(10,255,255,0.1),transparent)]"></div>
    </section>
  );
};

export default Hero;
