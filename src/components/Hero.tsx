
import React, { useState } from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import Button from './Button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface HeroProps {
  className?: string;
}

const Hero = ({
  className
}: HeroProps) => {
  const [email, setEmail] = useState('');
  const isTyping = email.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Any submission logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  // User profile data with generated avatar images
  const users = [
    { id: 1, name: 'Alex', image: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Taylor', image: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Jordan', image: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Casey', image: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Morgan', image: 'https://i.pravatar.cc/150?img=5' },
  ];

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
            Ditch the Dev Headaches. Scale to 1000 Users. Unlock Early Access Now!
          </p>
          
          {/* Email waitlist input with rounded corners */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="email"
                placeholder="Your email"
                className={cn(
                  "h-12 pr-36 bg-space-light/30 border-slate-700/50 text-white text-base pl-4 transition-colors rounded-xl",
                  isTyping && "border-neon/50 bg-space-light/50"
                )}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                className={cn(
                  "absolute right-1 top-1 h-10 px-5 text-base rounded-lg",
                  isTyping ? "bg-neon text-space hover:bg-neon/90" : "bg-slate-500 text-white hover:bg-slate-600"
                )}
                type="submit"
                variant={isTyping ? "primary" : "secondary"}
              >
                Join The Waitlist
              </Button>
            </form>
            
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="flex -space-x-2">
                {users.map((user) => (
                  <Avatar 
                    key={user.id} 
                    className="w-8 h-8 border-2 border-background"
                  >
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="bg-slate-700 text-white text-xs">
                      {user.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-xs text-slate-400 ml-1 text-right">
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
