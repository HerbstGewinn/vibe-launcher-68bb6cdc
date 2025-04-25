import React, { useState } from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import Button from './Button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
interface HeroProps {
  className?: string;
}
const Hero = ({
  className
}: HeroProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isTyping = email.length > 0;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setIsSubmitting(true);

      // Insert email into Supabase waitlist table
      const {
        error
      } = await supabase.from('waitlist').insert([{
        email
      }]);
      if (error) {
        if (error.code === '23505') {
          // Unique violation - email already exists
          toast.info("You're already on the waitlist!", {
            description: "We'll notify you when we launch."
          });
        } else {
          throw error;
        }
      } else {
        // Show success message
        toast.success("Thank you for joining the waitlist!", {
          description: "You will be the first one to receive an exclusive offer for the platform."
        });
      }

      // Clear the input field
      setEmail('');
    } catch (err) {
      console.error('Error submitting to waitlist:', err);
      toast.error("Something went wrong", {
        description: "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">Auth, Payments, SEO that ranks - Done in Lovable. Get revenue-ready today - Claim Early Access !</p>

          {/* Email waitlist input with rounded corners */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <Input type="email" placeholder="Your email" className={cn("h-12 pr-36 bg-space-light/30 border-slate-700/50 text-white text-base pl-4 transition-colors rounded-xl", isTyping && "border-neon/50 bg-space-light/50")} value={email} onChange={e => setEmail(e.target.value)} required disabled={isSubmitting} />
              <Button className="absolute right-1 top-1 h-10 px-5 text-base rounded-lg bg-[#0AFFFF] text-space hover:bg-[#0AFFFF]/90" type="submit" variant="primary" isLoading={isSubmitting}>
                Join The Waitlist
              </Button>
            </form>

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