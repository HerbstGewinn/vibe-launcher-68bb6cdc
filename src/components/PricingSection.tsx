import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Button from './Button';
import { BadgePercent, Receipt, Lock, Rocket, Code, Video, List } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface PricingSectionProps {
  className?: string;
}

const PricingSection = ({
  className
}: PricingSectionProps) => {
  return <section id="pricing-section" className={cn("py-16 relative overflow-hidden", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(10,255,255,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }} viewport={{
          once: true
        }}>
            7-DAY OFFER
          </motion.span>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            Launch Your App Today
          </motion.h2>
          <motion.p className="text-slate-300 max-w-2xl mx-auto px-4" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            Join our early access program and save 40% on your launch journey
          </motion.p>
        </div>

        <div className="max-w-md mx-auto px-4 sm:px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <Card className="relative overflow-hidden frost-container border-neon/30">
              {/* Early Access Badge - Adjusted for better mobile display */}
              <div className="absolute -rotate-45 text-xs font-bold text-space bg-neon px-6 py-1 -left-8 top-4 sm:-left-6 sm:top-6 sm:px-8">
                7-DAY OFFER
              </div>

              <CardHeader className="p-6 sm:p-8">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Launch Package</CardTitle>
                <CardDescription className="text-center text-slate-300 mt-2">Everything you need to launch your Lovable app</CardDescription>
              </CardHeader>

              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center items-baseline mb-8">
                  <span className="text-4xl sm:text-5xl font-bold text-neon">$0</span>
                  <span className="text-slate-400 ml-2 line-through">$99</span>
                  <span className="text-sm text-slate-300 ml-2">one-time</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    {
                      icon: Receipt,
                      text: "Complete Launch Strategy"
                    },
                    {
                      icon: Lock,
                      text: "Lovable Auth, Payment, SEO, Deployment & Security Guide"
                    },
                    {
                      icon: Video,
                      text: "Videos and Proven Prompts"
                    },
                    {
                      icon: List,
                      text: "Launch List of Subreddits, Directories & Discord Groups"
                    },
                    {
                      icon: BadgePercent,
                      text: "Early Access Benefits"
                    },
                    {
                      icon: Rocket,
                      text: "Launch Readiness Checklist"
                    },
                    {
                      icon: Code,
                      text: "Technical Guidance"
                    }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                      <feature.icon className="h-5 w-5 text-neon flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="p-6 sm:p-8 pt-0">
                <Button 
                  as="a"
                  href="https://launch.vibelaunch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="neon" 
                  size="lg" 
                  className="w-full shadow-xl hover:shadow-neon/20 transition-all duration-300 bg-gradient-to-r from-[#0AFFFF] to-[#0FA0CE] hover:scale-105 font-semibold text-space" 
                  glow
                >
                  Get Early Access Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.p className="text-center text-sm text-slate-400 mt-4" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.6
          }} viewport={{
            once: true
          }}>
            ⚡️ Limited time offer • 40% discount
          </motion.p>
        </div>
      </div>
    </section>;
};

export default PricingSection;
