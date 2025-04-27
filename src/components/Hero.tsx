import React from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface HeroProps {
  className?: string;
}

const Hero = ({
  className
}: HeroProps) => {
  // User profile data with generated avatar images
  const users = [{
    id: 1,
    name: "Alex",
    image: "https://i.pravatar.cc/150?img=1"
  }, {
    id: 2,
    name: "Taylor",
    image: "https://i.pravatar.cc/150?img=2"
  }, {
    id: 3,
    name: "Jordan",
    image: "https://i.pravatar.cc/150?img=3"
  }, {
    id: 4,
    name: "Casey",
    image: "https://i.pravatar.cc/150?img=4"
  }, {
    id: 5,
    name: "Morgan",
    image: "https://i.pravatar.cc/150?img=5"
  }];

  return <section className={cn("relative min-h-[500px] md:min-h-[550px] overflow-hidden", className)}>
      <LampContainer className="w-full">
        <div className="relative z-10 text-center px-6 pb-4 pt-10 sm:pt-2 sm:px-4">
          <span className="inline-block mb-2 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
            EARLY ACCESS NOW
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-neon bg-clip-text text-transparent">Build Lovable Apps</span>{" "}
            <span className="text-neon">That</span>{" "}
            <span className="bg-gradient-to-br from-neon to-white bg-clip-text text-transparent">Sell !</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">Auth, Payments, SEO that ranks - Done in Lovable. Get revenue-ready today - Early Access Now !</p>

          <div className="max-w-md mx-auto">
            <div className="flex justify-center">
              <motion.a
                href="https://launch.vibelaunch.io/"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group inline-flex items-center justify-center"
              >
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#00FFFF] via-[#00FFFF] to-[#0FA0CE] opacity-70 blur-lg group-hover:opacity-100 transition-all duration-500 group-hover:duration-200" />
                <div className="relative rounded-xl bg-gradient-to-r from-cyan-500 to-[#0FA0CE] px-8 py-4 text-white text-lg font-semibold leading-none">
                  <span className="relative inline-flex items-center gap-2">
                    Get the Playbook
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            </div>

            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="flex -space-x-2">
                {users.map(user => (
                  <Avatar key={user.id} className="w-8 h-8 border-2 border-background">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="bg-slate-700 text-white text-xs">
                      {user.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-xs text-slate-400 ml-1 text-right">
                Join the <span className="font-bold text-white">100+</span>{" "}
                founders who have already signed up
              </span>
            </div>
          </div>
        </div>
      </LampContainer>
      <div id="content-section"></div>
    </section>;
};

export default Hero;
