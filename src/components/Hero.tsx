import React from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { cn } from '@/lib/utils';
import Button from './Button';
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
            COMING SOON
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-neon bg-clip-text text-transparent">Build Lovable Apps</span>{" "}
            <span className="text-neon">That</span>{" "}
            <span className="bg-gradient-to-br from-neon to-white bg-clip-text text-transparent">Sell !</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">Auth, Payments, SEO that ranks - Done in Lovable. Get revenue-ready today - Early Access Now !</p>

          {/* Replace email input with two buttons */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                as="a"
                href="https://launch.vibelaunch.io/"
                variant="neon"
                size="lg"
                className="w-full sm:w-auto"
              >
                Claim Now
              </Button>
              <Button 
                as="a"
                href="/#pricing"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="flex -space-x-2">
                {users.map(user => <Avatar key={user.id} className="w-8 h-8 border-2 border-background">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="bg-slate-700 text-white text-xs">
                      {user.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>)}
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
