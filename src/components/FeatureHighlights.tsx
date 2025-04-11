
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2, Shield, CreditCard, Globe, Search, Rocket, Lock } from 'lucide-react';

interface FeatureHighlightsProps {
  className?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

const FeatureHighlights = ({
  className
}: FeatureHighlightsProps) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const features: Feature[] = [
    {
      title: 'Authentication',
      description: 'Secure and robust user authentication system with multiple sign-in methods and account management.',
      icon: <Shield className="h-8 w-8 text-neon" />,
      benefits: ['Google & Facebook auth', 'Secure token handling', 'Role-based access control']
    }, 
    {
      title: 'Payment Processing',
      description: 'Integrate seamless payment solutions with major payment processors for subscriptions and one-time purchases.',
      icon: <CreditCard className="h-8 w-8 text-neon" />,
      benefits: ['Stripe integration', 'Invoice generation', 'Subscription management']
    }, 
    {
      title: 'Deployment',
      description: 'One-click deployment solutions to get your product live quickly with minimal configuration.',
      icon: <Globe className="h-8 w-8 text-neon" />,
      benefits: ['Automated CI/CD pipelines', 'Multi-environment setup', 'Version control integration']
    }, 
    {
      title: 'Security',
      description: 'Implement robust security measures to protect your application and user data from threats.',
      icon: <Lock className="h-8 w-8 text-neon" />,
      benefits: ['Data encryption', 'CSRF protection', 'Compliance assistance']
    }, 
    {
      title: 'SEO Optimization',
      description: 'Boost your visibility with search engine optimization tools and best practices implementation.',
      icon: <Search className="h-8 w-8 text-neon" />,
      benefits: ['Meta tag optimization', 'Sitemap generation', 'Performance optimization']
    }, 
    {
      title: 'Launch Strategy',
      description: 'Strategic launch planning with promotional tools and milestone tracking for maximum impact.',
      icon: <Rocket className="h-8 w-8 text-neon" />,
      benefits: ['Launch timeline creation', 'Marketing Best Practices', 'Community Engagement']
    }
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  return (
    <div className={cn('py-0', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium text-neon rounded-full border border-neon/30 backdrop-blur-sm">
            KEY FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Guiding From Ideation to Launch</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Everything you need to transform your project into a successful product with engaged users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={cn(
                'frost-container p-6 cursor-pointer transition-all duration-500 group', 
                activeFeature === index ? 'border-neon shadow-neon' : 'hover:border-neon/40 hover:shadow-neon-sm'
              )} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index % 3), duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => handleFeatureClick(index)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="h-14 w-14 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-neon transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-300 mb-4">
                {feature.description}
              </p>
              
              <div className={cn(
                'overflow-hidden transition-all duration-500', 
                activeFeature === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              )}>
                <div className="pt-4 border-t border-slate-700 mt-2">
                  <h4 className="font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-neon flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
